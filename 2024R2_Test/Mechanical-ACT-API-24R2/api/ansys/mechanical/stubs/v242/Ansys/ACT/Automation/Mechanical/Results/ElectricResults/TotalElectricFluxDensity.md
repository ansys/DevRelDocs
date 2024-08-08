# `TotalElectricFluxDensity`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFluxDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalElectricFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#TotalElectricFluxDensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#TotalElectricFluxDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#TotalElectricFluxDensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#TotalElectricFluxDensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#TotalElectricFluxDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#TotalElectricFluxDensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#TotalElectricFluxDensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#TotalElectricFluxDensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#TotalElectricFluxDensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#TotalElectricFluxDensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#TotalElectricFluxDensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#TotalElectricFluxDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TotalElectricFluxDensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TotalElectricFluxDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TotalElectricFluxDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalElectricFluxDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TotalElectricFluxDensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TotalElectricFluxDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TotalElectricFluxDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TotalElectricFluxDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalElectricFluxDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TotalElectricFluxDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TotalElectricFluxDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#TotalElectricFluxDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TotalElectricFluxDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                           | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#TotalElectricFluxDensity.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                           |
| [`ReportedFrequency`](#TotalElectricFluxDensity.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#TotalElectricFluxDensity.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#TotalElectricFluxDensity.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#TotalElectricFluxDensity.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#TotalElectricFluxDensity.ElectricResultType)                               | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#TotalElectricFluxDensity.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#TotalElectricFluxDensity.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#TotalElectricFluxDensity.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#TotalElectricFluxDensity.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#TotalElectricFluxDensity.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalElectricFluxDensity.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#TotalElectricFluxDensity.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#TotalElectricFluxDensity.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#TotalElectricFluxDensity.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#TotalElectricFluxDensity.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#TotalElectricFluxDensity.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalElectricFluxDensity.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#TotalElectricFluxDensity.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#TotalElectricFluxDensity.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#TotalElectricFluxDensity.Path)                                                           | Path property.                                                         |
| [`Surface`](#TotalElectricFluxDensity.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#TotalElectricFluxDensity.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#TotalElectricFluxDensity.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#TotalElectricFluxDensity.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#TotalElectricFluxDensity.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#TotalElectricFluxDensity.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#TotalElectricFluxDensity.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#TotalElectricFluxDensity.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#TotalElectricFluxDensity.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#TotalElectricFluxDensity.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#TotalElectricFluxDensity.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#TotalElectricFluxDensity.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#TotalElectricFluxDensity.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TotalElectricFluxDensity.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#TotalElectricFluxDensity.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#TotalElectricFluxDensity.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#TotalElectricFluxDensity.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalElectricFluxDensity.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalElectricFluxDensity.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#TotalElectricFluxDensity.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalElectricFluxDensity.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#TotalElectricFluxDensity.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#TotalElectricFluxDensity.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#TotalElectricFluxDensity.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#TotalElectricFluxDensity.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#TotalElectricFluxDensity.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#TotalElectricFluxDensity.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#TotalElectricFluxDensity.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#TotalElectricFluxDensity.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#TotalElectricFluxDensity.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#TotalElectricFluxDensity.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#TotalElectricFluxDensity.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#TotalElectricFluxDensity.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#TotalElectricFluxDensity.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                           | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#TotalElectricFluxDensity.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#TotalElectricFluxDensity.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="TotalElectricFluxDensity.InternalObject"></a>

### *property* TotalElectricFluxDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DataModelObjectCategory"></a>

### *property* TotalElectricFluxDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ReportedFrequency"></a>

### *property* TotalElectricFluxDensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SweepingPhase"></a>

### *property* TotalElectricFluxDensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PhaseIncrement"></a>

### *property* TotalElectricFluxDensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Frequency"></a>

### *property* TotalElectricFluxDensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ElectricResultType"></a>

### *property* TotalElectricFluxDensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Amplitude"></a>

### *property* TotalElectricFluxDensity.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AverageAcrossBodies"></a>

### *property* TotalElectricFluxDensity.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PlotData"></a>

### *property* TotalElectricFluxDensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Location"></a>

### *property* TotalElectricFluxDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMinimumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMinimumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMaximumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMaximumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IsSolved"></a>

### *property* TotalElectricFluxDensity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CoordinateSystem"></a>

### *property* TotalElectricFluxDensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ScopingMethod"></a>

### *property* TotalElectricFluxDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SetNumber"></a>

### *property* TotalElectricFluxDensity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CombinationNumber"></a>

### *property* TotalElectricFluxDensity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SolutionCombinationDriver"></a>

### *property* TotalElectricFluxDensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Path"></a>

### *property* TotalElectricFluxDensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Surface"></a>

### *property* TotalElectricFluxDensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SurfaceCoating"></a>

### *property* TotalElectricFluxDensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.NamedSelections"></a>

### *property* TotalElectricFluxDensity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallShowTextOnMosaic"></a>

### *property* TotalElectricFluxDensity.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CrackFrontNumber"></a>

### *property* TotalElectricFluxDensity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GlobalIDs"></a>

### *property* TotalElectricFluxDensity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Identifier"></a>

### *property* TotalElectricFluxDensity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IterationNumber"></a>

### *property* TotalElectricFluxDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStep"></a>

### *property* TotalElectricFluxDensity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOccursOn"></a>

### *property* TotalElectricFluxDensity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOccursOn"></a>

### *property* TotalElectricFluxDensity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepNumber"></a>

### *property* TotalElectricFluxDensity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SolverComponentIDs"></a>

### *property* TotalElectricFluxDensity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Substep"></a>

### *property* TotalElectricFluxDensity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Average"></a>

### *property* TotalElectricFluxDensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Maximum"></a>

### *property* TotalElectricFluxDensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOfMaximumOverTime"></a>

### *property* TotalElectricFluxDensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOfMinimumOverTime"></a>

### *property* TotalElectricFluxDensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Minimum"></a>

### *property* TotalElectricFluxDensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOfMaximumOverTime"></a>

### *property* TotalElectricFluxDensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOfMinimumOverTime"></a>

### *property* TotalElectricFluxDensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Time"></a>

### *property* TotalElectricFluxDensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DisplayTime"></a>

### *property* TotalElectricFluxDensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GraphControlsXAxis"></a>

### *property* TotalElectricFluxDensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DisplayOption"></a>

### *property* TotalElectricFluxDensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DpfEvaluation"></a>

### *property* TotalElectricFluxDensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.By"></a>

### *property* TotalElectricFluxDensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ItemType"></a>

### *property* TotalElectricFluxDensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CalculateTimeHistory"></a>

### *property* TotalElectricFluxDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Suppressed"></a>

### *property* TotalElectricFluxDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Children"></a>

### *property* TotalElectricFluxDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Comments"></a>

### *property* TotalElectricFluxDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Figures"></a>

### *property* TotalElectricFluxDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Images"></a>

### *property* TotalElectricFluxDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TotalElectricFluxDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Properties"></a>

### *property* TotalElectricFluxDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.VisibleProperties"></a>

### *property* TotalElectricFluxDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalElectricFluxDensity.ClearGeneratedData"></a>

### TotalElectricFluxDensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.EvaluateAllResults"></a>

### TotalElectricFluxDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.FetchRemoteResults"></a>

### TotalElectricFluxDensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ExportToTextFile"></a>

### TotalElectricFluxDensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ExportAnimation"></a>

### TotalElectricFluxDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DuplicateWithoutResults"></a>

### TotalElectricFluxDensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CreateResultsAtAllSets"></a>

### TotalElectricFluxDensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PromoteToNamedSelection"></a>

### TotalElectricFluxDensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CreateParameter"></a>

### TotalElectricFluxDensity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddAlert"></a>

### TotalElectricFluxDensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddConvergence"></a>

### TotalElectricFluxDensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RenameBasedOnDefinition"></a>

### TotalElectricFluxDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Delete"></a>

### TotalElectricFluxDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetChildren"></a>

### TotalElectricFluxDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TotalElectricFluxDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddComment"></a>

### TotalElectricFluxDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddFigure"></a>

### TotalElectricFluxDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddImage"></a>

### TotalElectricFluxDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Activate"></a>

### TotalElectricFluxDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CopyTo"></a>

### TotalElectricFluxDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Duplicate"></a>

### TotalElectricFluxDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GroupAllSimilarChildren"></a>

### TotalElectricFluxDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GroupSimilarObjects"></a>

### TotalElectricFluxDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PropertyByName"></a>

### TotalElectricFluxDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PropertyByAPIName"></a>

### TotalElectricFluxDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetParameter"></a>

### TotalElectricFluxDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RemoveParameter"></a>

### TotalElectricFluxDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

