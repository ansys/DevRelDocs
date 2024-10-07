# `FatigueSafetyFactor`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSafetyFactor"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSafetyFactor

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FatigueSafetyFactor.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#FatigueSafetyFactor.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#FatigueSafetyFactor.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#FatigueSafetyFactor.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#FatigueSafetyFactor.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueSafetyFactor.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FatigueSafetyFactor.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FatigueSafetyFactor.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FatigueSafetyFactor.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#FatigueSafetyFactor.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#FatigueSafetyFactor.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FatigueSafetyFactor.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#FatigueSafetyFactor.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FatigueSafetyFactor.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FatigueSafetyFactor.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#FatigueSafetyFactor.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#FatigueSafetyFactor.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#FatigueSafetyFactor.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FatigueSafetyFactor.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FatigueSafetyFactor.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueSafetyFactor.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FatigueSafetyFactor.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FatigueSafetyFactor.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FatigueSafetyFactor.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FatigueSafetyFactor.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FatigueSafetyFactor.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#FatigueSafetyFactor.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#FatigueSafetyFactor.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#FatigueSafetyFactor.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#FatigueSafetyFactor.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#FatigueSafetyFactor.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#FatigueSafetyFactor.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#FatigueSafetyFactor.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#FatigueSafetyFactor.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#FatigueSafetyFactor.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#FatigueSafetyFactor.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DesignLife`](#FatigueSafetyFactor.DesignLife)                                               | Gets or sets the DesignLife.                                           |
| [`DisplayOption`](#FatigueSafetyFactor.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#FatigueSafetyFactor.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#FatigueSafetyFactor.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#FatigueSafetyFactor.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#FatigueSafetyFactor.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#FatigueSafetyFactor.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#FatigueSafetyFactor.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#FatigueSafetyFactor.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#FatigueSafetyFactor.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#FatigueSafetyFactor.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#FatigueSafetyFactor.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#FatigueSafetyFactor.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueSafetyFactor.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueSafetyFactor.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueSafetyFactor.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueSafetyFactor.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueSafetyFactor.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#FatigueSafetyFactor.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#FatigueSafetyFactor.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#FatigueSafetyFactor.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#FatigueSafetyFactor.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#FatigueSafetyFactor.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueSafetyFactor.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Method`](#FatigueSafetyFactor.Method)                                                       | Gets the Method.                                                       |
| [`Minimum`](#FatigueSafetyFactor.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#FatigueSafetyFactor.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#FatigueSafetyFactor.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueSafetyFactor.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#FatigueSafetyFactor.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#FatigueSafetyFactor.Path)                                                           | Path property.                                                         |
| [`PlotData`](#FatigueSafetyFactor.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#FatigueSafetyFactor.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#FatigueSafetyFactor.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueSafetyFactor.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#FatigueSafetyFactor.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#FatigueSafetyFactor.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueSafetyFactor.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#FatigueSafetyFactor.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#FatigueSafetyFactor.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#FatigueSafetyFactor.SurfaceCoating)                                                                                                                                                  | SurfaceCoating property.                                               |
| [`Time`](#FatigueSafetyFactor.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#FatigueSafetyFactor.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#FatigueSafetyFactor.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueSafetyFactor.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#FatigueSafetyFactor.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#FatigueSafetyFactor.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#FatigueSafetyFactor.WaterfallShowTextOnMosaic)                                                                                                                            | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="FatigueSafetyFactor.Average"></a>

### *property* FatigueSafetyFactor.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AverageAcrossBodies"></a>

### *property* FatigueSafetyFactor.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.By"></a>

### *property* FatigueSafetyFactor.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CalculateTimeHistory"></a>

### *property* FatigueSafetyFactor.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Children"></a>

### *property* FatigueSafetyFactor.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CombinationNumber"></a>

### *property* FatigueSafetyFactor.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Comments"></a>

### *property* FatigueSafetyFactor.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CoordinateSystem"></a>

### *property* FatigueSafetyFactor.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CrackFrontNumber"></a>

### *property* FatigueSafetyFactor.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DataModelObjectCategory"></a>

### *property* FatigueSafetyFactor.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DesignLife"></a>

### *property* FatigueSafetyFactor.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DisplayOption"></a>

### *property* FatigueSafetyFactor.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DisplayTime"></a>

### *property* FatigueSafetyFactor.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DpfEvaluation"></a>

### *property* FatigueSafetyFactor.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Figures"></a>

### *property* FatigueSafetyFactor.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GlobalIDs"></a>

### *property* FatigueSafetyFactor.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GraphControlsXAxis"></a>

### *property* FatigueSafetyFactor.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Identifier"></a>

### *property* FatigueSafetyFactor.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Images"></a>

### *property* FatigueSafetyFactor.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.InternalObject"></a>

### *property* FatigueSafetyFactor.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.IsSolved"></a>

### *property* FatigueSafetyFactor.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ItemType"></a>

### *property* FatigueSafetyFactor.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.IterationNumber"></a>

### *property* FatigueSafetyFactor.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStep"></a>

### *property* FatigueSafetyFactor.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueSafetyFactor.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueSafetyFactor.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueSafetyFactor.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueSafetyFactor.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.LoadStepNumber"></a>

### *property* FatigueSafetyFactor.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Location"></a>

### *property* FatigueSafetyFactor.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Maximum"></a>

### *property* FatigueSafetyFactor.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MaximumOccursOn"></a>

### *property* FatigueSafetyFactor.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MaximumOfMaximumOverTime"></a>

### *property* FatigueSafetyFactor.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MaximumOfMinimumOverTime"></a>

### *property* FatigueSafetyFactor.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Method"></a>

### *property* FatigueSafetyFactor.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Minimum"></a>

### *property* FatigueSafetyFactor.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MinimumOccursOn"></a>

### *property* FatigueSafetyFactor.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MinimumOfMaximumOverTime"></a>

### *property* FatigueSafetyFactor.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.MinimumOfMinimumOverTime"></a>

### *property* FatigueSafetyFactor.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.NamedSelections"></a>

### *property* FatigueSafetyFactor.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Path"></a>

### *property* FatigueSafetyFactor.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PlotData"></a>

### *property* FatigueSafetyFactor.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Properties"></a>

### *property* FatigueSafetyFactor.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ScopingMethod"></a>

### *property* FatigueSafetyFactor.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SetNumber"></a>

### *property* FatigueSafetyFactor.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SolutionCombinationDriver"></a>

### *property* FatigueSafetyFactor.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SolverComponentIDs"></a>

### *property* FatigueSafetyFactor.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Substep"></a>

### *property* FatigueSafetyFactor.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Suppressed"></a>

### *property* FatigueSafetyFactor.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Surface"></a>

### *property* FatigueSafetyFactor.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.SurfaceCoating"></a>

### *property* FatigueSafetyFactor.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Time"></a>

### *property* FatigueSafetyFactor.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueSafetyFactor.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueSafetyFactor.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueSafetyFactor.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueSafetyFactor.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.VisibleProperties"></a>

### *property* FatigueSafetyFactor.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.WaterfallShowTextOnMosaic"></a>

### *property* FatigueSafetyFactor.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueSafetyFactor.Activate"></a>

### FatigueSafetyFactor.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddAlert"></a>

### FatigueSafetyFactor.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddComment"></a>

### FatigueSafetyFactor.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddConvergence"></a>

### FatigueSafetyFactor.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddFigure"></a>

### FatigueSafetyFactor.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.AddImage"></a>

### FatigueSafetyFactor.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ClearGeneratedData"></a>

### FatigueSafetyFactor.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CopyTo"></a>

### FatigueSafetyFactor.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CreateParameter"></a>

### FatigueSafetyFactor.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.CreateResultsAtAllSets"></a>

### FatigueSafetyFactor.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Delete"></a>

### FatigueSafetyFactor.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.Duplicate"></a>

### FatigueSafetyFactor.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.DuplicateWithoutResults"></a>

### FatigueSafetyFactor.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.EvaluateAllResults"></a>

### FatigueSafetyFactor.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ExportAnimation"></a>

### FatigueSafetyFactor.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.ExportToTextFile"></a>

### FatigueSafetyFactor.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.FetchRemoteResults"></a>

### FatigueSafetyFactor.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetChildren"></a>

### FatigueSafetyFactor.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GetParameter"></a>

### FatigueSafetyFactor.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GroupAllSimilarChildren"></a>

### FatigueSafetyFactor.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.GroupSimilarObjects"></a>

### FatigueSafetyFactor.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PromoteToNamedSelection"></a>

### FatigueSafetyFactor.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PropertyByAPIName"></a>

### FatigueSafetyFactor.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.PropertyByName"></a>

### FatigueSafetyFactor.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RemoveParameter"></a>

### FatigueSafetyFactor.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSafetyFactor.RenameBasedOnDefinition"></a>

### FatigueSafetyFactor.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

