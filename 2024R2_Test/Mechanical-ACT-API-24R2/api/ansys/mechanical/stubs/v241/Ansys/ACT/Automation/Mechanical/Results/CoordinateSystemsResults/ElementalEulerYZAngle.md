# `ElementalEulerYZAngle`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerYZAngle"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerYZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementalEulerYZAngle.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElementalEulerYZAngle.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ElementalEulerYZAngle.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ElementalEulerYZAngle.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ElementalEulerYZAngle.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ElementalEulerYZAngle.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementalEulerYZAngle.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ElementalEulerYZAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ElementalEulerYZAngle.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElementalEulerYZAngle.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ElementalEulerYZAngle.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ElementalEulerYZAngle.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElementalEulerYZAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ElementalEulerYZAngle.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ElementalEulerYZAngle.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ElementalEulerYZAngle.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ElementalEulerYZAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ElementalEulerYZAngle.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ElementalEulerYZAngle.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElementalEulerYZAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElementalEulerYZAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementalEulerYZAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ElementalEulerYZAngle.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ElementalEulerYZAngle.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElementalEulerYZAngle.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElementalEulerYZAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ElementalEulerYZAngle.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Amplitude`](#ElementalEulerYZAngle.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`Average`](#ElementalEulerYZAngle.Average)                                                     | Gets the Average.                                                      |
| [`By`](#ElementalEulerYZAngle.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#ElementalEulerYZAngle.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#ElementalEulerYZAngle.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#ElementalEulerYZAngle.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#ElementalEulerYZAngle.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#ElementalEulerYZAngle.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#ElementalEulerYZAngle.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#ElementalEulerYZAngle.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#ElementalEulerYZAngle.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#ElementalEulerYZAngle.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#ElementalEulerYZAngle.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#ElementalEulerYZAngle.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Frequency`](#ElementalEulerYZAngle.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`GlobalIDs`](#ElementalEulerYZAngle.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#ElementalEulerYZAngle.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#ElementalEulerYZAngle.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#ElementalEulerYZAngle.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#ElementalEulerYZAngle.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#ElementalEulerYZAngle.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#ElementalEulerYZAngle.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#ElementalEulerYZAngle.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadMultiplier`](#ElementalEulerYZAngle.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#ElementalEulerYZAngle.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#ElementalEulerYZAngle.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#ElementalEulerYZAngle.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ElementalEulerYZAngle.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#ElementalEulerYZAngle.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#ElementalEulerYZAngle.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#ElementalEulerYZAngle.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#ElementalEulerYZAngle.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#ElementalEulerYZAngle.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#ElementalEulerYZAngle.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ElementalEulerYZAngle.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ElementalEulerYZAngle.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#ElementalEulerYZAngle.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#ElementalEulerYZAngle.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ElementalEulerYZAngle.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#ElementalEulerYZAngle.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#ElementalEulerYZAngle.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#ElementalEulerYZAngle.Path)                                                           | Path property.                                                         |
| [`PhaseIncrement`](#ElementalEulerYZAngle.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`PlotData`](#ElementalEulerYZAngle.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#ElementalEulerYZAngle.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Position`](#ElementalEulerYZAngle.Position)                                                   | Gets or sets the Position.                                             |
| [`Properties`](#ElementalEulerYZAngle.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScaleFactor`](#ElementalEulerYZAngle.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`ScaleFactorValue`](#ElementalEulerYZAngle.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                     |
| [`ScopingMethod`](#ElementalEulerYZAngle.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ElementalEulerYZAngle.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#ElementalEulerYZAngle.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#ElementalEulerYZAngle.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`SubScopeBy`](#ElementalEulerYZAngle.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Substep`](#ElementalEulerYZAngle.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#ElementalEulerYZAngle.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#ElementalEulerYZAngle.Surface)                                                     | Surface property.                                                      |
| [`SweepingPhase`](#ElementalEulerYZAngle.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Time`](#ElementalEulerYZAngle.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#ElementalEulerYZAngle.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#ElementalEulerYZAngle.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ElementalEulerYZAngle.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#ElementalEulerYZAngle.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#ElementalEulerYZAngle.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#ElementalEulerYZAngle.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="ElementalEulerYZAngle.Amplitude"></a>

### *property* ElementalEulerYZAngle.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Average"></a>

### *property* ElementalEulerYZAngle.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.By"></a>

### *property* ElementalEulerYZAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CalculateTimeHistory"></a>

### *property* ElementalEulerYZAngle.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Children"></a>

### *property* ElementalEulerYZAngle.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CombinationNumber"></a>

### *property* ElementalEulerYZAngle.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Comments"></a>

### *property* ElementalEulerYZAngle.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CoordinateSystem"></a>

### *property* ElementalEulerYZAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CrackFrontNumber"></a>

### *property* ElementalEulerYZAngle.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DataModelObjectCategory"></a>

### *property* ElementalEulerYZAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DisplayOption"></a>

### *property* ElementalEulerYZAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DisplayTime"></a>

### *property* ElementalEulerYZAngle.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DpfEvaluation"></a>

### *property* ElementalEulerYZAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Figures"></a>

### *property* ElementalEulerYZAngle.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Frequency"></a>

### *property* ElementalEulerYZAngle.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GlobalIDs"></a>

### *property* ElementalEulerYZAngle.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GraphControlsXAxis"></a>

### *property* ElementalEulerYZAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Identifier"></a>

### *property* ElementalEulerYZAngle.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Images"></a>

### *property* ElementalEulerYZAngle.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.InternalObject"></a>

### *property* ElementalEulerYZAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.IsSolved"></a>

### *property* ElementalEulerYZAngle.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ItemType"></a>

### *property* ElementalEulerYZAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.IterationNumber"></a>

### *property* ElementalEulerYZAngle.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadMultiplier"></a>

### *property* ElementalEulerYZAngle.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStep"></a>

### *property* ElementalEulerYZAngle.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElementalEulerYZAngle.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElementalEulerYZAngle.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElementalEulerYZAngle.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElementalEulerYZAngle.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepNumber"></a>

### *property* ElementalEulerYZAngle.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Location"></a>

### *property* ElementalEulerYZAngle.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Maximum"></a>

### *property* ElementalEulerYZAngle.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MaximumOccursOn"></a>

### *property* ElementalEulerYZAngle.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MaximumOfMaximumOverTime"></a>

### *property* ElementalEulerYZAngle.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MaximumOfMinimumOverTime"></a>

### *property* ElementalEulerYZAngle.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Minimum"></a>

### *property* ElementalEulerYZAngle.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MinimumOccursOn"></a>

### *property* ElementalEulerYZAngle.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MinimumOfMaximumOverTime"></a>

### *property* ElementalEulerYZAngle.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MinimumOfMinimumOverTime"></a>

### *property* ElementalEulerYZAngle.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Mode"></a>

### *property* ElementalEulerYZAngle.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.NamedSelections"></a>

### *property* ElementalEulerYZAngle.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Path"></a>

### *property* ElementalEulerYZAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PhaseIncrement"></a>

### *property* ElementalEulerYZAngle.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PlotData"></a>

### *property* ElementalEulerYZAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Ply"></a>

### *property* ElementalEulerYZAngle.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Position"></a>

### *property* ElementalEulerYZAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Properties"></a>

### *property* ElementalEulerYZAngle.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ScaleFactor"></a>

### *property* ElementalEulerYZAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ScaleFactorValue"></a>

### *property* ElementalEulerYZAngle.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ScopingMethod"></a>

### *property* ElementalEulerYZAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SetNumber"></a>

### *property* ElementalEulerYZAngle.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SolutionCombinationDriver"></a>

### *property* ElementalEulerYZAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SolverComponentIDs"></a>

### *property* ElementalEulerYZAngle.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SubScopeBy"></a>

### *property* ElementalEulerYZAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Substep"></a>

### *property* ElementalEulerYZAngle.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Suppressed"></a>

### *property* ElementalEulerYZAngle.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Surface"></a>

### *property* ElementalEulerYZAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SweepingPhase"></a>

### *property* ElementalEulerYZAngle.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Time"></a>

### *property* ElementalEulerYZAngle.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.TimeForMaximumOfMaximumValues"></a>

### *property* ElementalEulerYZAngle.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.TimeForMaximumOfMinimumValues"></a>

### *property* ElementalEulerYZAngle.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.TimeForMinimumOfMaximumValues"></a>

### *property* ElementalEulerYZAngle.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.TimeForMinimumOfMinimumValues"></a>

### *property* ElementalEulerYZAngle.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.VisibleProperties"></a>

### *property* ElementalEulerYZAngle.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.WaterfallPanelShowTextOnMosaic"></a>

### *property* ElementalEulerYZAngle.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementalEulerYZAngle.Activate"></a>

### ElementalEulerYZAngle.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddAlert"></a>

### ElementalEulerYZAngle.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddComment"></a>

### ElementalEulerYZAngle.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddConvergence"></a>

### ElementalEulerYZAngle.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddFigure"></a>

### ElementalEulerYZAngle.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddImage"></a>

### ElementalEulerYZAngle.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ClearGeneratedData"></a>

### ElementalEulerYZAngle.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CopyTo"></a>

### ElementalEulerYZAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CreateParameter"></a>

### ElementalEulerYZAngle.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CreateResultsAtAllSets"></a>

### ElementalEulerYZAngle.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Delete"></a>

### ElementalEulerYZAngle.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Duplicate"></a>

### ElementalEulerYZAngle.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DuplicateWithoutResults"></a>

### ElementalEulerYZAngle.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.EvaluateAllResults"></a>

### ElementalEulerYZAngle.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ExportAnimation"></a>

### ElementalEulerYZAngle.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ExportToTextFile"></a>

### ElementalEulerYZAngle.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.FetchRemoteResults"></a>

### ElementalEulerYZAngle.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GetChildren"></a>

### ElementalEulerYZAngle.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GetParameter"></a>

### ElementalEulerYZAngle.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GroupAllSimilarChildren"></a>

### ElementalEulerYZAngle.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GroupSimilarObjects"></a>

### ElementalEulerYZAngle.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PromoteToNamedSelection"></a>

### ElementalEulerYZAngle.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PropertyByAPIName"></a>

### ElementalEulerYZAngle.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PropertyByName"></a>

### ElementalEulerYZAngle.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.RemoveParameter"></a>

### ElementalEulerYZAngle.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.RenameBasedOnDefinition"></a>

### ElementalEulerYZAngle.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

