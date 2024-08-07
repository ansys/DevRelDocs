# `AcousticSoundPressureLevel`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticSoundPressureLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticSoundPressureLevel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AcousticSoundPressureLevel.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticSoundPressureLevel.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticSoundPressureLevel.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticSoundPressureLevel.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticSoundPressureLevel.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticSoundPressureLevel.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticSoundPressureLevel.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticSoundPressureLevel.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticSoundPressureLevel.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticSoundPressureLevel.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticSoundPressureLevel.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticSoundPressureLevel.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticSoundPressureLevel.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticSoundPressureLevel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticSoundPressureLevel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticSoundPressureLevel.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticSoundPressureLevel.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticSoundPressureLevel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticSoundPressureLevel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticSoundPressureLevel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticSoundPressureLevel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticSoundPressureLevel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticSoundPressureLevel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticSoundPressureLevel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticSoundPressureLevel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#AcousticSoundPressureLevel.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](#AcousticSoundPressureLevel.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticSoundPressureLevel.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticSoundPressureLevel.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticSoundPressureLevel.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticSoundPressureLevel.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticSoundPressureLevel.Stability)                                                 | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticSoundPressureLevel.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticSoundPressureLevel.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticSoundPressureLevel.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticSoundPressureLevel.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#AcousticSoundPressureLevel.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticSoundPressureLevel.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticSoundPressureLevel.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticSoundPressureLevel.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticSoundPressureLevel.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticSoundPressureLevel.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticSoundPressureLevel.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticSoundPressureLevel.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticSoundPressureLevel.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticSoundPressureLevel.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#AcousticSoundPressureLevel.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticSoundPressureLevel.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticSoundPressureLevel.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticSoundPressureLevel.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticSoundPressureLevel.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#AcousticSoundPressureLevel.Path)                                                           | Path property.                                                         |
| [`Surface`](#AcousticSoundPressureLevel.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#AcousticSoundPressureLevel.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#AcousticSoundPressureLevel.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#AcousticSoundPressureLevel.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#AcousticSoundPressureLevel.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticSoundPressureLevel.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticSoundPressureLevel.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticSoundPressureLevel.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticSoundPressureLevel.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticSoundPressureLevel.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticSoundPressureLevel.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticSoundPressureLevel.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticSoundPressureLevel.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticSoundPressureLevel.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#AcousticSoundPressureLevel.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#AcousticSoundPressureLevel.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticSoundPressureLevel.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticSoundPressureLevel.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticSoundPressureLevel.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticSoundPressureLevel.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticSoundPressureLevel.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticSoundPressureLevel.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticSoundPressureLevel.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#AcousticSoundPressureLevel.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticSoundPressureLevel.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticSoundPressureLevel.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticSoundPressureLevel.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticSoundPressureLevel.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticSoundPressureLevel.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticSoundPressureLevel.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticSoundPressureLevel.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#AcousticSoundPressureLevel.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticSoundPressureLevel.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#AcousticSoundPressureLevel.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticSoundPressureLevel.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticSoundPressureLevel.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="AcousticSoundPressureLevel.InternalObject"></a>

### *property* AcousticSoundPressureLevel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.DataModelObjectCategory"></a>

### *property* AcousticSoundPressureLevel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Mode"></a>

### *property* AcousticSoundPressureLevel.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.ReportedFrequency"></a>

### *property* AcousticSoundPressureLevel.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.DampedFrequency"></a>

### *property* AcousticSoundPressureLevel.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.LogarithmicDecrement"></a>

### *property* AcousticSoundPressureLevel.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.ModalDampingRatio"></a>

### *property* AcousticSoundPressureLevel.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Stability"></a>

### *property* AcousticSoundPressureLevel.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.SweepingPhase"></a>

### *property* AcousticSoundPressureLevel.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Frequency"></a>

### *property* AcousticSoundPressureLevel.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Amplitude"></a>

### *property* AcousticSoundPressureLevel.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.PlotData"></a>

### *property* AcousticSoundPressureLevel.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Location"></a>

### *property* AcousticSoundPressureLevel.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticSoundPressureLevel.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticSoundPressureLevel.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticSoundPressureLevel.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticSoundPressureLevel.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticSoundPressureLevel.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticSoundPressureLevel.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticSoundPressureLevel.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticSoundPressureLevel.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.IsSolved"></a>

### *property* AcousticSoundPressureLevel.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.CoordinateSystem"></a>

### *property* AcousticSoundPressureLevel.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.ScopingMethod"></a>

### *property* AcousticSoundPressureLevel.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.SetNumber"></a>

### *property* AcousticSoundPressureLevel.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.CombinationNumber"></a>

### *property* AcousticSoundPressureLevel.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.SolutionCombinationDriver"></a>

### *property* AcousticSoundPressureLevel.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Path"></a>

### *property* AcousticSoundPressureLevel.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Surface"></a>

### *property* AcousticSoundPressureLevel.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.SurfaceCoating"></a>

### *property* AcousticSoundPressureLevel.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.NamedSelections"></a>

### *property* AcousticSoundPressureLevel.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.WaterfallShowTextOnMosaic"></a>

### *property* AcousticSoundPressureLevel.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.CrackFrontNumber"></a>

### *property* AcousticSoundPressureLevel.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.GlobalIDs"></a>

### *property* AcousticSoundPressureLevel.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Identifier"></a>

### *property* AcousticSoundPressureLevel.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.IterationNumber"></a>

### *property* AcousticSoundPressureLevel.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.LoadStep"></a>

### *property* AcousticSoundPressureLevel.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.MaximumOccursOn"></a>

### *property* AcousticSoundPressureLevel.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.MinimumOccursOn"></a>

### *property* AcousticSoundPressureLevel.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.LoadStepNumber"></a>

### *property* AcousticSoundPressureLevel.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.SolverComponentIDs"></a>

### *property* AcousticSoundPressureLevel.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Substep"></a>

### *property* AcousticSoundPressureLevel.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Average"></a>

### *property* AcousticSoundPressureLevel.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Maximum"></a>

### *property* AcousticSoundPressureLevel.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.MaximumOfMaximumOverTime"></a>

### *property* AcousticSoundPressureLevel.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.MaximumOfMinimumOverTime"></a>

### *property* AcousticSoundPressureLevel.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Minimum"></a>

### *property* AcousticSoundPressureLevel.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.MinimumOfMaximumOverTime"></a>

### *property* AcousticSoundPressureLevel.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.MinimumOfMinimumOverTime"></a>

### *property* AcousticSoundPressureLevel.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Time"></a>

### *property* AcousticSoundPressureLevel.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.DisplayTime"></a>

### *property* AcousticSoundPressureLevel.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.GraphControlsXAxis"></a>

### *property* AcousticSoundPressureLevel.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.DisplayOption"></a>

### *property* AcousticSoundPressureLevel.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.DpfEvaluation"></a>

### *property* AcousticSoundPressureLevel.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.By"></a>

### *property* AcousticSoundPressureLevel.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.ItemType"></a>

### *property* AcousticSoundPressureLevel.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.CalculateTimeHistory"></a>

### *property* AcousticSoundPressureLevel.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Suppressed"></a>

### *property* AcousticSoundPressureLevel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Children"></a>

### *property* AcousticSoundPressureLevel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Comments"></a>

### *property* AcousticSoundPressureLevel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Figures"></a>

### *property* AcousticSoundPressureLevel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Images"></a>

### *property* AcousticSoundPressureLevel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticSoundPressureLevel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Properties"></a>

### *property* AcousticSoundPressureLevel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.VisibleProperties"></a>

### *property* AcousticSoundPressureLevel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticSoundPressureLevel.ClearGeneratedData"></a>

### AcousticSoundPressureLevel.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.EvaluateAllResults"></a>

### AcousticSoundPressureLevel.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.FetchRemoteResults"></a>

### AcousticSoundPressureLevel.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.ExportToTextFile"></a>

### AcousticSoundPressureLevel.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.ExportAnimation"></a>

### AcousticSoundPressureLevel.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.DuplicateWithoutResults"></a>

### AcousticSoundPressureLevel.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.CreateResultsAtAllSets"></a>

### AcousticSoundPressureLevel.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.PromoteToNamedSelection"></a>

### AcousticSoundPressureLevel.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.CreateParameter"></a>

### AcousticSoundPressureLevel.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.AddAlert"></a>

### AcousticSoundPressureLevel.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.AddConvergence"></a>

### AcousticSoundPressureLevel.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.RenameBasedOnDefinition"></a>

### AcousticSoundPressureLevel.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Delete"></a>

### AcousticSoundPressureLevel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.GetChildren"></a>

### AcousticSoundPressureLevel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticSoundPressureLevel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.AddComment"></a>

### AcousticSoundPressureLevel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.AddFigure"></a>

### AcousticSoundPressureLevel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.AddImage"></a>

### AcousticSoundPressureLevel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Activate"></a>

### AcousticSoundPressureLevel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.CopyTo"></a>

### AcousticSoundPressureLevel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.Duplicate"></a>

### AcousticSoundPressureLevel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.GroupAllSimilarChildren"></a>

### AcousticSoundPressureLevel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.GroupSimilarObjects"></a>

### AcousticSoundPressureLevel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.PropertyByName"></a>

### AcousticSoundPressureLevel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.PropertyByAPIName"></a>

### AcousticSoundPressureLevel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.GetParameter"></a>

### AcousticSoundPressureLevel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSoundPressureLevel.RemoveParameter"></a>

### AcousticSoundPressureLevel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

