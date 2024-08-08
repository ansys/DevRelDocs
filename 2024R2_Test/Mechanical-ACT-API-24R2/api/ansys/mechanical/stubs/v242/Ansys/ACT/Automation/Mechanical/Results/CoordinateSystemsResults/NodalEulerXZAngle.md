# `NodalEulerXZAngle`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerXZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalEulerXZAngle.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#NodalEulerXZAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#NodalEulerXZAngle.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#NodalEulerXZAngle.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#NodalEulerXZAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#NodalEulerXZAngle.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#NodalEulerXZAngle.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#NodalEulerXZAngle.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#NodalEulerXZAngle.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#NodalEulerXZAngle.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#NodalEulerXZAngle.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#NodalEulerXZAngle.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#NodalEulerXZAngle.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NodalEulerXZAngle.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalEulerXZAngle.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalEulerXZAngle.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalEulerXZAngle.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NodalEulerXZAngle.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NodalEulerXZAngle.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalEulerXZAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalEulerXZAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalEulerXZAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalEulerXZAngle.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalEulerXZAngle.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#NodalEulerXZAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalEulerXZAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#NodalEulerXZAngle.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                           |
| [`Mode`](#NodalEulerXZAngle.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#NodalEulerXZAngle.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#NodalEulerXZAngle.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#NodalEulerXZAngle.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#NodalEulerXZAngle.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#NodalEulerXZAngle.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#NodalEulerXZAngle.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#NodalEulerXZAngle.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`Position`](#NodalEulerXZAngle.Position)                                                   | Gets or sets the Position.                                             |
| [`SubScopeBy`](#NodalEulerXZAngle.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#NodalEulerXZAngle.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](#NodalEulerXZAngle.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#NodalEulerXZAngle.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#NodalEulerXZAngle.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#NodalEulerXZAngle.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#NodalEulerXZAngle.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#NodalEulerXZAngle.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#NodalEulerXZAngle.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#NodalEulerXZAngle.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#NodalEulerXZAngle.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#NodalEulerXZAngle.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#NodalEulerXZAngle.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#NodalEulerXZAngle.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#NodalEulerXZAngle.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#NodalEulerXZAngle.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#NodalEulerXZAngle.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#NodalEulerXZAngle.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#NodalEulerXZAngle.Path)                                                           | Path property.                                                         |
| [`Surface`](#NodalEulerXZAngle.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#NodalEulerXZAngle.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#NodalEulerXZAngle.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#NodalEulerXZAngle.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#NodalEulerXZAngle.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#NodalEulerXZAngle.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#NodalEulerXZAngle.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#NodalEulerXZAngle.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#NodalEulerXZAngle.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#NodalEulerXZAngle.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#NodalEulerXZAngle.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#NodalEulerXZAngle.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#NodalEulerXZAngle.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#NodalEulerXZAngle.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#NodalEulerXZAngle.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#NodalEulerXZAngle.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#NodalEulerXZAngle.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#NodalEulerXZAngle.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#NodalEulerXZAngle.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#NodalEulerXZAngle.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#NodalEulerXZAngle.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#NodalEulerXZAngle.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#NodalEulerXZAngle.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#NodalEulerXZAngle.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#NodalEulerXZAngle.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#NodalEulerXZAngle.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#NodalEulerXZAngle.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#NodalEulerXZAngle.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#NodalEulerXZAngle.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#NodalEulerXZAngle.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#NodalEulerXZAngle.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#NodalEulerXZAngle.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#NodalEulerXZAngle.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#NodalEulerXZAngle.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#NodalEulerXZAngle.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#NodalEulerXZAngle.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="NodalEulerXZAngle.InternalObject"></a>

### *property* NodalEulerXZAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DataModelObjectCategory"></a>

### *property* NodalEulerXZAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Mode"></a>

### *property* NodalEulerXZAngle.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Ply"></a>

### *property* NodalEulerXZAngle.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadMultiplier"></a>

### *property* NodalEulerXZAngle.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ScaleFactorValue"></a>

### *property* NodalEulerXZAngle.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SweepingPhase"></a>

### *property* NodalEulerXZAngle.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PhaseIncrement"></a>

### *property* NodalEulerXZAngle.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Frequency"></a>

### *property* NodalEulerXZAngle.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ScaleFactor"></a>

### *property* NodalEulerXZAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Position"></a>

### *property* NodalEulerXZAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SubScopeBy"></a>

### *property* NodalEulerXZAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Amplitude"></a>

### *property* NodalEulerXZAngle.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PlotData"></a>

### *property* NodalEulerXZAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Location"></a>

### *property* NodalEulerXZAngle.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.TimeForMinimumOfMinimumValues"></a>

### *property* NodalEulerXZAngle.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.TimeForMinimumOfMaximumValues"></a>

### *property* NodalEulerXZAngle.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* NodalEulerXZAngle.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* NodalEulerXZAngle.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.TimeForMaximumOfMinimumValues"></a>

### *property* NodalEulerXZAngle.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.TimeForMaximumOfMaximumValues"></a>

### *property* NodalEulerXZAngle.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* NodalEulerXZAngle.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* NodalEulerXZAngle.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.IsSolved"></a>

### *property* NodalEulerXZAngle.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CoordinateSystem"></a>

### *property* NodalEulerXZAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ScopingMethod"></a>

### *property* NodalEulerXZAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SetNumber"></a>

### *property* NodalEulerXZAngle.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CombinationNumber"></a>

### *property* NodalEulerXZAngle.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SolutionCombinationDriver"></a>

### *property* NodalEulerXZAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Path"></a>

### *property* NodalEulerXZAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Surface"></a>

### *property* NodalEulerXZAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SurfaceCoating"></a>

### *property* NodalEulerXZAngle.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.NamedSelections"></a>

### *property* NodalEulerXZAngle.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.WaterfallShowTextOnMosaic"></a>

### *property* NodalEulerXZAngle.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CrackFrontNumber"></a>

### *property* NodalEulerXZAngle.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GlobalIDs"></a>

### *property* NodalEulerXZAngle.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Identifier"></a>

### *property* NodalEulerXZAngle.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.IterationNumber"></a>

### *property* NodalEulerXZAngle.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStep"></a>

### *property* NodalEulerXZAngle.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MaximumOccursOn"></a>

### *property* NodalEulerXZAngle.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MinimumOccursOn"></a>

### *property* NodalEulerXZAngle.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepNumber"></a>

### *property* NodalEulerXZAngle.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SolverComponentIDs"></a>

### *property* NodalEulerXZAngle.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Substep"></a>

### *property* NodalEulerXZAngle.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Average"></a>

### *property* NodalEulerXZAngle.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Maximum"></a>

### *property* NodalEulerXZAngle.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MaximumOfMaximumOverTime"></a>

### *property* NodalEulerXZAngle.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MaximumOfMinimumOverTime"></a>

### *property* NodalEulerXZAngle.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Minimum"></a>

### *property* NodalEulerXZAngle.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MinimumOfMaximumOverTime"></a>

### *property* NodalEulerXZAngle.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MinimumOfMinimumOverTime"></a>

### *property* NodalEulerXZAngle.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Time"></a>

### *property* NodalEulerXZAngle.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DisplayTime"></a>

### *property* NodalEulerXZAngle.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GraphControlsXAxis"></a>

### *property* NodalEulerXZAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DisplayOption"></a>

### *property* NodalEulerXZAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DpfEvaluation"></a>

### *property* NodalEulerXZAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.By"></a>

### *property* NodalEulerXZAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ItemType"></a>

### *property* NodalEulerXZAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CalculateTimeHistory"></a>

### *property* NodalEulerXZAngle.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Suppressed"></a>

### *property* NodalEulerXZAngle.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Children"></a>

### *property* NodalEulerXZAngle.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Comments"></a>

### *property* NodalEulerXZAngle.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Figures"></a>

### *property* NodalEulerXZAngle.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Images"></a>

### *property* NodalEulerXZAngle.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodalEulerXZAngle.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Properties"></a>

### *property* NodalEulerXZAngle.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.VisibleProperties"></a>

### *property* NodalEulerXZAngle.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalEulerXZAngle.ClearGeneratedData"></a>

### NodalEulerXZAngle.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.EvaluateAllResults"></a>

### NodalEulerXZAngle.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.FetchRemoteResults"></a>

### NodalEulerXZAngle.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ExportToTextFile"></a>

### NodalEulerXZAngle.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ExportAnimation"></a>

### NodalEulerXZAngle.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DuplicateWithoutResults"></a>

### NodalEulerXZAngle.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CreateResultsAtAllSets"></a>

### NodalEulerXZAngle.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PromoteToNamedSelection"></a>

### NodalEulerXZAngle.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CreateParameter"></a>

### NodalEulerXZAngle.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddAlert"></a>

### NodalEulerXZAngle.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddConvergence"></a>

### NodalEulerXZAngle.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.RenameBasedOnDefinition"></a>

### NodalEulerXZAngle.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Delete"></a>

### NodalEulerXZAngle.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GetChildren"></a>

### NodalEulerXZAngle.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodalEulerXZAngle.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddComment"></a>

### NodalEulerXZAngle.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddFigure"></a>

### NodalEulerXZAngle.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddImage"></a>

### NodalEulerXZAngle.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Activate"></a>

### NodalEulerXZAngle.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CopyTo"></a>

### NodalEulerXZAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Duplicate"></a>

### NodalEulerXZAngle.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GroupAllSimilarChildren"></a>

### NodalEulerXZAngle.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GroupSimilarObjects"></a>

### NodalEulerXZAngle.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PropertyByName"></a>

### NodalEulerXZAngle.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PropertyByAPIName"></a>

### NodalEulerXZAngle.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GetParameter"></a>

### NodalEulerXZAngle.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.RemoveParameter"></a>

### NodalEulerXZAngle.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

