# `MiddlePrincipalThermalStrain`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalThermalStrain"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalThermalStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MiddlePrincipalThermalStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MiddlePrincipalThermalStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MiddlePrincipalThermalStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MiddlePrincipalThermalStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MiddlePrincipalThermalStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MiddlePrincipalThermalStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MiddlePrincipalThermalStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MiddlePrincipalThermalStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MiddlePrincipalThermalStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MiddlePrincipalThermalStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MiddlePrincipalThermalStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MiddlePrincipalThermalStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MiddlePrincipalThermalStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MiddlePrincipalThermalStrain.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MiddlePrincipalThermalStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MiddlePrincipalThermalStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MiddlePrincipalThermalStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MiddlePrincipalThermalStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MiddlePrincipalThermalStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MiddlePrincipalThermalStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MiddlePrincipalThermalStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MiddlePrincipalThermalStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MiddlePrincipalThermalStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MiddlePrincipalThermalStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MiddlePrincipalThermalStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MiddlePrincipalThermalStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#MiddlePrincipalThermalStrain.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MiddlePrincipalThermalStrain.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#MiddlePrincipalThermalStrain.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#MiddlePrincipalThermalStrain.Plies)                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](#MiddlePrincipalThermalStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#MiddlePrincipalThermalStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#MiddlePrincipalThermalStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#MiddlePrincipalThermalStrain.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#MiddlePrincipalThermalStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#MiddlePrincipalThermalStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#MiddlePrincipalThermalStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#MiddlePrincipalThermalStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#MiddlePrincipalThermalStrain.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Position`](#MiddlePrincipalThermalStrain.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](#MiddlePrincipalThermalStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#MiddlePrincipalThermalStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#MiddlePrincipalThermalStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#MiddlePrincipalThermalStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#MiddlePrincipalThermalStrain.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#MiddlePrincipalThermalStrain.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MiddlePrincipalThermalStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MiddlePrincipalThermalStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MiddlePrincipalThermalStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MiddlePrincipalThermalStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MiddlePrincipalThermalStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MiddlePrincipalThermalStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MiddlePrincipalThermalStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MiddlePrincipalThermalStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MiddlePrincipalThermalStrain.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#MiddlePrincipalThermalStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MiddlePrincipalThermalStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MiddlePrincipalThermalStrain.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MiddlePrincipalThermalStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MiddlePrincipalThermalStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#MiddlePrincipalThermalStrain.Path)                                                           | Path property.                                                         |
| [`Surface`](#MiddlePrincipalThermalStrain.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](#MiddlePrincipalThermalStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MiddlePrincipalThermalStrain.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MiddlePrincipalThermalStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MiddlePrincipalThermalStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MiddlePrincipalThermalStrain.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MiddlePrincipalThermalStrain.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MiddlePrincipalThermalStrain.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MiddlePrincipalThermalStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MiddlePrincipalThermalStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MiddlePrincipalThermalStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MiddlePrincipalThermalStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MiddlePrincipalThermalStrain.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#MiddlePrincipalThermalStrain.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#MiddlePrincipalThermalStrain.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MiddlePrincipalThermalStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MiddlePrincipalThermalStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MiddlePrincipalThermalStrain.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MiddlePrincipalThermalStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MiddlePrincipalThermalStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MiddlePrincipalThermalStrain.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#MiddlePrincipalThermalStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#MiddlePrincipalThermalStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MiddlePrincipalThermalStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MiddlePrincipalThermalStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MiddlePrincipalThermalStrain.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#MiddlePrincipalThermalStrain.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MiddlePrincipalThermalStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MiddlePrincipalThermalStrain.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#MiddlePrincipalThermalStrain.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#MiddlePrincipalThermalStrain.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#MiddlePrincipalThermalStrain.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#MiddlePrincipalThermalStrain.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MiddlePrincipalThermalStrain.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MiddlePrincipalThermalStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MiddlePrincipalThermalStrain.InternalObject"></a>

### *property* MiddlePrincipalThermalStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.DataModelObjectCategory"></a>

### *property* MiddlePrincipalThermalStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Mode"></a>

### *property* MiddlePrincipalThermalStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Ply"></a>

### *property* MiddlePrincipalThermalStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Plies"></a>

### *property* MiddlePrincipalThermalStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.EnvironmentSelection"></a>

### *property* MiddlePrincipalThermalStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.HarmonicIndex"></a>

### *property* MiddlePrincipalThermalStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.CyclicMode"></a>

### *property* MiddlePrincipalThermalStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.IterationStep"></a>

### *property* MiddlePrincipalThermalStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.LoadMultiplier"></a>

### *property* MiddlePrincipalThermalStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.ReportedFrequency"></a>

### *property* MiddlePrincipalThermalStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.SweepingPhase"></a>

### *property* MiddlePrincipalThermalStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.PhaseIncrement"></a>

### *property* MiddlePrincipalThermalStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Frequency"></a>

### *property* MiddlePrincipalThermalStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Position"></a>

### *property* MiddlePrincipalThermalStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.StressStrainType"></a>

### *property* MiddlePrincipalThermalStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.SubScopeBy"></a>

### *property* MiddlePrincipalThermalStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Amplitude"></a>

### *property* MiddlePrincipalThermalStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.AverageAcrossBodies"></a>

### *property* MiddlePrincipalThermalStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.PlotData"></a>

### *property* MiddlePrincipalThermalStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Location"></a>

### *property* MiddlePrincipalThermalStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.TimeForMinimumOfMinimumValues"></a>

### *property* MiddlePrincipalThermalStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.TimeForMinimumOfMaximumValues"></a>

### *property* MiddlePrincipalThermalStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* MiddlePrincipalThermalStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* MiddlePrincipalThermalStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.TimeForMaximumOfMinimumValues"></a>

### *property* MiddlePrincipalThermalStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.TimeForMaximumOfMaximumValues"></a>

### *property* MiddlePrincipalThermalStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* MiddlePrincipalThermalStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* MiddlePrincipalThermalStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.IsSolved"></a>

### *property* MiddlePrincipalThermalStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.CoordinateSystem"></a>

### *property* MiddlePrincipalThermalStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.ScopingMethod"></a>

### *property* MiddlePrincipalThermalStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.SetNumber"></a>

### *property* MiddlePrincipalThermalStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.CombinationNumber"></a>

### *property* MiddlePrincipalThermalStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.SolutionCombinationDriver"></a>

### *property* MiddlePrincipalThermalStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Path"></a>

### *property* MiddlePrincipalThermalStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Surface"></a>

### *property* MiddlePrincipalThermalStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.NamedSelections"></a>

### *property* MiddlePrincipalThermalStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.WaterfallPanelShowTextOnMosaic"></a>

### *property* MiddlePrincipalThermalStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.CrackFrontNumber"></a>

### *property* MiddlePrincipalThermalStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.GlobalIDs"></a>

### *property* MiddlePrincipalThermalStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Identifier"></a>

### *property* MiddlePrincipalThermalStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.IterationNumber"></a>

### *property* MiddlePrincipalThermalStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.LoadStep"></a>

### *property* MiddlePrincipalThermalStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.MaximumOccursOn"></a>

### *property* MiddlePrincipalThermalStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.MinimumOccursOn"></a>

### *property* MiddlePrincipalThermalStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.LoadStepNumber"></a>

### *property* MiddlePrincipalThermalStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.SolverComponentIDs"></a>

### *property* MiddlePrincipalThermalStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Substep"></a>

### *property* MiddlePrincipalThermalStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Average"></a>

### *property* MiddlePrincipalThermalStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Maximum"></a>

### *property* MiddlePrincipalThermalStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.MaximumOfMaximumOverTime"></a>

### *property* MiddlePrincipalThermalStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.MaximumOfMinimumOverTime"></a>

### *property* MiddlePrincipalThermalStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Minimum"></a>

### *property* MiddlePrincipalThermalStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.MinimumOfMaximumOverTime"></a>

### *property* MiddlePrincipalThermalStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.MinimumOfMinimumOverTime"></a>

### *property* MiddlePrincipalThermalStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Time"></a>

### *property* MiddlePrincipalThermalStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.DisplayTime"></a>

### *property* MiddlePrincipalThermalStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.GraphControlsXAxis"></a>

### *property* MiddlePrincipalThermalStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.DisplayOption"></a>

### *property* MiddlePrincipalThermalStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.DpfEvaluation"></a>

### *property* MiddlePrincipalThermalStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.By"></a>

### *property* MiddlePrincipalThermalStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.ItemType"></a>

### *property* MiddlePrincipalThermalStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.CalculateTimeHistory"></a>

### *property* MiddlePrincipalThermalStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Suppressed"></a>

### *property* MiddlePrincipalThermalStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Children"></a>

### *property* MiddlePrincipalThermalStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Comments"></a>

### *property* MiddlePrincipalThermalStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Figures"></a>

### *property* MiddlePrincipalThermalStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Images"></a>

### *property* MiddlePrincipalThermalStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MiddlePrincipalThermalStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Properties"></a>

### *property* MiddlePrincipalThermalStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.VisibleProperties"></a>

### *property* MiddlePrincipalThermalStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MiddlePrincipalThermalStrain.ClearGeneratedData"></a>

### MiddlePrincipalThermalStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.EvaluateAllResults"></a>

### MiddlePrincipalThermalStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.FetchRemoteResults"></a>

### MiddlePrincipalThermalStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.ExportToTextFile"></a>

### MiddlePrincipalThermalStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.ExportAnimation"></a>

### MiddlePrincipalThermalStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.DuplicateWithoutResults"></a>

### MiddlePrincipalThermalStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.CreateResultsAtAllSets"></a>

### MiddlePrincipalThermalStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.PromoteToNamedSelection"></a>

### MiddlePrincipalThermalStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.CreateParameter"></a>

### MiddlePrincipalThermalStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.AddAlert"></a>

### MiddlePrincipalThermalStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.AddConvergence"></a>

### MiddlePrincipalThermalStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.RenameBasedOnDefinition"></a>

### MiddlePrincipalThermalStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Delete"></a>

### MiddlePrincipalThermalStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.GetChildren"></a>

### MiddlePrincipalThermalStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MiddlePrincipalThermalStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.AddComment"></a>

### MiddlePrincipalThermalStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.AddFigure"></a>

### MiddlePrincipalThermalStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.AddImage"></a>

### MiddlePrincipalThermalStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Activate"></a>

### MiddlePrincipalThermalStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.CopyTo"></a>

### MiddlePrincipalThermalStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.Duplicate"></a>

### MiddlePrincipalThermalStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.GroupAllSimilarChildren"></a>

### MiddlePrincipalThermalStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.GroupSimilarObjects"></a>

### MiddlePrincipalThermalStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.PropertyByName"></a>

### MiddlePrincipalThermalStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.PropertyByAPIName"></a>

### MiddlePrincipalThermalStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.GetParameter"></a>

### MiddlePrincipalThermalStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalThermalStrain.RemoveParameter"></a>

### MiddlePrincipalThermalStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

