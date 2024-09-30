# `TotalHeatFlux`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TotalHeatFlux"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TotalHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalHeatFlux.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#TotalHeatFlux.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#TotalHeatFlux.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#TotalHeatFlux.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#TotalHeatFlux.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalHeatFlux.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalHeatFlux.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalHeatFlux.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalHeatFlux.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#TotalHeatFlux.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#TotalHeatFlux.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalHeatFlux.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#TotalHeatFlux.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TotalHeatFlux.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalHeatFlux.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#TotalHeatFlux.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#TotalHeatFlux.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#TotalHeatFlux.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalHeatFlux.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalHeatFlux.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalHeatFlux.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#TotalHeatFlux.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#TotalHeatFlux.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalHeatFlux.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalHeatFlux.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalHeatFlux.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#TotalHeatFlux.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#TotalHeatFlux.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#TotalHeatFlux.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#TotalHeatFlux.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#TotalHeatFlux.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#TotalHeatFlux.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#TotalHeatFlux.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#TotalHeatFlux.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#TotalHeatFlux.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#TotalHeatFlux.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#TotalHeatFlux.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#TotalHeatFlux.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#TotalHeatFlux.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#TotalHeatFlux.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#TotalHeatFlux.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#TotalHeatFlux.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#TotalHeatFlux.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#TotalHeatFlux.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#TotalHeatFlux.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#TotalHeatFlux.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#TotalHeatFlux.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#TotalHeatFlux.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`Layer`](#TotalHeatFlux.Layer)                                                         | Gets or sets the Layer.                                                |
| [`LoadStep`](#TotalHeatFlux.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#TotalHeatFlux.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#TotalHeatFlux.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalHeatFlux.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#TotalHeatFlux.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#TotalHeatFlux.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#TotalHeatFlux.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#TotalHeatFlux.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#TotalHeatFlux.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#TotalHeatFlux.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalHeatFlux.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalHeatFlux.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#TotalHeatFlux.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#TotalHeatFlux.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalHeatFlux.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#TotalHeatFlux.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`NormalOrientation`](#TotalHeatFlux.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`Path`](#TotalHeatFlux.Path)                                                           | Path property.                                                         |
| [`PlotData`](#TotalHeatFlux.PlotData)                                                   | Gets the result table.                                                 |
| [`Position`](#TotalHeatFlux.Position)                                                   | Gets or sets the Position.                                             |
| [`Properties`](#TotalHeatFlux.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#TotalHeatFlux.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalHeatFlux.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#TotalHeatFlux.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#TotalHeatFlux.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TotalHeatFlux.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#TotalHeatFlux.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#TotalHeatFlux.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#TotalHeatFlux.SurfaceCoating)                                                                                                                                        | SurfaceCoating property.                                               |
| [`ThermalResultType`](#TotalHeatFlux.ThermalResultType)                                 | Gets or sets the ThermalResultType.                                    |
| [`Time`](#TotalHeatFlux.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#TotalHeatFlux.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#TotalHeatFlux.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalHeatFlux.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#TotalHeatFlux.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#TotalHeatFlux.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#TotalHeatFlux.WaterfallShowTextOnMosaic)                                                                                                                  | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="TotalHeatFlux.Average"></a>

### *property* TotalHeatFlux.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.AverageAcrossBodies"></a>

### *property* TotalHeatFlux.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.By"></a>

### *property* TotalHeatFlux.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.CalculateTimeHistory"></a>

### *property* TotalHeatFlux.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Children"></a>

### *property* TotalHeatFlux.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.CombinationNumber"></a>

### *property* TotalHeatFlux.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Comments"></a>

### *property* TotalHeatFlux.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.CoordinateSystem"></a>

### *property* TotalHeatFlux.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.CrackFrontNumber"></a>

### *property* TotalHeatFlux.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.DataModelObjectCategory"></a>

### *property* TotalHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.DisplayOption"></a>

### *property* TotalHeatFlux.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.DisplayTime"></a>

### *property* TotalHeatFlux.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.DpfEvaluation"></a>

### *property* TotalHeatFlux.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Figures"></a>

### *property* TotalHeatFlux.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.GlobalIDs"></a>

### *property* TotalHeatFlux.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.GraphControlsXAxis"></a>

### *property* TotalHeatFlux.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Identifier"></a>

### *property* TotalHeatFlux.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Images"></a>

### *property* TotalHeatFlux.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.InternalObject"></a>

### *property* TotalHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.IsSolved"></a>

### *property* TotalHeatFlux.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.ItemType"></a>

### *property* TotalHeatFlux.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.IterationNumber"></a>

### *property* TotalHeatFlux.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Layer"></a>

### *property* TotalHeatFlux.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.LoadStep"></a>

### *property* TotalHeatFlux.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalHeatFlux.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalHeatFlux.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalHeatFlux.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalHeatFlux.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.LoadStepNumber"></a>

### *property* TotalHeatFlux.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Location"></a>

### *property* TotalHeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Maximum"></a>

### *property* TotalHeatFlux.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.MaximumOccursOn"></a>

### *property* TotalHeatFlux.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.MaximumOfMaximumOverTime"></a>

### *property* TotalHeatFlux.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.MaximumOfMinimumOverTime"></a>

### *property* TotalHeatFlux.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Minimum"></a>

### *property* TotalHeatFlux.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.MinimumOccursOn"></a>

### *property* TotalHeatFlux.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.MinimumOfMaximumOverTime"></a>

### *property* TotalHeatFlux.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.MinimumOfMinimumOverTime"></a>

### *property* TotalHeatFlux.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.NamedSelections"></a>

### *property* TotalHeatFlux.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.NormalOrientation"></a>

### *property* TotalHeatFlux.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Path"></a>

### *property* TotalHeatFlux.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.PlotData"></a>

### *property* TotalHeatFlux.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Position"></a>

### *property* TotalHeatFlux.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Properties"></a>

### *property* TotalHeatFlux.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.ScopingMethod"></a>

### *property* TotalHeatFlux.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.SetNumber"></a>

### *property* TotalHeatFlux.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.SolutionCombinationDriver"></a>

### *property* TotalHeatFlux.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.SolverComponentIDs"></a>

### *property* TotalHeatFlux.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Substep"></a>

### *property* TotalHeatFlux.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Suppressed"></a>

### *property* TotalHeatFlux.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Surface"></a>

### *property* TotalHeatFlux.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.SurfaceCoating"></a>

### *property* TotalHeatFlux.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.ThermalResultType"></a>

### *property* TotalHeatFlux.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Time"></a>

### *property* TotalHeatFlux.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.TimeForMaximumOfMaximumValues"></a>

### *property* TotalHeatFlux.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.TimeForMaximumOfMinimumValues"></a>

### *property* TotalHeatFlux.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.TimeForMinimumOfMaximumValues"></a>

### *property* TotalHeatFlux.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.TimeForMinimumOfMinimumValues"></a>

### *property* TotalHeatFlux.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.VisibleProperties"></a>

### *property* TotalHeatFlux.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.WaterfallShowTextOnMosaic"></a>

### *property* TotalHeatFlux.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalHeatFlux.Activate"></a>

### TotalHeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.AddAlert"></a>

### TotalHeatFlux.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.AddComment"></a>

### TotalHeatFlux.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.AddConvergence"></a>

### TotalHeatFlux.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.AddFigure"></a>

### TotalHeatFlux.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.AddImage"></a>

### TotalHeatFlux.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.ClearGeneratedData"></a>

### TotalHeatFlux.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.CopyTo"></a>

### TotalHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.CreateParameter"></a>

### TotalHeatFlux.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.CreateResultsAtAllSets"></a>

### TotalHeatFlux.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Delete"></a>

### TotalHeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.Duplicate"></a>

### TotalHeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.DuplicateWithoutResults"></a>

### TotalHeatFlux.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.EvaluateAllResults"></a>

### TotalHeatFlux.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.ExportAnimation"></a>

### TotalHeatFlux.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.ExportToTextFile"></a>

### TotalHeatFlux.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.FetchRemoteResults"></a>

### TotalHeatFlux.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.GetChildren"></a>

### TotalHeatFlux.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.GetParameter"></a>

### TotalHeatFlux.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.GroupAllSimilarChildren"></a>

### TotalHeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.GroupSimilarObjects"></a>

### TotalHeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.PromoteToNamedSelection"></a>

### TotalHeatFlux.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.PropertyByAPIName"></a>

### TotalHeatFlux.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.PropertyByName"></a>

### TotalHeatFlux.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.RemoveParameter"></a>

### TotalHeatFlux.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalHeatFlux.RenameBasedOnDefinition"></a>

### TotalHeatFlux.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

