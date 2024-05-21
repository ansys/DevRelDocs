# ElementalEulerYZAngle

<a id="ElementalEulerYZAngle"></a>

### *class* ElementalEulerYZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementalEulerYZAngle.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ElementalEulerYZAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ElementalEulerYZAngle.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ElementalEulerYZAngle.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ElementalEulerYZAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ElementalEulerYZAngle.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ElementalEulerYZAngle.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ElementalEulerYZAngle.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ElementalEulerYZAngle.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ElementalEulerYZAngle.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ElementalEulerYZAngle.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ElementalEulerYZAngle.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ElementalEulerYZAngle.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElementalEulerYZAngle.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElementalEulerYZAngle.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementalEulerYZAngle.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementalEulerYZAngle.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElementalEulerYZAngle.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElementalEulerYZAngle.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElementalEulerYZAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElementalEulerYZAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementalEulerYZAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElementalEulerYZAngle.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElementalEulerYZAngle.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ElementalEulerYZAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElementalEulerYZAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#ElementalEulerYZAngle.Mode)                                                                                     | Gets or sets the Mode.                                                 |
| [`Ply`](#ElementalEulerYZAngle.Ply)                                                                                       | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#ElementalEulerYZAngle.LoadMultiplier)                                                                 | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#ElementalEulerYZAngle.ScaleFactorValue)                                                             | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#ElementalEulerYZAngle.SweepingPhase)                                                                   | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#ElementalEulerYZAngle.PhaseIncrement)                                                                 | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#ElementalEulerYZAngle.Frequency)                                                                           | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#ElementalEulerYZAngle.ScaleFactor)                                                                       | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#ElementalEulerYZAngle.SubScopeBy)                                                                         | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#ElementalEulerYZAngle.Amplitude)                                                                           | Gets or sets the Amplitude.                                            |
| [`PlotData`](#ElementalEulerYZAngle.PlotData)                                                                             | Gets the result table.                                                 |
| [`Location`](#ElementalEulerYZAngle.Location)                                                                             | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ElementalEulerYZAngle.TimeForMinimumOfMinimumValues)                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ElementalEulerYZAngle.TimeForMinimumOfMaximumValues)                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ElementalEulerYZAngle.LoadStepForMinimumOfMinimumValues)                           | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ElementalEulerYZAngle.LoadStepForMinimumOfMaximumValues)                           | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ElementalEulerYZAngle.TimeForMaximumOfMinimumValues)                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ElementalEulerYZAngle.TimeForMaximumOfMaximumValues)                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ElementalEulerYZAngle.LoadStepForMaximumOfMinimumValues)                           | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ElementalEulerYZAngle.LoadStepForMaximumOfMaximumValues)                           | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ElementalEulerYZAngle.IsSolved)                                                                             | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ElementalEulerYZAngle.ScopingMethod)                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ElementalEulerYZAngle.SetNumber)                                                                           | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ElementalEulerYZAngle.CombinationNumber)                                                           | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ElementalEulerYZAngle.SolutionCombinationDriver)                                           | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ElementalEulerYZAngle.WaterfallPanelShowTextOnMosaic)                                 | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ElementalEulerYZAngle.CrackFrontNumber)                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ElementalEulerYZAngle.GlobalIDs)                                                                           | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ElementalEulerYZAngle.Identifier)                                                                         | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ElementalEulerYZAngle.IterationNumber)                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#ElementalEulerYZAngle.LoadStep)                                                                             | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ElementalEulerYZAngle.MaximumOccursOn)                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ElementalEulerYZAngle.MinimumOccursOn)                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ElementalEulerYZAngle.LoadStepNumber)                                                                 | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ElementalEulerYZAngle.SolverComponentIDs)                                                         | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ElementalEulerYZAngle.Substep)                                                                               | Gets the Substep.                                                      |
| [`Average`](#ElementalEulerYZAngle.Average)                                                                               | Gets the Average.                                                      |
| [`Maximum`](#ElementalEulerYZAngle.Maximum)                                                                               | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ElementalEulerYZAngle.MaximumOfMaximumOverTime)                                             | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ElementalEulerYZAngle.MaximumOfMinimumOverTime)                                             | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ElementalEulerYZAngle.Minimum)                                                                               | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ElementalEulerYZAngle.MinimumOfMaximumOverTime)                                             | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ElementalEulerYZAngle.MinimumOfMinimumOverTime)                                             | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ElementalEulerYZAngle.Time)                                                                                     | Gets the Time.                                                         |
| [`DisplayTime`](#ElementalEulerYZAngle.DisplayTime)                                                                       | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ElementalEulerYZAngle.DisplayOption)                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ElementalEulerYZAngle.DpfEvaluation)                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ElementalEulerYZAngle.By)                                                                                         | Gets or sets the By.                                                   |
| [`ItemType`](#ElementalEulerYZAngle.ItemType)                                                                             | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ElementalEulerYZAngle.CalculateTimeHistory)                                                     | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ElementalEulerYZAngle.Suppressed)                                                                         | Gets or sets the Suppressed.                                           |
| [`Children`](#ElementalEulerYZAngle.Children)                                                                             | Gets the list of children.                                             |
| [`Comments`](#ElementalEulerYZAngle.Comments)                                                                             | Gets the list of associated comments.                                  |
| [`Figures`](#ElementalEulerYZAngle.Figures)                                                                               | Gets the list of associated figures.                                   |
| [`Images`](#ElementalEulerYZAngle.Images)                                                                                 | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ElementalEulerYZAngle.Properties)                                                                         | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ElementalEulerYZAngle.VisibleProperties)                                                           | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import ElementalEulerYZAngle
```

<a id="property-detail"></a>

## Property detail

<a id="ElementalEulerYZAngle.InternalObject"></a>

### *property* ElementalEulerYZAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DataModelObjectCategory"></a>

### *property* ElementalEulerYZAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Mode"></a>

### *property* ElementalEulerYZAngle.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Ply"></a>

### *property* ElementalEulerYZAngle.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadMultiplier"></a>

### *property* ElementalEulerYZAngle.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ScaleFactorValue"></a>

### *property* ElementalEulerYZAngle.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SweepingPhase"></a>

### *property* ElementalEulerYZAngle.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PhaseIncrement"></a>

### *property* ElementalEulerYZAngle.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Frequency"></a>

### *property* ElementalEulerYZAngle.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ScaleFactor"></a>

### *property* ElementalEulerYZAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Position"></a>

### *property* ElementalEulerYZAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SubScopeBy"></a>

### *property* ElementalEulerYZAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Amplitude"></a>

### *property* ElementalEulerYZAngle.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PlotData"></a>

### *property* ElementalEulerYZAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Location"></a>

### *property* ElementalEulerYZAngle.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.TimeForMinimumOfMinimumValues"></a>

### *property* ElementalEulerYZAngle.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.TimeForMinimumOfMaximumValues"></a>

### *property* ElementalEulerYZAngle.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElementalEulerYZAngle.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElementalEulerYZAngle.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.TimeForMaximumOfMinimumValues"></a>

### *property* ElementalEulerYZAngle.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.TimeForMaximumOfMaximumValues"></a>

### *property* ElementalEulerYZAngle.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElementalEulerYZAngle.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElementalEulerYZAngle.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.IsSolved"></a>

### *property* ElementalEulerYZAngle.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CoordinateSystem"></a>

### *property* ElementalEulerYZAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ScopingMethod"></a>

### *property* ElementalEulerYZAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SetNumber"></a>

### *property* ElementalEulerYZAngle.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CombinationNumber"></a>

### *property* ElementalEulerYZAngle.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SolutionCombinationDriver"></a>

### *property* ElementalEulerYZAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Path"></a>

### *property* ElementalEulerYZAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Surface"></a>

### *property* ElementalEulerYZAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.NamedSelections"></a>

### *property* ElementalEulerYZAngle.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.WaterfallPanelShowTextOnMosaic"></a>

### *property* ElementalEulerYZAngle.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CrackFrontNumber"></a>

### *property* ElementalEulerYZAngle.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GlobalIDs"></a>

### *property* ElementalEulerYZAngle.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Identifier"></a>

### *property* ElementalEulerYZAngle.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.IterationNumber"></a>

### *property* ElementalEulerYZAngle.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStep"></a>

### *property* ElementalEulerYZAngle.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MaximumOccursOn"></a>

### *property* ElementalEulerYZAngle.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MinimumOccursOn"></a>

### *property* ElementalEulerYZAngle.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.LoadStepNumber"></a>

### *property* ElementalEulerYZAngle.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.SolverComponentIDs"></a>

### *property* ElementalEulerYZAngle.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Substep"></a>

### *property* ElementalEulerYZAngle.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Average"></a>

### *property* ElementalEulerYZAngle.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Maximum"></a>

### *property* ElementalEulerYZAngle.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MaximumOfMaximumOverTime"></a>

### *property* ElementalEulerYZAngle.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MaximumOfMinimumOverTime"></a>

### *property* ElementalEulerYZAngle.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Minimum"></a>

### *property* ElementalEulerYZAngle.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MinimumOfMaximumOverTime"></a>

### *property* ElementalEulerYZAngle.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.MinimumOfMinimumOverTime"></a>

### *property* ElementalEulerYZAngle.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Time"></a>

### *property* ElementalEulerYZAngle.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DisplayTime"></a>

### *property* ElementalEulerYZAngle.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GraphControlsXAxis"></a>

### *property* ElementalEulerYZAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DisplayOption"></a>

### *property* ElementalEulerYZAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DpfEvaluation"></a>

### *property* ElementalEulerYZAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.By"></a>

### *property* ElementalEulerYZAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ItemType"></a>

### *property* ElementalEulerYZAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CalculateTimeHistory"></a>

### *property* ElementalEulerYZAngle.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Suppressed"></a>

### *property* ElementalEulerYZAngle.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Children"></a>

### *property* ElementalEulerYZAngle.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Comments"></a>

### *property* ElementalEulerYZAngle.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Figures"></a>

### *property* ElementalEulerYZAngle.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Images"></a>

### *property* ElementalEulerYZAngle.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElementalEulerYZAngle.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Properties"></a>

### *property* ElementalEulerYZAngle.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.VisibleProperties"></a>

### *property* ElementalEulerYZAngle.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementalEulerYZAngle.ClearGeneratedData"></a>

### ElementalEulerYZAngle.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.EvaluateAllResults"></a>

### ElementalEulerYZAngle.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.FetchRemoteResults"></a>

### ElementalEulerYZAngle.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ExportToTextFile"></a>

### ElementalEulerYZAngle.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.ExportAnimation"></a>

### ElementalEulerYZAngle.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.DuplicateWithoutResults"></a>

### ElementalEulerYZAngle.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CreateResultsAtAllSets"></a>

### ElementalEulerYZAngle.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PromoteToNamedSelection"></a>

### ElementalEulerYZAngle.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CreateParameter"></a>

### ElementalEulerYZAngle.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddAlert"></a>

### ElementalEulerYZAngle.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddConvergence"></a>

### ElementalEulerYZAngle.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.RenameBasedOnDefinition"></a>

### ElementalEulerYZAngle.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Delete"></a>

### ElementalEulerYZAngle.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GetChildren"></a>

### ElementalEulerYZAngle.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElementalEulerYZAngle.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddComment"></a>

### ElementalEulerYZAngle.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddFigure"></a>

### ElementalEulerYZAngle.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.AddImage"></a>

### ElementalEulerYZAngle.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Activate"></a>

### ElementalEulerYZAngle.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.CopyTo"></a>

### ElementalEulerYZAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.Duplicate"></a>

### ElementalEulerYZAngle.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GroupAllSimilarChildren"></a>

### ElementalEulerYZAngle.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GroupSimilarObjects"></a>

### ElementalEulerYZAngle.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PropertyByName"></a>

### ElementalEulerYZAngle.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.PropertyByAPIName"></a>

### ElementalEulerYZAngle.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.GetParameter"></a>

### ElementalEulerYZAngle.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerYZAngle.RemoveParameter"></a>

### ElementalEulerYZAngle.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
