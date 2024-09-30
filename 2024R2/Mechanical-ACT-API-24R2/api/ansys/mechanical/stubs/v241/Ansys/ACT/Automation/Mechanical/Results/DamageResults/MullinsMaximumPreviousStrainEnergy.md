# `MullinsMaximumPreviousStrainEnergy`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MullinsMaximumPreviousStrainEnergy"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MullinsMaximumPreviousStrainEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MullinsMaximumPreviousStrainEnergy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MullinsMaximumPreviousStrainEnergy.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#MullinsMaximumPreviousStrainEnergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#MullinsMaximumPreviousStrainEnergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#MullinsMaximumPreviousStrainEnergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#MullinsMaximumPreviousStrainEnergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MullinsMaximumPreviousStrainEnergy.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MullinsMaximumPreviousStrainEnergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#MullinsMaximumPreviousStrainEnergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MullinsMaximumPreviousStrainEnergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#MullinsMaximumPreviousStrainEnergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#MullinsMaximumPreviousStrainEnergy.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MullinsMaximumPreviousStrainEnergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#MullinsMaximumPreviousStrainEnergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MullinsMaximumPreviousStrainEnergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#MullinsMaximumPreviousStrainEnergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#MullinsMaximumPreviousStrainEnergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#MullinsMaximumPreviousStrainEnergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#MullinsMaximumPreviousStrainEnergy.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MullinsMaximumPreviousStrainEnergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MullinsMaximumPreviousStrainEnergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MullinsMaximumPreviousStrainEnergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MullinsMaximumPreviousStrainEnergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MullinsMaximumPreviousStrainEnergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MullinsMaximumPreviousStrainEnergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MullinsMaximumPreviousStrainEnergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MullinsMaximumPreviousStrainEnergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#MullinsMaximumPreviousStrainEnergy.Average)                                                     | Gets the Average.                                                      |
| [`By`](#MullinsMaximumPreviousStrainEnergy.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#MullinsMaximumPreviousStrainEnergy.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#MullinsMaximumPreviousStrainEnergy.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#MullinsMaximumPreviousStrainEnergy.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#MullinsMaximumPreviousStrainEnergy.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#MullinsMaximumPreviousStrainEnergy.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#MullinsMaximumPreviousStrainEnergy.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DamageResultType`](#MullinsMaximumPreviousStrainEnergy.DamageResultType)                                   | Gets the DamageResultType.                                             |
| [`DataModelObjectCategory`](#MullinsMaximumPreviousStrainEnergy.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#MullinsMaximumPreviousStrainEnergy.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#MullinsMaximumPreviousStrainEnergy.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#MullinsMaximumPreviousStrainEnergy.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#MullinsMaximumPreviousStrainEnergy.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#MullinsMaximumPreviousStrainEnergy.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#MullinsMaximumPreviousStrainEnergy.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#MullinsMaximumPreviousStrainEnergy.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#MullinsMaximumPreviousStrainEnergy.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#MullinsMaximumPreviousStrainEnergy.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#MullinsMaximumPreviousStrainEnergy.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#MullinsMaximumPreviousStrainEnergy.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#MullinsMaximumPreviousStrainEnergy.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MullinsMaximumPreviousStrainEnergy.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#MullinsMaximumPreviousStrainEnergy.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#MullinsMaximumPreviousStrainEnergy.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#MullinsMaximumPreviousStrainEnergy.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#MullinsMaximumPreviousStrainEnergy.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#MullinsMaximumPreviousStrainEnergy.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MullinsMaximumPreviousStrainEnergy.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MullinsMaximumPreviousStrainEnergy.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#MullinsMaximumPreviousStrainEnergy.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#MullinsMaximumPreviousStrainEnergy.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MullinsMaximumPreviousStrainEnergy.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#MullinsMaximumPreviousStrainEnergy.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#MullinsMaximumPreviousStrainEnergy.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#MullinsMaximumPreviousStrainEnergy.Path)                                                           | Path property.                                                         |
| [`Plies`](#MullinsMaximumPreviousStrainEnergy.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#MullinsMaximumPreviousStrainEnergy.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#MullinsMaximumPreviousStrainEnergy.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Properties`](#MullinsMaximumPreviousStrainEnergy.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#MullinsMaximumPreviousStrainEnergy.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MullinsMaximumPreviousStrainEnergy.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#MullinsMaximumPreviousStrainEnergy.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#MullinsMaximumPreviousStrainEnergy.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MullinsMaximumPreviousStrainEnergy.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#MullinsMaximumPreviousStrainEnergy.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#MullinsMaximumPreviousStrainEnergy.Surface)                                                     | Surface property.                                                      |
| [`Time`](#MullinsMaximumPreviousStrainEnergy.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#MullinsMaximumPreviousStrainEnergy.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#MullinsMaximumPreviousStrainEnergy.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="MullinsMaximumPreviousStrainEnergy.Average"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.By"></a>

### *property* MullinsMaximumPreviousStrainEnergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CalculateTimeHistory"></a>

### *property* MullinsMaximumPreviousStrainEnergy.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Children"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CombinationNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Comments"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CoordinateSystem"></a>

### *property* MullinsMaximumPreviousStrainEnergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CrackFrontNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DamageResultType"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DataModelObjectCategory"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DisplayOption"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DisplayTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DpfEvaluation"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Figures"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GlobalIDs"></a>

### *property* MullinsMaximumPreviousStrainEnergy.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GraphControlsXAxis"></a>

### *property* MullinsMaximumPreviousStrainEnergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Identifier"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Images"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.InternalObject"></a>

### *property* MullinsMaximumPreviousStrainEnergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.IsSolved"></a>

### *property* MullinsMaximumPreviousStrainEnergy.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ItemType"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.IterationNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStep"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMaximumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMinimumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMaximumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMinimumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Location"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Maximum"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MaximumOccursOn"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MaximumOfMaximumOverTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MaximumOfMinimumOverTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Minimum"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MinimumOccursOn"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MinimumOfMaximumOverTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MinimumOfMinimumOverTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Mode"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.NamedSelections"></a>

### *property* MullinsMaximumPreviousStrainEnergy.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Path"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Plies"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PlotData"></a>

### *property* MullinsMaximumPreviousStrainEnergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Ply"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Properties"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ScopingMethod"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.SetNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.SolutionCombinationDriver"></a>

### *property* MullinsMaximumPreviousStrainEnergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.SolverComponentIDs"></a>

### *property* MullinsMaximumPreviousStrainEnergy.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Substep"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Suppressed"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Surface"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Time"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMaximumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMinimumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMaximumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMinimumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.VisibleProperties"></a>

### *property* MullinsMaximumPreviousStrainEnergy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallPanelShowTextOnMosaic"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MullinsMaximumPreviousStrainEnergy.Activate"></a>

### MullinsMaximumPreviousStrainEnergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddAlert"></a>

### MullinsMaximumPreviousStrainEnergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddComment"></a>

### MullinsMaximumPreviousStrainEnergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddConvergence"></a>

### MullinsMaximumPreviousStrainEnergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddFigure"></a>

### MullinsMaximumPreviousStrainEnergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddImage"></a>

### MullinsMaximumPreviousStrainEnergy.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ClearGeneratedData"></a>

### MullinsMaximumPreviousStrainEnergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CopyTo"></a>

### MullinsMaximumPreviousStrainEnergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CreateParameter"></a>

### MullinsMaximumPreviousStrainEnergy.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CreateResultsAtAllSets"></a>

### MullinsMaximumPreviousStrainEnergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Delete"></a>

### MullinsMaximumPreviousStrainEnergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Duplicate"></a>

### MullinsMaximumPreviousStrainEnergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DuplicateWithoutResults"></a>

### MullinsMaximumPreviousStrainEnergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.EvaluateAllResults"></a>

### MullinsMaximumPreviousStrainEnergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ExportAnimation"></a>

### MullinsMaximumPreviousStrainEnergy.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ExportToTextFile"></a>

### MullinsMaximumPreviousStrainEnergy.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.FetchRemoteResults"></a>

### MullinsMaximumPreviousStrainEnergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetChildren"></a>

### MullinsMaximumPreviousStrainEnergy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetParameter"></a>

### MullinsMaximumPreviousStrainEnergy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GroupAllSimilarChildren"></a>

### MullinsMaximumPreviousStrainEnergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GroupSimilarObjects"></a>

### MullinsMaximumPreviousStrainEnergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PromoteToNamedSelection"></a>

### MullinsMaximumPreviousStrainEnergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PropertyByAPIName"></a>

### MullinsMaximumPreviousStrainEnergy.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PropertyByName"></a>

### MullinsMaximumPreviousStrainEnergy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RemoveParameter"></a>

### MullinsMaximumPreviousStrainEnergy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RenameBasedOnDefinition"></a>

### MullinsMaximumPreviousStrainEnergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

