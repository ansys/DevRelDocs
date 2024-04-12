<a id="directionalelectricfieldintensity"></a>

# DirectionalElectricFieldIntensity

<a id="DirectionalElectricFieldIntensity"></a>

### *class* DirectionalElectricFieldIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalElectricFieldIntensity.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalElectricFieldIntensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalElectricFieldIntensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalElectricFieldIntensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalElectricFieldIntensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalElectricFieldIntensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalElectricFieldIntensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalElectricFieldIntensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalElectricFieldIntensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalElectricFieldIntensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalElectricFieldIntensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalElectricFieldIntensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalElectricFieldIntensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalElectricFieldIntensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalElectricFieldIntensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalElectricFieldIntensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalElectricFieldIntensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalElectricFieldIntensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalElectricFieldIntensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalElectricFieldIntensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalElectricFieldIntensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalElectricFieldIntensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalElectricFieldIntensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalElectricFieldIntensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalElectricFieldIntensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalElectricFieldIntensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#DirectionalElectricFieldIntensity.NormalOrientation)                                               | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#DirectionalElectricFieldIntensity.ReportedFrequency)                                               | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#DirectionalElectricFieldIntensity.SweepingPhase)                                                       | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalElectricFieldIntensity.PhaseIncrement)                                                     | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalElectricFieldIntensity.Frequency)                                                               | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#DirectionalElectricFieldIntensity.ElectricResultType)                                             | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#DirectionalElectricFieldIntensity.Amplitude)                                                               | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#DirectionalElectricFieldIntensity.AverageAcrossBodies)                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalElectricFieldIntensity.PlotData)                                                                 | Gets the result table.                                                 |
| [`Location`](#DirectionalElectricFieldIntensity.Location)                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalElectricFieldIntensity.TimeForMinimumOfMinimumValues)                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalElectricFieldIntensity.TimeForMinimumOfMaximumValues)                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalElectricFieldIntensity.LoadStepForMinimumOfMinimumValues)               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalElectricFieldIntensity.LoadStepForMinimumOfMaximumValues)               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalElectricFieldIntensity.TimeForMaximumOfMinimumValues)                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalElectricFieldIntensity.TimeForMaximumOfMaximumValues)                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalElectricFieldIntensity.LoadStepForMaximumOfMinimumValues)               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalElectricFieldIntensity.LoadStepForMaximumOfMaximumValues)               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalElectricFieldIntensity.IsSolved)                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalElectricFieldIntensity.ScopingMethod)                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalElectricFieldIntensity.SetNumber)                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalElectricFieldIntensity.CombinationNumber)                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalElectricFieldIntensity.SolutionCombinationDriver)                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalElectricFieldIntensity.WaterfallPanelShowTextOnMosaic)                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalElectricFieldIntensity.CrackFrontNumber)                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalElectricFieldIntensity.GlobalIDs)                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalElectricFieldIntensity.Identifier)                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalElectricFieldIntensity.IterationNumber)                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalElectricFieldIntensity.LoadStep)                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalElectricFieldIntensity.MaximumOccursOn)                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalElectricFieldIntensity.MinimumOccursOn)                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalElectricFieldIntensity.LoadStepNumber)                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalElectricFieldIntensity.SolverComponentIDs)                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalElectricFieldIntensity.Substep)                                                                   | Gets the Substep.                                                      |
| [`Average`](#DirectionalElectricFieldIntensity.Average)                                                                   | Gets the Average.                                                      |
| [`Maximum`](#DirectionalElectricFieldIntensity.Maximum)                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalElectricFieldIntensity.MaximumOfMaximumOverTime)                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalElectricFieldIntensity.MaximumOfMinimumOverTime)                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalElectricFieldIntensity.Minimum)                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalElectricFieldIntensity.MinimumOfMaximumOverTime)                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalElectricFieldIntensity.MinimumOfMinimumOverTime)                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalElectricFieldIntensity.Time)                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalElectricFieldIntensity.DisplayTime)                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalElectricFieldIntensity.DisplayOption)                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalElectricFieldIntensity.DpfEvaluation)                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalElectricFieldIntensity.By)                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalElectricFieldIntensity.ItemType)                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalElectricFieldIntensity.CalculateTimeHistory)                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalElectricFieldIntensity.Suppressed)                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalElectricFieldIntensity.Children)                                                                 | Gets the list of children.                                             |
| [`Comments`](#DirectionalElectricFieldIntensity.Comments)                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalElectricFieldIntensity.Figures)                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalElectricFieldIntensity.Images)                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalElectricFieldIntensity.Properties)                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalElectricFieldIntensity.VisibleProperties)                                               | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import DirectionalElectricFieldIntensity
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalElectricFieldIntensity.InternalObject"></a>

### *property* DirectionalElectricFieldIntensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.NormalOrientation"></a>

### *property* DirectionalElectricFieldIntensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DataModelObjectCategory"></a>

### *property* DirectionalElectricFieldIntensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ReportedFrequency"></a>

### *property* DirectionalElectricFieldIntensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SweepingPhase"></a>

### *property* DirectionalElectricFieldIntensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PhaseIncrement"></a>

### *property* DirectionalElectricFieldIntensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Frequency"></a>

### *property* DirectionalElectricFieldIntensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ElectricResultType"></a>

### *property* DirectionalElectricFieldIntensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Amplitude"></a>

### *property* DirectionalElectricFieldIntensity.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AverageAcrossBodies"></a>

### *property* DirectionalElectricFieldIntensity.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PlotData"></a>

### *property* DirectionalElectricFieldIntensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Location"></a>

### *property* DirectionalElectricFieldIntensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalElectricFieldIntensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalElectricFieldIntensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalElectricFieldIntensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalElectricFieldIntensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.IsSolved"></a>

### *property* DirectionalElectricFieldIntensity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CoordinateSystem"></a>

### *property* DirectionalElectricFieldIntensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ScopingMethod"></a>

### *property* DirectionalElectricFieldIntensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SetNumber"></a>

### *property* DirectionalElectricFieldIntensity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CombinationNumber"></a>

### *property* DirectionalElectricFieldIntensity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SolutionCombinationDriver"></a>

### *property* DirectionalElectricFieldIntensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Path"></a>

### *property* DirectionalElectricFieldIntensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Surface"></a>

### *property* DirectionalElectricFieldIntensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.NamedSelections"></a>

### *property* DirectionalElectricFieldIntensity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalElectricFieldIntensity.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CrackFrontNumber"></a>

### *property* DirectionalElectricFieldIntensity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GlobalIDs"></a>

### *property* DirectionalElectricFieldIntensity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Identifier"></a>

### *property* DirectionalElectricFieldIntensity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.IterationNumber"></a>

### *property* DirectionalElectricFieldIntensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStep"></a>

### *property* DirectionalElectricFieldIntensity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MaximumOccursOn"></a>

### *property* DirectionalElectricFieldIntensity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MinimumOccursOn"></a>

### *property* DirectionalElectricFieldIntensity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepNumber"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SolverComponentIDs"></a>

### *property* DirectionalElectricFieldIntensity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Substep"></a>

### *property* DirectionalElectricFieldIntensity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Average"></a>

### *property* DirectionalElectricFieldIntensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Maximum"></a>

### *property* DirectionalElectricFieldIntensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MaximumOfMaximumOverTime"></a>

### *property* DirectionalElectricFieldIntensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MaximumOfMinimumOverTime"></a>

### *property* DirectionalElectricFieldIntensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Minimum"></a>

### *property* DirectionalElectricFieldIntensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MinimumOfMaximumOverTime"></a>

### *property* DirectionalElectricFieldIntensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MinimumOfMinimumOverTime"></a>

### *property* DirectionalElectricFieldIntensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Time"></a>

### *property* DirectionalElectricFieldIntensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DisplayTime"></a>

### *property* DirectionalElectricFieldIntensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GraphControlsXAxis"></a>

### *property* DirectionalElectricFieldIntensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DisplayOption"></a>

### *property* DirectionalElectricFieldIntensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DpfEvaluation"></a>

### *property* DirectionalElectricFieldIntensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.By"></a>

### *property* DirectionalElectricFieldIntensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ItemType"></a>

### *property* DirectionalElectricFieldIntensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CalculateTimeHistory"></a>

### *property* DirectionalElectricFieldIntensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Suppressed"></a>

### *property* DirectionalElectricFieldIntensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Children"></a>

### *property* DirectionalElectricFieldIntensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Comments"></a>

### *property* DirectionalElectricFieldIntensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Figures"></a>

### *property* DirectionalElectricFieldIntensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Images"></a>

### *property* DirectionalElectricFieldIntensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalElectricFieldIntensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Properties"></a>

### *property* DirectionalElectricFieldIntensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.VisibleProperties"></a>

### *property* DirectionalElectricFieldIntensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalElectricFieldIntensity.ClearGeneratedData"></a>

### DirectionalElectricFieldIntensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.EvaluateAllResults"></a>

### DirectionalElectricFieldIntensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.FetchRemoteResults"></a>

### DirectionalElectricFieldIntensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ExportToTextFile"></a>

### DirectionalElectricFieldIntensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ExportAnimation"></a>

### DirectionalElectricFieldIntensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DuplicateWithoutResults"></a>

### DirectionalElectricFieldIntensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CreateResultsAtAllSets"></a>

### DirectionalElectricFieldIntensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PromoteToNamedSelection"></a>

### DirectionalElectricFieldIntensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CreateParameter"></a>

### DirectionalElectricFieldIntensity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddAlert"></a>

### DirectionalElectricFieldIntensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddConvergence"></a>

### DirectionalElectricFieldIntensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.RenameBasedOnDefinition"></a>

### DirectionalElectricFieldIntensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Delete"></a>

### DirectionalElectricFieldIntensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GetChildren"></a>

### DirectionalElectricFieldIntensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalElectricFieldIntensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddComment"></a>

### DirectionalElectricFieldIntensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddFigure"></a>

### DirectionalElectricFieldIntensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddImage"></a>

### DirectionalElectricFieldIntensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Activate"></a>

### DirectionalElectricFieldIntensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CopyTo"></a>

### DirectionalElectricFieldIntensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Duplicate"></a>

### DirectionalElectricFieldIntensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GroupAllSimilarChildren"></a>

### DirectionalElectricFieldIntensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GroupSimilarObjects"></a>

### DirectionalElectricFieldIntensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PropertyByName"></a>

### DirectionalElectricFieldIntensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PropertyByAPIName"></a>

### DirectionalElectricFieldIntensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GetParameter"></a>

### DirectionalElectricFieldIntensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.RemoveParameter"></a>

### DirectionalElectricFieldIntensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
