# `DirectionalTorsionalMoment`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalTorsionalMoment"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalTorsionalMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectionalTorsionalMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalTorsionalMoment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalTorsionalMoment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalTorsionalMoment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalTorsionalMoment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalTorsionalMoment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalTorsionalMoment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalTorsionalMoment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalTorsionalMoment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalTorsionalMoment.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalTorsionalMoment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalTorsionalMoment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalTorsionalMoment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalTorsionalMoment.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalTorsionalMoment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalTorsionalMoment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalTorsionalMoment.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalTorsionalMoment.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalTorsionalMoment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalTorsionalMoment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalTorsionalMoment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalTorsionalMoment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalTorsionalMoment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalTorsionalMoment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalTorsionalMoment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalTorsionalMoment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#DirectionalTorsionalMoment.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#DirectionalTorsionalMoment.BeamResultType)                                       | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#DirectionalTorsionalMoment.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#DirectionalTorsionalMoment.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalTorsionalMoment.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalTorsionalMoment.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalTorsionalMoment.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalTorsionalMoment.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalTorsionalMoment.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalTorsionalMoment.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalTorsionalMoment.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalTorsionalMoment.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalTorsionalMoment.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#DirectionalTorsionalMoment.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalTorsionalMoment.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalTorsionalMoment.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalTorsionalMoment.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalTorsionalMoment.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#DirectionalTorsionalMoment.Path)                                                           | Path property.                                                         |
| [`Surface`](#DirectionalTorsionalMoment.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](#DirectionalTorsionalMoment.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalTorsionalMoment.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalTorsionalMoment.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalTorsionalMoment.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalTorsionalMoment.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalTorsionalMoment.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalTorsionalMoment.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalTorsionalMoment.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalTorsionalMoment.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalTorsionalMoment.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalTorsionalMoment.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalTorsionalMoment.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#DirectionalTorsionalMoment.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#DirectionalTorsionalMoment.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalTorsionalMoment.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalTorsionalMoment.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalTorsionalMoment.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalTorsionalMoment.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalTorsionalMoment.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalTorsionalMoment.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalTorsionalMoment.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#DirectionalTorsionalMoment.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalTorsionalMoment.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalTorsionalMoment.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalTorsionalMoment.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalTorsionalMoment.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalTorsionalMoment.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalTorsionalMoment.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalTorsionalMoment.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#DirectionalTorsionalMoment.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalTorsionalMoment.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalTorsionalMoment.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalTorsionalMoment.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalTorsionalMoment.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalTorsionalMoment.InternalObject"></a>

### *property* DirectionalTorsionalMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DataModelObjectCategory"></a>

### *property* DirectionalTorsionalMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.BeamResultType"></a>

### *property* DirectionalTorsionalMoment.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PlotData"></a>

### *property* DirectionalTorsionalMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Location"></a>

### *property* DirectionalTorsionalMoment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalTorsionalMoment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalTorsionalMoment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalTorsionalMoment.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalTorsionalMoment.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalTorsionalMoment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalTorsionalMoment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalTorsionalMoment.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalTorsionalMoment.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.IsSolved"></a>

### *property* DirectionalTorsionalMoment.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CoordinateSystem"></a>

### *property* DirectionalTorsionalMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ScopingMethod"></a>

### *property* DirectionalTorsionalMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.SetNumber"></a>

### *property* DirectionalTorsionalMoment.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CombinationNumber"></a>

### *property* DirectionalTorsionalMoment.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.SolutionCombinationDriver"></a>

### *property* DirectionalTorsionalMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Path"></a>

### *property* DirectionalTorsionalMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Surface"></a>

### *property* DirectionalTorsionalMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.NamedSelections"></a>

### *property* DirectionalTorsionalMoment.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalTorsionalMoment.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CrackFrontNumber"></a>

### *property* DirectionalTorsionalMoment.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GlobalIDs"></a>

### *property* DirectionalTorsionalMoment.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Identifier"></a>

### *property* DirectionalTorsionalMoment.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.IterationNumber"></a>

### *property* DirectionalTorsionalMoment.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStep"></a>

### *property* DirectionalTorsionalMoment.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MaximumOccursOn"></a>

### *property* DirectionalTorsionalMoment.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MinimumOccursOn"></a>

### *property* DirectionalTorsionalMoment.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepNumber"></a>

### *property* DirectionalTorsionalMoment.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.SolverComponentIDs"></a>

### *property* DirectionalTorsionalMoment.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Substep"></a>

### *property* DirectionalTorsionalMoment.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Average"></a>

### *property* DirectionalTorsionalMoment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Maximum"></a>

### *property* DirectionalTorsionalMoment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MaximumOfMaximumOverTime"></a>

### *property* DirectionalTorsionalMoment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MaximumOfMinimumOverTime"></a>

### *property* DirectionalTorsionalMoment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Minimum"></a>

### *property* DirectionalTorsionalMoment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MinimumOfMaximumOverTime"></a>

### *property* DirectionalTorsionalMoment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MinimumOfMinimumOverTime"></a>

### *property* DirectionalTorsionalMoment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Time"></a>

### *property* DirectionalTorsionalMoment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DisplayTime"></a>

### *property* DirectionalTorsionalMoment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GraphControlsXAxis"></a>

### *property* DirectionalTorsionalMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DisplayOption"></a>

### *property* DirectionalTorsionalMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DpfEvaluation"></a>

### *property* DirectionalTorsionalMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.By"></a>

### *property* DirectionalTorsionalMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ItemType"></a>

### *property* DirectionalTorsionalMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CalculateTimeHistory"></a>

### *property* DirectionalTorsionalMoment.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Suppressed"></a>

### *property* DirectionalTorsionalMoment.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Children"></a>

### *property* DirectionalTorsionalMoment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Comments"></a>

### *property* DirectionalTorsionalMoment.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Figures"></a>

### *property* DirectionalTorsionalMoment.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Images"></a>

### *property* DirectionalTorsionalMoment.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalTorsionalMoment.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Properties"></a>

### *property* DirectionalTorsionalMoment.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.VisibleProperties"></a>

### *property* DirectionalTorsionalMoment.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalTorsionalMoment.ClearGeneratedData"></a>

### DirectionalTorsionalMoment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.EvaluateAllResults"></a>

### DirectionalTorsionalMoment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.FetchRemoteResults"></a>

### DirectionalTorsionalMoment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ExportToTextFile"></a>

### DirectionalTorsionalMoment.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ExportAnimation"></a>

### DirectionalTorsionalMoment.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DuplicateWithoutResults"></a>

### DirectionalTorsionalMoment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CreateResultsAtAllSets"></a>

### DirectionalTorsionalMoment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PromoteToNamedSelection"></a>

### DirectionalTorsionalMoment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CreateParameter"></a>

### DirectionalTorsionalMoment.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddAlert"></a>

### DirectionalTorsionalMoment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddConvergence"></a>

### DirectionalTorsionalMoment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RenameBasedOnDefinition"></a>

### DirectionalTorsionalMoment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Delete"></a>

### DirectionalTorsionalMoment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetChildren"></a>

### DirectionalTorsionalMoment.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalTorsionalMoment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddComment"></a>

### DirectionalTorsionalMoment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddFigure"></a>

### DirectionalTorsionalMoment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddImage"></a>

### DirectionalTorsionalMoment.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Activate"></a>

### DirectionalTorsionalMoment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CopyTo"></a>

### DirectionalTorsionalMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Duplicate"></a>

### DirectionalTorsionalMoment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GroupAllSimilarChildren"></a>

### DirectionalTorsionalMoment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GroupSimilarObjects"></a>

### DirectionalTorsionalMoment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PropertyByName"></a>

### DirectionalTorsionalMoment.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PropertyByAPIName"></a>

### DirectionalTorsionalMoment.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetParameter"></a>

### DirectionalTorsionalMoment.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RemoveParameter"></a>

### DirectionalTorsionalMoment.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

