<!-- vale off -->

<a id="acousticabsorptioncoefficient"></a>

# `AcousticAbsorptionCoefficient`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAbsorptionCoefficient"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAbsorptionCoefficient

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticAbsorptionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AcousticAbsorptionCoefficient.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticAbsorptionCoefficient.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticAbsorptionCoefficient.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticAbsorptionCoefficient.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticAbsorptionCoefficient.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticAbsorptionCoefficient.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticAbsorptionCoefficient.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticAbsorptionCoefficient.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticAbsorptionCoefficient.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticAbsorptionCoefficient.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticAbsorptionCoefficient.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticAbsorptionCoefficient.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticAbsorptionCoefficient.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticAbsorptionCoefficient.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticAbsorptionCoefficient.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticAbsorptionCoefficient.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticAbsorptionCoefficient.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticAbsorptionCoefficient.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticAbsorptionCoefficient.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticAbsorptionCoefficient.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticAbsorptionCoefficient.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticAbsorptionCoefficient.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticAbsorptionCoefficient.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticAbsorptionCoefficient.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticAbsorptionCoefficient.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InputPort`](#AcousticAbsorptionCoefficient.InputPort)                                                 | Gets or sets the InputPort.                                            |
| [`InternalObject`](#id0)                                                                                | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#AcousticAbsorptionCoefficient.MaximumFrequency)                                   | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#AcousticAbsorptionCoefficient.MinimumFrequency)                                   | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#AcousticAbsorptionCoefficient.FrequencyRange)                                       | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](#AcousticAbsorptionCoefficient.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticAbsorptionCoefficient.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticAbsorptionCoefficient.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticAbsorptionCoefficient.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticAbsorptionCoefficient.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticAbsorptionCoefficient.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticAbsorptionCoefficient.Stability)                                                 | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticAbsorptionCoefficient.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticAbsorptionCoefficient.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticAbsorptionCoefficient.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticAbsorptionCoefficient.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#AcousticAbsorptionCoefficient.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticAbsorptionCoefficient.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticAbsorptionCoefficient.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticAbsorptionCoefficient.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticAbsorptionCoefficient.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticAbsorptionCoefficient.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticAbsorptionCoefficient.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticAbsorptionCoefficient.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticAbsorptionCoefficient.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticAbsorptionCoefficient.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#AcousticAbsorptionCoefficient.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticAbsorptionCoefficient.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticAbsorptionCoefficient.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticAbsorptionCoefficient.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticAbsorptionCoefficient.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#AcousticAbsorptionCoefficient.Path)                                                           | Path property.                                                         |
| [`Surface`](#AcousticAbsorptionCoefficient.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](#AcousticAbsorptionCoefficient.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticAbsorptionCoefficient.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticAbsorptionCoefficient.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticAbsorptionCoefficient.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticAbsorptionCoefficient.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticAbsorptionCoefficient.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticAbsorptionCoefficient.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticAbsorptionCoefficient.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticAbsorptionCoefficient.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticAbsorptionCoefficient.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticAbsorptionCoefficient.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticAbsorptionCoefficient.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#AcousticAbsorptionCoefficient.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#AcousticAbsorptionCoefficient.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticAbsorptionCoefficient.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticAbsorptionCoefficient.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticAbsorptionCoefficient.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticAbsorptionCoefficient.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticAbsorptionCoefficient.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticAbsorptionCoefficient.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticAbsorptionCoefficient.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#AcousticAbsorptionCoefficient.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticAbsorptionCoefficient.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticAbsorptionCoefficient.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticAbsorptionCoefficient.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticAbsorptionCoefficient.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticAbsorptionCoefficient.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticAbsorptionCoefficient.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticAbsorptionCoefficient.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#AcousticAbsorptionCoefficient.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticAbsorptionCoefficient.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#AcousticAbsorptionCoefficient.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticAbsorptionCoefficient.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticAbsorptionCoefficient.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="AcousticAbsorptionCoefficient.InputPort"></a>

### *property* AcousticAbsorptionCoefficient.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.InternalObject"></a>

### *property* AcousticAbsorptionCoefficient.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.MaximumFrequency"></a>

### *property* AcousticAbsorptionCoefficient.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.MinimumFrequency"></a>

### *property* AcousticAbsorptionCoefficient.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.FrequencyRange"></a>

### *property* AcousticAbsorptionCoefficient.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.DataModelObjectCategory"></a>

### *property* AcousticAbsorptionCoefficient.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Mode"></a>

### *property* AcousticAbsorptionCoefficient.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.ReportedFrequency"></a>

### *property* AcousticAbsorptionCoefficient.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.DampedFrequency"></a>

### *property* AcousticAbsorptionCoefficient.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.LogarithmicDecrement"></a>

### *property* AcousticAbsorptionCoefficient.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.ModalDampingRatio"></a>

### *property* AcousticAbsorptionCoefficient.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Stability"></a>

### *property* AcousticAbsorptionCoefficient.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.SweepingPhase"></a>

### *property* AcousticAbsorptionCoefficient.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Frequency"></a>

### *property* AcousticAbsorptionCoefficient.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Amplitude"></a>

### *property* AcousticAbsorptionCoefficient.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.PlotData"></a>

### *property* AcousticAbsorptionCoefficient.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Location"></a>

### *property* AcousticAbsorptionCoefficient.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticAbsorptionCoefficient.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticAbsorptionCoefficient.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticAbsorptionCoefficient.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticAbsorptionCoefficient.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticAbsorptionCoefficient.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticAbsorptionCoefficient.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticAbsorptionCoefficient.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticAbsorptionCoefficient.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.IsSolved"></a>

### *property* AcousticAbsorptionCoefficient.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.CoordinateSystem"></a>

### *property* AcousticAbsorptionCoefficient.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.ScopingMethod"></a>

### *property* AcousticAbsorptionCoefficient.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.SetNumber"></a>

### *property* AcousticAbsorptionCoefficient.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.CombinationNumber"></a>

### *property* AcousticAbsorptionCoefficient.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.SolutionCombinationDriver"></a>

### *property* AcousticAbsorptionCoefficient.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Path"></a>

### *property* AcousticAbsorptionCoefficient.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Surface"></a>

### *property* AcousticAbsorptionCoefficient.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.NamedSelections"></a>

### *property* AcousticAbsorptionCoefficient.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.WaterfallPanelShowTextOnMosaic"></a>

### *property* AcousticAbsorptionCoefficient.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.CrackFrontNumber"></a>

### *property* AcousticAbsorptionCoefficient.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.GlobalIDs"></a>

### *property* AcousticAbsorptionCoefficient.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Identifier"></a>

### *property* AcousticAbsorptionCoefficient.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.IterationNumber"></a>

### *property* AcousticAbsorptionCoefficient.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.LoadStep"></a>

### *property* AcousticAbsorptionCoefficient.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.MaximumOccursOn"></a>

### *property* AcousticAbsorptionCoefficient.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.MinimumOccursOn"></a>

### *property* AcousticAbsorptionCoefficient.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.LoadStepNumber"></a>

### *property* AcousticAbsorptionCoefficient.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.SolverComponentIDs"></a>

### *property* AcousticAbsorptionCoefficient.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Substep"></a>

### *property* AcousticAbsorptionCoefficient.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Average"></a>

### *property* AcousticAbsorptionCoefficient.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Maximum"></a>

### *property* AcousticAbsorptionCoefficient.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.MaximumOfMaximumOverTime"></a>

### *property* AcousticAbsorptionCoefficient.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.MaximumOfMinimumOverTime"></a>

### *property* AcousticAbsorptionCoefficient.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Minimum"></a>

### *property* AcousticAbsorptionCoefficient.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.MinimumOfMaximumOverTime"></a>

### *property* AcousticAbsorptionCoefficient.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.MinimumOfMinimumOverTime"></a>

### *property* AcousticAbsorptionCoefficient.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Time"></a>

### *property* AcousticAbsorptionCoefficient.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.DisplayTime"></a>

### *property* AcousticAbsorptionCoefficient.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.GraphControlsXAxis"></a>

### *property* AcousticAbsorptionCoefficient.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.DisplayOption"></a>

### *property* AcousticAbsorptionCoefficient.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.DpfEvaluation"></a>

### *property* AcousticAbsorptionCoefficient.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.By"></a>

### *property* AcousticAbsorptionCoefficient.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.ItemType"></a>

### *property* AcousticAbsorptionCoefficient.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.CalculateTimeHistory"></a>

### *property* AcousticAbsorptionCoefficient.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Suppressed"></a>

### *property* AcousticAbsorptionCoefficient.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Children"></a>

### *property* AcousticAbsorptionCoefficient.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Comments"></a>

### *property* AcousticAbsorptionCoefficient.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Figures"></a>

### *property* AcousticAbsorptionCoefficient.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Images"></a>

### *property* AcousticAbsorptionCoefficient.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticAbsorptionCoefficient.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Properties"></a>

### *property* AcousticAbsorptionCoefficient.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.VisibleProperties"></a>

### *property* AcousticAbsorptionCoefficient.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAbsorptionCoefficient.ClearGeneratedData"></a>

### AcousticAbsorptionCoefficient.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.EvaluateAllResults"></a>

### AcousticAbsorptionCoefficient.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.FetchRemoteResults"></a>

### AcousticAbsorptionCoefficient.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.ExportToTextFile"></a>

### AcousticAbsorptionCoefficient.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.ExportAnimation"></a>

### AcousticAbsorptionCoefficient.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.DuplicateWithoutResults"></a>

### AcousticAbsorptionCoefficient.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.CreateResultsAtAllSets"></a>

### AcousticAbsorptionCoefficient.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.PromoteToNamedSelection"></a>

### AcousticAbsorptionCoefficient.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.CreateParameter"></a>

### AcousticAbsorptionCoefficient.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.AddAlert"></a>

### AcousticAbsorptionCoefficient.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.AddConvergence"></a>

### AcousticAbsorptionCoefficient.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.RenameBasedOnDefinition"></a>

### AcousticAbsorptionCoefficient.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Delete"></a>

### AcousticAbsorptionCoefficient.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.GetChildren"></a>

### AcousticAbsorptionCoefficient.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticAbsorptionCoefficient.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.AddComment"></a>

### AcousticAbsorptionCoefficient.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.AddFigure"></a>

### AcousticAbsorptionCoefficient.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.AddImage"></a>

### AcousticAbsorptionCoefficient.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Activate"></a>

### AcousticAbsorptionCoefficient.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.CopyTo"></a>

### AcousticAbsorptionCoefficient.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.Duplicate"></a>

### AcousticAbsorptionCoefficient.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.GroupAllSimilarChildren"></a>

### AcousticAbsorptionCoefficient.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.GroupSimilarObjects"></a>

### AcousticAbsorptionCoefficient.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.PropertyByName"></a>

### AcousticAbsorptionCoefficient.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.PropertyByAPIName"></a>

### AcousticAbsorptionCoefficient.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.GetParameter"></a>

### AcousticAbsorptionCoefficient.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionCoefficient.RemoveParameter"></a>

### AcousticAbsorptionCoefficient.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
