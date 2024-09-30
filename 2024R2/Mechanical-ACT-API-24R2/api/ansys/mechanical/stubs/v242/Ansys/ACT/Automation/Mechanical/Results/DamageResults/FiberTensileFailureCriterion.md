# `FiberTensileFailureCriterion`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileFailureCriterion"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileFailureCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FiberTensileFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FiberTensileFailureCriterion.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#FiberTensileFailureCriterion.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#FiberTensileFailureCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#FiberTensileFailureCriterion.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#FiberTensileFailureCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FiberTensileFailureCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FiberTensileFailureCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FiberTensileFailureCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FiberTensileFailureCriterion.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#FiberTensileFailureCriterion.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#FiberTensileFailureCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FiberTensileFailureCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#FiberTensileFailureCriterion.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FiberTensileFailureCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FiberTensileFailureCriterion.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#FiberTensileFailureCriterion.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#FiberTensileFailureCriterion.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#FiberTensileFailureCriterion.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FiberTensileFailureCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FiberTensileFailureCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FiberTensileFailureCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FiberTensileFailureCriterion.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FiberTensileFailureCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FiberTensileFailureCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FiberTensileFailureCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FiberTensileFailureCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#FiberTensileFailureCriterion.Average)                                                     | Gets the Average.                                                      |
| [`By`](#FiberTensileFailureCriterion.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#FiberTensileFailureCriterion.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#FiberTensileFailureCriterion.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#FiberTensileFailureCriterion.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#FiberTensileFailureCriterion.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#FiberTensileFailureCriterion.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#FiberTensileFailureCriterion.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DamageResultType`](#FiberTensileFailureCriterion.DamageResultType)                                   | Gets the DamageResultType.                                             |
| [`DataModelObjectCategory`](#FiberTensileFailureCriterion.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#FiberTensileFailureCriterion.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#FiberTensileFailureCriterion.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#FiberTensileFailureCriterion.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#FiberTensileFailureCriterion.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#FiberTensileFailureCriterion.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#FiberTensileFailureCriterion.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#FiberTensileFailureCriterion.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#FiberTensileFailureCriterion.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#FiberTensileFailureCriterion.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#FiberTensileFailureCriterion.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#FiberTensileFailureCriterion.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#FiberTensileFailureCriterion.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#FiberTensileFailureCriterion.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#FiberTensileFailureCriterion.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#FiberTensileFailureCriterion.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FiberTensileFailureCriterion.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#FiberTensileFailureCriterion.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#FiberTensileFailureCriterion.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#FiberTensileFailureCriterion.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#FiberTensileFailureCriterion.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#FiberTensileFailureCriterion.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#FiberTensileFailureCriterion.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FiberTensileFailureCriterion.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FiberTensileFailureCriterion.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#FiberTensileFailureCriterion.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#FiberTensileFailureCriterion.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FiberTensileFailureCriterion.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#FiberTensileFailureCriterion.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#FiberTensileFailureCriterion.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#FiberTensileFailureCriterion.Path)                                                           | Path property.                                                         |
| [`Plies`](#FiberTensileFailureCriterion.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#FiberTensileFailureCriterion.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#FiberTensileFailureCriterion.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Properties`](#FiberTensileFailureCriterion.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#FiberTensileFailureCriterion.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FiberTensileFailureCriterion.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#FiberTensileFailureCriterion.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#FiberTensileFailureCriterion.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FiberTensileFailureCriterion.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#FiberTensileFailureCriterion.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#FiberTensileFailureCriterion.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#FiberTensileFailureCriterion.SurfaceCoating)                                                                                                                                                      | SurfaceCoating property.                                               |
| [`Time`](#FiberTensileFailureCriterion.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#FiberTensileFailureCriterion.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#FiberTensileFailureCriterion.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FiberTensileFailureCriterion.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#FiberTensileFailureCriterion.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#FiberTensileFailureCriterion.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#FiberTensileFailureCriterion.WaterfallShowTextOnMosaic)                                                                                                                                | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="FiberTensileFailureCriterion.Average"></a>

### *property* FiberTensileFailureCriterion.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.By"></a>

### *property* FiberTensileFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CalculateTimeHistory"></a>

### *property* FiberTensileFailureCriterion.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Children"></a>

### *property* FiberTensileFailureCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CombinationNumber"></a>

### *property* FiberTensileFailureCriterion.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Comments"></a>

### *property* FiberTensileFailureCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CoordinateSystem"></a>

### *property* FiberTensileFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CrackFrontNumber"></a>

### *property* FiberTensileFailureCriterion.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DamageResultType"></a>

### *property* FiberTensileFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DataModelObjectCategory"></a>

### *property* FiberTensileFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DisplayOption"></a>

### *property* FiberTensileFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DisplayTime"></a>

### *property* FiberTensileFailureCriterion.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DpfEvaluation"></a>

### *property* FiberTensileFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Figures"></a>

### *property* FiberTensileFailureCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GlobalIDs"></a>

### *property* FiberTensileFailureCriterion.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GraphControlsXAxis"></a>

### *property* FiberTensileFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Identifier"></a>

### *property* FiberTensileFailureCriterion.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Images"></a>

### *property* FiberTensileFailureCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.InternalObject"></a>

### *property* FiberTensileFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.IsSolved"></a>

### *property* FiberTensileFailureCriterion.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ItemType"></a>

### *property* FiberTensileFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.IterationNumber"></a>

### *property* FiberTensileFailureCriterion.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStep"></a>

### *property* FiberTensileFailureCriterion.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* FiberTensileFailureCriterion.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* FiberTensileFailureCriterion.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* FiberTensileFailureCriterion.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* FiberTensileFailureCriterion.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepNumber"></a>

### *property* FiberTensileFailureCriterion.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Location"></a>

### *property* FiberTensileFailureCriterion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Maximum"></a>

### *property* FiberTensileFailureCriterion.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MaximumOccursOn"></a>

### *property* FiberTensileFailureCriterion.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* FiberTensileFailureCriterion.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* FiberTensileFailureCriterion.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Minimum"></a>

### *property* FiberTensileFailureCriterion.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MinimumOccursOn"></a>

### *property* FiberTensileFailureCriterion.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* FiberTensileFailureCriterion.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* FiberTensileFailureCriterion.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Mode"></a>

### *property* FiberTensileFailureCriterion.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.NamedSelections"></a>

### *property* FiberTensileFailureCriterion.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Path"></a>

### *property* FiberTensileFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Plies"></a>

### *property* FiberTensileFailureCriterion.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PlotData"></a>

### *property* FiberTensileFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Ply"></a>

### *property* FiberTensileFailureCriterion.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Properties"></a>

### *property* FiberTensileFailureCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ScopingMethod"></a>

### *property* FiberTensileFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SetNumber"></a>

### *property* FiberTensileFailureCriterion.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SolutionCombinationDriver"></a>

### *property* FiberTensileFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SolverComponentIDs"></a>

### *property* FiberTensileFailureCriterion.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Substep"></a>

### *property* FiberTensileFailureCriterion.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Suppressed"></a>

### *property* FiberTensileFailureCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Surface"></a>

### *property* FiberTensileFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SurfaceCoating"></a>

### *property* FiberTensileFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Time"></a>

### *property* FiberTensileFailureCriterion.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* FiberTensileFailureCriterion.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* FiberTensileFailureCriterion.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* FiberTensileFailureCriterion.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* FiberTensileFailureCriterion.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.VisibleProperties"></a>

### *property* FiberTensileFailureCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallShowTextOnMosaic"></a>

### *property* FiberTensileFailureCriterion.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FiberTensileFailureCriterion.Activate"></a>

### FiberTensileFailureCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddAlert"></a>

### FiberTensileFailureCriterion.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddComment"></a>

### FiberTensileFailureCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddConvergence"></a>

### FiberTensileFailureCriterion.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddFigure"></a>

### FiberTensileFailureCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddImage"></a>

### FiberTensileFailureCriterion.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ClearGeneratedData"></a>

### FiberTensileFailureCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CopyTo"></a>

### FiberTensileFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CreateParameter"></a>

### FiberTensileFailureCriterion.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CreateResultsAtAllSets"></a>

### FiberTensileFailureCriterion.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Delete"></a>

### FiberTensileFailureCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Duplicate"></a>

### FiberTensileFailureCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DuplicateWithoutResults"></a>

### FiberTensileFailureCriterion.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.EvaluateAllResults"></a>

### FiberTensileFailureCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ExportAnimation"></a>

### FiberTensileFailureCriterion.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ExportToTextFile"></a>

### FiberTensileFailureCriterion.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.FetchRemoteResults"></a>

### FiberTensileFailureCriterion.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetChildren"></a>

### FiberTensileFailureCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetParameter"></a>

### FiberTensileFailureCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GroupAllSimilarChildren"></a>

### FiberTensileFailureCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GroupSimilarObjects"></a>

### FiberTensileFailureCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PromoteToNamedSelection"></a>

### FiberTensileFailureCriterion.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PropertyByAPIName"></a>

### FiberTensileFailureCriterion.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PropertyByName"></a>

### FiberTensileFailureCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RemoveParameter"></a>

### FiberTensileFailureCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RenameBasedOnDefinition"></a>

### FiberTensileFailureCriterion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

