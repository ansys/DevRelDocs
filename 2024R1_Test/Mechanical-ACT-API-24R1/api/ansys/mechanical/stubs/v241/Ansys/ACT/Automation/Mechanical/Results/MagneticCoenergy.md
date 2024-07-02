# `MagneticCoenergy`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.MagneticCoenergy"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.MagneticCoenergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MagneticCoenergy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MagneticCoenergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MagneticCoenergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MagneticCoenergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MagneticCoenergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MagneticCoenergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MagneticCoenergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MagneticCoenergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MagneticCoenergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MagneticCoenergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MagneticCoenergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MagneticCoenergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MagneticCoenergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MagneticCoenergy.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MagneticCoenergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MagneticCoenergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MagneticCoenergy.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MagneticCoenergy.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MagneticCoenergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MagneticCoenergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MagneticCoenergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MagneticCoenergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MagneticCoenergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MagneticCoenergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MagneticCoenergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MagneticCoenergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                   | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#MagneticCoenergy.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#MagneticCoenergy.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#MagneticCoenergy.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MagneticCoenergy.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MagneticCoenergy.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MagneticCoenergy.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MagneticCoenergy.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MagneticCoenergy.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MagneticCoenergy.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MagneticCoenergy.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MagneticCoenergy.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MagneticCoenergy.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#MagneticCoenergy.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MagneticCoenergy.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MagneticCoenergy.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MagneticCoenergy.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MagneticCoenergy.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#MagneticCoenergy.Path)                                                           | Path property.                                                         |
| [`Surface`](#MagneticCoenergy.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](#MagneticCoenergy.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MagneticCoenergy.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MagneticCoenergy.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MagneticCoenergy.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MagneticCoenergy.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MagneticCoenergy.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MagneticCoenergy.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MagneticCoenergy.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MagneticCoenergy.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MagneticCoenergy.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MagneticCoenergy.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MagneticCoenergy.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#MagneticCoenergy.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#MagneticCoenergy.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MagneticCoenergy.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MagneticCoenergy.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MagneticCoenergy.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MagneticCoenergy.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MagneticCoenergy.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MagneticCoenergy.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#MagneticCoenergy.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#MagneticCoenergy.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MagneticCoenergy.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MagneticCoenergy.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MagneticCoenergy.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#MagneticCoenergy.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MagneticCoenergy.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MagneticCoenergy.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#MagneticCoenergy.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#MagneticCoenergy.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#MagneticCoenergy.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#MagneticCoenergy.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MagneticCoenergy.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MagneticCoenergy.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MagneticCoenergy.InternalObject"></a>

### *property* MagneticCoenergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DataModelObjectCategory"></a>

### *property* MagneticCoenergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.PlotData"></a>

### *property* MagneticCoenergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Location"></a>

### *property* MagneticCoenergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.TimeForMinimumOfMinimumValues"></a>

### *property* MagneticCoenergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.TimeForMinimumOfMaximumValues"></a>

### *property* MagneticCoenergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepForMinimumOfMinimumValues"></a>

### *property* MagneticCoenergy.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepForMinimumOfMaximumValues"></a>

### *property* MagneticCoenergy.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.TimeForMaximumOfMinimumValues"></a>

### *property* MagneticCoenergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.TimeForMaximumOfMaximumValues"></a>

### *property* MagneticCoenergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepForMaximumOfMinimumValues"></a>

### *property* MagneticCoenergy.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepForMaximumOfMaximumValues"></a>

### *property* MagneticCoenergy.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.IsSolved"></a>

### *property* MagneticCoenergy.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CoordinateSystem"></a>

### *property* MagneticCoenergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.ScopingMethod"></a>

### *property* MagneticCoenergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.SetNumber"></a>

### *property* MagneticCoenergy.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CombinationNumber"></a>

### *property* MagneticCoenergy.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.SolutionCombinationDriver"></a>

### *property* MagneticCoenergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Path"></a>

### *property* MagneticCoenergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Surface"></a>

### *property* MagneticCoenergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.NamedSelections"></a>

### *property* MagneticCoenergy.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.WaterfallPanelShowTextOnMosaic"></a>

### *property* MagneticCoenergy.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CrackFrontNumber"></a>

### *property* MagneticCoenergy.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GlobalIDs"></a>

### *property* MagneticCoenergy.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Identifier"></a>

### *property* MagneticCoenergy.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.IterationNumber"></a>

### *property* MagneticCoenergy.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStep"></a>

### *property* MagneticCoenergy.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MaximumOccursOn"></a>

### *property* MagneticCoenergy.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MinimumOccursOn"></a>

### *property* MagneticCoenergy.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepNumber"></a>

### *property* MagneticCoenergy.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.SolverComponentIDs"></a>

### *property* MagneticCoenergy.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Substep"></a>

### *property* MagneticCoenergy.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Average"></a>

### *property* MagneticCoenergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Maximum"></a>

### *property* MagneticCoenergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MaximumOfMaximumOverTime"></a>

### *property* MagneticCoenergy.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MaximumOfMinimumOverTime"></a>

### *property* MagneticCoenergy.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Minimum"></a>

### *property* MagneticCoenergy.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MinimumOfMaximumOverTime"></a>

### *property* MagneticCoenergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MinimumOfMinimumOverTime"></a>

### *property* MagneticCoenergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Time"></a>

### *property* MagneticCoenergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DisplayTime"></a>

### *property* MagneticCoenergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GraphControlsXAxis"></a>

### *property* MagneticCoenergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DisplayOption"></a>

### *property* MagneticCoenergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DpfEvaluation"></a>

### *property* MagneticCoenergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.By"></a>

### *property* MagneticCoenergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.ItemType"></a>

### *property* MagneticCoenergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CalculateTimeHistory"></a>

### *property* MagneticCoenergy.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Suppressed"></a>

### *property* MagneticCoenergy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Children"></a>

### *property* MagneticCoenergy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Comments"></a>

### *property* MagneticCoenergy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Figures"></a>

### *property* MagneticCoenergy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Images"></a>

### *property* MagneticCoenergy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MagneticCoenergy.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Properties"></a>

### *property* MagneticCoenergy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.VisibleProperties"></a>

### *property* MagneticCoenergy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MagneticCoenergy.ClearGeneratedData"></a>

### MagneticCoenergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.EvaluateAllResults"></a>

### MagneticCoenergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.FetchRemoteResults"></a>

### MagneticCoenergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.ExportToTextFile"></a>

### MagneticCoenergy.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.ExportAnimation"></a>

### MagneticCoenergy.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DuplicateWithoutResults"></a>

### MagneticCoenergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CreateResultsAtAllSets"></a>

### MagneticCoenergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.PromoteToNamedSelection"></a>

### MagneticCoenergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CreateParameter"></a>

### MagneticCoenergy.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddAlert"></a>

### MagneticCoenergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddConvergence"></a>

### MagneticCoenergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.RenameBasedOnDefinition"></a>

### MagneticCoenergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Delete"></a>

### MagneticCoenergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GetChildren"></a>

### MagneticCoenergy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MagneticCoenergy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddComment"></a>

### MagneticCoenergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddFigure"></a>

### MagneticCoenergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddImage"></a>

### MagneticCoenergy.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Activate"></a>

### MagneticCoenergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CopyTo"></a>

### MagneticCoenergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Duplicate"></a>

### MagneticCoenergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GroupAllSimilarChildren"></a>

### MagneticCoenergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GroupSimilarObjects"></a>

### MagneticCoenergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.PropertyByName"></a>

### MagneticCoenergy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.PropertyByAPIName"></a>

### MagneticCoenergy.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GetParameter"></a>

### MagneticCoenergy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.RemoveParameter"></a>

### MagneticCoenergy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

