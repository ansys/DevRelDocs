# `NewtonRaphsonResidualForce`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NewtonRaphsonResidualForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#NewtonRaphsonResidualForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#NewtonRaphsonResidualForce.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#NewtonRaphsonResidualForce.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#NewtonRaphsonResidualForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#NewtonRaphsonResidualForce.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#NewtonRaphsonResidualForce.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#NewtonRaphsonResidualForce.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#NewtonRaphsonResidualForce.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#NewtonRaphsonResidualForce.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#NewtonRaphsonResidualForce.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#NewtonRaphsonResidualForce.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#NewtonRaphsonResidualForce.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NewtonRaphsonResidualForce.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NewtonRaphsonResidualForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NewtonRaphsonResidualForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NewtonRaphsonResidualForce.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NewtonRaphsonResidualForce.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NewtonRaphsonResidualForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NewtonRaphsonResidualForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NewtonRaphsonResidualForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NewtonRaphsonResidualForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NewtonRaphsonResidualForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NewtonRaphsonResidualForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#NewtonRaphsonResidualForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NewtonRaphsonResidualForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#NewtonRaphsonResidualForce.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`PlotData`](#NewtonRaphsonResidualForce.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#NewtonRaphsonResidualForce.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#NewtonRaphsonResidualForce.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#NewtonRaphsonResidualForce.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#NewtonRaphsonResidualForce.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#NewtonRaphsonResidualForce.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#NewtonRaphsonResidualForce.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#NewtonRaphsonResidualForce.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#NewtonRaphsonResidualForce.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#NewtonRaphsonResidualForce.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#NewtonRaphsonResidualForce.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#NewtonRaphsonResidualForce.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#NewtonRaphsonResidualForce.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#NewtonRaphsonResidualForce.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#NewtonRaphsonResidualForce.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#NewtonRaphsonResidualForce.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#NewtonRaphsonResidualForce.Path)                                                           | Path property.                                                         |
| [`Surface`](#NewtonRaphsonResidualForce.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#NewtonRaphsonResidualForce.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#NewtonRaphsonResidualForce.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#NewtonRaphsonResidualForce.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#NewtonRaphsonResidualForce.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#NewtonRaphsonResidualForce.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#NewtonRaphsonResidualForce.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#NewtonRaphsonResidualForce.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#NewtonRaphsonResidualForce.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#NewtonRaphsonResidualForce.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#NewtonRaphsonResidualForce.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#NewtonRaphsonResidualForce.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#NewtonRaphsonResidualForce.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#NewtonRaphsonResidualForce.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#NewtonRaphsonResidualForce.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#NewtonRaphsonResidualForce.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#NewtonRaphsonResidualForce.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#NewtonRaphsonResidualForce.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#NewtonRaphsonResidualForce.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#NewtonRaphsonResidualForce.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#NewtonRaphsonResidualForce.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#NewtonRaphsonResidualForce.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#NewtonRaphsonResidualForce.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#NewtonRaphsonResidualForce.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#NewtonRaphsonResidualForce.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#NewtonRaphsonResidualForce.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#NewtonRaphsonResidualForce.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#NewtonRaphsonResidualForce.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#NewtonRaphsonResidualForce.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#NewtonRaphsonResidualForce.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#NewtonRaphsonResidualForce.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#NewtonRaphsonResidualForce.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#NewtonRaphsonResidualForce.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#NewtonRaphsonResidualForce.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#NewtonRaphsonResidualForce.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#NewtonRaphsonResidualForce.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="NewtonRaphsonResidualForce.InternalObject"></a>

### *property* NewtonRaphsonResidualForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.DataModelObjectCategory"></a>

### *property* NewtonRaphsonResidualForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.PlotData"></a>

### *property* NewtonRaphsonResidualForce.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Location"></a>

### *property* NewtonRaphsonResidualForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.TimeForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualForce.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.TimeForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualForce.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.LoadStepForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualForce.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.LoadStepForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualForce.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.TimeForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualForce.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.TimeForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualForce.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.LoadStepForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualForce.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.LoadStepForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualForce.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.IsSolved"></a>

### *property* NewtonRaphsonResidualForce.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.CoordinateSystem"></a>

### *property* NewtonRaphsonResidualForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.ScopingMethod"></a>

### *property* NewtonRaphsonResidualForce.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.SetNumber"></a>

### *property* NewtonRaphsonResidualForce.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.CombinationNumber"></a>

### *property* NewtonRaphsonResidualForce.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.SolutionCombinationDriver"></a>

### *property* NewtonRaphsonResidualForce.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Path"></a>

### *property* NewtonRaphsonResidualForce.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Surface"></a>

### *property* NewtonRaphsonResidualForce.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.SurfaceCoating"></a>

### *property* NewtonRaphsonResidualForce.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.NamedSelections"></a>

### *property* NewtonRaphsonResidualForce.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.WaterfallShowTextOnMosaic"></a>

### *property* NewtonRaphsonResidualForce.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.CrackFrontNumber"></a>

### *property* NewtonRaphsonResidualForce.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.GlobalIDs"></a>

### *property* NewtonRaphsonResidualForce.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Identifier"></a>

### *property* NewtonRaphsonResidualForce.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.IterationNumber"></a>

### *property* NewtonRaphsonResidualForce.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.LoadStep"></a>

### *property* NewtonRaphsonResidualForce.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.MaximumOccursOn"></a>

### *property* NewtonRaphsonResidualForce.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.MinimumOccursOn"></a>

### *property* NewtonRaphsonResidualForce.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.LoadStepNumber"></a>

### *property* NewtonRaphsonResidualForce.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.SolverComponentIDs"></a>

### *property* NewtonRaphsonResidualForce.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Substep"></a>

### *property* NewtonRaphsonResidualForce.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Average"></a>

### *property* NewtonRaphsonResidualForce.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Maximum"></a>

### *property* NewtonRaphsonResidualForce.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.MaximumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualForce.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.MaximumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualForce.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Minimum"></a>

### *property* NewtonRaphsonResidualForce.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.MinimumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualForce.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.MinimumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualForce.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Time"></a>

### *property* NewtonRaphsonResidualForce.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.DisplayTime"></a>

### *property* NewtonRaphsonResidualForce.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.GraphControlsXAxis"></a>

### *property* NewtonRaphsonResidualForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.DisplayOption"></a>

### *property* NewtonRaphsonResidualForce.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.DpfEvaluation"></a>

### *property* NewtonRaphsonResidualForce.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.By"></a>

### *property* NewtonRaphsonResidualForce.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.ItemType"></a>

### *property* NewtonRaphsonResidualForce.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.CalculateTimeHistory"></a>

### *property* NewtonRaphsonResidualForce.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Suppressed"></a>

### *property* NewtonRaphsonResidualForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Children"></a>

### *property* NewtonRaphsonResidualForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Comments"></a>

### *property* NewtonRaphsonResidualForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Figures"></a>

### *property* NewtonRaphsonResidualForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Images"></a>

### *property* NewtonRaphsonResidualForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NewtonRaphsonResidualForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Properties"></a>

### *property* NewtonRaphsonResidualForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.VisibleProperties"></a>

### *property* NewtonRaphsonResidualForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NewtonRaphsonResidualForce.ClearGeneratedData"></a>

### NewtonRaphsonResidualForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.EvaluateAllResults"></a>

### NewtonRaphsonResidualForce.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.FetchRemoteResults"></a>

### NewtonRaphsonResidualForce.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.ExportToTextFile"></a>

### NewtonRaphsonResidualForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.ExportAnimation"></a>

### NewtonRaphsonResidualForce.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.DuplicateWithoutResults"></a>

### NewtonRaphsonResidualForce.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.CreateResultsAtAllSets"></a>

### NewtonRaphsonResidualForce.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.PromoteToNamedSelection"></a>

### NewtonRaphsonResidualForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.CreateParameter"></a>

### NewtonRaphsonResidualForce.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.AddAlert"></a>

### NewtonRaphsonResidualForce.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.AddConvergence"></a>

### NewtonRaphsonResidualForce.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.RenameBasedOnDefinition"></a>

### NewtonRaphsonResidualForce.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Delete"></a>

### NewtonRaphsonResidualForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.GetChildren"></a>

### NewtonRaphsonResidualForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NewtonRaphsonResidualForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.AddComment"></a>

### NewtonRaphsonResidualForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.AddFigure"></a>

### NewtonRaphsonResidualForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.AddImage"></a>

### NewtonRaphsonResidualForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Activate"></a>

### NewtonRaphsonResidualForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.CopyTo"></a>

### NewtonRaphsonResidualForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.Duplicate"></a>

### NewtonRaphsonResidualForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.GroupAllSimilarChildren"></a>

### NewtonRaphsonResidualForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.GroupSimilarObjects"></a>

### NewtonRaphsonResidualForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.PropertyByName"></a>

### NewtonRaphsonResidualForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.PropertyByAPIName"></a>

### NewtonRaphsonResidualForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.GetParameter"></a>

### NewtonRaphsonResidualForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualForce.RemoveParameter"></a>

### NewtonRaphsonResidualForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

