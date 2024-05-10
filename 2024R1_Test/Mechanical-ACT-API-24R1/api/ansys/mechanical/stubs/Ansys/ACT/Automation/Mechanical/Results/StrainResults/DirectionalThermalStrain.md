# DirectionalThermalStrain

<a id="DirectionalThermalStrain"></a>

### *class* DirectionalThermalStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalThermalStrain.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalThermalStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalThermalStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalThermalStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalThermalStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalThermalStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalThermalStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalThermalStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalThermalStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalThermalStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalThermalStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalThermalStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalThermalStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalThermalStrain.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalThermalStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalThermalStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalThermalStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalThermalStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalThermalStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalThermalStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalThermalStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalThermalStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalThermalStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalThermalStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalThermalStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalThermalStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#DirectionalThermalStrain.NormalOrientation)                                                        | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#DirectionalThermalStrain.Mode)                                                                                  | Gets or sets the Mode.                                                 |
| [`Ply`](#DirectionalThermalStrain.Ply)                                                                                    | Gets or sets the Ply selection.                                        |
| [`Plies`](#DirectionalThermalStrain.Plies)                                                                                | Plies property.                                                        |
| [`EnvironmentSelection`](#DirectionalThermalStrain.EnvironmentSelection)                                                  | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#DirectionalThermalStrain.HarmonicIndex)                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#DirectionalThermalStrain.CyclicMode)                                                                      | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#DirectionalThermalStrain.IterationStep)                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#DirectionalThermalStrain.LoadMultiplier)                                                              | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#DirectionalThermalStrain.ReportedFrequency)                                                        | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#DirectionalThermalStrain.SweepingPhase)                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalThermalStrain.PhaseIncrement)                                                              | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalThermalStrain.Frequency)                                                                        | Gets or sets the Frequency.                                            |
| [`Position`](./../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#DirectionalThermalStrain.SubScopeBy)                                                                      | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#DirectionalThermalStrain.Amplitude)                                                                        | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#DirectionalThermalStrain.AverageAcrossBodies)                                                    | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalThermalStrain.PlotData)                                                                          | Gets the result table.                                                 |
| [`Location`](#DirectionalThermalStrain.Location)                                                                          | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalThermalStrain.TimeForMinimumOfMinimumValues)                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalThermalStrain.TimeForMinimumOfMaximumValues)                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalThermalStrain.LoadStepForMinimumOfMinimumValues)                        | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalThermalStrain.LoadStepForMinimumOfMaximumValues)                        | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalThermalStrain.TimeForMaximumOfMinimumValues)                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalThermalStrain.TimeForMaximumOfMaximumValues)                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalThermalStrain.LoadStepForMaximumOfMinimumValues)                        | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalThermalStrain.LoadStepForMaximumOfMaximumValues)                        | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalThermalStrain.IsSolved)                                                                          | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalThermalStrain.ScopingMethod)                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalThermalStrain.SetNumber)                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalThermalStrain.CombinationNumber)                                                        | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalThermalStrain.SolutionCombinationDriver)                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](./../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](./../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](./../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalThermalStrain.WaterfallPanelShowTextOnMosaic)                              | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalThermalStrain.CrackFrontNumber)                                                          | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalThermalStrain.GlobalIDs)                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalThermalStrain.Identifier)                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalThermalStrain.IterationNumber)                                                            | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalThermalStrain.LoadStep)                                                                          | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalThermalStrain.MaximumOccursOn)                                                            | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalThermalStrain.MinimumOccursOn)                                                            | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalThermalStrain.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalThermalStrain.SolverComponentIDs)                                                      | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalThermalStrain.Substep)                                                                            | Gets the Substep.                                                      |
| [`Average`](#DirectionalThermalStrain.Average)                                                                            | Gets the Average.                                                      |
| [`Maximum`](#DirectionalThermalStrain.Maximum)                                                                            | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalThermalStrain.MaximumOfMaximumOverTime)                                          | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalThermalStrain.MaximumOfMinimumOverTime)                                          | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalThermalStrain.Minimum)                                                                            | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalThermalStrain.MinimumOfMaximumOverTime)                                          | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalThermalStrain.MinimumOfMinimumOverTime)                                          | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalThermalStrain.Time)                                                                                  | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalThermalStrain.DisplayTime)                                                                    | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalThermalStrain.DisplayOption)                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalThermalStrain.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalThermalStrain.By)                                                                                      | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalThermalStrain.ItemType)                                                                          | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalThermalStrain.CalculateTimeHistory)                                                  | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalThermalStrain.Suppressed)                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalThermalStrain.Children)                                                                          | Gets the list of children.                                             |
| [`Comments`](#DirectionalThermalStrain.Comments)                                                                          | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalThermalStrain.Figures)                                                                            | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalThermalStrain.Images)                                                                              | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalThermalStrain.Properties)                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalThermalStrain.VisibleProperties)                                                        | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import DirectionalThermalStrain
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalThermalStrain.InternalObject"></a>

### *property* DirectionalThermalStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.NormalOrientation"></a>

### *property* DirectionalThermalStrain.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.DataModelObjectCategory"></a>

### *property* DirectionalThermalStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Mode"></a>

### *property* DirectionalThermalStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Ply"></a>

### *property* DirectionalThermalStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](./../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Plies"></a>

### *property* DirectionalThermalStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](./../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.EnvironmentSelection"></a>

### *property* DirectionalThermalStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](./../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.HarmonicIndex"></a>

### *property* DirectionalThermalStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.CyclicMode"></a>

### *property* DirectionalThermalStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.IterationStep"></a>

### *property* DirectionalThermalStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.LoadMultiplier"></a>

### *property* DirectionalThermalStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.ReportedFrequency"></a>

### *property* DirectionalThermalStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.SweepingPhase"></a>

### *property* DirectionalThermalStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.PhaseIncrement"></a>

### *property* DirectionalThermalStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Frequency"></a>

### *property* DirectionalThermalStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Position"></a>

### *property* DirectionalThermalStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](./../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.StressStrainType"></a>

### *property* DirectionalThermalStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.SubScopeBy"></a>

### *property* DirectionalThermalStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](./../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Amplitude"></a>

### *property* DirectionalThermalStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.AverageAcrossBodies"></a>

### *property* DirectionalThermalStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.PlotData"></a>

### *property* DirectionalThermalStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](./../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Location"></a>

### *property* DirectionalThermalStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalThermalStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalThermalStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalThermalStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalThermalStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalThermalStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalThermalStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalThermalStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalThermalStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.IsSolved"></a>

### *property* DirectionalThermalStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.CoordinateSystem"></a>

### *property* DirectionalThermalStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.ScopingMethod"></a>

### *property* DirectionalThermalStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.SetNumber"></a>

### *property* DirectionalThermalStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.CombinationNumber"></a>

### *property* DirectionalThermalStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.SolutionCombinationDriver"></a>

### *property* DirectionalThermalStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](./../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Path"></a>

### *property* DirectionalThermalStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](./../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Surface"></a>

### *property* DirectionalThermalStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.NamedSelections"></a>

### *property* DirectionalThermalStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalThermalStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.CrackFrontNumber"></a>

### *property* DirectionalThermalStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.GlobalIDs"></a>

### *property* DirectionalThermalStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Identifier"></a>

### *property* DirectionalThermalStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.IterationNumber"></a>

### *property* DirectionalThermalStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.LoadStep"></a>

### *property* DirectionalThermalStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.MaximumOccursOn"></a>

### *property* DirectionalThermalStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.MinimumOccursOn"></a>

### *property* DirectionalThermalStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.LoadStepNumber"></a>

### *property* DirectionalThermalStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.SolverComponentIDs"></a>

### *property* DirectionalThermalStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Substep"></a>

### *property* DirectionalThermalStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Average"></a>

### *property* DirectionalThermalStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Maximum"></a>

### *property* DirectionalThermalStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.MaximumOfMaximumOverTime"></a>

### *property* DirectionalThermalStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.MaximumOfMinimumOverTime"></a>

### *property* DirectionalThermalStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Minimum"></a>

### *property* DirectionalThermalStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.MinimumOfMaximumOverTime"></a>

### *property* DirectionalThermalStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.MinimumOfMinimumOverTime"></a>

### *property* DirectionalThermalStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Time"></a>

### *property* DirectionalThermalStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.DisplayTime"></a>

### *property* DirectionalThermalStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.GraphControlsXAxis"></a>

### *property* DirectionalThermalStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.DisplayOption"></a>

### *property* DirectionalThermalStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](./../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.DpfEvaluation"></a>

### *property* DirectionalThermalStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.By"></a>

### *property* DirectionalThermalStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](./../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.ItemType"></a>

### *property* DirectionalThermalStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](./../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.CalculateTimeHistory"></a>

### *property* DirectionalThermalStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Suppressed"></a>

### *property* DirectionalThermalStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Children"></a>

### *property* DirectionalThermalStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Comments"></a>

### *property* DirectionalThermalStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Figures"></a>

### *property* DirectionalThermalStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Images"></a>

### *property* DirectionalThermalStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalThermalStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Properties"></a>

### *property* DirectionalThermalStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.VisibleProperties"></a>

### *property* DirectionalThermalStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalThermalStrain.ClearGeneratedData"></a>

### DirectionalThermalStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.EvaluateAllResults"></a>

### DirectionalThermalStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.FetchRemoteResults"></a>

### DirectionalThermalStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.ExportToTextFile"></a>

### DirectionalThermalStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.ExportAnimation"></a>

### DirectionalThermalStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.DuplicateWithoutResults"></a>

### DirectionalThermalStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.CreateResultsAtAllSets"></a>

### DirectionalThermalStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.PromoteToNamedSelection"></a>

### DirectionalThermalStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.CreateParameter"></a>

### DirectionalThermalStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.AddAlert"></a>

### DirectionalThermalStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.AddConvergence"></a>

### DirectionalThermalStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.RenameBasedOnDefinition"></a>

### DirectionalThermalStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Delete"></a>

### DirectionalThermalStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.GetChildren"></a>

### DirectionalThermalStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalThermalStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.AddComment"></a>

### DirectionalThermalStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.AddFigure"></a>

### DirectionalThermalStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.AddImage"></a>

### DirectionalThermalStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Activate"></a>

### DirectionalThermalStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.CopyTo"></a>

### DirectionalThermalStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.Duplicate"></a>

### DirectionalThermalStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.GroupAllSimilarChildren"></a>

### DirectionalThermalStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.GroupSimilarObjects"></a>

### DirectionalThermalStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.PropertyByName"></a>

### DirectionalThermalStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.PropertyByAPIName"></a>

### DirectionalThermalStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.GetParameter"></a>

### DirectionalThermalStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalThermalStrain.RemoveParameter"></a>

### DirectionalThermalStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
