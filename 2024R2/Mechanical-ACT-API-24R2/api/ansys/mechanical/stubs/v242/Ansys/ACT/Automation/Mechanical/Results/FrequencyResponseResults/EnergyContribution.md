# `EnergyContribution`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EnergyContribution"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EnergyContribution

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EnergyContribution.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EnergyContribution.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#EnergyContribution.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#EnergyContribution.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#EnergyContribution.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#EnergyContribution.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EnergyContribution.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#EnergyContribution.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#EnergyContribution.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EnergyContribution.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#EnergyContribution.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#EnergyContribution.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#EnergyContribution.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#EnergyContribution.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#EnergyContribution.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#EnergyContribution.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#EnergyContribution.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#EnergyContribution.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#EnergyContribution.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#EnergyContribution.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#EnergyContribution.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EnergyContribution.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#EnergyContribution.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#EnergyContribution.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#EnergyContribution.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EnergyContribution.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#EnergyContribution.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#EnergyContribution.Average)                                                     | Gets the Average.                                                      |
| [`By`](#EnergyContribution.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#EnergyContribution.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#EnergyContribution.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#EnergyContribution.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#EnergyContribution.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#EnergyContribution.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#EnergyContribution.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#EnergyContribution.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#EnergyContribution.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#EnergyContribution.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#EnergyContribution.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#EnergyContribution.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#EnergyContribution.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#EnergyContribution.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#EnergyContribution.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#EnergyContribution.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#EnergyContribution.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#EnergyContribution.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#EnergyContribution.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#EnergyContribution.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#EnergyContribution.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#EnergyContribution.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#EnergyContribution.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EnergyContribution.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#EnergyContribution.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#EnergyContribution.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#EnergyContribution.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#EnergyContribution.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#EnergyContribution.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#EnergyContribution.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EnergyContribution.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EnergyContribution.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#EnergyContribution.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#EnergyContribution.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EnergyContribution.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#EnergyContribution.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#EnergyContribution.Path)                                                           | Path property.                                                         |
| [`PlotData`](#EnergyContribution.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#EnergyContribution.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#EnergyContribution.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EnergyContribution.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#EnergyContribution.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#EnergyContribution.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EnergyContribution.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#EnergyContribution.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#EnergyContribution.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#EnergyContribution.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`Time`](#EnergyContribution.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#EnergyContribution.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#EnergyContribution.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EnergyContribution.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#EnergyContribution.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#EnergyContribution.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#EnergyContribution.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="EnergyContribution.Average"></a>

### *property* EnergyContribution.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.By"></a>

### *property* EnergyContribution.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.CalculateTimeHistory"></a>

### *property* EnergyContribution.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Children"></a>

### *property* EnergyContribution.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.CombinationNumber"></a>

### *property* EnergyContribution.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Comments"></a>

### *property* EnergyContribution.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.CoordinateSystem"></a>

### *property* EnergyContribution.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.CrackFrontNumber"></a>

### *property* EnergyContribution.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.DataModelObjectCategory"></a>

### *property* EnergyContribution.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.DisplayOption"></a>

### *property* EnergyContribution.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.DisplayTime"></a>

### *property* EnergyContribution.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.DpfEvaluation"></a>

### *property* EnergyContribution.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Figures"></a>

### *property* EnergyContribution.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.GlobalIDs"></a>

### *property* EnergyContribution.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.GraphControlsXAxis"></a>

### *property* EnergyContribution.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Identifier"></a>

### *property* EnergyContribution.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Images"></a>

### *property* EnergyContribution.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.InternalObject"></a>

### *property* EnergyContribution.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.IsSolved"></a>

### *property* EnergyContribution.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.ItemType"></a>

### *property* EnergyContribution.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.IterationNumber"></a>

### *property* EnergyContribution.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.LoadStep"></a>

### *property* EnergyContribution.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.LoadStepForMaximumOfMaximumValues"></a>

### *property* EnergyContribution.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.LoadStepForMaximumOfMinimumValues"></a>

### *property* EnergyContribution.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.LoadStepForMinimumOfMaximumValues"></a>

### *property* EnergyContribution.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.LoadStepForMinimumOfMinimumValues"></a>

### *property* EnergyContribution.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.LoadStepNumber"></a>

### *property* EnergyContribution.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Location"></a>

### *property* EnergyContribution.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Maximum"></a>

### *property* EnergyContribution.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.MaximumOccursOn"></a>

### *property* EnergyContribution.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.MaximumOfMaximumOverTime"></a>

### *property* EnergyContribution.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.MaximumOfMinimumOverTime"></a>

### *property* EnergyContribution.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Minimum"></a>

### *property* EnergyContribution.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.MinimumOccursOn"></a>

### *property* EnergyContribution.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.MinimumOfMaximumOverTime"></a>

### *property* EnergyContribution.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.MinimumOfMinimumOverTime"></a>

### *property* EnergyContribution.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.NamedSelections"></a>

### *property* EnergyContribution.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Path"></a>

### *property* EnergyContribution.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.PlotData"></a>

### *property* EnergyContribution.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Properties"></a>

### *property* EnergyContribution.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.ScopingMethod"></a>

### *property* EnergyContribution.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.SetNumber"></a>

### *property* EnergyContribution.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.SolutionCombinationDriver"></a>

### *property* EnergyContribution.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.SolverComponentIDs"></a>

### *property* EnergyContribution.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Substep"></a>

### *property* EnergyContribution.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Suppressed"></a>

### *property* EnergyContribution.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Surface"></a>

### *property* EnergyContribution.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.SurfaceCoating"></a>

### *property* EnergyContribution.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Time"></a>

### *property* EnergyContribution.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.TimeForMaximumOfMaximumValues"></a>

### *property* EnergyContribution.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.TimeForMaximumOfMinimumValues"></a>

### *property* EnergyContribution.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.TimeForMinimumOfMaximumValues"></a>

### *property* EnergyContribution.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.TimeForMinimumOfMinimumValues"></a>

### *property* EnergyContribution.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.VisibleProperties"></a>

### *property* EnergyContribution.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.WaterfallShowTextOnMosaic"></a>

### *property* EnergyContribution.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EnergyContribution.Activate"></a>

### EnergyContribution.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.AddAlert"></a>

### EnergyContribution.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.AddComment"></a>

### EnergyContribution.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.AddConvergence"></a>

### EnergyContribution.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.AddFigure"></a>

### EnergyContribution.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.AddImage"></a>

### EnergyContribution.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.ClearGeneratedData"></a>

### EnergyContribution.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.CopyTo"></a>

### EnergyContribution.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.CreateParameter"></a>

### EnergyContribution.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.CreateResultsAtAllSets"></a>

### EnergyContribution.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Delete"></a>

### EnergyContribution.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.Duplicate"></a>

### EnergyContribution.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.DuplicateWithoutResults"></a>

### EnergyContribution.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.EvaluateAllResults"></a>

### EnergyContribution.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.ExportAnimation"></a>

### EnergyContribution.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.ExportToTextFile"></a>

### EnergyContribution.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.FetchRemoteResults"></a>

### EnergyContribution.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.GetChildren"></a>

### EnergyContribution.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.GetParameter"></a>

### EnergyContribution.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.GroupAllSimilarChildren"></a>

### EnergyContribution.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.GroupSimilarObjects"></a>

### EnergyContribution.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.PromoteToNamedSelection"></a>

### EnergyContribution.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.PropertyByAPIName"></a>

### EnergyContribution.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.PropertyByName"></a>

### EnergyContribution.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.RemoveParameter"></a>

### EnergyContribution.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyContribution.RenameBasedOnDefinition"></a>

### EnergyContribution.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

