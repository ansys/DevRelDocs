# FluidFlowRate

<a id="FluidFlowRate"></a>

### *class* FluidFlowRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluidFlowRate.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FluidFlowRate.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FluidFlowRate.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FluidFlowRate.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FluidFlowRate.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FluidFlowRate.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FluidFlowRate.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FluidFlowRate.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FluidFlowRate.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FluidFlowRate.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FluidFlowRate.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FluidFlowRate.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FluidFlowRate.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FluidFlowRate.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluidFlowRate.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluidFlowRate.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidFlowRate.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FluidFlowRate.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FluidFlowRate.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluidFlowRate.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluidFlowRate.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidFlowRate.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluidFlowRate.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluidFlowRate.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FluidFlowRate.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluidFlowRate.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#FluidFlowRate.Layer)                                                                                           | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#FluidFlowRate.ThermalResultType)                                                                   | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#FluidFlowRate.NormalOrientation)                                                                   | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#FluidFlowRate.AverageAcrossBodies)                                                               | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FluidFlowRate.PlotData)                                                                                     | Gets the result table.                                                 |
| [`Location`](#FluidFlowRate.Location)                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FluidFlowRate.TimeForMinimumOfMinimumValues)                                           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FluidFlowRate.TimeForMinimumOfMaximumValues)                                           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FluidFlowRate.LoadStepForMinimumOfMinimumValues)                                   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FluidFlowRate.LoadStepForMinimumOfMaximumValues)                                   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FluidFlowRate.TimeForMaximumOfMinimumValues)                                           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FluidFlowRate.TimeForMaximumOfMaximumValues)                                           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FluidFlowRate.LoadStepForMaximumOfMinimumValues)                                   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FluidFlowRate.LoadStepForMaximumOfMaximumValues)                                   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FluidFlowRate.IsSolved)                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FluidFlowRate.ScopingMethod)                                                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FluidFlowRate.SetNumber)                                                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FluidFlowRate.CombinationNumber)                                                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FluidFlowRate.SolutionCombinationDriver)                                                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FluidFlowRate.WaterfallPanelShowTextOnMosaic)                                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FluidFlowRate.CrackFrontNumber)                                                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FluidFlowRate.GlobalIDs)                                                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FluidFlowRate.Identifier)                                                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FluidFlowRate.IterationNumber)                                                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#FluidFlowRate.LoadStep)                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FluidFlowRate.MaximumOccursOn)                                                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FluidFlowRate.MinimumOccursOn)                                                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FluidFlowRate.LoadStepNumber)                                                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FluidFlowRate.SolverComponentIDs)                                                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FluidFlowRate.Substep)                                                                                       | Gets the Substep.                                                      |
| [`Average`](#FluidFlowRate.Average)                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#FluidFlowRate.Maximum)                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FluidFlowRate.MaximumOfMaximumOverTime)                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FluidFlowRate.MaximumOfMinimumOverTime)                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FluidFlowRate.Minimum)                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FluidFlowRate.MinimumOfMaximumOverTime)                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FluidFlowRate.MinimumOfMinimumOverTime)                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FluidFlowRate.Time)                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#FluidFlowRate.DisplayTime)                                                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FluidFlowRate.DisplayOption)                                                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FluidFlowRate.DpfEvaluation)                                                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FluidFlowRate.By)                                                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#FluidFlowRate.ItemType)                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FluidFlowRate.CalculateTimeHistory)                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FluidFlowRate.Suppressed)                                                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#FluidFlowRate.Children)                                                                                     | Gets the list of children.                                             |
| [`Comments`](#FluidFlowRate.Comments)                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#FluidFlowRate.Figures)                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#FluidFlowRate.Images)                                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FluidFlowRate.Properties)                                                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FluidFlowRate.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import FluidFlowRate
```

<a id="property-detail"></a>

## Property detail

<a id="FluidFlowRate.InternalObject"></a>

### *property* FluidFlowRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.DataModelObjectCategory"></a>

### *property* FluidFlowRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Layer"></a>

### *property* FluidFlowRate.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.ThermalResultType"></a>

### *property* FluidFlowRate.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.NormalOrientation"></a>

### *property* FluidFlowRate.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Position"></a>

### *property* FluidFlowRate.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.AverageAcrossBodies"></a>

### *property* FluidFlowRate.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.PlotData"></a>

### *property* FluidFlowRate.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Location"></a>

### *property* FluidFlowRate.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.TimeForMinimumOfMinimumValues"></a>

### *property* FluidFlowRate.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.TimeForMinimumOfMaximumValues"></a>

### *property* FluidFlowRate.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.LoadStepForMinimumOfMinimumValues"></a>

### *property* FluidFlowRate.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.LoadStepForMinimumOfMaximumValues"></a>

### *property* FluidFlowRate.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.TimeForMaximumOfMinimumValues"></a>

### *property* FluidFlowRate.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.TimeForMaximumOfMaximumValues"></a>

### *property* FluidFlowRate.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.LoadStepForMaximumOfMinimumValues"></a>

### *property* FluidFlowRate.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.LoadStepForMaximumOfMaximumValues"></a>

### *property* FluidFlowRate.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.IsSolved"></a>

### *property* FluidFlowRate.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.CoordinateSystem"></a>

### *property* FluidFlowRate.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.ScopingMethod"></a>

### *property* FluidFlowRate.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.SetNumber"></a>

### *property* FluidFlowRate.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.CombinationNumber"></a>

### *property* FluidFlowRate.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.SolutionCombinationDriver"></a>

### *property* FluidFlowRate.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Path"></a>

### *property* FluidFlowRate.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Surface"></a>

### *property* FluidFlowRate.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.NamedSelections"></a>

### *property* FluidFlowRate.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.WaterfallPanelShowTextOnMosaic"></a>

### *property* FluidFlowRate.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.CrackFrontNumber"></a>

### *property* FluidFlowRate.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.GlobalIDs"></a>

### *property* FluidFlowRate.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Identifier"></a>

### *property* FluidFlowRate.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.IterationNumber"></a>

### *property* FluidFlowRate.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.LoadStep"></a>

### *property* FluidFlowRate.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.MaximumOccursOn"></a>

### *property* FluidFlowRate.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.MinimumOccursOn"></a>

### *property* FluidFlowRate.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.LoadStepNumber"></a>

### *property* FluidFlowRate.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.SolverComponentIDs"></a>

### *property* FluidFlowRate.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Substep"></a>

### *property* FluidFlowRate.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Average"></a>

### *property* FluidFlowRate.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Maximum"></a>

### *property* FluidFlowRate.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.MaximumOfMaximumOverTime"></a>

### *property* FluidFlowRate.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.MaximumOfMinimumOverTime"></a>

### *property* FluidFlowRate.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Minimum"></a>

### *property* FluidFlowRate.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.MinimumOfMaximumOverTime"></a>

### *property* FluidFlowRate.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.MinimumOfMinimumOverTime"></a>

### *property* FluidFlowRate.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Time"></a>

### *property* FluidFlowRate.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.DisplayTime"></a>

### *property* FluidFlowRate.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.GraphControlsXAxis"></a>

### *property* FluidFlowRate.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.DisplayOption"></a>

### *property* FluidFlowRate.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.DpfEvaluation"></a>

### *property* FluidFlowRate.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.By"></a>

### *property* FluidFlowRate.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.ItemType"></a>

### *property* FluidFlowRate.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.CalculateTimeHistory"></a>

### *property* FluidFlowRate.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Suppressed"></a>

### *property* FluidFlowRate.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Children"></a>

### *property* FluidFlowRate.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Comments"></a>

### *property* FluidFlowRate.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Figures"></a>

### *property* FluidFlowRate.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Images"></a>

### *property* FluidFlowRate.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FluidFlowRate.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Properties"></a>

### *property* FluidFlowRate.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.VisibleProperties"></a>

### *property* FluidFlowRate.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidFlowRate.ClearGeneratedData"></a>

### FluidFlowRate.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.EvaluateAllResults"></a>

### FluidFlowRate.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.FetchRemoteResults"></a>

### FluidFlowRate.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.ExportToTextFile"></a>

### FluidFlowRate.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.ExportAnimation"></a>

### FluidFlowRate.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.DuplicateWithoutResults"></a>

### FluidFlowRate.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.CreateResultsAtAllSets"></a>

### FluidFlowRate.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.PromoteToNamedSelection"></a>

### FluidFlowRate.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.CreateParameter"></a>

### FluidFlowRate.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.AddAlert"></a>

### FluidFlowRate.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.AddConvergence"></a>

### FluidFlowRate.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.RenameBasedOnDefinition"></a>

### FluidFlowRate.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Delete"></a>

### FluidFlowRate.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.GetChildren"></a>

### FluidFlowRate.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FluidFlowRate.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.AddComment"></a>

### FluidFlowRate.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.AddFigure"></a>

### FluidFlowRate.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.AddImage"></a>

### FluidFlowRate.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Activate"></a>

### FluidFlowRate.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.CopyTo"></a>

### FluidFlowRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.Duplicate"></a>

### FluidFlowRate.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.GroupAllSimilarChildren"></a>

### FluidFlowRate.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.GroupSimilarObjects"></a>

### FluidFlowRate.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.PropertyByName"></a>

### FluidFlowRate.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.PropertyByAPIName"></a>

### FluidFlowRate.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.GetParameter"></a>

### FluidFlowRate.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidFlowRate.RemoveParameter"></a>

### FluidFlowRate.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
