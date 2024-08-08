# `FatigueToolResult`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueToolResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FatigueToolResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FatigueToolResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FatigueToolResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FatigueToolResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FatigueToolResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FatigueToolResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FatigueToolResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FatigueToolResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FatigueToolResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FatigueToolResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FatigueToolResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FatigueToolResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueToolResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueToolResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FatigueToolResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueToolResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueToolResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueToolResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueToolResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueToolResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueToolResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueToolResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueToolResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FatigueToolResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueToolResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Method`](#FatigueToolResult.Method)                                                       | Gets the Method.                                                       |
| [`DesignLife`](#FatigueToolResult.DesignLife)                                               | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#FatigueToolResult.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](#FatigueToolResult.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`PlotData`](#FatigueToolResult.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#FatigueToolResult.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FatigueToolResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueToolResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueToolResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueToolResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FatigueToolResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FatigueToolResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueToolResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueToolResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FatigueToolResult.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#FatigueToolResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FatigueToolResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueToolResult.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FatigueToolResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FatigueToolResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#FatigueToolResult.Path)                                                           | Path property.                                                         |
| [`Surface`](#FatigueToolResult.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#FatigueToolResult.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#FatigueToolResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#FatigueToolResult.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#FatigueToolResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FatigueToolResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FatigueToolResult.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FatigueToolResult.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueToolResult.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FatigueToolResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FatigueToolResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FatigueToolResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FatigueToolResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueToolResult.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#FatigueToolResult.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#FatigueToolResult.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FatigueToolResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueToolResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FatigueToolResult.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FatigueToolResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueToolResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FatigueToolResult.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#FatigueToolResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#FatigueToolResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FatigueToolResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FatigueToolResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FatigueToolResult.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#FatigueToolResult.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FatigueToolResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FatigueToolResult.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#FatigueToolResult.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#FatigueToolResult.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#FatigueToolResult.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#FatigueToolResult.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FatigueToolResult.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FatigueToolResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="FatigueToolResult.InternalObject"></a>

### *property* FatigueToolResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Method"></a>

### *property* FatigueToolResult.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.DesignLife"></a>

### *property* FatigueToolResult.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.AverageAcrossBodies"></a>

### *property* FatigueToolResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.DataModelObjectCategory"></a>

### *property* FatigueToolResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.PlotData"></a>

### *property* FatigueToolResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Location"></a>

### *property* FatigueToolResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueToolResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueToolResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueToolResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueToolResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueToolResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueToolResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueToolResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueToolResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.IsSolved"></a>

### *property* FatigueToolResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.CoordinateSystem"></a>

### *property* FatigueToolResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.ScopingMethod"></a>

### *property* FatigueToolResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.SetNumber"></a>

### *property* FatigueToolResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.CombinationNumber"></a>

### *property* FatigueToolResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.SolutionCombinationDriver"></a>

### *property* FatigueToolResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Path"></a>

### *property* FatigueToolResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Surface"></a>

### *property* FatigueToolResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.SurfaceCoating"></a>

### *property* FatigueToolResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.NamedSelections"></a>

### *property* FatigueToolResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.WaterfallShowTextOnMosaic"></a>

### *property* FatigueToolResult.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.CrackFrontNumber"></a>

### *property* FatigueToolResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.GlobalIDs"></a>

### *property* FatigueToolResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Identifier"></a>

### *property* FatigueToolResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.IterationNumber"></a>

### *property* FatigueToolResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.LoadStep"></a>

### *property* FatigueToolResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.MaximumOccursOn"></a>

### *property* FatigueToolResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.MinimumOccursOn"></a>

### *property* FatigueToolResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.LoadStepNumber"></a>

### *property* FatigueToolResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.SolverComponentIDs"></a>

### *property* FatigueToolResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Substep"></a>

### *property* FatigueToolResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Average"></a>

### *property* FatigueToolResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Maximum"></a>

### *property* FatigueToolResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.MaximumOfMaximumOverTime"></a>

### *property* FatigueToolResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.MaximumOfMinimumOverTime"></a>

### *property* FatigueToolResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Minimum"></a>

### *property* FatigueToolResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.MinimumOfMaximumOverTime"></a>

### *property* FatigueToolResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.MinimumOfMinimumOverTime"></a>

### *property* FatigueToolResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Time"></a>

### *property* FatigueToolResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.DisplayTime"></a>

### *property* FatigueToolResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.GraphControlsXAxis"></a>

### *property* FatigueToolResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.DisplayOption"></a>

### *property* FatigueToolResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.DpfEvaluation"></a>

### *property* FatigueToolResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.By"></a>

### *property* FatigueToolResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.ItemType"></a>

### *property* FatigueToolResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.CalculateTimeHistory"></a>

### *property* FatigueToolResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Suppressed"></a>

### *property* FatigueToolResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Children"></a>

### *property* FatigueToolResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Comments"></a>

### *property* FatigueToolResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Figures"></a>

### *property* FatigueToolResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Images"></a>

### *property* FatigueToolResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueToolResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Properties"></a>

### *property* FatigueToolResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.VisibleProperties"></a>

### *property* FatigueToolResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueToolResult.ClearGeneratedData"></a>

### FatigueToolResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.EvaluateAllResults"></a>

### FatigueToolResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.FetchRemoteResults"></a>

### FatigueToolResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.ExportToTextFile"></a>

### FatigueToolResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.ExportAnimation"></a>

### FatigueToolResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.DuplicateWithoutResults"></a>

### FatigueToolResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.CreateResultsAtAllSets"></a>

### FatigueToolResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.PromoteToNamedSelection"></a>

### FatigueToolResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.CreateParameter"></a>

### FatigueToolResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.AddAlert"></a>

### FatigueToolResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.AddConvergence"></a>

### FatigueToolResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.RenameBasedOnDefinition"></a>

### FatigueToolResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Delete"></a>

### FatigueToolResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.GetChildren"></a>

### FatigueToolResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueToolResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.AddComment"></a>

### FatigueToolResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.AddFigure"></a>

### FatigueToolResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.AddImage"></a>

### FatigueToolResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Activate"></a>

### FatigueToolResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.CopyTo"></a>

### FatigueToolResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.Duplicate"></a>

### FatigueToolResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.GroupAllSimilarChildren"></a>

### FatigueToolResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.GroupSimilarObjects"></a>

### FatigueToolResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.PropertyByName"></a>

### FatigueToolResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.PropertyByAPIName"></a>

### FatigueToolResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.GetParameter"></a>

### FatigueToolResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueToolResult.RemoveParameter"></a>

### FatigueToolResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

