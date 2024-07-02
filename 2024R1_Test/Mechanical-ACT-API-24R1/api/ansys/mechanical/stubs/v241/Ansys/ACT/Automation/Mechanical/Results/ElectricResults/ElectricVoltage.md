# `ElectricVoltage`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.ElectricVoltage"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.ElectricVoltage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElectricVoltage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ElectricVoltage.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ElectricVoltage.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ElectricVoltage.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ElectricVoltage.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ElectricVoltage.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ElectricVoltage.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ElectricVoltage.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ElectricVoltage.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ElectricVoltage.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ElectricVoltage.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ElectricVoltage.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ElectricVoltage.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElectricVoltage.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElectricVoltage.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectricVoltage.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectricVoltage.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElectricVoltage.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElectricVoltage.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElectricVoltage.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElectricVoltage.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectricVoltage.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElectricVoltage.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElectricVoltage.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ElectricVoltage.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElectricVoltage.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#ElectricVoltage.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#ElectricVoltage.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#ElectricVoltage.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#ElectricVoltage.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#ElectricVoltage.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#ElectricVoltage.ElectricResultType)                               | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#ElectricVoltage.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#ElectricVoltage.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#ElectricVoltage.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#ElectricVoltage.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ElectricVoltage.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ElectricVoltage.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ElectricVoltage.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ElectricVoltage.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ElectricVoltage.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ElectricVoltage.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ElectricVoltage.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ElectricVoltage.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ElectricVoltage.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#ElectricVoltage.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ElectricVoltage.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ElectricVoltage.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ElectricVoltage.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ElectricVoltage.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#ElectricVoltage.Path)                                                           | Path property.                                                         |
| [`Surface`](#ElectricVoltage.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](#ElectricVoltage.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ElectricVoltage.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ElectricVoltage.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ElectricVoltage.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ElectricVoltage.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ElectricVoltage.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#ElectricVoltage.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ElectricVoltage.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ElectricVoltage.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ElectricVoltage.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ElectricVoltage.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ElectricVoltage.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#ElectricVoltage.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#ElectricVoltage.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ElectricVoltage.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ElectricVoltage.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ElectricVoltage.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ElectricVoltage.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ElectricVoltage.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ElectricVoltage.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#ElectricVoltage.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#ElectricVoltage.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ElectricVoltage.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ElectricVoltage.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ElectricVoltage.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#ElectricVoltage.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ElectricVoltage.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ElectricVoltage.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#ElectricVoltage.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#ElectricVoltage.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#ElectricVoltage.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#ElectricVoltage.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ElectricVoltage.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ElectricVoltage.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="ElectricVoltage.InternalObject"></a>

### *property* ElectricVoltage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.DataModelObjectCategory"></a>

### *property* ElectricVoltage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.ReportedFrequency"></a>

### *property* ElectricVoltage.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.SweepingPhase"></a>

### *property* ElectricVoltage.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.PhaseIncrement"></a>

### *property* ElectricVoltage.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Frequency"></a>

### *property* ElectricVoltage.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.ElectricResultType"></a>

### *property* ElectricVoltage.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Amplitude"></a>

### *property* ElectricVoltage.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.AverageAcrossBodies"></a>

### *property* ElectricVoltage.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.PlotData"></a>

### *property* ElectricVoltage.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Location"></a>

### *property* ElectricVoltage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.TimeForMinimumOfMinimumValues"></a>

### *property* ElectricVoltage.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.TimeForMinimumOfMaximumValues"></a>

### *property* ElectricVoltage.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElectricVoltage.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElectricVoltage.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.TimeForMaximumOfMinimumValues"></a>

### *property* ElectricVoltage.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.TimeForMaximumOfMaximumValues"></a>

### *property* ElectricVoltage.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElectricVoltage.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElectricVoltage.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.IsSolved"></a>

### *property* ElectricVoltage.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.CoordinateSystem"></a>

### *property* ElectricVoltage.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.ScopingMethod"></a>

### *property* ElectricVoltage.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.SetNumber"></a>

### *property* ElectricVoltage.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.CombinationNumber"></a>

### *property* ElectricVoltage.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.SolutionCombinationDriver"></a>

### *property* ElectricVoltage.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Path"></a>

### *property* ElectricVoltage.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Surface"></a>

### *property* ElectricVoltage.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.NamedSelections"></a>

### *property* ElectricVoltage.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.WaterfallPanelShowTextOnMosaic"></a>

### *property* ElectricVoltage.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.CrackFrontNumber"></a>

### *property* ElectricVoltage.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.GlobalIDs"></a>

### *property* ElectricVoltage.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Identifier"></a>

### *property* ElectricVoltage.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.IterationNumber"></a>

### *property* ElectricVoltage.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.LoadStep"></a>

### *property* ElectricVoltage.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.MaximumOccursOn"></a>

### *property* ElectricVoltage.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.MinimumOccursOn"></a>

### *property* ElectricVoltage.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.LoadStepNumber"></a>

### *property* ElectricVoltage.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.SolverComponentIDs"></a>

### *property* ElectricVoltage.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Substep"></a>

### *property* ElectricVoltage.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Average"></a>

### *property* ElectricVoltage.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Maximum"></a>

### *property* ElectricVoltage.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.MaximumOfMaximumOverTime"></a>

### *property* ElectricVoltage.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.MaximumOfMinimumOverTime"></a>

### *property* ElectricVoltage.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Minimum"></a>

### *property* ElectricVoltage.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.MinimumOfMaximumOverTime"></a>

### *property* ElectricVoltage.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.MinimumOfMinimumOverTime"></a>

### *property* ElectricVoltage.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Time"></a>

### *property* ElectricVoltage.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.DisplayTime"></a>

### *property* ElectricVoltage.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.GraphControlsXAxis"></a>

### *property* ElectricVoltage.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.DisplayOption"></a>

### *property* ElectricVoltage.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.DpfEvaluation"></a>

### *property* ElectricVoltage.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.By"></a>

### *property* ElectricVoltage.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.ItemType"></a>

### *property* ElectricVoltage.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.CalculateTimeHistory"></a>

### *property* ElectricVoltage.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Suppressed"></a>

### *property* ElectricVoltage.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Children"></a>

### *property* ElectricVoltage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Comments"></a>

### *property* ElectricVoltage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Figures"></a>

### *property* ElectricVoltage.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Images"></a>

### *property* ElectricVoltage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElectricVoltage.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Properties"></a>

### *property* ElectricVoltage.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.VisibleProperties"></a>

### *property* ElectricVoltage.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectricVoltage.ClearGeneratedData"></a>

### ElectricVoltage.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.EvaluateAllResults"></a>

### ElectricVoltage.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.FetchRemoteResults"></a>

### ElectricVoltage.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.ExportToTextFile"></a>

### ElectricVoltage.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.ExportAnimation"></a>

### ElectricVoltage.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.DuplicateWithoutResults"></a>

### ElectricVoltage.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.CreateResultsAtAllSets"></a>

### ElectricVoltage.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.PromoteToNamedSelection"></a>

### ElectricVoltage.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.CreateParameter"></a>

### ElectricVoltage.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.AddAlert"></a>

### ElectricVoltage.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.AddConvergence"></a>

### ElectricVoltage.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.RenameBasedOnDefinition"></a>

### ElectricVoltage.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Delete"></a>

### ElectricVoltage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.GetChildren"></a>

### ElectricVoltage.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElectricVoltage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.AddComment"></a>

### ElectricVoltage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.AddFigure"></a>

### ElectricVoltage.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.AddImage"></a>

### ElectricVoltage.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Activate"></a>

### ElectricVoltage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.CopyTo"></a>

### ElectricVoltage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.Duplicate"></a>

### ElectricVoltage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.GroupAllSimilarChildren"></a>

### ElectricVoltage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.GroupSimilarObjects"></a>

### ElectricVoltage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.PropertyByName"></a>

### ElectricVoltage.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.PropertyByAPIName"></a>

### ElectricVoltage.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.GetParameter"></a>

### ElectricVoltage.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltage.RemoveParameter"></a>

### ElectricVoltage.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

