# `NewtonRaphsonResidualCharge`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualCharge"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualCharge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NewtonRaphsonResidualCharge.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NewtonRaphsonResidualCharge.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#NewtonRaphsonResidualCharge.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#NewtonRaphsonResidualCharge.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#NewtonRaphsonResidualCharge.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#NewtonRaphsonResidualCharge.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NewtonRaphsonResidualCharge.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#NewtonRaphsonResidualCharge.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#NewtonRaphsonResidualCharge.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NewtonRaphsonResidualCharge.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#NewtonRaphsonResidualCharge.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#NewtonRaphsonResidualCharge.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#NewtonRaphsonResidualCharge.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#NewtonRaphsonResidualCharge.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#NewtonRaphsonResidualCharge.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#NewtonRaphsonResidualCharge.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#NewtonRaphsonResidualCharge.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#NewtonRaphsonResidualCharge.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#NewtonRaphsonResidualCharge.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NewtonRaphsonResidualCharge.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NewtonRaphsonResidualCharge.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NewtonRaphsonResidualCharge.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#NewtonRaphsonResidualCharge.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#NewtonRaphsonResidualCharge.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#NewtonRaphsonResidualCharge.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NewtonRaphsonResidualCharge.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#NewtonRaphsonResidualCharge.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#NewtonRaphsonResidualCharge.Average)                                                     | Gets the Average.                                                      |
| [`By`](#NewtonRaphsonResidualCharge.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#NewtonRaphsonResidualCharge.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#NewtonRaphsonResidualCharge.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#NewtonRaphsonResidualCharge.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#NewtonRaphsonResidualCharge.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#NewtonRaphsonResidualCharge.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#NewtonRaphsonResidualCharge.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#NewtonRaphsonResidualCharge.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#NewtonRaphsonResidualCharge.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#NewtonRaphsonResidualCharge.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#NewtonRaphsonResidualCharge.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#NewtonRaphsonResidualCharge.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#NewtonRaphsonResidualCharge.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#NewtonRaphsonResidualCharge.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#NewtonRaphsonResidualCharge.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#NewtonRaphsonResidualCharge.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#NewtonRaphsonResidualCharge.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#NewtonRaphsonResidualCharge.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#NewtonRaphsonResidualCharge.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#NewtonRaphsonResidualCharge.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#NewtonRaphsonResidualCharge.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#NewtonRaphsonResidualCharge.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#NewtonRaphsonResidualCharge.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#NewtonRaphsonResidualCharge.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#NewtonRaphsonResidualCharge.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#NewtonRaphsonResidualCharge.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#NewtonRaphsonResidualCharge.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#NewtonRaphsonResidualCharge.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#NewtonRaphsonResidualCharge.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#NewtonRaphsonResidualCharge.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#NewtonRaphsonResidualCharge.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#NewtonRaphsonResidualCharge.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#NewtonRaphsonResidualCharge.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#NewtonRaphsonResidualCharge.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#NewtonRaphsonResidualCharge.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#NewtonRaphsonResidualCharge.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#NewtonRaphsonResidualCharge.Path)                                                           | Path property.                                                         |
| [`PlotData`](#NewtonRaphsonResidualCharge.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#NewtonRaphsonResidualCharge.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#NewtonRaphsonResidualCharge.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#NewtonRaphsonResidualCharge.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#NewtonRaphsonResidualCharge.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#NewtonRaphsonResidualCharge.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#NewtonRaphsonResidualCharge.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#NewtonRaphsonResidualCharge.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#NewtonRaphsonResidualCharge.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#NewtonRaphsonResidualCharge.SurfaceCoating)                                                                                                                                    | SurfaceCoating property.                                               |
| [`Time`](#NewtonRaphsonResidualCharge.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#NewtonRaphsonResidualCharge.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#NewtonRaphsonResidualCharge.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#NewtonRaphsonResidualCharge.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#NewtonRaphsonResidualCharge.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#NewtonRaphsonResidualCharge.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#NewtonRaphsonResidualCharge.WaterfallShowTextOnMosaic)                                                                                                              | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="NewtonRaphsonResidualCharge.Average"></a>

### *property* NewtonRaphsonResidualCharge.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.By"></a>

### *property* NewtonRaphsonResidualCharge.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.CalculateTimeHistory"></a>

### *property* NewtonRaphsonResidualCharge.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Children"></a>

### *property* NewtonRaphsonResidualCharge.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.CombinationNumber"></a>

### *property* NewtonRaphsonResidualCharge.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Comments"></a>

### *property* NewtonRaphsonResidualCharge.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.CoordinateSystem"></a>

### *property* NewtonRaphsonResidualCharge.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.CrackFrontNumber"></a>

### *property* NewtonRaphsonResidualCharge.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.DataModelObjectCategory"></a>

### *property* NewtonRaphsonResidualCharge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.DisplayOption"></a>

### *property* NewtonRaphsonResidualCharge.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.DisplayTime"></a>

### *property* NewtonRaphsonResidualCharge.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.DpfEvaluation"></a>

### *property* NewtonRaphsonResidualCharge.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Figures"></a>

### *property* NewtonRaphsonResidualCharge.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.GlobalIDs"></a>

### *property* NewtonRaphsonResidualCharge.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.GraphControlsXAxis"></a>

### *property* NewtonRaphsonResidualCharge.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Identifier"></a>

### *property* NewtonRaphsonResidualCharge.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Images"></a>

### *property* NewtonRaphsonResidualCharge.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.InternalObject"></a>

### *property* NewtonRaphsonResidualCharge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.IsSolved"></a>

### *property* NewtonRaphsonResidualCharge.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.ItemType"></a>

### *property* NewtonRaphsonResidualCharge.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.IterationNumber"></a>

### *property* NewtonRaphsonResidualCharge.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.LoadStep"></a>

### *property* NewtonRaphsonResidualCharge.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.LoadStepForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualCharge.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.LoadStepForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualCharge.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.LoadStepForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualCharge.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.LoadStepForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualCharge.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.LoadStepNumber"></a>

### *property* NewtonRaphsonResidualCharge.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Location"></a>

### *property* NewtonRaphsonResidualCharge.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Maximum"></a>

### *property* NewtonRaphsonResidualCharge.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.MaximumOccursOn"></a>

### *property* NewtonRaphsonResidualCharge.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.MaximumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualCharge.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.MaximumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualCharge.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Minimum"></a>

### *property* NewtonRaphsonResidualCharge.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.MinimumOccursOn"></a>

### *property* NewtonRaphsonResidualCharge.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.MinimumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualCharge.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.MinimumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualCharge.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.NamedSelections"></a>

### *property* NewtonRaphsonResidualCharge.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Path"></a>

### *property* NewtonRaphsonResidualCharge.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.PlotData"></a>

### *property* NewtonRaphsonResidualCharge.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Properties"></a>

### *property* NewtonRaphsonResidualCharge.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.ScopingMethod"></a>

### *property* NewtonRaphsonResidualCharge.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.SetNumber"></a>

### *property* NewtonRaphsonResidualCharge.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.SolutionCombinationDriver"></a>

### *property* NewtonRaphsonResidualCharge.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.SolverComponentIDs"></a>

### *property* NewtonRaphsonResidualCharge.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Substep"></a>

### *property* NewtonRaphsonResidualCharge.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Suppressed"></a>

### *property* NewtonRaphsonResidualCharge.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Surface"></a>

### *property* NewtonRaphsonResidualCharge.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.SurfaceCoating"></a>

### *property* NewtonRaphsonResidualCharge.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Time"></a>

### *property* NewtonRaphsonResidualCharge.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.TimeForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualCharge.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.TimeForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualCharge.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.TimeForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualCharge.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.TimeForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualCharge.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.VisibleProperties"></a>

### *property* NewtonRaphsonResidualCharge.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.WaterfallShowTextOnMosaic"></a>

### *property* NewtonRaphsonResidualCharge.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NewtonRaphsonResidualCharge.Activate"></a>

### NewtonRaphsonResidualCharge.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.AddAlert"></a>

### NewtonRaphsonResidualCharge.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.AddComment"></a>

### NewtonRaphsonResidualCharge.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.AddConvergence"></a>

### NewtonRaphsonResidualCharge.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.AddFigure"></a>

### NewtonRaphsonResidualCharge.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.AddImage"></a>

### NewtonRaphsonResidualCharge.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.ClearGeneratedData"></a>

### NewtonRaphsonResidualCharge.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.CopyTo"></a>

### NewtonRaphsonResidualCharge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.CreateParameter"></a>

### NewtonRaphsonResidualCharge.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.CreateResultsAtAllSets"></a>

### NewtonRaphsonResidualCharge.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Delete"></a>

### NewtonRaphsonResidualCharge.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.Duplicate"></a>

### NewtonRaphsonResidualCharge.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.DuplicateWithoutResults"></a>

### NewtonRaphsonResidualCharge.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.EvaluateAllResults"></a>

### NewtonRaphsonResidualCharge.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.ExportAnimation"></a>

### NewtonRaphsonResidualCharge.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.ExportToTextFile"></a>

### NewtonRaphsonResidualCharge.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.FetchRemoteResults"></a>

### NewtonRaphsonResidualCharge.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.GetChildren"></a>

### NewtonRaphsonResidualCharge.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.GetParameter"></a>

### NewtonRaphsonResidualCharge.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.GroupAllSimilarChildren"></a>

### NewtonRaphsonResidualCharge.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.GroupSimilarObjects"></a>

### NewtonRaphsonResidualCharge.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.PromoteToNamedSelection"></a>

### NewtonRaphsonResidualCharge.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.PropertyByAPIName"></a>

### NewtonRaphsonResidualCharge.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.PropertyByName"></a>

### NewtonRaphsonResidualCharge.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.RemoveParameter"></a>

### NewtonRaphsonResidualCharge.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualCharge.RenameBasedOnDefinition"></a>

### NewtonRaphsonResidualCharge.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

