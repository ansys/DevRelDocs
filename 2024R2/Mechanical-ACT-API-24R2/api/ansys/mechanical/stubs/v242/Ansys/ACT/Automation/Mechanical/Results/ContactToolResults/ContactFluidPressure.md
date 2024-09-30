# `ContactFluidPressure`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactFluidPressure"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactFluidPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactFluidPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactFluidPressure.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ContactFluidPressure.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ContactFluidPressure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ContactFluidPressure.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ContactFluidPressure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactFluidPressure.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactFluidPressure.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactFluidPressure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactFluidPressure.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ContactFluidPressure.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ContactFluidPressure.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactFluidPressure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ContactFluidPressure.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ContactFluidPressure.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactFluidPressure.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ContactFluidPressure.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ContactFluidPressure.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ContactFluidPressure.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactFluidPressure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactFluidPressure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactFluidPressure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ContactFluidPressure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ContactFluidPressure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactFluidPressure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactFluidPressure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactFluidPressure.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#ContactFluidPressure.Average)                                                     | Gets the Average.                                                      |
| [`By`](#ContactFluidPressure.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#ContactFluidPressure.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#ContactFluidPressure.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#ContactFluidPressure.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#ContactFluidPressure.Comments)                                                   | Gets the list of associated comments.                                  |
| [`ContactResultType`](#ContactFluidPressure.ContactResultType)                                 | Gets or sets the ContactResultType.                                    |
| [`CoordinateSystem`](#ContactFluidPressure.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#ContactFluidPressure.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#ContactFluidPressure.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#ContactFluidPressure.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#ContactFluidPressure.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#ContactFluidPressure.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#ContactFluidPressure.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#ContactFluidPressure.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#ContactFluidPressure.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#ContactFluidPressure.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#ContactFluidPressure.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#ContactFluidPressure.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#ContactFluidPressure.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#ContactFluidPressure.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#ContactFluidPressure.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#ContactFluidPressure.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#ContactFluidPressure.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#ContactFluidPressure.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ContactFluidPressure.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#ContactFluidPressure.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#ContactFluidPressure.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#ContactFluidPressure.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#ContactFluidPressure.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#ContactFluidPressure.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#ContactFluidPressure.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ContactFluidPressure.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ContactFluidPressure.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#ContactFluidPressure.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#ContactFluidPressure.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ContactFluidPressure.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#ContactFluidPressure.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#ContactFluidPressure.Path)                                                           | Path property.                                                         |
| [`PlotData`](#ContactFluidPressure.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#ContactFluidPressure.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#ContactFluidPressure.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ContactFluidPressure.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#ContactFluidPressure.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#ContactFluidPressure.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ContactFluidPressure.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#ContactFluidPressure.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#ContactFluidPressure.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#ContactFluidPressure.SurfaceCoating)                                                                                                                                                   | SurfaceCoating property.                                               |
| [`Time`](#ContactFluidPressure.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#ContactFluidPressure.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#ContactFluidPressure.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ContactFluidPressure.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#ContactFluidPressure.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#ContactFluidPressure.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#ContactFluidPressure.WaterfallShowTextOnMosaic)                                                                                                                             | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="ContactFluidPressure.Average"></a>

### *property* ContactFluidPressure.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.By"></a>

### *property* ContactFluidPressure.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.CalculateTimeHistory"></a>

### *property* ContactFluidPressure.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Children"></a>

### *property* ContactFluidPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.CombinationNumber"></a>

### *property* ContactFluidPressure.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Comments"></a>

### *property* ContactFluidPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.ContactResultType"></a>

### *property* ContactFluidPressure.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.CoordinateSystem"></a>

### *property* ContactFluidPressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.CrackFrontNumber"></a>

### *property* ContactFluidPressure.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.DataModelObjectCategory"></a>

### *property* ContactFluidPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.DisplayOption"></a>

### *property* ContactFluidPressure.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.DisplayTime"></a>

### *property* ContactFluidPressure.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.DpfEvaluation"></a>

### *property* ContactFluidPressure.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Figures"></a>

### *property* ContactFluidPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.GlobalIDs"></a>

### *property* ContactFluidPressure.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.GraphControlsXAxis"></a>

### *property* ContactFluidPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Identifier"></a>

### *property* ContactFluidPressure.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Images"></a>

### *property* ContactFluidPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.InternalObject"></a>

### *property* ContactFluidPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.IsSolved"></a>

### *property* ContactFluidPressure.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.ItemType"></a>

### *property* ContactFluidPressure.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.IterationNumber"></a>

### *property* ContactFluidPressure.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.LoadStep"></a>

### *property* ContactFluidPressure.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.LoadStepForMaximumOfMaximumValues"></a>

### *property* ContactFluidPressure.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.LoadStepForMaximumOfMinimumValues"></a>

### *property* ContactFluidPressure.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.LoadStepForMinimumOfMaximumValues"></a>

### *property* ContactFluidPressure.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.LoadStepForMinimumOfMinimumValues"></a>

### *property* ContactFluidPressure.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.LoadStepNumber"></a>

### *property* ContactFluidPressure.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Location"></a>

### *property* ContactFluidPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Maximum"></a>

### *property* ContactFluidPressure.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.MaximumOccursOn"></a>

### *property* ContactFluidPressure.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.MaximumOfMaximumOverTime"></a>

### *property* ContactFluidPressure.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.MaximumOfMinimumOverTime"></a>

### *property* ContactFluidPressure.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Minimum"></a>

### *property* ContactFluidPressure.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.MinimumOccursOn"></a>

### *property* ContactFluidPressure.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.MinimumOfMaximumOverTime"></a>

### *property* ContactFluidPressure.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.MinimumOfMinimumOverTime"></a>

### *property* ContactFluidPressure.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.NamedSelections"></a>

### *property* ContactFluidPressure.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Path"></a>

### *property* ContactFluidPressure.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.PlotData"></a>

### *property* ContactFluidPressure.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Properties"></a>

### *property* ContactFluidPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.ScopingMethod"></a>

### *property* ContactFluidPressure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.SetNumber"></a>

### *property* ContactFluidPressure.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.SolutionCombinationDriver"></a>

### *property* ContactFluidPressure.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.SolverComponentIDs"></a>

### *property* ContactFluidPressure.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Substep"></a>

### *property* ContactFluidPressure.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Suppressed"></a>

### *property* ContactFluidPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Surface"></a>

### *property* ContactFluidPressure.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.SurfaceCoating"></a>

### *property* ContactFluidPressure.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Time"></a>

### *property* ContactFluidPressure.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.TimeForMaximumOfMaximumValues"></a>

### *property* ContactFluidPressure.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.TimeForMaximumOfMinimumValues"></a>

### *property* ContactFluidPressure.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.TimeForMinimumOfMaximumValues"></a>

### *property* ContactFluidPressure.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.TimeForMinimumOfMinimumValues"></a>

### *property* ContactFluidPressure.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.VisibleProperties"></a>

### *property* ContactFluidPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.WaterfallShowTextOnMosaic"></a>

### *property* ContactFluidPressure.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactFluidPressure.Activate"></a>

### ContactFluidPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.AddAlert"></a>

### ContactFluidPressure.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.AddComment"></a>

### ContactFluidPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.AddConvergence"></a>

### ContactFluidPressure.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.AddFigure"></a>

### ContactFluidPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.AddImage"></a>

### ContactFluidPressure.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.ClearGeneratedData"></a>

### ContactFluidPressure.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.CopyTo"></a>

### ContactFluidPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.CreateParameter"></a>

### ContactFluidPressure.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.CreateResultsAtAllSets"></a>

### ContactFluidPressure.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Delete"></a>

### ContactFluidPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.Duplicate"></a>

### ContactFluidPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.DuplicateWithoutResults"></a>

### ContactFluidPressure.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.EvaluateAllResults"></a>

### ContactFluidPressure.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.ExportAnimation"></a>

### ContactFluidPressure.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.ExportToTextFile"></a>

### ContactFluidPressure.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.FetchRemoteResults"></a>

### ContactFluidPressure.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.GetChildren"></a>

### ContactFluidPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.GetParameter"></a>

### ContactFluidPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.GroupAllSimilarChildren"></a>

### ContactFluidPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.GroupSimilarObjects"></a>

### ContactFluidPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.PromoteToNamedSelection"></a>

### ContactFluidPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.PropertyByAPIName"></a>

### ContactFluidPressure.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.PropertyByName"></a>

### ContactFluidPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.RemoveParameter"></a>

### ContactFluidPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFluidPressure.RenameBasedOnDefinition"></a>

### ContactFluidPressure.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

