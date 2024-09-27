# `VectorAxialForce`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorAxialForce"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorAxialForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VectorAxialForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VectorAxialForce.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#VectorAxialForce.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#VectorAxialForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#VectorAxialForce.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#VectorAxialForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VectorAxialForce.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#VectorAxialForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#VectorAxialForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VectorAxialForce.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#VectorAxialForce.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#VectorAxialForce.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VectorAxialForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#VectorAxialForce.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#VectorAxialForce.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#VectorAxialForce.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#VectorAxialForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#VectorAxialForce.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#VectorAxialForce.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VectorAxialForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VectorAxialForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VectorAxialForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#VectorAxialForce.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#VectorAxialForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VectorAxialForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VectorAxialForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VectorAxialForce.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#VectorAxialForce.Average)                                                     | Gets the Average.                                                      |
| [`By`](#VectorAxialForce.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#VectorAxialForce.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#VectorAxialForce.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#VectorAxialForce.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#VectorAxialForce.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#VectorAxialForce.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#VectorAxialForce.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#VectorAxialForce.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#VectorAxialForce.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#VectorAxialForce.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#VectorAxialForce.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#VectorAxialForce.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#VectorAxialForce.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#VectorAxialForce.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#VectorAxialForce.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#VectorAxialForce.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#VectorAxialForce.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#VectorAxialForce.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#VectorAxialForce.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#VectorAxialForce.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#VectorAxialForce.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#VectorAxialForce.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#VectorAxialForce.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#VectorAxialForce.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#VectorAxialForce.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#VectorAxialForce.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#VectorAxialForce.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#VectorAxialForce.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#VectorAxialForce.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#VectorAxialForce.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#VectorAxialForce.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#VectorAxialForce.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#VectorAxialForce.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#VectorAxialForce.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#VectorAxialForce.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#VectorAxialForce.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#VectorAxialForce.Path)                                                           | Path property.                                                         |
| [`PlotData`](#VectorAxialForce.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#VectorAxialForce.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#VectorAxialForce.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#VectorAxialForce.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#VectorAxialForce.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#VectorAxialForce.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#VectorAxialForce.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#VectorAxialForce.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#VectorAxialForce.Surface)                                                     | Surface property.                                                      |
| [`Time`](#VectorAxialForce.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#VectorAxialForce.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#VectorAxialForce.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#VectorAxialForce.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#VectorAxialForce.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#VectorAxialForce.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#VectorAxialForce.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="VectorAxialForce.Average"></a>

### *property* VectorAxialForce.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.By"></a>

### *property* VectorAxialForce.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.CalculateTimeHistory"></a>

### *property* VectorAxialForce.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Children"></a>

### *property* VectorAxialForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.CombinationNumber"></a>

### *property* VectorAxialForce.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Comments"></a>

### *property* VectorAxialForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.CoordinateSystem"></a>

### *property* VectorAxialForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.CrackFrontNumber"></a>

### *property* VectorAxialForce.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.DataModelObjectCategory"></a>

### *property* VectorAxialForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.DisplayOption"></a>

### *property* VectorAxialForce.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.DisplayTime"></a>

### *property* VectorAxialForce.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.DpfEvaluation"></a>

### *property* VectorAxialForce.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Figures"></a>

### *property* VectorAxialForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.GlobalIDs"></a>

### *property* VectorAxialForce.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.GraphControlsXAxis"></a>

### *property* VectorAxialForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Identifier"></a>

### *property* VectorAxialForce.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Images"></a>

### *property* VectorAxialForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.InternalObject"></a>

### *property* VectorAxialForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.IsSolved"></a>

### *property* VectorAxialForce.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.ItemType"></a>

### *property* VectorAxialForce.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.IterationNumber"></a>

### *property* VectorAxialForce.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.LoadStep"></a>

### *property* VectorAxialForce.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.LoadStepForMaximumOfMaximumValues"></a>

### *property* VectorAxialForce.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.LoadStepForMaximumOfMinimumValues"></a>

### *property* VectorAxialForce.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.LoadStepForMinimumOfMaximumValues"></a>

### *property* VectorAxialForce.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.LoadStepForMinimumOfMinimumValues"></a>

### *property* VectorAxialForce.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.LoadStepNumber"></a>

### *property* VectorAxialForce.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Location"></a>

### *property* VectorAxialForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Maximum"></a>

### *property* VectorAxialForce.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.MaximumOccursOn"></a>

### *property* VectorAxialForce.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.MaximumOfMaximumOverTime"></a>

### *property* VectorAxialForce.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.MaximumOfMinimumOverTime"></a>

### *property* VectorAxialForce.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Minimum"></a>

### *property* VectorAxialForce.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.MinimumOccursOn"></a>

### *property* VectorAxialForce.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.MinimumOfMaximumOverTime"></a>

### *property* VectorAxialForce.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.MinimumOfMinimumOverTime"></a>

### *property* VectorAxialForce.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.NamedSelections"></a>

### *property* VectorAxialForce.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Path"></a>

### *property* VectorAxialForce.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.PlotData"></a>

### *property* VectorAxialForce.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Properties"></a>

### *property* VectorAxialForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.ScopingMethod"></a>

### *property* VectorAxialForce.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.SetNumber"></a>

### *property* VectorAxialForce.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.SolutionCombinationDriver"></a>

### *property* VectorAxialForce.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.SolverComponentIDs"></a>

### *property* VectorAxialForce.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Substep"></a>

### *property* VectorAxialForce.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Suppressed"></a>

### *property* VectorAxialForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Surface"></a>

### *property* VectorAxialForce.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Time"></a>

### *property* VectorAxialForce.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.TimeForMaximumOfMaximumValues"></a>

### *property* VectorAxialForce.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.TimeForMaximumOfMinimumValues"></a>

### *property* VectorAxialForce.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.TimeForMinimumOfMaximumValues"></a>

### *property* VectorAxialForce.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.TimeForMinimumOfMinimumValues"></a>

### *property* VectorAxialForce.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.VisibleProperties"></a>

### *property* VectorAxialForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.WaterfallPanelShowTextOnMosaic"></a>

### *property* VectorAxialForce.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VectorAxialForce.Activate"></a>

### VectorAxialForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.AddAlert"></a>

### VectorAxialForce.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.AddComment"></a>

### VectorAxialForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.AddConvergence"></a>

### VectorAxialForce.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.AddFigure"></a>

### VectorAxialForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.AddImage"></a>

### VectorAxialForce.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.ClearGeneratedData"></a>

### VectorAxialForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.CopyTo"></a>

### VectorAxialForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.CreateParameter"></a>

### VectorAxialForce.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.CreateResultsAtAllSets"></a>

### VectorAxialForce.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Delete"></a>

### VectorAxialForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.Duplicate"></a>

### VectorAxialForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.DuplicateWithoutResults"></a>

### VectorAxialForce.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.EvaluateAllResults"></a>

### VectorAxialForce.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.ExportAnimation"></a>

### VectorAxialForce.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.ExportToTextFile"></a>

### VectorAxialForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.FetchRemoteResults"></a>

### VectorAxialForce.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.GetChildren"></a>

### VectorAxialForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.GetParameter"></a>

### VectorAxialForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.GroupAllSimilarChildren"></a>

### VectorAxialForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.GroupSimilarObjects"></a>

### VectorAxialForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.PromoteToNamedSelection"></a>

### VectorAxialForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.PropertyByAPIName"></a>

### VectorAxialForce.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.PropertyByName"></a>

### VectorAxialForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.RemoveParameter"></a>

### VectorAxialForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorAxialForce.RenameBasedOnDefinition"></a>

### VectorAxialForce.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

