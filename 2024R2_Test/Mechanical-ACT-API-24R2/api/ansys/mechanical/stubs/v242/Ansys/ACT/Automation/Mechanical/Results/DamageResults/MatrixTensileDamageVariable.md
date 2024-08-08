# `MatrixTensileDamageVariable`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileDamageVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MatrixTensileDamageVariable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MatrixTensileDamageVariable.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MatrixTensileDamageVariable.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MatrixTensileDamageVariable.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MatrixTensileDamageVariable.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MatrixTensileDamageVariable.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MatrixTensileDamageVariable.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MatrixTensileDamageVariable.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MatrixTensileDamageVariable.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MatrixTensileDamageVariable.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MatrixTensileDamageVariable.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MatrixTensileDamageVariable.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MatrixTensileDamageVariable.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MatrixTensileDamageVariable.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MatrixTensileDamageVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MatrixTensileDamageVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MatrixTensileDamageVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MatrixTensileDamageVariable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MatrixTensileDamageVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MatrixTensileDamageVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MatrixTensileDamageVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MatrixTensileDamageVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MatrixTensileDamageVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MatrixTensileDamageVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MatrixTensileDamageVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MatrixTensileDamageVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                              | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#MatrixTensileDamageVariable.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](#MatrixTensileDamageVariable.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#MatrixTensileDamageVariable.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#MatrixTensileDamageVariable.Plies)                                                         | Plies property.                                                        |
| [`DamageResultType`](#MatrixTensileDamageVariable.DamageResultType)                                   | Gets the DamageResultType.                                             |
| [`PlotData`](#MatrixTensileDamageVariable.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#MatrixTensileDamageVariable.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MatrixTensileDamageVariable.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MatrixTensileDamageVariable.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MatrixTensileDamageVariable.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MatrixTensileDamageVariable.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MatrixTensileDamageVariable.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MatrixTensileDamageVariable.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MatrixTensileDamageVariable.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MatrixTensileDamageVariable.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MatrixTensileDamageVariable.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#MatrixTensileDamageVariable.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MatrixTensileDamageVariable.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MatrixTensileDamageVariable.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MatrixTensileDamageVariable.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MatrixTensileDamageVariable.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#MatrixTensileDamageVariable.Path)                                                           | Path property.                                                         |
| [`Surface`](#MatrixTensileDamageVariable.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#MatrixTensileDamageVariable.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#MatrixTensileDamageVariable.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#MatrixTensileDamageVariable.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#MatrixTensileDamageVariable.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MatrixTensileDamageVariable.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MatrixTensileDamageVariable.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MatrixTensileDamageVariable.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MatrixTensileDamageVariable.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MatrixTensileDamageVariable.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MatrixTensileDamageVariable.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MatrixTensileDamageVariable.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MatrixTensileDamageVariable.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MatrixTensileDamageVariable.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#MatrixTensileDamageVariable.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#MatrixTensileDamageVariable.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MatrixTensileDamageVariable.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MatrixTensileDamageVariable.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MatrixTensileDamageVariable.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MatrixTensileDamageVariable.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MatrixTensileDamageVariable.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MatrixTensileDamageVariable.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#MatrixTensileDamageVariable.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#MatrixTensileDamageVariable.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MatrixTensileDamageVariable.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MatrixTensileDamageVariable.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MatrixTensileDamageVariable.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#MatrixTensileDamageVariable.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MatrixTensileDamageVariable.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MatrixTensileDamageVariable.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#MatrixTensileDamageVariable.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#MatrixTensileDamageVariable.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#MatrixTensileDamageVariable.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#MatrixTensileDamageVariable.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                              | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MatrixTensileDamageVariable.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MatrixTensileDamageVariable.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MatrixTensileDamageVariable.InternalObject"></a>

### *property* MatrixTensileDamageVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.DataModelObjectCategory"></a>

### *property* MatrixTensileDamageVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Mode"></a>

### *property* MatrixTensileDamageVariable.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Ply"></a>

### *property* MatrixTensileDamageVariable.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Plies"></a>

### *property* MatrixTensileDamageVariable.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.DamageResultType"></a>

### *property* MatrixTensileDamageVariable.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.PlotData"></a>

### *property* MatrixTensileDamageVariable.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Location"></a>

### *property* MatrixTensileDamageVariable.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.TimeForMinimumOfMinimumValues"></a>

### *property* MatrixTensileDamageVariable.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.TimeForMinimumOfMaximumValues"></a>

### *property* MatrixTensileDamageVariable.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.LoadStepForMinimumOfMinimumValues"></a>

### *property* MatrixTensileDamageVariable.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.LoadStepForMinimumOfMaximumValues"></a>

### *property* MatrixTensileDamageVariable.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.TimeForMaximumOfMinimumValues"></a>

### *property* MatrixTensileDamageVariable.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.TimeForMaximumOfMaximumValues"></a>

### *property* MatrixTensileDamageVariable.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.LoadStepForMaximumOfMinimumValues"></a>

### *property* MatrixTensileDamageVariable.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.LoadStepForMaximumOfMaximumValues"></a>

### *property* MatrixTensileDamageVariable.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.IsSolved"></a>

### *property* MatrixTensileDamageVariable.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.CoordinateSystem"></a>

### *property* MatrixTensileDamageVariable.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.ScopingMethod"></a>

### *property* MatrixTensileDamageVariable.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.SetNumber"></a>

### *property* MatrixTensileDamageVariable.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.CombinationNumber"></a>

### *property* MatrixTensileDamageVariable.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.SolutionCombinationDriver"></a>

### *property* MatrixTensileDamageVariable.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Path"></a>

### *property* MatrixTensileDamageVariable.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Surface"></a>

### *property* MatrixTensileDamageVariable.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.SurfaceCoating"></a>

### *property* MatrixTensileDamageVariable.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.NamedSelections"></a>

### *property* MatrixTensileDamageVariable.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.WaterfallShowTextOnMosaic"></a>

### *property* MatrixTensileDamageVariable.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.CrackFrontNumber"></a>

### *property* MatrixTensileDamageVariable.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.GlobalIDs"></a>

### *property* MatrixTensileDamageVariable.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Identifier"></a>

### *property* MatrixTensileDamageVariable.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.IterationNumber"></a>

### *property* MatrixTensileDamageVariable.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.LoadStep"></a>

### *property* MatrixTensileDamageVariable.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.MaximumOccursOn"></a>

### *property* MatrixTensileDamageVariable.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.MinimumOccursOn"></a>

### *property* MatrixTensileDamageVariable.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.LoadStepNumber"></a>

### *property* MatrixTensileDamageVariable.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.SolverComponentIDs"></a>

### *property* MatrixTensileDamageVariable.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Substep"></a>

### *property* MatrixTensileDamageVariable.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Average"></a>

### *property* MatrixTensileDamageVariable.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Maximum"></a>

### *property* MatrixTensileDamageVariable.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.MaximumOfMaximumOverTime"></a>

### *property* MatrixTensileDamageVariable.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.MaximumOfMinimumOverTime"></a>

### *property* MatrixTensileDamageVariable.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Minimum"></a>

### *property* MatrixTensileDamageVariable.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.MinimumOfMaximumOverTime"></a>

### *property* MatrixTensileDamageVariable.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.MinimumOfMinimumOverTime"></a>

### *property* MatrixTensileDamageVariable.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Time"></a>

### *property* MatrixTensileDamageVariable.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.DisplayTime"></a>

### *property* MatrixTensileDamageVariable.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.GraphControlsXAxis"></a>

### *property* MatrixTensileDamageVariable.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.DisplayOption"></a>

### *property* MatrixTensileDamageVariable.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.DpfEvaluation"></a>

### *property* MatrixTensileDamageVariable.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.By"></a>

### *property* MatrixTensileDamageVariable.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.ItemType"></a>

### *property* MatrixTensileDamageVariable.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.CalculateTimeHistory"></a>

### *property* MatrixTensileDamageVariable.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Suppressed"></a>

### *property* MatrixTensileDamageVariable.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Children"></a>

### *property* MatrixTensileDamageVariable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Comments"></a>

### *property* MatrixTensileDamageVariable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Figures"></a>

### *property* MatrixTensileDamageVariable.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Images"></a>

### *property* MatrixTensileDamageVariable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MatrixTensileDamageVariable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Properties"></a>

### *property* MatrixTensileDamageVariable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.VisibleProperties"></a>

### *property* MatrixTensileDamageVariable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatrixTensileDamageVariable.ClearGeneratedData"></a>

### MatrixTensileDamageVariable.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.EvaluateAllResults"></a>

### MatrixTensileDamageVariable.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.FetchRemoteResults"></a>

### MatrixTensileDamageVariable.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.ExportToTextFile"></a>

### MatrixTensileDamageVariable.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.ExportAnimation"></a>

### MatrixTensileDamageVariable.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.DuplicateWithoutResults"></a>

### MatrixTensileDamageVariable.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.CreateResultsAtAllSets"></a>

### MatrixTensileDamageVariable.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.PromoteToNamedSelection"></a>

### MatrixTensileDamageVariable.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.CreateParameter"></a>

### MatrixTensileDamageVariable.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.AddAlert"></a>

### MatrixTensileDamageVariable.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.AddConvergence"></a>

### MatrixTensileDamageVariable.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.RenameBasedOnDefinition"></a>

### MatrixTensileDamageVariable.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Delete"></a>

### MatrixTensileDamageVariable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.GetChildren"></a>

### MatrixTensileDamageVariable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MatrixTensileDamageVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.AddComment"></a>

### MatrixTensileDamageVariable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.AddFigure"></a>

### MatrixTensileDamageVariable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.AddImage"></a>

### MatrixTensileDamageVariable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Activate"></a>

### MatrixTensileDamageVariable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.CopyTo"></a>

### MatrixTensileDamageVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.Duplicate"></a>

### MatrixTensileDamageVariable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.GroupAllSimilarChildren"></a>

### MatrixTensileDamageVariable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.GroupSimilarObjects"></a>

### MatrixTensileDamageVariable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.PropertyByName"></a>

### MatrixTensileDamageVariable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.PropertyByAPIName"></a>

### MatrixTensileDamageVariable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.GetParameter"></a>

### MatrixTensileDamageVariable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileDamageVariable.RemoveParameter"></a>

### MatrixTensileDamageVariable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

