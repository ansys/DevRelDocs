# `VectorDeformation`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.VectorDeformation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DeformationResults.VectorDeformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VectorDeformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VectorDeformation.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#VectorDeformation.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#VectorDeformation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#VectorDeformation.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#VectorDeformation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VectorDeformation.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#VectorDeformation.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#VectorDeformation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VectorDeformation.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#VectorDeformation.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#VectorDeformation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VectorDeformation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#VectorDeformation.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#VectorDeformation.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#VectorDeformation.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#VectorDeformation.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#VectorDeformation.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#VectorDeformation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VectorDeformation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VectorDeformation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VectorDeformation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#VectorDeformation.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#VectorDeformation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VectorDeformation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VectorDeformation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VectorDeformation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Average`](#VectorDeformation.Average)                                                     | Gets the Average.                                                      |
| [`By`](#VectorDeformation.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#VectorDeformation.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#VectorDeformation.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#VectorDeformation.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#VectorDeformation.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#VectorDeformation.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#VectorDeformation.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`DataModelObjectCategory`](#VectorDeformation.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#VectorDeformation.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#VectorDeformation.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#VectorDeformation.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`Figures`](#VectorDeformation.Figures)                                                     | Gets the list of associated figures.                                   |
| [`GlobalIDs`](#VectorDeformation.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#VectorDeformation.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`Identifier`](#VectorDeformation.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#VectorDeformation.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#VectorDeformation.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#VectorDeformation.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#VectorDeformation.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#VectorDeformation.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#VectorDeformation.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#VectorDeformation.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#VectorDeformation.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#VectorDeformation.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#VectorDeformation.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#VectorDeformation.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#VectorDeformation.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#VectorDeformation.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#VectorDeformation.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#VectorDeformation.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#VectorDeformation.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#VectorDeformation.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#VectorDeformation.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#VectorDeformation.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#VectorDeformation.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`NamedSelections`](#VectorDeformation.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#VectorDeformation.Path)                                                           | Path property.                                                         |
| [`PlotData`](#VectorDeformation.PlotData)                                                   | Gets the result table.                                                 |
| [`Properties`](#VectorDeformation.Properties)                                               | Gets the list of properties for this object.                           |
| [`ScopingMethod`](#VectorDeformation.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#VectorDeformation.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#VectorDeformation.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#VectorDeformation.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#VectorDeformation.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#VectorDeformation.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#VectorDeformation.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#VectorDeformation.SurfaceCoating)                                                                                                                                                | SurfaceCoating property.                                               |
| [`Time`](#VectorDeformation.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#VectorDeformation.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#VectorDeformation.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#VectorDeformation.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#VectorDeformation.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#VectorDeformation.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#VectorDeformation.WaterfallShowTextOnMosaic)                                                                                                                          | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="VectorDeformation.Average"></a>

### *property* VectorDeformation.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.By"></a>

### *property* VectorDeformation.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.CalculateTimeHistory"></a>

### *property* VectorDeformation.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Children"></a>

### *property* VectorDeformation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.CombinationNumber"></a>

### *property* VectorDeformation.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Comments"></a>

### *property* VectorDeformation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.CoordinateSystem"></a>

### *property* VectorDeformation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.CrackFrontNumber"></a>

### *property* VectorDeformation.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.DataModelObjectCategory"></a>

### *property* VectorDeformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.DisplayOption"></a>

### *property* VectorDeformation.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.DisplayTime"></a>

### *property* VectorDeformation.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.DpfEvaluation"></a>

### *property* VectorDeformation.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Figures"></a>

### *property* VectorDeformation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.GlobalIDs"></a>

### *property* VectorDeformation.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.GraphControlsXAxis"></a>

### *property* VectorDeformation.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Identifier"></a>

### *property* VectorDeformation.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Images"></a>

### *property* VectorDeformation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.InternalObject"></a>

### *property* VectorDeformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.IsSolved"></a>

### *property* VectorDeformation.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.ItemType"></a>

### *property* VectorDeformation.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.IterationNumber"></a>

### *property* VectorDeformation.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.LoadStep"></a>

### *property* VectorDeformation.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.LoadStepForMaximumOfMaximumValues"></a>

### *property* VectorDeformation.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.LoadStepForMaximumOfMinimumValues"></a>

### *property* VectorDeformation.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.LoadStepForMinimumOfMaximumValues"></a>

### *property* VectorDeformation.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.LoadStepForMinimumOfMinimumValues"></a>

### *property* VectorDeformation.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.LoadStepNumber"></a>

### *property* VectorDeformation.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Location"></a>

### *property* VectorDeformation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Maximum"></a>

### *property* VectorDeformation.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.MaximumOccursOn"></a>

### *property* VectorDeformation.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.MaximumOfMaximumOverTime"></a>

### *property* VectorDeformation.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.MaximumOfMinimumOverTime"></a>

### *property* VectorDeformation.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Minimum"></a>

### *property* VectorDeformation.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.MinimumOccursOn"></a>

### *property* VectorDeformation.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.MinimumOfMaximumOverTime"></a>

### *property* VectorDeformation.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.MinimumOfMinimumOverTime"></a>

### *property* VectorDeformation.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.NamedSelections"></a>

### *property* VectorDeformation.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Path"></a>

### *property* VectorDeformation.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.PlotData"></a>

### *property* VectorDeformation.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Properties"></a>

### *property* VectorDeformation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.ScopingMethod"></a>

### *property* VectorDeformation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.SetNumber"></a>

### *property* VectorDeformation.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.SolutionCombinationDriver"></a>

### *property* VectorDeformation.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.SolverComponentIDs"></a>

### *property* VectorDeformation.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Substep"></a>

### *property* VectorDeformation.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Suppressed"></a>

### *property* VectorDeformation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Surface"></a>

### *property* VectorDeformation.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.SurfaceCoating"></a>

### *property* VectorDeformation.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Time"></a>

### *property* VectorDeformation.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.TimeForMaximumOfMaximumValues"></a>

### *property* VectorDeformation.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.TimeForMaximumOfMinimumValues"></a>

### *property* VectorDeformation.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.TimeForMinimumOfMaximumValues"></a>

### *property* VectorDeformation.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.TimeForMinimumOfMinimumValues"></a>

### *property* VectorDeformation.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.VisibleProperties"></a>

### *property* VectorDeformation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.WaterfallShowTextOnMosaic"></a>

### *property* VectorDeformation.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VectorDeformation.Activate"></a>

### VectorDeformation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.AddAlert"></a>

### VectorDeformation.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.AddComment"></a>

### VectorDeformation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.AddConvergence"></a>

### VectorDeformation.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.AddFigure"></a>

### VectorDeformation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.AddImage"></a>

### VectorDeformation.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.ClearGeneratedData"></a>

### VectorDeformation.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.CopyTo"></a>

### VectorDeformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.CreateParameter"></a>

### VectorDeformation.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.CreateResultsAtAllSets"></a>

### VectorDeformation.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Delete"></a>

### VectorDeformation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.Duplicate"></a>

### VectorDeformation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.DuplicateWithoutResults"></a>

### VectorDeformation.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.EvaluateAllResults"></a>

### VectorDeformation.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.ExportAnimation"></a>

### VectorDeformation.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.ExportToTextFile"></a>

### VectorDeformation.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.FetchRemoteResults"></a>

### VectorDeformation.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.GetChildren"></a>

### VectorDeformation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.GetParameter"></a>

### VectorDeformation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.GroupAllSimilarChildren"></a>

### VectorDeformation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.GroupSimilarObjects"></a>

### VectorDeformation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.PromoteToNamedSelection"></a>

### VectorDeformation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.PropertyByAPIName"></a>

### VectorDeformation.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.PropertyByName"></a>

### VectorDeformation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.RemoveParameter"></a>

### VectorDeformation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorDeformation.RenameBasedOnDefinition"></a>

### VectorDeformation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

