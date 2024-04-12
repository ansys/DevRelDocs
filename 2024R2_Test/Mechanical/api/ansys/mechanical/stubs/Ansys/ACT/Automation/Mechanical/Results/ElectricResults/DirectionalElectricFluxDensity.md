<a id="directionalelectricfluxdensity"></a>

# DirectionalElectricFluxDensity

<a id="DirectionalElectricFluxDensity"></a>

### *class* DirectionalElectricFluxDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalElectricFluxDensity.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalElectricFluxDensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalElectricFluxDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalElectricFluxDensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalElectricFluxDensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalElectricFluxDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalElectricFluxDensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalElectricFluxDensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalElectricFluxDensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalElectricFluxDensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalElectricFluxDensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalElectricFluxDensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalElectricFluxDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalElectricFluxDensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalElectricFluxDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalElectricFluxDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalElectricFluxDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalElectricFluxDensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalElectricFluxDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalElectricFluxDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalElectricFluxDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalElectricFluxDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalElectricFluxDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalElectricFluxDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalElectricFluxDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalElectricFluxDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#DirectionalElectricFluxDensity.NormalOrientation)                                                  | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#DirectionalElectricFluxDensity.ReportedFrequency)                                                  | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#DirectionalElectricFluxDensity.SweepingPhase)                                                          | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalElectricFluxDensity.PhaseIncrement)                                                        | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalElectricFluxDensity.Frequency)                                                                  | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#DirectionalElectricFluxDensity.ElectricResultType)                                                | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#DirectionalElectricFluxDensity.Amplitude)                                                                  | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#DirectionalElectricFluxDensity.AverageAcrossBodies)                                              | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalElectricFluxDensity.PlotData)                                                                    | Gets the result table.                                                 |
| [`Location`](#DirectionalElectricFluxDensity.Location)                                                                    | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalElectricFluxDensity.TimeForMinimumOfMinimumValues)                          | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalElectricFluxDensity.TimeForMinimumOfMaximumValues)                          | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalElectricFluxDensity.LoadStepForMinimumOfMinimumValues)                  | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalElectricFluxDensity.LoadStepForMinimumOfMaximumValues)                  | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalElectricFluxDensity.TimeForMaximumOfMinimumValues)                          | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalElectricFluxDensity.TimeForMaximumOfMaximumValues)                          | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalElectricFluxDensity.LoadStepForMaximumOfMinimumValues)                  | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalElectricFluxDensity.LoadStepForMaximumOfMaximumValues)                  | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalElectricFluxDensity.IsSolved)                                                                    | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalElectricFluxDensity.ScopingMethod)                                                          | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalElectricFluxDensity.SetNumber)                                                                  | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalElectricFluxDensity.CombinationNumber)                                                  | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalElectricFluxDensity.SolutionCombinationDriver)                                  | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalElectricFluxDensity.WaterfallPanelShowTextOnMosaic)                        | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalElectricFluxDensity.CrackFrontNumber)                                                    | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalElectricFluxDensity.GlobalIDs)                                                                  | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalElectricFluxDensity.Identifier)                                                                | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalElectricFluxDensity.IterationNumber)                                                      | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalElectricFluxDensity.LoadStep)                                                                    | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalElectricFluxDensity.MaximumOccursOn)                                                      | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalElectricFluxDensity.MinimumOccursOn)                                                      | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalElectricFluxDensity.LoadStepNumber)                                                        | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalElectricFluxDensity.SolverComponentIDs)                                                | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalElectricFluxDensity.Substep)                                                                      | Gets the Substep.                                                      |
| [`Average`](#DirectionalElectricFluxDensity.Average)                                                                      | Gets the Average.                                                      |
| [`Maximum`](#DirectionalElectricFluxDensity.Maximum)                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalElectricFluxDensity.MaximumOfMaximumOverTime)                                    | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalElectricFluxDensity.MaximumOfMinimumOverTime)                                    | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalElectricFluxDensity.Minimum)                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalElectricFluxDensity.MinimumOfMaximumOverTime)                                    | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalElectricFluxDensity.MinimumOfMinimumOverTime)                                    | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalElectricFluxDensity.Time)                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalElectricFluxDensity.DisplayTime)                                                              | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalElectricFluxDensity.DisplayOption)                                                          | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalElectricFluxDensity.DpfEvaluation)                                                          | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalElectricFluxDensity.By)                                                                                | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalElectricFluxDensity.ItemType)                                                                    | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalElectricFluxDensity.CalculateTimeHistory)                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalElectricFluxDensity.Suppressed)                                                                | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalElectricFluxDensity.Children)                                                                    | Gets the list of children.                                             |
| [`Comments`](#DirectionalElectricFluxDensity.Comments)                                                                    | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalElectricFluxDensity.Figures)                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalElectricFluxDensity.Images)                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalElectricFluxDensity.Properties)                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalElectricFluxDensity.VisibleProperties)                                                  | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import DirectionalElectricFluxDensity
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalElectricFluxDensity.InternalObject"></a>

### *property* DirectionalElectricFluxDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.NormalOrientation"></a>

### *property* DirectionalElectricFluxDensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DataModelObjectCategory"></a>

### *property* DirectionalElectricFluxDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ReportedFrequency"></a>

### *property* DirectionalElectricFluxDensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SweepingPhase"></a>

### *property* DirectionalElectricFluxDensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PhaseIncrement"></a>

### *property* DirectionalElectricFluxDensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Frequency"></a>

### *property* DirectionalElectricFluxDensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ElectricResultType"></a>

### *property* DirectionalElectricFluxDensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Amplitude"></a>

### *property* DirectionalElectricFluxDensity.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AverageAcrossBodies"></a>

### *property* DirectionalElectricFluxDensity.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PlotData"></a>

### *property* DirectionalElectricFluxDensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Location"></a>

### *property* DirectionalElectricFluxDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalElectricFluxDensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalElectricFluxDensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalElectricFluxDensity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalElectricFluxDensity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalElectricFluxDensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalElectricFluxDensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalElectricFluxDensity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalElectricFluxDensity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.IsSolved"></a>

### *property* DirectionalElectricFluxDensity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CoordinateSystem"></a>

### *property* DirectionalElectricFluxDensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ScopingMethod"></a>

### *property* DirectionalElectricFluxDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SetNumber"></a>

### *property* DirectionalElectricFluxDensity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CombinationNumber"></a>

### *property* DirectionalElectricFluxDensity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SolutionCombinationDriver"></a>

### *property* DirectionalElectricFluxDensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Path"></a>

### *property* DirectionalElectricFluxDensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Surface"></a>

### *property* DirectionalElectricFluxDensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.NamedSelections"></a>

### *property* DirectionalElectricFluxDensity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalElectricFluxDensity.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CrackFrontNumber"></a>

### *property* DirectionalElectricFluxDensity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GlobalIDs"></a>

### *property* DirectionalElectricFluxDensity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Identifier"></a>

### *property* DirectionalElectricFluxDensity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.IterationNumber"></a>

### *property* DirectionalElectricFluxDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStep"></a>

### *property* DirectionalElectricFluxDensity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MaximumOccursOn"></a>

### *property* DirectionalElectricFluxDensity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MinimumOccursOn"></a>

### *property* DirectionalElectricFluxDensity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepNumber"></a>

### *property* DirectionalElectricFluxDensity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SolverComponentIDs"></a>

### *property* DirectionalElectricFluxDensity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Substep"></a>

### *property* DirectionalElectricFluxDensity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Average"></a>

### *property* DirectionalElectricFluxDensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Maximum"></a>

### *property* DirectionalElectricFluxDensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MaximumOfMaximumOverTime"></a>

### *property* DirectionalElectricFluxDensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MaximumOfMinimumOverTime"></a>

### *property* DirectionalElectricFluxDensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Minimum"></a>

### *property* DirectionalElectricFluxDensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MinimumOfMaximumOverTime"></a>

### *property* DirectionalElectricFluxDensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MinimumOfMinimumOverTime"></a>

### *property* DirectionalElectricFluxDensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Time"></a>

### *property* DirectionalElectricFluxDensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DisplayTime"></a>

### *property* DirectionalElectricFluxDensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GraphControlsXAxis"></a>

### *property* DirectionalElectricFluxDensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DisplayOption"></a>

### *property* DirectionalElectricFluxDensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DpfEvaluation"></a>

### *property* DirectionalElectricFluxDensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.By"></a>

### *property* DirectionalElectricFluxDensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ItemType"></a>

### *property* DirectionalElectricFluxDensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CalculateTimeHistory"></a>

### *property* DirectionalElectricFluxDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Suppressed"></a>

### *property* DirectionalElectricFluxDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Children"></a>

### *property* DirectionalElectricFluxDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Comments"></a>

### *property* DirectionalElectricFluxDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Figures"></a>

### *property* DirectionalElectricFluxDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Images"></a>

### *property* DirectionalElectricFluxDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalElectricFluxDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Properties"></a>

### *property* DirectionalElectricFluxDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.VisibleProperties"></a>

### *property* DirectionalElectricFluxDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalElectricFluxDensity.ClearGeneratedData"></a>

### DirectionalElectricFluxDensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.EvaluateAllResults"></a>

### DirectionalElectricFluxDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.FetchRemoteResults"></a>

### DirectionalElectricFluxDensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ExportToTextFile"></a>

### DirectionalElectricFluxDensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ExportAnimation"></a>

### DirectionalElectricFluxDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DuplicateWithoutResults"></a>

### DirectionalElectricFluxDensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CreateResultsAtAllSets"></a>

### DirectionalElectricFluxDensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PromoteToNamedSelection"></a>

### DirectionalElectricFluxDensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CreateParameter"></a>

### DirectionalElectricFluxDensity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddAlert"></a>

### DirectionalElectricFluxDensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddConvergence"></a>

### DirectionalElectricFluxDensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RenameBasedOnDefinition"></a>

### DirectionalElectricFluxDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Delete"></a>

### DirectionalElectricFluxDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetChildren"></a>

### DirectionalElectricFluxDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalElectricFluxDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddComment"></a>

### DirectionalElectricFluxDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddFigure"></a>

### DirectionalElectricFluxDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddImage"></a>

### DirectionalElectricFluxDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Activate"></a>

### DirectionalElectricFluxDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CopyTo"></a>

### DirectionalElectricFluxDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Duplicate"></a>

### DirectionalElectricFluxDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GroupAllSimilarChildren"></a>

### DirectionalElectricFluxDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GroupSimilarObjects"></a>

### DirectionalElectricFluxDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PropertyByName"></a>

### DirectionalElectricFluxDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PropertyByAPIName"></a>

### DirectionalElectricFluxDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetParameter"></a>

### DirectionalElectricFluxDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RemoveParameter"></a>

### DirectionalElectricFluxDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
