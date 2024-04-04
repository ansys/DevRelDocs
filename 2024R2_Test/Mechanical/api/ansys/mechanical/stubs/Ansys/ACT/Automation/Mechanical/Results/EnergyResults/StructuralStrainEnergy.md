# StructuralStrainEnergy

### *class* StructuralStrainEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StructuralStrainEnergy.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#StructuralStrainEnergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#StructuralStrainEnergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#StructuralStrainEnergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#StructuralStrainEnergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#StructuralStrainEnergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#StructuralStrainEnergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#StructuralStrainEnergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#StructuralStrainEnergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#StructuralStrainEnergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#StructuralStrainEnergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#StructuralStrainEnergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#StructuralStrainEnergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#StructuralStrainEnergy.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#StructuralStrainEnergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#StructuralStrainEnergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StructuralStrainEnergy.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#StructuralStrainEnergy.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#StructuralStrainEnergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#StructuralStrainEnergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#StructuralStrainEnergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StructuralStrainEnergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#StructuralStrainEnergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#StructuralStrainEnergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#StructuralStrainEnergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#StructuralStrainEnergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Total`](#StructuralStrainEnergy.Total)                                                                                  | Gets the Total.                                                        |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#StructuralStrainEnergy.PlotData)                                                                            | Gets the result table.                                                 |
| [`Location`](#StructuralStrainEnergy.Location)                                                                            | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#StructuralStrainEnergy.TimeForMinimumOfMinimumValues)                                  | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#StructuralStrainEnergy.TimeForMinimumOfMaximumValues)                                  | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#StructuralStrainEnergy.LoadStepForMinimumOfMinimumValues)                          | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#StructuralStrainEnergy.LoadStepForMinimumOfMaximumValues)                          | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#StructuralStrainEnergy.TimeForMaximumOfMinimumValues)                                  | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#StructuralStrainEnergy.TimeForMaximumOfMaximumValues)                                  | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#StructuralStrainEnergy.LoadStepForMaximumOfMinimumValues)                          | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#StructuralStrainEnergy.LoadStepForMaximumOfMaximumValues)                          | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#StructuralStrainEnergy.IsSolved)                                                                            | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#StructuralStrainEnergy.ScopingMethod)                                                                  | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#StructuralStrainEnergy.SetNumber)                                                                          | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#StructuralStrainEnergy.CombinationNumber)                                                          | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#StructuralStrainEnergy.SolutionCombinationDriver)                                          | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#StructuralStrainEnergy.WaterfallPanelShowTextOnMosaic)                                | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#StructuralStrainEnergy.CrackFrontNumber)                                                            | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#StructuralStrainEnergy.GlobalIDs)                                                                          | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#StructuralStrainEnergy.Identifier)                                                                        | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#StructuralStrainEnergy.IterationNumber)                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#StructuralStrainEnergy.LoadStep)                                                                            | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#StructuralStrainEnergy.MaximumOccursOn)                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#StructuralStrainEnergy.MinimumOccursOn)                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#StructuralStrainEnergy.LoadStepNumber)                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#StructuralStrainEnergy.SolverComponentIDs)                                                        | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#StructuralStrainEnergy.Substep)                                                                              | Gets the Substep.                                                      |
| [`Average`](#StructuralStrainEnergy.Average)                                                                              | Gets the Average.                                                      |
| [`Maximum`](#StructuralStrainEnergy.Maximum)                                                                              | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#StructuralStrainEnergy.MaximumOfMaximumOverTime)                                            | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#StructuralStrainEnergy.MaximumOfMinimumOverTime)                                            | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#StructuralStrainEnergy.Minimum)                                                                              | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#StructuralStrainEnergy.MinimumOfMaximumOverTime)                                            | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#StructuralStrainEnergy.MinimumOfMinimumOverTime)                                            | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#StructuralStrainEnergy.Time)                                                                                    | Gets the Time.                                                         |
| [`DisplayTime`](#StructuralStrainEnergy.DisplayTime)                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#StructuralStrainEnergy.DisplayOption)                                                                  | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#StructuralStrainEnergy.DpfEvaluation)                                                                  | Gets or sets the DpfEvaluation.                                        |
| [`By`](#StructuralStrainEnergy.By)                                                                                        | Gets or sets the By.                                                   |
| [`ItemType`](#StructuralStrainEnergy.ItemType)                                                                            | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#StructuralStrainEnergy.CalculateTimeHistory)                                                    | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#StructuralStrainEnergy.Suppressed)                                                                        | Gets or sets the Suppressed.                                           |
| [`Children`](#StructuralStrainEnergy.Children)                                                                            | Gets the list of children.                                             |
| [`Comments`](#StructuralStrainEnergy.Comments)                                                                            | Gets the list of associated comments.                                  |
| [`Figures`](#StructuralStrainEnergy.Figures)                                                                              | Gets the list of associated figures.                                   |
| [`Images`](#StructuralStrainEnergy.Images)                                                                                | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#StructuralStrainEnergy.Properties)                                                                        | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#StructuralStrainEnergy.VisibleProperties)                                                          | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.EnergyResults import StructuralStrainEnergy
```

## Property detail

### *property* StructuralStrainEnergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* StructuralStrainEnergy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### StructuralStrainEnergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### StructuralStrainEnergy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
