# `MaximumPrincipalThermalStrain`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumPrincipalThermalStrain"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumPrincipalThermalStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MaximumPrincipalThermalStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MaximumPrincipalThermalStrain.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#MaximumPrincipalThermalStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#MaximumPrincipalThermalStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#MaximumPrincipalThermalStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#MaximumPrincipalThermalStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MaximumPrincipalThermalStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MaximumPrincipalThermalStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#MaximumPrincipalThermalStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MaximumPrincipalThermalStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#MaximumPrincipalThermalStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#MaximumPrincipalThermalStrain.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MaximumPrincipalThermalStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#MaximumPrincipalThermalStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MaximumPrincipalThermalStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#MaximumPrincipalThermalStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#MaximumPrincipalThermalStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#MaximumPrincipalThermalStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#MaximumPrincipalThermalStrain.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MaximumPrincipalThermalStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MaximumPrincipalThermalStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaximumPrincipalThermalStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MaximumPrincipalThermalStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MaximumPrincipalThermalStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MaximumPrincipalThermalStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MaximumPrincipalThermalStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MaximumPrincipalThermalStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Amplitude`](#MaximumPrincipalThermalStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`Average`](#MaximumPrincipalThermalStrain.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#MaximumPrincipalThermalStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#MaximumPrincipalThermalStrain.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#MaximumPrincipalThermalStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#MaximumPrincipalThermalStrain.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#MaximumPrincipalThermalStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#MaximumPrincipalThermalStrain.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#MaximumPrincipalThermalStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#MaximumPrincipalThermalStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`CyclicMode`](#MaximumPrincipalThermalStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`DataModelObjectCategory`](#MaximumPrincipalThermalStrain.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#MaximumPrincipalThermalStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#MaximumPrincipalThermalStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#MaximumPrincipalThermalStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`EnvironmentSelection`](#MaximumPrincipalThermalStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`Figures`](#MaximumPrincipalThermalStrain.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Frequency`](#MaximumPrincipalThermalStrain.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`GlobalIDs`](#MaximumPrincipalThermalStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#MaximumPrincipalThermalStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`HarmonicIndex`](#MaximumPrincipalThermalStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`Identifier`](#MaximumPrincipalThermalStrain.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#MaximumPrincipalThermalStrain.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#MaximumPrincipalThermalStrain.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#MaximumPrincipalThermalStrain.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#MaximumPrincipalThermalStrain.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#MaximumPrincipalThermalStrain.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`IterationStep`](#MaximumPrincipalThermalStrain.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#MaximumPrincipalThermalStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#MaximumPrincipalThermalStrain.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#MaximumPrincipalThermalStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#MaximumPrincipalThermalStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MaximumPrincipalThermalStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#MaximumPrincipalThermalStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#MaximumPrincipalThermalStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#MaximumPrincipalThermalStrain.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#MaximumPrincipalThermalStrain.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#MaximumPrincipalThermalStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#MaximumPrincipalThermalStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MaximumPrincipalThermalStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MaximumPrincipalThermalStrain.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#MaximumPrincipalThermalStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#MaximumPrincipalThermalStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MaximumPrincipalThermalStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#MaximumPrincipalThermalStrain.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#MaximumPrincipalThermalStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#MaximumPrincipalThermalStrain.Path)                                                           | Path property.                                                         |
| [`PhaseIncrement`](#MaximumPrincipalThermalStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Plies`](#MaximumPrincipalThermalStrain.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#MaximumPrincipalThermalStrain.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#MaximumPrincipalThermalStrain.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Position`](#MaximumPrincipalThermalStrain.Position)                                                   | Gets or sets the Position.                                             |
| [`Properties`](#MaximumPrincipalThermalStrain.Properties)                                               | Gets the list of properties for this object.                           |
| [`ReportedFrequency`](#MaximumPrincipalThermalStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`ScopingMethod`](#MaximumPrincipalThermalStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MaximumPrincipalThermalStrain.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#MaximumPrincipalThermalStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#MaximumPrincipalThermalStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`StressStrainType`](#MaximumPrincipalThermalStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#MaximumPrincipalThermalStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Substep`](#MaximumPrincipalThermalStrain.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#MaximumPrincipalThermalStrain.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#MaximumPrincipalThermalStrain.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#MaximumPrincipalThermalStrain.SurfaceCoating)                                                                                                                                                       | SurfaceCoating property.                                               |
| [`SweepingPhase`](#MaximumPrincipalThermalStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Time`](#MaximumPrincipalThermalStrain.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#MaximumPrincipalThermalStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#MaximumPrincipalThermalStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MaximumPrincipalThermalStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#MaximumPrincipalThermalStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#MaximumPrincipalThermalStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#MaximumPrincipalThermalStrain.WaterfallShowTextOnMosaic)                                                                                                                                 | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="MaximumPrincipalThermalStrain.Amplitude"></a>

### *property* MaximumPrincipalThermalStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Average"></a>

### *property* MaximumPrincipalThermalStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AverageAcrossBodies"></a>

### *property* MaximumPrincipalThermalStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.By"></a>

### *property* MaximumPrincipalThermalStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CalculateTimeHistory"></a>

### *property* MaximumPrincipalThermalStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Children"></a>

### *property* MaximumPrincipalThermalStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CombinationNumber"></a>

### *property* MaximumPrincipalThermalStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Comments"></a>

### *property* MaximumPrincipalThermalStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CoordinateSystem"></a>

### *property* MaximumPrincipalThermalStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CrackFrontNumber"></a>

### *property* MaximumPrincipalThermalStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CyclicMode"></a>

### *property* MaximumPrincipalThermalStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DataModelObjectCategory"></a>

### *property* MaximumPrincipalThermalStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DisplayOption"></a>

### *property* MaximumPrincipalThermalStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DisplayTime"></a>

### *property* MaximumPrincipalThermalStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DpfEvaluation"></a>

### *property* MaximumPrincipalThermalStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.EnvironmentSelection"></a>

### *property* MaximumPrincipalThermalStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Figures"></a>

### *property* MaximumPrincipalThermalStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Frequency"></a>

### *property* MaximumPrincipalThermalStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GlobalIDs"></a>

### *property* MaximumPrincipalThermalStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GraphControlsXAxis"></a>

### *property* MaximumPrincipalThermalStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.HarmonicIndex"></a>

### *property* MaximumPrincipalThermalStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Identifier"></a>

### *property* MaximumPrincipalThermalStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Images"></a>

### *property* MaximumPrincipalThermalStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.InternalObject"></a>

### *property* MaximumPrincipalThermalStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IsSolved"></a>

### *property* MaximumPrincipalThermalStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ItemType"></a>

### *property* MaximumPrincipalThermalStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IterationNumber"></a>

### *property* MaximumPrincipalThermalStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IterationStep"></a>

### *property* MaximumPrincipalThermalStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadMultiplier"></a>

### *property* MaximumPrincipalThermalStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStep"></a>

### *property* MaximumPrincipalThermalStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepNumber"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Location"></a>

### *property* MaximumPrincipalThermalStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Maximum"></a>

### *property* MaximumPrincipalThermalStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MaximumOccursOn"></a>

### *property* MaximumPrincipalThermalStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MaximumOfMaximumOverTime"></a>

### *property* MaximumPrincipalThermalStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MaximumOfMinimumOverTime"></a>

### *property* MaximumPrincipalThermalStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Minimum"></a>

### *property* MaximumPrincipalThermalStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MinimumOccursOn"></a>

### *property* MaximumPrincipalThermalStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MinimumOfMaximumOverTime"></a>

### *property* MaximumPrincipalThermalStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MinimumOfMinimumOverTime"></a>

### *property* MaximumPrincipalThermalStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Mode"></a>

### *property* MaximumPrincipalThermalStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.NamedSelections"></a>

### *property* MaximumPrincipalThermalStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Path"></a>

### *property* MaximumPrincipalThermalStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PhaseIncrement"></a>

### *property* MaximumPrincipalThermalStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Plies"></a>

### *property* MaximumPrincipalThermalStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PlotData"></a>

### *property* MaximumPrincipalThermalStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Ply"></a>

### *property* MaximumPrincipalThermalStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Position"></a>

### *property* MaximumPrincipalThermalStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Properties"></a>

### *property* MaximumPrincipalThermalStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ReportedFrequency"></a>

### *property* MaximumPrincipalThermalStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ScopingMethod"></a>

### *property* MaximumPrincipalThermalStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SetNumber"></a>

### *property* MaximumPrincipalThermalStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SolutionCombinationDriver"></a>

### *property* MaximumPrincipalThermalStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SolverComponentIDs"></a>

### *property* MaximumPrincipalThermalStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.StressStrainType"></a>

### *property* MaximumPrincipalThermalStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SubScopeBy"></a>

### *property* MaximumPrincipalThermalStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Substep"></a>

### *property* MaximumPrincipalThermalStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Suppressed"></a>

### *property* MaximumPrincipalThermalStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Surface"></a>

### *property* MaximumPrincipalThermalStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SurfaceCoating"></a>

### *property* MaximumPrincipalThermalStrain.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SweepingPhase"></a>

### *property* MaximumPrincipalThermalStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Time"></a>

### *property* MaximumPrincipalThermalStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TimeForMaximumOfMaximumValues"></a>

### *property* MaximumPrincipalThermalStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TimeForMaximumOfMinimumValues"></a>

### *property* MaximumPrincipalThermalStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TimeForMinimumOfMaximumValues"></a>

### *property* MaximumPrincipalThermalStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TimeForMinimumOfMinimumValues"></a>

### *property* MaximumPrincipalThermalStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.VisibleProperties"></a>

### *property* MaximumPrincipalThermalStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallShowTextOnMosaic"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaximumPrincipalThermalStrain.Activate"></a>

### MaximumPrincipalThermalStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddAlert"></a>

### MaximumPrincipalThermalStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddComment"></a>

### MaximumPrincipalThermalStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddConvergence"></a>

### MaximumPrincipalThermalStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddFigure"></a>

### MaximumPrincipalThermalStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddImage"></a>

### MaximumPrincipalThermalStrain.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ClearGeneratedData"></a>

### MaximumPrincipalThermalStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CopyTo"></a>

### MaximumPrincipalThermalStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CreateParameter"></a>

### MaximumPrincipalThermalStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CreateResultsAtAllSets"></a>

### MaximumPrincipalThermalStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Delete"></a>

### MaximumPrincipalThermalStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Duplicate"></a>

### MaximumPrincipalThermalStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DuplicateWithoutResults"></a>

### MaximumPrincipalThermalStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.EvaluateAllResults"></a>

### MaximumPrincipalThermalStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ExportAnimation"></a>

### MaximumPrincipalThermalStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ExportToTextFile"></a>

### MaximumPrincipalThermalStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.FetchRemoteResults"></a>

### MaximumPrincipalThermalStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetChildren"></a>

### MaximumPrincipalThermalStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetParameter"></a>

### MaximumPrincipalThermalStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GroupAllSimilarChildren"></a>

### MaximumPrincipalThermalStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GroupSimilarObjects"></a>

### MaximumPrincipalThermalStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PromoteToNamedSelection"></a>

### MaximumPrincipalThermalStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PropertyByAPIName"></a>

### MaximumPrincipalThermalStrain.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PropertyByName"></a>

### MaximumPrincipalThermalStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RemoveParameter"></a>

### MaximumPrincipalThermalStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RenameBasedOnDefinition"></a>

### MaximumPrincipalThermalStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

