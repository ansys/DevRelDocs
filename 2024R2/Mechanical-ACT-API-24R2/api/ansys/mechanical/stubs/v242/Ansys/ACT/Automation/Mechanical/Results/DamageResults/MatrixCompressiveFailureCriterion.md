# `MatrixCompressiveFailureCriterion`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixCompressiveFailureCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MatrixCompressiveFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MatrixCompressiveFailureCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MatrixCompressiveFailureCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MatrixCompressiveFailureCriterion.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MatrixCompressiveFailureCriterion.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MatrixCompressiveFailureCriterion.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MatrixCompressiveFailureCriterion.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MatrixCompressiveFailureCriterion.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MatrixCompressiveFailureCriterion.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MatrixCompressiveFailureCriterion.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MatrixCompressiveFailureCriterion.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MatrixCompressiveFailureCriterion.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MatrixCompressiveFailureCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MatrixCompressiveFailureCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MatrixCompressiveFailureCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MatrixCompressiveFailureCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MatrixCompressiveFailureCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MatrixCompressiveFailureCriterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MatrixCompressiveFailureCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MatrixCompressiveFailureCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MatrixCompressiveFailureCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MatrixCompressiveFailureCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MatrixCompressiveFailureCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MatrixCompressiveFailureCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MatrixCompressiveFailureCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MatrixCompressiveFailureCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#MatrixCompressiveFailureCriterion.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                           |
| [`Mode`](#MatrixCompressiveFailureCriterion.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#MatrixCompressiveFailureCriterion.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#MatrixCompressiveFailureCriterion.Plies)                                                         | Plies property.                                                        |
| [`DamageResultType`](#MatrixCompressiveFailureCriterion.DamageResultType)                                   | Gets the DamageResultType.                                             |
| [`PlotData`](#MatrixCompressiveFailureCriterion.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#MatrixCompressiveFailureCriterion.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MatrixCompressiveFailureCriterion.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MatrixCompressiveFailureCriterion.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MatrixCompressiveFailureCriterion.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MatrixCompressiveFailureCriterion.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MatrixCompressiveFailureCriterion.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#MatrixCompressiveFailureCriterion.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MatrixCompressiveFailureCriterion.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MatrixCompressiveFailureCriterion.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MatrixCompressiveFailureCriterion.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MatrixCompressiveFailureCriterion.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#MatrixCompressiveFailureCriterion.Path)                                                           | Path property.                                                         |
| [`Surface`](#MatrixCompressiveFailureCriterion.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#MatrixCompressiveFailureCriterion.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#MatrixCompressiveFailureCriterion.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#MatrixCompressiveFailureCriterion.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#MatrixCompressiveFailureCriterion.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MatrixCompressiveFailureCriterion.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MatrixCompressiveFailureCriterion.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MatrixCompressiveFailureCriterion.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MatrixCompressiveFailureCriterion.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MatrixCompressiveFailureCriterion.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MatrixCompressiveFailureCriterion.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MatrixCompressiveFailureCriterion.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MatrixCompressiveFailureCriterion.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MatrixCompressiveFailureCriterion.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#MatrixCompressiveFailureCriterion.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#MatrixCompressiveFailureCriterion.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MatrixCompressiveFailureCriterion.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MatrixCompressiveFailureCriterion.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MatrixCompressiveFailureCriterion.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MatrixCompressiveFailureCriterion.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MatrixCompressiveFailureCriterion.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MatrixCompressiveFailureCriterion.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#MatrixCompressiveFailureCriterion.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#MatrixCompressiveFailureCriterion.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MatrixCompressiveFailureCriterion.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MatrixCompressiveFailureCriterion.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MatrixCompressiveFailureCriterion.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#MatrixCompressiveFailureCriterion.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MatrixCompressiveFailureCriterion.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MatrixCompressiveFailureCriterion.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#MatrixCompressiveFailureCriterion.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#MatrixCompressiveFailureCriterion.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#MatrixCompressiveFailureCriterion.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#MatrixCompressiveFailureCriterion.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MatrixCompressiveFailureCriterion.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MatrixCompressiveFailureCriterion.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MatrixCompressiveFailureCriterion.InternalObject"></a>

### *property* MatrixCompressiveFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DataModelObjectCategory"></a>

### *property* MatrixCompressiveFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Mode"></a>

### *property* MatrixCompressiveFailureCriterion.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Ply"></a>

### *property* MatrixCompressiveFailureCriterion.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Plies"></a>

### *property* MatrixCompressiveFailureCriterion.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DamageResultType"></a>

### *property* MatrixCompressiveFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PlotData"></a>

### *property* MatrixCompressiveFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Location"></a>

### *property* MatrixCompressiveFailureCriterion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* MatrixCompressiveFailureCriterion.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* MatrixCompressiveFailureCriterion.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* MatrixCompressiveFailureCriterion.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* MatrixCompressiveFailureCriterion.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.IsSolved"></a>

### *property* MatrixCompressiveFailureCriterion.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CoordinateSystem"></a>

### *property* MatrixCompressiveFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ScopingMethod"></a>

### *property* MatrixCompressiveFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SetNumber"></a>

### *property* MatrixCompressiveFailureCriterion.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CombinationNumber"></a>

### *property* MatrixCompressiveFailureCriterion.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SolutionCombinationDriver"></a>

### *property* MatrixCompressiveFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Path"></a>

### *property* MatrixCompressiveFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Surface"></a>

### *property* MatrixCompressiveFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SurfaceCoating"></a>

### *property* MatrixCompressiveFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.NamedSelections"></a>

### *property* MatrixCompressiveFailureCriterion.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallShowTextOnMosaic"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CrackFrontNumber"></a>

### *property* MatrixCompressiveFailureCriterion.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GlobalIDs"></a>

### *property* MatrixCompressiveFailureCriterion.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Identifier"></a>

### *property* MatrixCompressiveFailureCriterion.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.IterationNumber"></a>

### *property* MatrixCompressiveFailureCriterion.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStep"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MaximumOccursOn"></a>

### *property* MatrixCompressiveFailureCriterion.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MinimumOccursOn"></a>

### *property* MatrixCompressiveFailureCriterion.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepNumber"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SolverComponentIDs"></a>

### *property* MatrixCompressiveFailureCriterion.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Substep"></a>

### *property* MatrixCompressiveFailureCriterion.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Average"></a>

### *property* MatrixCompressiveFailureCriterion.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Maximum"></a>

### *property* MatrixCompressiveFailureCriterion.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* MatrixCompressiveFailureCriterion.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* MatrixCompressiveFailureCriterion.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Minimum"></a>

### *property* MatrixCompressiveFailureCriterion.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* MatrixCompressiveFailureCriterion.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* MatrixCompressiveFailureCriterion.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Time"></a>

### *property* MatrixCompressiveFailureCriterion.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DisplayTime"></a>

### *property* MatrixCompressiveFailureCriterion.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GraphControlsXAxis"></a>

### *property* MatrixCompressiveFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DisplayOption"></a>

### *property* MatrixCompressiveFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DpfEvaluation"></a>

### *property* MatrixCompressiveFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.By"></a>

### *property* MatrixCompressiveFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ItemType"></a>

### *property* MatrixCompressiveFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CalculateTimeHistory"></a>

### *property* MatrixCompressiveFailureCriterion.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Suppressed"></a>

### *property* MatrixCompressiveFailureCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Children"></a>

### *property* MatrixCompressiveFailureCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Comments"></a>

### *property* MatrixCompressiveFailureCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Figures"></a>

### *property* MatrixCompressiveFailureCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Images"></a>

### *property* MatrixCompressiveFailureCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MatrixCompressiveFailureCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Properties"></a>

### *property* MatrixCompressiveFailureCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.VisibleProperties"></a>

### *property* MatrixCompressiveFailureCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatrixCompressiveFailureCriterion.ClearGeneratedData"></a>

### MatrixCompressiveFailureCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.EvaluateAllResults"></a>

### MatrixCompressiveFailureCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.FetchRemoteResults"></a>

### MatrixCompressiveFailureCriterion.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ExportToTextFile"></a>

### MatrixCompressiveFailureCriterion.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ExportAnimation"></a>

### MatrixCompressiveFailureCriterion.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DuplicateWithoutResults"></a>

### MatrixCompressiveFailureCriterion.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CreateResultsAtAllSets"></a>

### MatrixCompressiveFailureCriterion.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PromoteToNamedSelection"></a>

### MatrixCompressiveFailureCriterion.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CreateParameter"></a>

### MatrixCompressiveFailureCriterion.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddAlert"></a>

### MatrixCompressiveFailureCriterion.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddConvergence"></a>

### MatrixCompressiveFailureCriterion.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RenameBasedOnDefinition"></a>

### MatrixCompressiveFailureCriterion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Delete"></a>

### MatrixCompressiveFailureCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetChildren"></a>

### MatrixCompressiveFailureCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MatrixCompressiveFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddComment"></a>

### MatrixCompressiveFailureCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddFigure"></a>

### MatrixCompressiveFailureCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddImage"></a>

### MatrixCompressiveFailureCriterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Activate"></a>

### MatrixCompressiveFailureCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CopyTo"></a>

### MatrixCompressiveFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Duplicate"></a>

### MatrixCompressiveFailureCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GroupAllSimilarChildren"></a>

### MatrixCompressiveFailureCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GroupSimilarObjects"></a>

### MatrixCompressiveFailureCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PropertyByName"></a>

### MatrixCompressiveFailureCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PropertyByAPIName"></a>

### MatrixCompressiveFailureCriterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetParameter"></a>

### MatrixCompressiveFailureCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RemoveParameter"></a>

### MatrixCompressiveFailureCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

