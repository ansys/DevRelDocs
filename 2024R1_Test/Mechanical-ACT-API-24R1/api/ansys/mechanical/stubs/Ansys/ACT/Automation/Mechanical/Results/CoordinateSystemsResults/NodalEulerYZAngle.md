# NodalEulerYZAngle

<a id="NodalEulerYZAngle"></a>

### *class* NodalEulerYZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalEulerYZAngle.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#NodalEulerYZAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#NodalEulerYZAngle.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#NodalEulerYZAngle.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#NodalEulerYZAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#NodalEulerYZAngle.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#NodalEulerYZAngle.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#NodalEulerYZAngle.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#NodalEulerYZAngle.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#NodalEulerYZAngle.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#NodalEulerYZAngle.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#NodalEulerYZAngle.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#NodalEulerYZAngle.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NodalEulerYZAngle.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalEulerYZAngle.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalEulerYZAngle.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalEulerYZAngle.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NodalEulerYZAngle.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NodalEulerYZAngle.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalEulerYZAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalEulerYZAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalEulerYZAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalEulerYZAngle.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalEulerYZAngle.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#NodalEulerYZAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalEulerYZAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#NodalEulerYZAngle.Mode)                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#NodalEulerYZAngle.Ply)                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#NodalEulerYZAngle.LoadMultiplier)                                                                     | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#NodalEulerYZAngle.ScaleFactorValue)                                                                 | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#NodalEulerYZAngle.SweepingPhase)                                                                       | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#NodalEulerYZAngle.PhaseIncrement)                                                                     | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#NodalEulerYZAngle.Frequency)                                                                               | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#NodalEulerYZAngle.ScaleFactor)                                                                           | Gets or sets the ScaleFactor.                                          |
| [`Position`](./../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#NodalEulerYZAngle.SubScopeBy)                                                                             | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#NodalEulerYZAngle.Amplitude)                                                                               | Gets or sets the Amplitude.                                            |
| [`PlotData`](#NodalEulerYZAngle.PlotData)                                                                                 | Gets the result table.                                                 |
| [`Location`](#NodalEulerYZAngle.Location)                                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#NodalEulerYZAngle.TimeForMinimumOfMinimumValues)                                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#NodalEulerYZAngle.TimeForMinimumOfMaximumValues)                                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#NodalEulerYZAngle.LoadStepForMinimumOfMinimumValues)                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#NodalEulerYZAngle.LoadStepForMinimumOfMaximumValues)                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#NodalEulerYZAngle.TimeForMaximumOfMinimumValues)                                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#NodalEulerYZAngle.TimeForMaximumOfMaximumValues)                                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#NodalEulerYZAngle.LoadStepForMaximumOfMinimumValues)                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#NodalEulerYZAngle.LoadStepForMaximumOfMaximumValues)                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#NodalEulerYZAngle.IsSolved)                                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#NodalEulerYZAngle.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#NodalEulerYZAngle.SetNumber)                                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#NodalEulerYZAngle.CombinationNumber)                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#NodalEulerYZAngle.SolutionCombinationDriver)                                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](./../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](./../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](./../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#NodalEulerYZAngle.WaterfallPanelShowTextOnMosaic)                                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#NodalEulerYZAngle.CrackFrontNumber)                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#NodalEulerYZAngle.GlobalIDs)                                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#NodalEulerYZAngle.Identifier)                                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#NodalEulerYZAngle.IterationNumber)                                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#NodalEulerYZAngle.LoadStep)                                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#NodalEulerYZAngle.MaximumOccursOn)                                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#NodalEulerYZAngle.MinimumOccursOn)                                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#NodalEulerYZAngle.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#NodalEulerYZAngle.SolverComponentIDs)                                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#NodalEulerYZAngle.Substep)                                                                                   | Gets the Substep.                                                      |
| [`Average`](#NodalEulerYZAngle.Average)                                                                                   | Gets the Average.                                                      |
| [`Maximum`](#NodalEulerYZAngle.Maximum)                                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#NodalEulerYZAngle.MaximumOfMaximumOverTime)                                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#NodalEulerYZAngle.MaximumOfMinimumOverTime)                                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#NodalEulerYZAngle.Minimum)                                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#NodalEulerYZAngle.MinimumOfMaximumOverTime)                                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#NodalEulerYZAngle.MinimumOfMinimumOverTime)                                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#NodalEulerYZAngle.Time)                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#NodalEulerYZAngle.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#NodalEulerYZAngle.DisplayOption)                                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#NodalEulerYZAngle.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#NodalEulerYZAngle.By)                                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#NodalEulerYZAngle.ItemType)                                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#NodalEulerYZAngle.CalculateTimeHistory)                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#NodalEulerYZAngle.Suppressed)                                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#NodalEulerYZAngle.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#NodalEulerYZAngle.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#NodalEulerYZAngle.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#NodalEulerYZAngle.Images)                                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#NodalEulerYZAngle.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#NodalEulerYZAngle.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import NodalEulerYZAngle
```

<a id="property-detail"></a>

## Property detail

<a id="NodalEulerYZAngle.InternalObject"></a>

### *property* NodalEulerYZAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DataModelObjectCategory"></a>

### *property* NodalEulerYZAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Mode"></a>

### *property* NodalEulerYZAngle.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Ply"></a>

### *property* NodalEulerYZAngle.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](./../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadMultiplier"></a>

### *property* NodalEulerYZAngle.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ScaleFactorValue"></a>

### *property* NodalEulerYZAngle.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SweepingPhase"></a>

### *property* NodalEulerYZAngle.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PhaseIncrement"></a>

### *property* NodalEulerYZAngle.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Frequency"></a>

### *property* NodalEulerYZAngle.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ScaleFactor"></a>

### *property* NodalEulerYZAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](./../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Position"></a>

### *property* NodalEulerYZAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](./../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SubScopeBy"></a>

### *property* NodalEulerYZAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](./../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Amplitude"></a>

### *property* NodalEulerYZAngle.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PlotData"></a>

### *property* NodalEulerYZAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](./../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Location"></a>

### *property* NodalEulerYZAngle.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.TimeForMinimumOfMinimumValues"></a>

### *property* NodalEulerYZAngle.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.TimeForMinimumOfMaximumValues"></a>

### *property* NodalEulerYZAngle.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* NodalEulerYZAngle.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* NodalEulerYZAngle.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.TimeForMaximumOfMinimumValues"></a>

### *property* NodalEulerYZAngle.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.TimeForMaximumOfMaximumValues"></a>

### *property* NodalEulerYZAngle.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* NodalEulerYZAngle.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* NodalEulerYZAngle.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.IsSolved"></a>

### *property* NodalEulerYZAngle.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CoordinateSystem"></a>

### *property* NodalEulerYZAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ScopingMethod"></a>

### *property* NodalEulerYZAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SetNumber"></a>

### *property* NodalEulerYZAngle.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CombinationNumber"></a>

### *property* NodalEulerYZAngle.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SolutionCombinationDriver"></a>

### *property* NodalEulerYZAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](./../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Path"></a>

### *property* NodalEulerYZAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](./../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Surface"></a>

### *property* NodalEulerYZAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.NamedSelections"></a>

### *property* NodalEulerYZAngle.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.WaterfallPanelShowTextOnMosaic"></a>

### *property* NodalEulerYZAngle.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CrackFrontNumber"></a>

### *property* NodalEulerYZAngle.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GlobalIDs"></a>

### *property* NodalEulerYZAngle.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Identifier"></a>

### *property* NodalEulerYZAngle.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.IterationNumber"></a>

### *property* NodalEulerYZAngle.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStep"></a>

### *property* NodalEulerYZAngle.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MaximumOccursOn"></a>

### *property* NodalEulerYZAngle.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MinimumOccursOn"></a>

### *property* NodalEulerYZAngle.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepNumber"></a>

### *property* NodalEulerYZAngle.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SolverComponentIDs"></a>

### *property* NodalEulerYZAngle.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Substep"></a>

### *property* NodalEulerYZAngle.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Average"></a>

### *property* NodalEulerYZAngle.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Maximum"></a>

### *property* NodalEulerYZAngle.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MaximumOfMaximumOverTime"></a>

### *property* NodalEulerYZAngle.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MaximumOfMinimumOverTime"></a>

### *property* NodalEulerYZAngle.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Minimum"></a>

### *property* NodalEulerYZAngle.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MinimumOfMaximumOverTime"></a>

### *property* NodalEulerYZAngle.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MinimumOfMinimumOverTime"></a>

### *property* NodalEulerYZAngle.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Time"></a>

### *property* NodalEulerYZAngle.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DisplayTime"></a>

### *property* NodalEulerYZAngle.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GraphControlsXAxis"></a>

### *property* NodalEulerYZAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DisplayOption"></a>

### *property* NodalEulerYZAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](./../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DpfEvaluation"></a>

### *property* NodalEulerYZAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.By"></a>

### *property* NodalEulerYZAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](./../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ItemType"></a>

### *property* NodalEulerYZAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](./../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CalculateTimeHistory"></a>

### *property* NodalEulerYZAngle.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Suppressed"></a>

### *property* NodalEulerYZAngle.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Children"></a>

### *property* NodalEulerYZAngle.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Comments"></a>

### *property* NodalEulerYZAngle.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Figures"></a>

### *property* NodalEulerYZAngle.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Images"></a>

### *property* NodalEulerYZAngle.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodalEulerYZAngle.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Properties"></a>

### *property* NodalEulerYZAngle.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.VisibleProperties"></a>

### *property* NodalEulerYZAngle.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalEulerYZAngle.ClearGeneratedData"></a>

### NodalEulerYZAngle.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.EvaluateAllResults"></a>

### NodalEulerYZAngle.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.FetchRemoteResults"></a>

### NodalEulerYZAngle.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ExportToTextFile"></a>

### NodalEulerYZAngle.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ExportAnimation"></a>

### NodalEulerYZAngle.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DuplicateWithoutResults"></a>

### NodalEulerYZAngle.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CreateResultsAtAllSets"></a>

### NodalEulerYZAngle.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PromoteToNamedSelection"></a>

### NodalEulerYZAngle.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CreateParameter"></a>

### NodalEulerYZAngle.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddAlert"></a>

### NodalEulerYZAngle.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddConvergence"></a>

### NodalEulerYZAngle.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.RenameBasedOnDefinition"></a>

### NodalEulerYZAngle.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Delete"></a>

### NodalEulerYZAngle.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GetChildren"></a>

### NodalEulerYZAngle.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodalEulerYZAngle.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddComment"></a>

### NodalEulerYZAngle.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddFigure"></a>

### NodalEulerYZAngle.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddImage"></a>

### NodalEulerYZAngle.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Activate"></a>

### NodalEulerYZAngle.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CopyTo"></a>

### NodalEulerYZAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Duplicate"></a>

### NodalEulerYZAngle.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GroupAllSimilarChildren"></a>

### NodalEulerYZAngle.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GroupSimilarObjects"></a>

### NodalEulerYZAngle.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PropertyByName"></a>

### NodalEulerYZAngle.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PropertyByAPIName"></a>

### NodalEulerYZAngle.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GetParameter"></a>

### NodalEulerYZAngle.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.RemoveParameter"></a>

### NodalEulerYZAngle.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
