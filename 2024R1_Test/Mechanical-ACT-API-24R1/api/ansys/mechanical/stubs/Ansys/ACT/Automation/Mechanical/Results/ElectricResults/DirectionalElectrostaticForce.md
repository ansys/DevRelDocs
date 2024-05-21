# DirectionalElectrostaticForce

<a id="DirectionalElectrostaticForce"></a>

### *class* DirectionalElectrostaticForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalElectrostaticForce.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalElectrostaticForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalElectrostaticForce.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalElectrostaticForce.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalElectrostaticForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalElectrostaticForce.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalElectrostaticForce.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalElectrostaticForce.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalElectrostaticForce.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalElectrostaticForce.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalElectrostaticForce.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalElectrostaticForce.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalElectrostaticForce.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalElectrostaticForce.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalElectrostaticForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalElectrostaticForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalElectrostaticForce.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalElectrostaticForce.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalElectrostaticForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalElectrostaticForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalElectrostaticForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalElectrostaticForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalElectrostaticForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalElectrostaticForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalElectrostaticForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalElectrostaticForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Total`](#DirectionalElectrostaticForce.Total)                                                                           | Gets the Total.                                                        |
| [`NormalOrientation`](#DirectionalElectrostaticForce.NormalOrientation)                                                   | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#DirectionalElectrostaticForce.ReportedFrequency)                                                   | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#DirectionalElectrostaticForce.SweepingPhase)                                                           | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalElectrostaticForce.PhaseIncrement)                                                         | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalElectrostaticForce.Frequency)                                                                   | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#DirectionalElectrostaticForce.ElectricResultType)                                                 | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#DirectionalElectrostaticForce.Amplitude)                                                                   | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#DirectionalElectrostaticForce.AverageAcrossBodies)                                               | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalElectrostaticForce.PlotData)                                                                     | Gets the result table.                                                 |
| [`Location`](#DirectionalElectrostaticForce.Location)                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalElectrostaticForce.TimeForMinimumOfMinimumValues)                           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalElectrostaticForce.TimeForMinimumOfMaximumValues)                           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalElectrostaticForce.LoadStepForMinimumOfMinimumValues)                   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalElectrostaticForce.LoadStepForMinimumOfMaximumValues)                   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalElectrostaticForce.TimeForMaximumOfMinimumValues)                           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalElectrostaticForce.TimeForMaximumOfMaximumValues)                           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalElectrostaticForce.LoadStepForMaximumOfMinimumValues)                   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalElectrostaticForce.LoadStepForMaximumOfMaximumValues)                   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalElectrostaticForce.IsSolved)                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalElectrostaticForce.ScopingMethod)                                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalElectrostaticForce.SetNumber)                                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalElectrostaticForce.CombinationNumber)                                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalElectrostaticForce.SolutionCombinationDriver)                                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalElectrostaticForce.WaterfallPanelShowTextOnMosaic)                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalElectrostaticForce.CrackFrontNumber)                                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalElectrostaticForce.GlobalIDs)                                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalElectrostaticForce.Identifier)                                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalElectrostaticForce.IterationNumber)                                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalElectrostaticForce.LoadStep)                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalElectrostaticForce.MaximumOccursOn)                                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalElectrostaticForce.MinimumOccursOn)                                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalElectrostaticForce.LoadStepNumber)                                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalElectrostaticForce.SolverComponentIDs)                                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalElectrostaticForce.Substep)                                                                       | Gets the Substep.                                                      |
| [`Average`](#DirectionalElectrostaticForce.Average)                                                                       | Gets the Average.                                                      |
| [`Maximum`](#DirectionalElectrostaticForce.Maximum)                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalElectrostaticForce.MaximumOfMaximumOverTime)                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalElectrostaticForce.MaximumOfMinimumOverTime)                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalElectrostaticForce.Minimum)                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalElectrostaticForce.MinimumOfMaximumOverTime)                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalElectrostaticForce.MinimumOfMinimumOverTime)                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalElectrostaticForce.Time)                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalElectrostaticForce.DisplayTime)                                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalElectrostaticForce.DisplayOption)                                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalElectrostaticForce.DpfEvaluation)                                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalElectrostaticForce.By)                                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalElectrostaticForce.ItemType)                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalElectrostaticForce.CalculateTimeHistory)                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalElectrostaticForce.Suppressed)                                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalElectrostaticForce.Children)                                                                     | Gets the list of children.                                             |
| [`Comments`](#DirectionalElectrostaticForce.Comments)                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalElectrostaticForce.Figures)                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalElectrostaticForce.Images)                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalElectrostaticForce.Properties)                                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalElectrostaticForce.VisibleProperties)                                                   | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import DirectionalElectrostaticForce
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalElectrostaticForce.InternalObject"></a>

### *property* DirectionalElectrostaticForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Total"></a>

### *property* DirectionalElectrostaticForce.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.NormalOrientation"></a>

### *property* DirectionalElectrostaticForce.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.DataModelObjectCategory"></a>

### *property* DirectionalElectrostaticForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.ReportedFrequency"></a>

### *property* DirectionalElectrostaticForce.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.SweepingPhase"></a>

### *property* DirectionalElectrostaticForce.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.PhaseIncrement"></a>

### *property* DirectionalElectrostaticForce.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Frequency"></a>

### *property* DirectionalElectrostaticForce.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.ElectricResultType"></a>

### *property* DirectionalElectrostaticForce.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Amplitude"></a>

### *property* DirectionalElectrostaticForce.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.AverageAcrossBodies"></a>

### *property* DirectionalElectrostaticForce.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.PlotData"></a>

### *property* DirectionalElectrostaticForce.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Location"></a>

### *property* DirectionalElectrostaticForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalElectrostaticForce.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalElectrostaticForce.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalElectrostaticForce.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalElectrostaticForce.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalElectrostaticForce.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalElectrostaticForce.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalElectrostaticForce.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalElectrostaticForce.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.IsSolved"></a>

### *property* DirectionalElectrostaticForce.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.CoordinateSystem"></a>

### *property* DirectionalElectrostaticForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.ScopingMethod"></a>

### *property* DirectionalElectrostaticForce.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.SetNumber"></a>

### *property* DirectionalElectrostaticForce.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.CombinationNumber"></a>

### *property* DirectionalElectrostaticForce.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.SolutionCombinationDriver"></a>

### *property* DirectionalElectrostaticForce.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Path"></a>

### *property* DirectionalElectrostaticForce.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Surface"></a>

### *property* DirectionalElectrostaticForce.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.NamedSelections"></a>

### *property* DirectionalElectrostaticForce.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalElectrostaticForce.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.CrackFrontNumber"></a>

### *property* DirectionalElectrostaticForce.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.GlobalIDs"></a>

### *property* DirectionalElectrostaticForce.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Identifier"></a>

### *property* DirectionalElectrostaticForce.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.IterationNumber"></a>

### *property* DirectionalElectrostaticForce.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.LoadStep"></a>

### *property* DirectionalElectrostaticForce.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.MaximumOccursOn"></a>

### *property* DirectionalElectrostaticForce.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.MinimumOccursOn"></a>

### *property* DirectionalElectrostaticForce.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.LoadStepNumber"></a>

### *property* DirectionalElectrostaticForce.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.SolverComponentIDs"></a>

### *property* DirectionalElectrostaticForce.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Substep"></a>

### *property* DirectionalElectrostaticForce.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Average"></a>

### *property* DirectionalElectrostaticForce.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Maximum"></a>

### *property* DirectionalElectrostaticForce.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.MaximumOfMaximumOverTime"></a>

### *property* DirectionalElectrostaticForce.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.MaximumOfMinimumOverTime"></a>

### *property* DirectionalElectrostaticForce.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Minimum"></a>

### *property* DirectionalElectrostaticForce.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.MinimumOfMaximumOverTime"></a>

### *property* DirectionalElectrostaticForce.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.MinimumOfMinimumOverTime"></a>

### *property* DirectionalElectrostaticForce.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Time"></a>

### *property* DirectionalElectrostaticForce.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.DisplayTime"></a>

### *property* DirectionalElectrostaticForce.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.GraphControlsXAxis"></a>

### *property* DirectionalElectrostaticForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.DisplayOption"></a>

### *property* DirectionalElectrostaticForce.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.DpfEvaluation"></a>

### *property* DirectionalElectrostaticForce.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.By"></a>

### *property* DirectionalElectrostaticForce.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.ItemType"></a>

### *property* DirectionalElectrostaticForce.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.CalculateTimeHistory"></a>

### *property* DirectionalElectrostaticForce.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Suppressed"></a>

### *property* DirectionalElectrostaticForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Children"></a>

### *property* DirectionalElectrostaticForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Comments"></a>

### *property* DirectionalElectrostaticForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Figures"></a>

### *property* DirectionalElectrostaticForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Images"></a>

### *property* DirectionalElectrostaticForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalElectrostaticForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Properties"></a>

### *property* DirectionalElectrostaticForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.VisibleProperties"></a>

### *property* DirectionalElectrostaticForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalElectrostaticForce.ClearGeneratedData"></a>

### DirectionalElectrostaticForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.EvaluateAllResults"></a>

### DirectionalElectrostaticForce.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.FetchRemoteResults"></a>

### DirectionalElectrostaticForce.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.ExportToTextFile"></a>

### DirectionalElectrostaticForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.ExportAnimation"></a>

### DirectionalElectrostaticForce.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.DuplicateWithoutResults"></a>

### DirectionalElectrostaticForce.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.CreateResultsAtAllSets"></a>

### DirectionalElectrostaticForce.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.PromoteToNamedSelection"></a>

### DirectionalElectrostaticForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.CreateParameter"></a>

### DirectionalElectrostaticForce.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.AddAlert"></a>

### DirectionalElectrostaticForce.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.AddConvergence"></a>

### DirectionalElectrostaticForce.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.RenameBasedOnDefinition"></a>

### DirectionalElectrostaticForce.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Delete"></a>

### DirectionalElectrostaticForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.GetChildren"></a>

### DirectionalElectrostaticForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalElectrostaticForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.AddComment"></a>

### DirectionalElectrostaticForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.AddFigure"></a>

### DirectionalElectrostaticForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.AddImage"></a>

### DirectionalElectrostaticForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Activate"></a>

### DirectionalElectrostaticForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.CopyTo"></a>

### DirectionalElectrostaticForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.Duplicate"></a>

### DirectionalElectrostaticForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.GroupAllSimilarChildren"></a>

### DirectionalElectrostaticForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.GroupSimilarObjects"></a>

### DirectionalElectrostaticForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.PropertyByName"></a>

### DirectionalElectrostaticForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.PropertyByAPIName"></a>

### DirectionalElectrostaticForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.GetParameter"></a>

### DirectionalElectrostaticForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectrostaticForce.RemoveParameter"></a>

### DirectionalElectrostaticForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
