# `FiberCompressiveFailureCriterion`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveFailureCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FiberCompressiveFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FiberCompressiveFailureCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FiberCompressiveFailureCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FiberCompressiveFailureCriterion.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FiberCompressiveFailureCriterion.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FiberCompressiveFailureCriterion.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FiberCompressiveFailureCriterion.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FiberCompressiveFailureCriterion.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FiberCompressiveFailureCriterion.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FiberCompressiveFailureCriterion.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FiberCompressiveFailureCriterion.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FiberCompressiveFailureCriterion.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FiberCompressiveFailureCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FiberCompressiveFailureCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FiberCompressiveFailureCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FiberCompressiveFailureCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FiberCompressiveFailureCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FiberCompressiveFailureCriterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FiberCompressiveFailureCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FiberCompressiveFailureCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FiberCompressiveFailureCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FiberCompressiveFailureCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FiberCompressiveFailureCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FiberCompressiveFailureCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FiberCompressiveFailureCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FiberCompressiveFailureCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                   | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#FiberCompressiveFailureCriterion.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`Mode`](#FiberCompressiveFailureCriterion.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#FiberCompressiveFailureCriterion.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#FiberCompressiveFailureCriterion.Plies)                                                         | Plies property.                                                        |
| [`DamageResultType`](#FiberCompressiveFailureCriterion.DamageResultType)                                   | Gets the DamageResultType.                                             |
| [`PlotData`](#FiberCompressiveFailureCriterion.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#FiberCompressiveFailureCriterion.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FiberCompressiveFailureCriterion.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#FiberCompressiveFailureCriterion.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FiberCompressiveFailureCriterion.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FiberCompressiveFailureCriterion.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FiberCompressiveFailureCriterion.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FiberCompressiveFailureCriterion.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#FiberCompressiveFailureCriterion.Path)                                                           | Path property.                                                         |
| [`Surface`](#FiberCompressiveFailureCriterion.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#FiberCompressiveFailureCriterion.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#FiberCompressiveFailureCriterion.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#FiberCompressiveFailureCriterion.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#FiberCompressiveFailureCriterion.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FiberCompressiveFailureCriterion.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FiberCompressiveFailureCriterion.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FiberCompressiveFailureCriterion.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#FiberCompressiveFailureCriterion.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FiberCompressiveFailureCriterion.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FiberCompressiveFailureCriterion.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FiberCompressiveFailureCriterion.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FiberCompressiveFailureCriterion.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FiberCompressiveFailureCriterion.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#FiberCompressiveFailureCriterion.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#FiberCompressiveFailureCriterion.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FiberCompressiveFailureCriterion.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FiberCompressiveFailureCriterion.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#FiberCompressiveFailureCriterion.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#FiberCompressiveFailureCriterion.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FiberCompressiveFailureCriterion.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FiberCompressiveFailureCriterion.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FiberCompressiveFailureCriterion.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#FiberCompressiveFailureCriterion.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FiberCompressiveFailureCriterion.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FiberCompressiveFailureCriterion.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#FiberCompressiveFailureCriterion.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#FiberCompressiveFailureCriterion.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#FiberCompressiveFailureCriterion.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#FiberCompressiveFailureCriterion.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FiberCompressiveFailureCriterion.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FiberCompressiveFailureCriterion.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="FiberCompressiveFailureCriterion.InternalObject"></a>

### *property* FiberCompressiveFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DataModelObjectCategory"></a>

### *property* FiberCompressiveFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Mode"></a>

### *property* FiberCompressiveFailureCriterion.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Ply"></a>

### *property* FiberCompressiveFailureCriterion.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Plies"></a>

### *property* FiberCompressiveFailureCriterion.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DamageResultType"></a>

### *property* FiberCompressiveFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PlotData"></a>

### *property* FiberCompressiveFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Location"></a>

### *property* FiberCompressiveFailureCriterion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IsSolved"></a>

### *property* FiberCompressiveFailureCriterion.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CoordinateSystem"></a>

### *property* FiberCompressiveFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ScopingMethod"></a>

### *property* FiberCompressiveFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SetNumber"></a>

### *property* FiberCompressiveFailureCriterion.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CombinationNumber"></a>

### *property* FiberCompressiveFailureCriterion.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SolutionCombinationDriver"></a>

### *property* FiberCompressiveFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Path"></a>

### *property* FiberCompressiveFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Surface"></a>

### *property* FiberCompressiveFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SurfaceCoating"></a>

### *property* FiberCompressiveFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.NamedSelections"></a>

### *property* FiberCompressiveFailureCriterion.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallShowTextOnMosaic"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CrackFrontNumber"></a>

### *property* FiberCompressiveFailureCriterion.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GlobalIDs"></a>

### *property* FiberCompressiveFailureCriterion.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Identifier"></a>

### *property* FiberCompressiveFailureCriterion.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IterationNumber"></a>

### *property* FiberCompressiveFailureCriterion.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStep"></a>

### *property* FiberCompressiveFailureCriterion.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOccursOn"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOccursOn"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepNumber"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SolverComponentIDs"></a>

### *property* FiberCompressiveFailureCriterion.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Substep"></a>

### *property* FiberCompressiveFailureCriterion.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Average"></a>

### *property* FiberCompressiveFailureCriterion.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Maximum"></a>

### *property* FiberCompressiveFailureCriterion.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Minimum"></a>

### *property* FiberCompressiveFailureCriterion.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Time"></a>

### *property* FiberCompressiveFailureCriterion.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DisplayTime"></a>

### *property* FiberCompressiveFailureCriterion.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GraphControlsXAxis"></a>

### *property* FiberCompressiveFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DisplayOption"></a>

### *property* FiberCompressiveFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DpfEvaluation"></a>

### *property* FiberCompressiveFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.By"></a>

### *property* FiberCompressiveFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ItemType"></a>

### *property* FiberCompressiveFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CalculateTimeHistory"></a>

### *property* FiberCompressiveFailureCriterion.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Suppressed"></a>

### *property* FiberCompressiveFailureCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Children"></a>

### *property* FiberCompressiveFailureCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Comments"></a>

### *property* FiberCompressiveFailureCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Figures"></a>

### *property* FiberCompressiveFailureCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Images"></a>

### *property* FiberCompressiveFailureCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FiberCompressiveFailureCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Properties"></a>

### *property* FiberCompressiveFailureCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.VisibleProperties"></a>

### *property* FiberCompressiveFailureCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FiberCompressiveFailureCriterion.ClearGeneratedData"></a>

### FiberCompressiveFailureCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.EvaluateAllResults"></a>

### FiberCompressiveFailureCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.FetchRemoteResults"></a>

### FiberCompressiveFailureCriterion.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ExportToTextFile"></a>

### FiberCompressiveFailureCriterion.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ExportAnimation"></a>

### FiberCompressiveFailureCriterion.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DuplicateWithoutResults"></a>

### FiberCompressiveFailureCriterion.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CreateResultsAtAllSets"></a>

### FiberCompressiveFailureCriterion.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PromoteToNamedSelection"></a>

### FiberCompressiveFailureCriterion.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CreateParameter"></a>

### FiberCompressiveFailureCriterion.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddAlert"></a>

### FiberCompressiveFailureCriterion.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddConvergence"></a>

### FiberCompressiveFailureCriterion.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RenameBasedOnDefinition"></a>

### FiberCompressiveFailureCriterion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Delete"></a>

### FiberCompressiveFailureCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetChildren"></a>

### FiberCompressiveFailureCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FiberCompressiveFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddComment"></a>

### FiberCompressiveFailureCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddFigure"></a>

### FiberCompressiveFailureCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddImage"></a>

### FiberCompressiveFailureCriterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Activate"></a>

### FiberCompressiveFailureCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CopyTo"></a>

### FiberCompressiveFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Duplicate"></a>

### FiberCompressiveFailureCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GroupAllSimilarChildren"></a>

### FiberCompressiveFailureCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GroupSimilarObjects"></a>

### FiberCompressiveFailureCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PropertyByName"></a>

### FiberCompressiveFailureCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PropertyByAPIName"></a>

### FiberCompressiveFailureCriterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetParameter"></a>

### FiberCompressiveFailureCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RemoveParameter"></a>

### FiberCompressiveFailureCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

