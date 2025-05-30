# `NewtonRaphsonResidualHeat`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualHeat"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualHeat

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NewtonRaphsonResidualHeat.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#NewtonRaphsonResidualHeat.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#NewtonRaphsonResidualHeat.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#NewtonRaphsonResidualHeat.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#NewtonRaphsonResidualHeat.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#NewtonRaphsonResidualHeat.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#NewtonRaphsonResidualHeat.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#NewtonRaphsonResidualHeat.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#NewtonRaphsonResidualHeat.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#NewtonRaphsonResidualHeat.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#NewtonRaphsonResidualHeat.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#NewtonRaphsonResidualHeat.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#NewtonRaphsonResidualHeat.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NewtonRaphsonResidualHeat.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NewtonRaphsonResidualHeat.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NewtonRaphsonResidualHeat.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NewtonRaphsonResidualHeat.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NewtonRaphsonResidualHeat.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NewtonRaphsonResidualHeat.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NewtonRaphsonResidualHeat.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NewtonRaphsonResidualHeat.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NewtonRaphsonResidualHeat.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NewtonRaphsonResidualHeat.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NewtonRaphsonResidualHeat.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#NewtonRaphsonResidualHeat.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NewtonRaphsonResidualHeat.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#NewtonRaphsonResidualHeat.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#NewtonRaphsonResidualHeat.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#NewtonRaphsonResidualHeat.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#NewtonRaphsonResidualHeat.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#NewtonRaphsonResidualHeat.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#NewtonRaphsonResidualHeat.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#NewtonRaphsonResidualHeat.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#NewtonRaphsonResidualHeat.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#NewtonRaphsonResidualHeat.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#NewtonRaphsonResidualHeat.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#NewtonRaphsonResidualHeat.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#NewtonRaphsonResidualHeat.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#NewtonRaphsonResidualHeat.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#NewtonRaphsonResidualHeat.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#NewtonRaphsonResidualHeat.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#NewtonRaphsonResidualHeat.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#NewtonRaphsonResidualHeat.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#NewtonRaphsonResidualHeat.Path)                                                           | Path property.                                                         |
| [`Surface`](#NewtonRaphsonResidualHeat.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](#NewtonRaphsonResidualHeat.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#NewtonRaphsonResidualHeat.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#NewtonRaphsonResidualHeat.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#NewtonRaphsonResidualHeat.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#NewtonRaphsonResidualHeat.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#NewtonRaphsonResidualHeat.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#NewtonRaphsonResidualHeat.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#NewtonRaphsonResidualHeat.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#NewtonRaphsonResidualHeat.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#NewtonRaphsonResidualHeat.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#NewtonRaphsonResidualHeat.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#NewtonRaphsonResidualHeat.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#NewtonRaphsonResidualHeat.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#NewtonRaphsonResidualHeat.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#NewtonRaphsonResidualHeat.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#NewtonRaphsonResidualHeat.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#NewtonRaphsonResidualHeat.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#NewtonRaphsonResidualHeat.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#NewtonRaphsonResidualHeat.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#NewtonRaphsonResidualHeat.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#NewtonRaphsonResidualHeat.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#NewtonRaphsonResidualHeat.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#NewtonRaphsonResidualHeat.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#NewtonRaphsonResidualHeat.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#NewtonRaphsonResidualHeat.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#NewtonRaphsonResidualHeat.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#NewtonRaphsonResidualHeat.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#NewtonRaphsonResidualHeat.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#NewtonRaphsonResidualHeat.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#NewtonRaphsonResidualHeat.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#NewtonRaphsonResidualHeat.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#NewtonRaphsonResidualHeat.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#NewtonRaphsonResidualHeat.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#NewtonRaphsonResidualHeat.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="NewtonRaphsonResidualHeat.InternalObject"></a>

### *property* NewtonRaphsonResidualHeat.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DataModelObjectCategory"></a>

### *property* NewtonRaphsonResidualHeat.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.PlotData"></a>

### *property* NewtonRaphsonResidualHeat.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Location"></a>

### *property* NewtonRaphsonResidualHeat.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.TimeForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualHeat.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.TimeForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualHeat.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.TimeForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualHeat.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.TimeForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualHeat.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.IsSolved"></a>

### *property* NewtonRaphsonResidualHeat.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CoordinateSystem"></a>

### *property* NewtonRaphsonResidualHeat.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ScopingMethod"></a>

### *property* NewtonRaphsonResidualHeat.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.SetNumber"></a>

### *property* NewtonRaphsonResidualHeat.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CombinationNumber"></a>

### *property* NewtonRaphsonResidualHeat.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.SolutionCombinationDriver"></a>

### *property* NewtonRaphsonResidualHeat.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Path"></a>

### *property* NewtonRaphsonResidualHeat.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Surface"></a>

### *property* NewtonRaphsonResidualHeat.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.NamedSelections"></a>

### *property* NewtonRaphsonResidualHeat.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.WaterfallPanelShowTextOnMosaic"></a>

### *property* NewtonRaphsonResidualHeat.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CrackFrontNumber"></a>

### *property* NewtonRaphsonResidualHeat.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GlobalIDs"></a>

### *property* NewtonRaphsonResidualHeat.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Identifier"></a>

### *property* NewtonRaphsonResidualHeat.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.IterationNumber"></a>

### *property* NewtonRaphsonResidualHeat.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStep"></a>

### *property* NewtonRaphsonResidualHeat.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MaximumOccursOn"></a>

### *property* NewtonRaphsonResidualHeat.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MinimumOccursOn"></a>

### *property* NewtonRaphsonResidualHeat.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepNumber"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.SolverComponentIDs"></a>

### *property* NewtonRaphsonResidualHeat.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Substep"></a>

### *property* NewtonRaphsonResidualHeat.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Average"></a>

### *property* NewtonRaphsonResidualHeat.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Maximum"></a>

### *property* NewtonRaphsonResidualHeat.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MaximumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualHeat.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MaximumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualHeat.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Minimum"></a>

### *property* NewtonRaphsonResidualHeat.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MinimumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualHeat.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MinimumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualHeat.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Time"></a>

### *property* NewtonRaphsonResidualHeat.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DisplayTime"></a>

### *property* NewtonRaphsonResidualHeat.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GraphControlsXAxis"></a>

### *property* NewtonRaphsonResidualHeat.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DisplayOption"></a>

### *property* NewtonRaphsonResidualHeat.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DpfEvaluation"></a>

### *property* NewtonRaphsonResidualHeat.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.By"></a>

### *property* NewtonRaphsonResidualHeat.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ItemType"></a>

### *property* NewtonRaphsonResidualHeat.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CalculateTimeHistory"></a>

### *property* NewtonRaphsonResidualHeat.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Suppressed"></a>

### *property* NewtonRaphsonResidualHeat.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Children"></a>

### *property* NewtonRaphsonResidualHeat.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Comments"></a>

### *property* NewtonRaphsonResidualHeat.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Figures"></a>

### *property* NewtonRaphsonResidualHeat.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Images"></a>

### *property* NewtonRaphsonResidualHeat.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NewtonRaphsonResidualHeat.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Properties"></a>

### *property* NewtonRaphsonResidualHeat.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.VisibleProperties"></a>

### *property* NewtonRaphsonResidualHeat.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NewtonRaphsonResidualHeat.ClearGeneratedData"></a>

### NewtonRaphsonResidualHeat.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.EvaluateAllResults"></a>

### NewtonRaphsonResidualHeat.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.FetchRemoteResults"></a>

### NewtonRaphsonResidualHeat.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ExportToTextFile"></a>

### NewtonRaphsonResidualHeat.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ExportAnimation"></a>

### NewtonRaphsonResidualHeat.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DuplicateWithoutResults"></a>

### NewtonRaphsonResidualHeat.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CreateResultsAtAllSets"></a>

### NewtonRaphsonResidualHeat.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.PromoteToNamedSelection"></a>

### NewtonRaphsonResidualHeat.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CreateParameter"></a>

### NewtonRaphsonResidualHeat.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddAlert"></a>

### NewtonRaphsonResidualHeat.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddConvergence"></a>

### NewtonRaphsonResidualHeat.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.RenameBasedOnDefinition"></a>

### NewtonRaphsonResidualHeat.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Delete"></a>

### NewtonRaphsonResidualHeat.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GetChildren"></a>

### NewtonRaphsonResidualHeat.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NewtonRaphsonResidualHeat.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddComment"></a>

### NewtonRaphsonResidualHeat.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddFigure"></a>

### NewtonRaphsonResidualHeat.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddImage"></a>

### NewtonRaphsonResidualHeat.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Activate"></a>

### NewtonRaphsonResidualHeat.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CopyTo"></a>

### NewtonRaphsonResidualHeat.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Duplicate"></a>

### NewtonRaphsonResidualHeat.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GroupAllSimilarChildren"></a>

### NewtonRaphsonResidualHeat.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GroupSimilarObjects"></a>

### NewtonRaphsonResidualHeat.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.PropertyByName"></a>

### NewtonRaphsonResidualHeat.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.PropertyByAPIName"></a>

### NewtonRaphsonResidualHeat.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GetParameter"></a>

### NewtonRaphsonResidualHeat.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.RemoveParameter"></a>

### NewtonRaphsonResidualHeat.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

