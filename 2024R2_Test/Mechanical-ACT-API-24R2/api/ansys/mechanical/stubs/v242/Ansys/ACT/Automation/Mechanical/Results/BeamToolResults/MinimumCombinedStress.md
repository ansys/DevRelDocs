# `MinimumCombinedStress`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults.MinimumCombinedStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MinimumCombinedStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MinimumCombinedStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MinimumCombinedStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MinimumCombinedStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MinimumCombinedStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MinimumCombinedStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MinimumCombinedStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MinimumCombinedStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MinimumCombinedStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MinimumCombinedStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MinimumCombinedStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MinimumCombinedStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MinimumCombinedStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MinimumCombinedStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MinimumCombinedStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MinimumCombinedStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MinimumCombinedStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MinimumCombinedStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MinimumCombinedStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MinimumCombinedStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MinimumCombinedStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MinimumCombinedStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MinimumCombinedStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MinimumCombinedStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MinimumCombinedStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MinimumCombinedStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                        | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#MinimumCombinedStress.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`BeamToolStressResultType`](#MinimumCombinedStress.BeamToolStressResultType)                   | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#MinimumCombinedStress.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#MinimumCombinedStress.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MinimumCombinedStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MinimumCombinedStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MinimumCombinedStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MinimumCombinedStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MinimumCombinedStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MinimumCombinedStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MinimumCombinedStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MinimumCombinedStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MinimumCombinedStress.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#MinimumCombinedStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MinimumCombinedStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MinimumCombinedStress.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MinimumCombinedStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MinimumCombinedStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#MinimumCombinedStress.Path)                                                           | Path property.                                                         |
| [`Surface`](#MinimumCombinedStress.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#MinimumCombinedStress.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#MinimumCombinedStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#MinimumCombinedStress.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#MinimumCombinedStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MinimumCombinedStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MinimumCombinedStress.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MinimumCombinedStress.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MinimumCombinedStress.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MinimumCombinedStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MinimumCombinedStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MinimumCombinedStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MinimumCombinedStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MinimumCombinedStress.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#MinimumCombinedStress.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#MinimumCombinedStress.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MinimumCombinedStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MinimumCombinedStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MinimumCombinedStress.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MinimumCombinedStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MinimumCombinedStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MinimumCombinedStress.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#MinimumCombinedStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#MinimumCombinedStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MinimumCombinedStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MinimumCombinedStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MinimumCombinedStress.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#MinimumCombinedStress.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MinimumCombinedStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MinimumCombinedStress.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#MinimumCombinedStress.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#MinimumCombinedStress.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#MinimumCombinedStress.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#MinimumCombinedStress.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                        | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MinimumCombinedStress.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MinimumCombinedStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MinimumCombinedStress.InternalObject"></a>

### *property* MinimumCombinedStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.DataModelObjectCategory"></a>

### *property* MinimumCombinedStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.BeamToolStressResultType"></a>

### *property* MinimumCombinedStress.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/BeamToolStressResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.PlotData"></a>

### *property* MinimumCombinedStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Location"></a>

### *property* MinimumCombinedStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.TimeForMinimumOfMinimumValues"></a>

### *property* MinimumCombinedStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.TimeForMinimumOfMaximumValues"></a>

### *property* MinimumCombinedStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* MinimumCombinedStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* MinimumCombinedStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.TimeForMaximumOfMinimumValues"></a>

### *property* MinimumCombinedStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.TimeForMaximumOfMaximumValues"></a>

### *property* MinimumCombinedStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* MinimumCombinedStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* MinimumCombinedStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.IsSolved"></a>

### *property* MinimumCombinedStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.CoordinateSystem"></a>

### *property* MinimumCombinedStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.ScopingMethod"></a>

### *property* MinimumCombinedStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.SetNumber"></a>

### *property* MinimumCombinedStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.CombinationNumber"></a>

### *property* MinimumCombinedStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.SolutionCombinationDriver"></a>

### *property* MinimumCombinedStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Path"></a>

### *property* MinimumCombinedStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Surface"></a>

### *property* MinimumCombinedStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.SurfaceCoating"></a>

### *property* MinimumCombinedStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.NamedSelections"></a>

### *property* MinimumCombinedStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.WaterfallShowTextOnMosaic"></a>

### *property* MinimumCombinedStress.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.CrackFrontNumber"></a>

### *property* MinimumCombinedStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.GlobalIDs"></a>

### *property* MinimumCombinedStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Identifier"></a>

### *property* MinimumCombinedStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.IterationNumber"></a>

### *property* MinimumCombinedStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.LoadStep"></a>

### *property* MinimumCombinedStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.MaximumOccursOn"></a>

### *property* MinimumCombinedStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.MinimumOccursOn"></a>

### *property* MinimumCombinedStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.LoadStepNumber"></a>

### *property* MinimumCombinedStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.SolverComponentIDs"></a>

### *property* MinimumCombinedStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Substep"></a>

### *property* MinimumCombinedStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Average"></a>

### *property* MinimumCombinedStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Maximum"></a>

### *property* MinimumCombinedStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.MaximumOfMaximumOverTime"></a>

### *property* MinimumCombinedStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.MaximumOfMinimumOverTime"></a>

### *property* MinimumCombinedStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Minimum"></a>

### *property* MinimumCombinedStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.MinimumOfMaximumOverTime"></a>

### *property* MinimumCombinedStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.MinimumOfMinimumOverTime"></a>

### *property* MinimumCombinedStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Time"></a>

### *property* MinimumCombinedStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.DisplayTime"></a>

### *property* MinimumCombinedStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.GraphControlsXAxis"></a>

### *property* MinimumCombinedStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.DisplayOption"></a>

### *property* MinimumCombinedStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.DpfEvaluation"></a>

### *property* MinimumCombinedStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.By"></a>

### *property* MinimumCombinedStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.ItemType"></a>

### *property* MinimumCombinedStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.CalculateTimeHistory"></a>

### *property* MinimumCombinedStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Suppressed"></a>

### *property* MinimumCombinedStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Children"></a>

### *property* MinimumCombinedStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Comments"></a>

### *property* MinimumCombinedStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Figures"></a>

### *property* MinimumCombinedStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Images"></a>

### *property* MinimumCombinedStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MinimumCombinedStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Properties"></a>

### *property* MinimumCombinedStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.VisibleProperties"></a>

### *property* MinimumCombinedStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MinimumCombinedStress.ClearGeneratedData"></a>

### MinimumCombinedStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.EvaluateAllResults"></a>

### MinimumCombinedStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.FetchRemoteResults"></a>

### MinimumCombinedStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.ExportToTextFile"></a>

### MinimumCombinedStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.ExportAnimation"></a>

### MinimumCombinedStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.DuplicateWithoutResults"></a>

### MinimumCombinedStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.CreateResultsAtAllSets"></a>

### MinimumCombinedStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.PromoteToNamedSelection"></a>

### MinimumCombinedStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.CreateParameter"></a>

### MinimumCombinedStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.AddAlert"></a>

### MinimumCombinedStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.AddConvergence"></a>

### MinimumCombinedStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.RenameBasedOnDefinition"></a>

### MinimumCombinedStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Delete"></a>

### MinimumCombinedStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.GetChildren"></a>

### MinimumCombinedStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MinimumCombinedStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.AddComment"></a>

### MinimumCombinedStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.AddFigure"></a>

### MinimumCombinedStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.AddImage"></a>

### MinimumCombinedStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Activate"></a>

### MinimumCombinedStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.CopyTo"></a>

### MinimumCombinedStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.Duplicate"></a>

### MinimumCombinedStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.GroupAllSimilarChildren"></a>

### MinimumCombinedStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.GroupSimilarObjects"></a>

### MinimumCombinedStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.PropertyByName"></a>

### MinimumCombinedStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.PropertyByAPIName"></a>

### MinimumCombinedStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.GetParameter"></a>

### MinimumCombinedStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumCombinedStress.RemoveParameter"></a>

### MinimumCombinedStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

