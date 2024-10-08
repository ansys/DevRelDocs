# `FatigueDamage`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamage"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueDamage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FatigueDamage.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#FatigueDamage.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#FatigueDamage.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#FatigueDamage.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#FatigueDamage.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueDamage.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FatigueDamage.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FatigueDamage.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FatigueDamage.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#FatigueDamage.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#FatigueDamage.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FatigueDamage.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#FatigueDamage.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FatigueDamage.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FatigueDamage.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#FatigueDamage.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#FatigueDamage.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#FatigueDamage.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FatigueDamage.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FatigueDamage.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueDamage.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FatigueDamage.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FatigueDamage.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FatigueDamage.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FatigueDamage.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FatigueDamage.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#FatigueDamage.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#FatigueDamage.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#FatigueDamage.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#FatigueDamage.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#FatigueDamage.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#FatigueDamage.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#FatigueDamage.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#FatigueDamage.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#FatigueDamage.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#FatigueDamage.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DesignLife`](#FatigueDamage.DesignLife)                                               | Gets or sets the DesignLife.                                           |
| [`DisplayOption`](#FatigueDamage.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#FatigueDamage.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#FatigueDamage.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#FatigueDamage.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#FatigueDamage.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#FatigueDamage.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#FatigueDamage.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#FatigueDamage.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#FatigueDamage.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#FatigueDamage.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#FatigueDamage.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#FatigueDamage.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueDamage.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueDamage.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueDamage.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueDamage.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueDamage.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#FatigueDamage.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#FatigueDamage.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#FatigueDamage.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#FatigueDamage.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#FatigueDamage.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueDamage.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Method`](#FatigueDamage.Method)                                                       | Gets the Method.                                                       |
| [`Minimum`](#FatigueDamage.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#FatigueDamage.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#FatigueDamage.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueDamage.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#FatigueDamage.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#FatigueDamage.Path)                                                           | Path property.                                                         |
| [`PlotData`](#FatigueDamage.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#FatigueDamage.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#FatigueDamage.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueDamage.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#FatigueDamage.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#FatigueDamage.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueDamage.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#FatigueDamage.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#FatigueDamage.Surface)                                                     | Surface property.                                                      |
| [`Time`](#FatigueDamage.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#FatigueDamage.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#FatigueDamage.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueDamage.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#FatigueDamage.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#FatigueDamage.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#FatigueDamage.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="FatigueDamage.Average"></a>

### *property* FatigueDamage.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.AverageAcrossBodies"></a>

### *property* FatigueDamage.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.By"></a>

### *property* FatigueDamage.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.CalculateTimeHistory"></a>

### *property* FatigueDamage.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Children"></a>

### *property* FatigueDamage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.CombinationNumber"></a>

### *property* FatigueDamage.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Comments"></a>

### *property* FatigueDamage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.CoordinateSystem"></a>

### *property* FatigueDamage.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.CrackFrontNumber"></a>

### *property* FatigueDamage.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.DataModelObjectCategory"></a>

### *property* FatigueDamage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.DesignLife"></a>

### *property* FatigueDamage.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.DisplayOption"></a>

### *property* FatigueDamage.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.DisplayTime"></a>

### *property* FatigueDamage.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.DpfEvaluation"></a>

### *property* FatigueDamage.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Figures"></a>

### *property* FatigueDamage.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.GlobalIDs"></a>

### *property* FatigueDamage.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.GraphControlsXAxis"></a>

### *property* FatigueDamage.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Identifier"></a>

### *property* FatigueDamage.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Images"></a>

### *property* FatigueDamage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.InternalObject"></a>

### *property* FatigueDamage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.IsSolved"></a>

### *property* FatigueDamage.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.ItemType"></a>

### *property* FatigueDamage.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.IterationNumber"></a>

### *property* FatigueDamage.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.LoadStep"></a>

### *property* FatigueDamage.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueDamage.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueDamage.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueDamage.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueDamage.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.LoadStepNumber"></a>

### *property* FatigueDamage.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Location"></a>

### *property* FatigueDamage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Maximum"></a>

### *property* FatigueDamage.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.MaximumOccursOn"></a>

### *property* FatigueDamage.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.MaximumOfMaximumOverTime"></a>

### *property* FatigueDamage.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.MaximumOfMinimumOverTime"></a>

### *property* FatigueDamage.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Method"></a>

### *property* FatigueDamage.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Minimum"></a>

### *property* FatigueDamage.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.MinimumOccursOn"></a>

### *property* FatigueDamage.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.MinimumOfMaximumOverTime"></a>

### *property* FatigueDamage.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.MinimumOfMinimumOverTime"></a>

### *property* FatigueDamage.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.NamedSelections"></a>

### *property* FatigueDamage.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Path"></a>

### *property* FatigueDamage.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.PlotData"></a>

### *property* FatigueDamage.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Properties"></a>

### *property* FatigueDamage.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.ScopingMethod"></a>

### *property* FatigueDamage.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.SetNumber"></a>

### *property* FatigueDamage.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.SolutionCombinationDriver"></a>

### *property* FatigueDamage.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.SolverComponentIDs"></a>

### *property* FatigueDamage.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Substep"></a>

### *property* FatigueDamage.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Suppressed"></a>

### *property* FatigueDamage.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Surface"></a>

### *property* FatigueDamage.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Time"></a>

### *property* FatigueDamage.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueDamage.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueDamage.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueDamage.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueDamage.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.VisibleProperties"></a>

### *property* FatigueDamage.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.WaterfallPanelShowTextOnMosaic"></a>

### *property* FatigueDamage.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueDamage.Activate"></a>

### FatigueDamage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.AddAlert"></a>

### FatigueDamage.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.AddComment"></a>

### FatigueDamage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.AddConvergence"></a>

### FatigueDamage.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.AddFigure"></a>

### FatigueDamage.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.AddImage"></a>

### FatigueDamage.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.ClearGeneratedData"></a>

### FatigueDamage.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.CopyTo"></a>

### FatigueDamage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.CreateParameter"></a>

### FatigueDamage.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.CreateResultsAtAllSets"></a>

### FatigueDamage.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Delete"></a>

### FatigueDamage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.Duplicate"></a>

### FatigueDamage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.DuplicateWithoutResults"></a>

### FatigueDamage.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.EvaluateAllResults"></a>

### FatigueDamage.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.ExportAnimation"></a>

### FatigueDamage.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.ExportToTextFile"></a>

### FatigueDamage.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.FetchRemoteResults"></a>

### FatigueDamage.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.GetChildren"></a>

### FatigueDamage.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.GetParameter"></a>

### FatigueDamage.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.GroupAllSimilarChildren"></a>

### FatigueDamage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.GroupSimilarObjects"></a>

### FatigueDamage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.PromoteToNamedSelection"></a>

### FatigueDamage.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.PropertyByAPIName"></a>

### FatigueDamage.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.PropertyByName"></a>

### FatigueDamage.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.RemoveParameter"></a>

### FatigueDamage.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamage.RenameBasedOnDefinition"></a>

### FatigueDamage.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

