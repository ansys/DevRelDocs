# `TotalShearForce`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearForce"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalShearForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalShearForce.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#TotalShearForce.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#TotalShearForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#TotalShearForce.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#TotalShearForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalShearForce.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalShearForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalShearForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalShearForce.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#TotalShearForce.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#TotalShearForce.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalShearForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#TotalShearForce.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TotalShearForce.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalShearForce.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#TotalShearForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#TotalShearForce.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#TotalShearForce.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalShearForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalShearForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalShearForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#TotalShearForce.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#TotalShearForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalShearForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalShearForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalShearForce.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#TotalShearForce.Average)                                                     | Gets the Average.                                                      |
| [`BeamResultType`](#TotalShearForce.BeamResultType)                                       | Gets or sets the BeamResultType.                                       |
| [`By`](#TotalShearForce.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#TotalShearForce.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#TotalShearForce.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#TotalShearForce.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#TotalShearForce.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#TotalShearForce.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#TotalShearForce.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#TotalShearForce.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#TotalShearForce.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#TotalShearForce.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#TotalShearForce.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#TotalShearForce.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#TotalShearForce.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#TotalShearForce.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#TotalShearForce.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#TotalShearForce.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#TotalShearForce.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#TotalShearForce.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#TotalShearForce.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#TotalShearForce.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#TotalShearForce.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#TotalShearForce.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#TotalShearForce.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalShearForce.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#TotalShearForce.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#TotalShearForce.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#TotalShearForce.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#TotalShearForce.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#TotalShearForce.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#TotalShearForce.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalShearForce.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalShearForce.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#TotalShearForce.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#TotalShearForce.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalShearForce.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#TotalShearForce.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`NormalOrientation`](#TotalShearForce.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`Path`](#TotalShearForce.Path)                                                           | Path property.                                                         |
| [`PlotData`](#TotalShearForce.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#TotalShearForce.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#TotalShearForce.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalShearForce.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#TotalShearForce.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#TotalShearForce.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TotalShearForce.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#TotalShearForce.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#TotalShearForce.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#TotalShearForce.SurfaceCoating)                                                                                                                                       | SurfaceCoating property.                                               |
| [`Time`](#TotalShearForce.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#TotalShearForce.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#TotalShearForce.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalShearForce.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#TotalShearForce.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#TotalShearForce.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#TotalShearForce.WaterfallShowTextOnMosaic)                                                                                                                 | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="TotalShearForce.Average"></a>

### *property* TotalShearForce.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.BeamResultType"></a>

### *property* TotalShearForce.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.By"></a>

### *property* TotalShearForce.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.CalculateTimeHistory"></a>

### *property* TotalShearForce.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Children"></a>

### *property* TotalShearForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.CombinationNumber"></a>

### *property* TotalShearForce.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Comments"></a>

### *property* TotalShearForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.CoordinateSystem"></a>

### *property* TotalShearForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.CrackFrontNumber"></a>

### *property* TotalShearForce.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.DataModelObjectCategory"></a>

### *property* TotalShearForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.DisplayOption"></a>

### *property* TotalShearForce.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.DisplayTime"></a>

### *property* TotalShearForce.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.DpfEvaluation"></a>

### *property* TotalShearForce.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Figures"></a>

### *property* TotalShearForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.GlobalIDs"></a>

### *property* TotalShearForce.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.GraphControlsXAxis"></a>

### *property* TotalShearForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Identifier"></a>

### *property* TotalShearForce.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Images"></a>

### *property* TotalShearForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.InternalObject"></a>

### *property* TotalShearForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.IsSolved"></a>

### *property* TotalShearForce.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.ItemType"></a>

### *property* TotalShearForce.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.IterationNumber"></a>

### *property* TotalShearForce.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.LoadStep"></a>

### *property* TotalShearForce.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalShearForce.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalShearForce.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalShearForce.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalShearForce.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.LoadStepNumber"></a>

### *property* TotalShearForce.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Location"></a>

### *property* TotalShearForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Maximum"></a>

### *property* TotalShearForce.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.MaximumOccursOn"></a>

### *property* TotalShearForce.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.MaximumOfMaximumOverTime"></a>

### *property* TotalShearForce.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.MaximumOfMinimumOverTime"></a>

### *property* TotalShearForce.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Minimum"></a>

### *property* TotalShearForce.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.MinimumOccursOn"></a>

### *property* TotalShearForce.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.MinimumOfMaximumOverTime"></a>

### *property* TotalShearForce.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.MinimumOfMinimumOverTime"></a>

### *property* TotalShearForce.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.NamedSelections"></a>

### *property* TotalShearForce.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.NormalOrientation"></a>

### *property* TotalShearForce.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Path"></a>

### *property* TotalShearForce.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.PlotData"></a>

### *property* TotalShearForce.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Properties"></a>

### *property* TotalShearForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.ScopingMethod"></a>

### *property* TotalShearForce.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.SetNumber"></a>

### *property* TotalShearForce.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.SolutionCombinationDriver"></a>

### *property* TotalShearForce.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.SolverComponentIDs"></a>

### *property* TotalShearForce.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Substep"></a>

### *property* TotalShearForce.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Suppressed"></a>

### *property* TotalShearForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Surface"></a>

### *property* TotalShearForce.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.SurfaceCoating"></a>

### *property* TotalShearForce.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Time"></a>

### *property* TotalShearForce.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.TimeForMaximumOfMaximumValues"></a>

### *property* TotalShearForce.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.TimeForMaximumOfMinimumValues"></a>

### *property* TotalShearForce.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.TimeForMinimumOfMaximumValues"></a>

### *property* TotalShearForce.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.TimeForMinimumOfMinimumValues"></a>

### *property* TotalShearForce.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.VisibleProperties"></a>

### *property* TotalShearForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.WaterfallShowTextOnMosaic"></a>

### *property* TotalShearForce.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalShearForce.Activate"></a>

### TotalShearForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.AddAlert"></a>

### TotalShearForce.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.AddComment"></a>

### TotalShearForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.AddConvergence"></a>

### TotalShearForce.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.AddFigure"></a>

### TotalShearForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.AddImage"></a>

### TotalShearForce.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.ClearGeneratedData"></a>

### TotalShearForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.CopyTo"></a>

### TotalShearForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.CreateParameter"></a>

### TotalShearForce.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.CreateResultsAtAllSets"></a>

### TotalShearForce.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Delete"></a>

### TotalShearForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.Duplicate"></a>

### TotalShearForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.DuplicateWithoutResults"></a>

### TotalShearForce.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.EvaluateAllResults"></a>

### TotalShearForce.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.ExportAnimation"></a>

### TotalShearForce.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.ExportToTextFile"></a>

### TotalShearForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.FetchRemoteResults"></a>

### TotalShearForce.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.GetChildren"></a>

### TotalShearForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.GetParameter"></a>

### TotalShearForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.GroupAllSimilarChildren"></a>

### TotalShearForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.GroupSimilarObjects"></a>

### TotalShearForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.PromoteToNamedSelection"></a>

### TotalShearForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.PropertyByAPIName"></a>

### TotalShearForce.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.PropertyByName"></a>

### TotalShearForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.RemoveParameter"></a>

### TotalShearForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearForce.RenameBasedOnDefinition"></a>

### TotalShearForce.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

