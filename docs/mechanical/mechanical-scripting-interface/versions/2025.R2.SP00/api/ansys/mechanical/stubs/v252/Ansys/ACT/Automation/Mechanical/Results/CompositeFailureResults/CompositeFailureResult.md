# `CompositeFailureResult`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#CompositeFailureResult.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#CompositeFailureResult.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#CompositeFailureResult.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#CompositeFailureResult.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#CompositeFailureResult.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#CompositeFailureResult.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#CompositeFailureResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#CompositeFailureResult.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#CompositeFailureResult.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#CompositeFailureResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#CompositeFailureResult.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#CompositeFailureResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#CompositeFailureResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#CompositeFailureResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#CompositeFailureResult.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#CompositeFailureResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#CompositeFailureResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#CompositeFailureResult.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#CompositeFailureResult.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#CompositeFailureResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#CompositeFailureResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#CompositeFailureResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#CompositeFailureResult.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#CompositeFailureResult.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#CompositeFailureResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#CompositeFailureResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#CompositeFailureResult.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Average`](#CompositeFailureResult.Average)                                                       | Gets the Average.                                                                                                                                                                                                                                                                                       |
| [`By`](#CompositeFailureResult.By)                                                                 | Gets or sets the By.                                                                                                                                                                                                                                                                                    |
| [`CalculateTimeHistory`](#CompositeFailureResult.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                                                                                                                                  |
| [`Children`](#CompositeFailureResult.Children)                                                     | Gets the list of children.                                                                                                                                                                                                                                                                              |
| [`CombinationNumber`](#CompositeFailureResult.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                                                                                                                                  |
| [`Comments`](#CompositeFailureResult.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                                                                                                                                   |
| [`CoordinateSystem`](#CompositeFailureResult.CoordinateSystem)                                     | Gets or sets the Coordinate System.                                                                                                                                                                                                                                                                     |
| [`CrackFrontNumber`](#CompositeFailureResult.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                                                                                                                      |
| [`CriticalTextVisualizationMode`](#CompositeFailureResult.CriticalTextVisualizationMode)           | Controls whether the Critical Text Visualization Threshold is defined automatically by the product or manually by the user. Default: F:Ansys.Mechanical.DataModel.Enums.AutomaticOrManual.Automatic                                                                                                     |
| [`CriticalTextVisualizationThreshold`](#CompositeFailureResult.CriticalTextVisualizationThreshold) | Gets or sets the text plot threshold value when CriticalTextVisualizationMode is set to Manual. Text will not be displayed for elements with result values below the threshold for Inverse Reserve Factor results or result values exceeding the threshold for Safety factor and Safety Margin results. |
| [`DataModelObjectCategory`](#CompositeFailureResult.DataModelObjectCategory)                       | Gets the current DataModelObject’s category.                                                                                                                                                                                                                                                            |
| [`DisplayOption`](#CompositeFailureResult.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                                                                                                                         |
| [`DisplayTime`](#CompositeFailureResult.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                                                                                                                           |
| [`DpfEvaluation`](#CompositeFailureResult.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                                                                                                                         |
| [`Figures`](#CompositeFailureResult.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                                                                                                                    |
| [`GlobalIDs`](#CompositeFailureResult.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                                                                                                                             |
| [`GraphControlsXAxis`](#CompositeFailureResult.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                                                                                                                    |
| [`Identifier`](#CompositeFailureResult.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                                                                                                                            |
| [`Images`](#CompositeFailureResult.Images)                                                         | Gets the list of associated images.                                                                                                                                                                                                                                                                     |
| [`InternalObject`](#CompositeFailureResult.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                      |
| [`IsSolved`](#CompositeFailureResult.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                                                                                                                      |
| [`ItemType`](#CompositeFailureResult.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                                                                                                                              |
| [`IterationNumber`](#CompositeFailureResult.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                                                                                                                               |
| [`LoadStep`](#CompositeFailureResult.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                                                                                                                      |
| [`LoadStepForMaximumOfMaximumValues`](#CompositeFailureResult.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                                                                                                                    |
| [`LoadStepForMaximumOfMinimumValues`](#CompositeFailureResult.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                                                                                                                    |
| [`LoadStepForMinimumOfMaximumValues`](#CompositeFailureResult.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                                                                                                                    |
| [`LoadStepForMinimumOfMinimumValues`](#CompositeFailureResult.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                                                                                                                    |
| [`LoadStepNumber`](#CompositeFailureResult.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                                                                                                                        |
| [`Location`](#CompositeFailureResult.Location)                                                     | Gets or sets the Location.                                                                                                                                                                                                                                                                              |
| [`Maximum`](#CompositeFailureResult.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                                                                                                                       |
| [`MaximumOccursOn`](#CompositeFailureResult.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                                                                                                                               |
| [`MaximumOfMaximumOverTime`](#CompositeFailureResult.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                                                                                                                      |
| [`MaximumOfMinimumOverTime`](#CompositeFailureResult.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                                                                                                                      |
| [`Minimum`](#CompositeFailureResult.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                                                                                                                       |
| [`MinimumOccursOn`](#CompositeFailureResult.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                                                                                                                               |
| [`MinimumOfMaximumOverTime`](#CompositeFailureResult.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                                                                                                                      |
| [`MinimumOfMinimumOverTime`](#CompositeFailureResult.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                                                                                                                      |
| [`NamedSelections`](#CompositeFailureResult.NamedSelections)                                       | Gets or sets the NamedSelections.                                                                                                                                                                                                                                                                       |
| [`Path`](#CompositeFailureResult.Path)                                                             | Path property.                                                                                                                                                                                                                                                                                          |
| [`PlotData`](#CompositeFailureResult.PlotData)                                                     | Gets the result table.                                                                                                                                                                                                                                                                                  |
| [`Ply`](#CompositeFailureResult.Ply)                                                               | Gets or sets the Ply selection.                                                                                                                                                                                                                                                                         |
| [`Properties`](#CompositeFailureResult.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                                                                                                                            |
| [`RPMSelection`](#CompositeFailureResult.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                                                                                                                                |
| [`ScopingMethod`](#CompositeFailureResult.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                                                                                                                         |
| [`SetNumber`](#CompositeFailureResult.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                                                                                                                            |
| [`ShowCriticalFailureMode`](#CompositeFailureResult.ShowCriticalFailureMode)                       | Controls whether to show the critical failure mode text plot in graphics. Default: true                                                                                                                                                                                                                 |
| [`ShowCriticalLayer`](#CompositeFailureResult.ShowCriticalLayer)                                   | Controls whether to show the critical layer text plot in graphics. Default: false                                                                                                                                                                                                                       |
| [`ShowCriticalLoadCase`](#CompositeFailureResult.ShowCriticalLoadCase)                             | Controls whether to show the critical load case text plot in graphics. Only supported for Envelope Solution Combinations. Default: false                                                                                                                                                                |
| [`ShowOnReferenceSurface`](#CompositeFailureResult.ShowOnReferenceSurface)                         | Gets or sets the Show On Reference Surface property.                                                                                                                                                                                                                                                    |
| [`SolutionCombinationDriver`](#CompositeFailureResult.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                                                                                                                             |
| [`SolverComponentIDs`](#CompositeFailureResult.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                                                                                                                    |
| [`Substep`](#CompositeFailureResult.Substep)                                                       | Gets the Substep.                                                                                                                                                                                                                                                                                       |
| [`Suppressed`](#CompositeFailureResult.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                            |
| [`Surface`](#CompositeFailureResult.Surface)                                                       | Surface property.                                                                                                                                                                                                                                                                                       |
| [`SurfaceCoating`](#CompositeFailureResult.SurfaceCoating)                                         | SurfaceCoating property.                                                                                                                                                                                                                                                                                |
| [`Time`](#CompositeFailureResult.Time)                                                             | Gets the Time.                                                                                                                                                                                                                                                                                          |
| [`TimeForMaximumOfMaximumValues`](#CompositeFailureResult.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                                                                                                                         |
| [`TimeForMaximumOfMinimumValues`](#CompositeFailureResult.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                                                                                                                         |
| [`TimeForMinimumOfMaximumValues`](#CompositeFailureResult.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                                                                                                                         |
| [`TimeForMinimumOfMinimumValues`](#CompositeFailureResult.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                                                                                                                         |
| [`Total`](#CompositeFailureResult.Total)                                                           | Gets the Total.                                                                                                                                                                                                                                                                                         |
| [`VisibleProperties`](#CompositeFailureResult.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureResult.Average"></a>

### *property* CompositeFailureResult.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.By"></a>

### *property* CompositeFailureResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CalculateTimeHistory"></a>

### *property* CompositeFailureResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Children"></a>

### *property* CompositeFailureResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CombinationNumber"></a>

### *property* CompositeFailureResult.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Comments"></a>

### *property* CompositeFailureResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CoordinateSystem"></a>

### *property* CompositeFailureResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CrackFrontNumber"></a>

### *property* CompositeFailureResult.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CriticalTextVisualizationMode"></a>

### *property* CompositeFailureResult.CriticalTextVisualizationMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether the Critical Text Visualization Threshold is defined automatically by the product or manually by the user. Default: F:Ansys.Mechanical.DataModel.Enums.AutomaticOrManual.Automatic

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CriticalTextVisualizationThreshold"></a>

### *property* CompositeFailureResult.CriticalTextVisualizationThreshold *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the text plot threshold value when CriticalTextVisualizationMode is set to Manual. Text will not be displayed for elements with result values below the threshold for Inverse Reserve Factor results or result values exceeding the threshold for Safety factor and Safety Margin results.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DataModelObjectCategory"></a>

### *property* CompositeFailureResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DisplayOption"></a>

### *property* CompositeFailureResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DisplayTime"></a>

### *property* CompositeFailureResult.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DpfEvaluation"></a>

### *property* CompositeFailureResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Figures"></a>

### *property* CompositeFailureResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GlobalIDs"></a>

### *property* CompositeFailureResult.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GraphControlsXAxis"></a>

### *property* CompositeFailureResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Identifier"></a>

### *property* CompositeFailureResult.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Images"></a>

### *property* CompositeFailureResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.InternalObject"></a>

### *property* CompositeFailureResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.IsSolved"></a>

### *property* CompositeFailureResult.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ItemType"></a>

### *property* CompositeFailureResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.IterationNumber"></a>

### *property* CompositeFailureResult.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStep"></a>

### *property* CompositeFailureResult.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* CompositeFailureResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* CompositeFailureResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* CompositeFailureResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* CompositeFailureResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepNumber"></a>

### *property* CompositeFailureResult.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Location"></a>

### *property* CompositeFailureResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Maximum"></a>

### *property* CompositeFailureResult.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MaximumOccursOn"></a>

### *property* CompositeFailureResult.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MaximumOfMaximumOverTime"></a>

### *property* CompositeFailureResult.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MaximumOfMinimumOverTime"></a>

### *property* CompositeFailureResult.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Minimum"></a>

### *property* CompositeFailureResult.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MinimumOccursOn"></a>

### *property* CompositeFailureResult.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MinimumOfMaximumOverTime"></a>

### *property* CompositeFailureResult.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MinimumOfMinimumOverTime"></a>

### *property* CompositeFailureResult.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.NamedSelections"></a>

### *property* CompositeFailureResult.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Path"></a>

### *property* CompositeFailureResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PlotData"></a>

### *property* CompositeFailureResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Ply"></a>

### *property* CompositeFailureResult.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Properties"></a>

### *property* CompositeFailureResult.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RPMSelection"></a>

### *property* CompositeFailureResult.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ScopingMethod"></a>

### *property* CompositeFailureResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SetNumber"></a>

### *property* CompositeFailureResult.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ShowCriticalFailureMode"></a>

### *property* CompositeFailureResult.ShowCriticalFailureMode *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether to show the critical failure mode text plot in graphics. Default: true

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ShowCriticalLayer"></a>

### *property* CompositeFailureResult.ShowCriticalLayer *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether to show the critical layer text plot in graphics. Default: false

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ShowCriticalLoadCase"></a>

### *property* CompositeFailureResult.ShowCriticalLoadCase *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether to show the critical load case text plot in graphics. Only supported for Envelope Solution Combinations. Default: false

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ShowOnReferenceSurface"></a>

### *property* CompositeFailureResult.ShowOnReferenceSurface *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Show On Reference Surface property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SolutionCombinationDriver"></a>

### *property* CompositeFailureResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SolverComponentIDs"></a>

### *property* CompositeFailureResult.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Substep"></a>

### *property* CompositeFailureResult.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Suppressed"></a>

### *property* CompositeFailureResult.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Surface"></a>

### *property* CompositeFailureResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SurfaceCoating"></a>

### *property* CompositeFailureResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Time"></a>

### *property* CompositeFailureResult.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TimeForMaximumOfMaximumValues"></a>

### *property* CompositeFailureResult.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TimeForMaximumOfMinimumValues"></a>

### *property* CompositeFailureResult.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TimeForMinimumOfMaximumValues"></a>

### *property* CompositeFailureResult.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TimeForMinimumOfMinimumValues"></a>

### *property* CompositeFailureResult.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Total"></a>

### *property* CompositeFailureResult.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.VisibleProperties"></a>

### *property* CompositeFailureResult.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeFailureResult.Activate"></a>

### CompositeFailureResult.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddAlert"></a>

### CompositeFailureResult.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddComment"></a>

### CompositeFailureResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddConvergence"></a>

### CompositeFailureResult.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddFigure"></a>

### CompositeFailureResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddImage"></a>

### CompositeFailureResult.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ClearGeneratedData"></a>

### CompositeFailureResult.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CopyTo"></a>

### CompositeFailureResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CreateParameter"></a>

### CompositeFailureResult.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CreateResultsAtAllSets"></a>

### CompositeFailureResult.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Delete"></a>

### CompositeFailureResult.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Duplicate"></a>

### CompositeFailureResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DuplicateWithoutResults"></a>

### CompositeFailureResult.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.EvaluateAllResults"></a>

### CompositeFailureResult.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ExportAnimation"></a>

### CompositeFailureResult.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ExportToTextFile"></a>

### CompositeFailureResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.FetchRemoteResults"></a>

### CompositeFailureResult.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetChildren"></a>

### CompositeFailureResult.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetParameter"></a>

### CompositeFailureResult.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GroupAllSimilarChildren"></a>

### CompositeFailureResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GroupSimilarObjects"></a>

### CompositeFailureResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PromoteToNamedSelection"></a>

### CompositeFailureResult.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PropertyByAPIName"></a>

### CompositeFailureResult.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PropertyByName"></a>

### CompositeFailureResult.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RemoveParameter"></a>

### CompositeFailureResult.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RenameBasedOnDefinition"></a>

### CompositeFailureResult.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RetrieveResult"></a>

### CompositeFailureResult.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

