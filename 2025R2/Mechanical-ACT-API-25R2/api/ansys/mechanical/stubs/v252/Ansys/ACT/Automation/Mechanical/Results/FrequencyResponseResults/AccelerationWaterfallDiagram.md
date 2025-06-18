# `AccelerationWaterfallDiagram`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationWaterfallDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AccelerationWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#AccelerationWaterfallDiagram.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#AccelerationWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#AccelerationWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#AccelerationWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#AccelerationWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#AccelerationWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#AccelerationWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#AccelerationWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#AccelerationWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#AccelerationWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#AccelerationWaterfallDiagram.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#AccelerationWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#AccelerationWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#AccelerationWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#AccelerationWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#AccelerationWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#AccelerationWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#AccelerationWaterfallDiagram.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#AccelerationWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#AccelerationWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#AccelerationWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#AccelerationWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#AccelerationWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#AccelerationWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#AccelerationWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#AccelerationWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#AccelerationWaterfallDiagram.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#AccelerationWaterfallDiagram.Average)                                                     | Gets the Average.                                                        |
| [`By`](#AccelerationWaterfallDiagram.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AccelerationWaterfallDiagram.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AccelerationWaterfallDiagram.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#AccelerationWaterfallDiagram.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AccelerationWaterfallDiagram.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AccelerationWaterfallDiagram.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AccelerationWaterfallDiagram.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#AccelerationWaterfallDiagram.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#AccelerationWaterfallDiagram.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AccelerationWaterfallDiagram.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AccelerationWaterfallDiagram.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#AccelerationWaterfallDiagram.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#AccelerationWaterfallDiagram.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AccelerationWaterfallDiagram.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#AccelerationWaterfallDiagram.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#AccelerationWaterfallDiagram.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#AccelerationWaterfallDiagram.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AccelerationWaterfallDiagram.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#AccelerationWaterfallDiagram.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AccelerationWaterfallDiagram.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#AccelerationWaterfallDiagram.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AccelerationWaterfallDiagram.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AccelerationWaterfallDiagram.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AccelerationWaterfallDiagram.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AccelerationWaterfallDiagram.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AccelerationWaterfallDiagram.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AccelerationWaterfallDiagram.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#AccelerationWaterfallDiagram.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#AccelerationWaterfallDiagram.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AccelerationWaterfallDiagram.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AccelerationWaterfallDiagram.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AccelerationWaterfallDiagram.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#AccelerationWaterfallDiagram.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AccelerationWaterfallDiagram.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AccelerationWaterfallDiagram.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#AccelerationWaterfallDiagram.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#AccelerationWaterfallDiagram.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#AccelerationWaterfallDiagram.Path)                                                           | Path property.                                                           |
| [`PlotData`](#AccelerationWaterfallDiagram.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#AccelerationWaterfallDiagram.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AccelerationWaterfallDiagram.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`STFTCutoffFrequency`](#AccelerationWaterfallDiagram.STFTCutoffFrequency)                             | Gets or sets the STFTCutoffFrequency.                                    |
| [`STFTEndTime`](#AccelerationWaterfallDiagram.STFTEndTime)                                             | Gets or sets the STFTEndTime.                                            |
| [`STFTMinFreqResolution`](#AccelerationWaterfallDiagram.STFTMinFreqResolution)                         | Gets or sets the STFTMinFreqResolution.                                  |
| [`STFTNumberSlice`](#AccelerationWaterfallDiagram.STFTNumberSlice)                                     | Gets or sets the STFTNumberSlice.                                        |
| [`STFTOverlap`](#AccelerationWaterfallDiagram.STFTOverlap)                                             | Gets or sets the STFTOverlap.                                            |
| [`STFTStartTime`](#AccelerationWaterfallDiagram.STFTStartTime)                                         | Gets or sets the STFTStartTime.                                          |
| [`STFTWindowType`](#AccelerationWaterfallDiagram.STFTWindowType)                                       | Gets or sets the STFTWindowType.                                         |
| [`ScopingMethod`](#AccelerationWaterfallDiagram.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AccelerationWaterfallDiagram.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AccelerationWaterfallDiagram.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AccelerationWaterfallDiagram.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`SpatialResolution`](#AccelerationWaterfallDiagram.SpatialResolution)                                 | Gets or sets the SpatialResolution.                                      |
| [`Substep`](#AccelerationWaterfallDiagram.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#AccelerationWaterfallDiagram.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#AccelerationWaterfallDiagram.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#AccelerationWaterfallDiagram.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#AccelerationWaterfallDiagram.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AccelerationWaterfallDiagram.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AccelerationWaterfallDiagram.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AccelerationWaterfallDiagram.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AccelerationWaterfallDiagram.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AccelerationWaterfallDiagram.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#AccelerationWaterfallDiagram.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="AccelerationWaterfallDiagram.Average"></a>

### *property* AccelerationWaterfallDiagram.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.By"></a>

### *property* AccelerationWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CalculateTimeHistory"></a>

### *property* AccelerationWaterfallDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Children"></a>

### *property* AccelerationWaterfallDiagram.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CombinationNumber"></a>

### *property* AccelerationWaterfallDiagram.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Comments"></a>

### *property* AccelerationWaterfallDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CoordinateSystem"></a>

### *property* AccelerationWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CrackFrontNumber"></a>

### *property* AccelerationWaterfallDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DataModelObjectCategory"></a>

### *property* AccelerationWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DisplayOption"></a>

### *property* AccelerationWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DisplayTime"></a>

### *property* AccelerationWaterfallDiagram.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DpfEvaluation"></a>

### *property* AccelerationWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Figures"></a>

### *property* AccelerationWaterfallDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GlobalIDs"></a>

### *property* AccelerationWaterfallDiagram.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GraphControlsXAxis"></a>

### *property* AccelerationWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Identifier"></a>

### *property* AccelerationWaterfallDiagram.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Images"></a>

### *property* AccelerationWaterfallDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.InternalObject"></a>

### *property* AccelerationWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.IsSolved"></a>

### *property* AccelerationWaterfallDiagram.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ItemType"></a>

### *property* AccelerationWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.IterationNumber"></a>

### *property* AccelerationWaterfallDiagram.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStep"></a>

### *property* AccelerationWaterfallDiagram.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* AccelerationWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* AccelerationWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* AccelerationWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* AccelerationWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.LoadStepNumber"></a>

### *property* AccelerationWaterfallDiagram.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Location"></a>

### *property* AccelerationWaterfallDiagram.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Maximum"></a>

### *property* AccelerationWaterfallDiagram.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MaximumOccursOn"></a>

### *property* AccelerationWaterfallDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* AccelerationWaterfallDiagram.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* AccelerationWaterfallDiagram.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Minimum"></a>

### *property* AccelerationWaterfallDiagram.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MinimumOccursOn"></a>

### *property* AccelerationWaterfallDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* AccelerationWaterfallDiagram.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* AccelerationWaterfallDiagram.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.NamedSelections"></a>

### *property* AccelerationWaterfallDiagram.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.NormalOrientation"></a>

### *property* AccelerationWaterfallDiagram.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Path"></a>

### *property* AccelerationWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PlotData"></a>

### *property* AccelerationWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Properties"></a>

### *property* AccelerationWaterfallDiagram.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.RPMSelection"></a>

### *property* AccelerationWaterfallDiagram.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.STFTCutoffFrequency"></a>

### *property* AccelerationWaterfallDiagram.STFTCutoffFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STFTCutoffFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.STFTEndTime"></a>

### *property* AccelerationWaterfallDiagram.STFTEndTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STFTEndTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.STFTMinFreqResolution"></a>

### *property* AccelerationWaterfallDiagram.STFTMinFreqResolution *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STFTMinFreqResolution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.STFTNumberSlice"></a>

### *property* AccelerationWaterfallDiagram.STFTNumberSlice *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STFTNumberSlice.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.STFTOverlap"></a>

### *property* AccelerationWaterfallDiagram.STFTOverlap *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STFTOverlap.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.STFTStartTime"></a>

### *property* AccelerationWaterfallDiagram.STFTStartTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STFTStartTime.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.STFTWindowType"></a>

### *property* AccelerationWaterfallDiagram.STFTWindowType *: [Ansys.Mechanical.DataModel.Enums.WindowType](../../../../../Mechanical/DataModel/Enums/WindowType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WindowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STFTWindowType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ScopingMethod"></a>

### *property* AccelerationWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SetNumber"></a>

### *property* AccelerationWaterfallDiagram.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* AccelerationWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SolverComponentIDs"></a>

### *property* AccelerationWaterfallDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SpatialResolution"></a>

### *property* AccelerationWaterfallDiagram.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Substep"></a>

### *property* AccelerationWaterfallDiagram.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Suppressed"></a>

### *property* AccelerationWaterfallDiagram.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Surface"></a>

### *property* AccelerationWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.SurfaceCoating"></a>

### *property* AccelerationWaterfallDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Time"></a>

### *property* AccelerationWaterfallDiagram.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* AccelerationWaterfallDiagram.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* AccelerationWaterfallDiagram.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* AccelerationWaterfallDiagram.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* AccelerationWaterfallDiagram.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Total"></a>

### *property* AccelerationWaterfallDiagram.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.VisibleProperties"></a>

### *property* AccelerationWaterfallDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AccelerationWaterfallDiagram.Activate"></a>

### AccelerationWaterfallDiagram.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddAlert"></a>

### AccelerationWaterfallDiagram.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddComment"></a>

### AccelerationWaterfallDiagram.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddConvergence"></a>

### AccelerationWaterfallDiagram.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddFigure"></a>

### AccelerationWaterfallDiagram.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.AddImage"></a>

### AccelerationWaterfallDiagram.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ClearGeneratedData"></a>

### AccelerationWaterfallDiagram.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CopyTo"></a>

### AccelerationWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CreateParameter"></a>

### AccelerationWaterfallDiagram.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.CreateResultsAtAllSets"></a>

### AccelerationWaterfallDiagram.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Delete"></a>

### AccelerationWaterfallDiagram.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.Duplicate"></a>

### AccelerationWaterfallDiagram.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.DuplicateWithoutResults"></a>

### AccelerationWaterfallDiagram.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.EvaluateAllResults"></a>

### AccelerationWaterfallDiagram.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ExportAnimation"></a>

### AccelerationWaterfallDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.ExportToTextFile"></a>

### AccelerationWaterfallDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.FetchRemoteResults"></a>

### AccelerationWaterfallDiagram.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GetChildren"></a>

### AccelerationWaterfallDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GetParameter"></a>

### AccelerationWaterfallDiagram.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GroupAllSimilarChildren"></a>

### AccelerationWaterfallDiagram.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.GroupSimilarObjects"></a>

### AccelerationWaterfallDiagram.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PromoteToNamedSelection"></a>

### AccelerationWaterfallDiagram.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PropertyByAPIName"></a>

### AccelerationWaterfallDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.PropertyByName"></a>

### AccelerationWaterfallDiagram.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.RemoveParameter"></a>

### AccelerationWaterfallDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.RenameBasedOnDefinition"></a>

### AccelerationWaterfallDiagram.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationWaterfallDiagram.RetrieveResult"></a>

### AccelerationWaterfallDiagram.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

