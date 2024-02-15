# DirectionalShearMomentDiagram

### *class* DirectionalShearMomentDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalShearMomentDiagram.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#DirectionalShearMomentDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#DirectionalShearMomentDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalShearMomentDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalShearMomentDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalShearMomentDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalShearMomentDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalShearMomentDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalShearMomentDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalShearMomentDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalShearMomentDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalShearMomentDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalShearMomentDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalShearMomentDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalShearMomentDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalShearMomentDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalShearMomentDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalShearMomentDiagram.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalShearMomentDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalShearMomentDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalShearMomentDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalShearMomentDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalShearMomentDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalShearMomentDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalShearMomentDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalShearMomentDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`GraphicsDisplay`](#DirectionalShearMomentDiagram.GraphicsDisplay)                                                       | Gets or sets the GraphicsDisplay.                                      |
| [`ShearMomentType`](../../../../../Mechanical/DataModel/Enums/ShearMomentType.md#ShearMomentType)                         | Gets or sets the ShearMomentType.                                      |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#DirectionalShearMomentDiagram.BeamResultType)                                                         | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#DirectionalShearMomentDiagram.PlotData)                                                                     | Gets the result table.                                                 |
| [`Location`](#DirectionalShearMomentDiagram.Location)                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalShearMomentDiagram.TimeForMinimumOfMinimumValues)                           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalShearMomentDiagram.TimeForMinimumOfMaximumValues)                           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalShearMomentDiagram.LoadStepForMinimumOfMinimumValues)                   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalShearMomentDiagram.LoadStepForMinimumOfMaximumValues)                   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalShearMomentDiagram.TimeForMaximumOfMinimumValues)                           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalShearMomentDiagram.TimeForMaximumOfMaximumValues)                           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalShearMomentDiagram.LoadStepForMaximumOfMinimumValues)                   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalShearMomentDiagram.LoadStepForMaximumOfMaximumValues)                   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalShearMomentDiagram.IsSolved)                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalShearMomentDiagram.ScopingMethod)                                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalShearMomentDiagram.SetNumber)                                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalShearMomentDiagram.CombinationNumber)                                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalShearMomentDiagram.SolutionCombinationDriver)                                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalShearMomentDiagram.WaterfallPanelShowTextOnMosaic)                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalShearMomentDiagram.CrackFrontNumber)                                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalShearMomentDiagram.GlobalIDs)                                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalShearMomentDiagram.Identifier)                                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalShearMomentDiagram.IterationNumber)                                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalShearMomentDiagram.LoadStep)                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalShearMomentDiagram.MaximumOccursOn)                                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalShearMomentDiagram.MinimumOccursOn)                                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalShearMomentDiagram.LoadStepNumber)                                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalShearMomentDiagram.SolverComponentIDs)                                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalShearMomentDiagram.Substep)                                                                       | Gets the Substep.                                                      |
| [`Average`](#DirectionalShearMomentDiagram.Average)                                                                       | Gets the Average.                                                      |
| [`Maximum`](#DirectionalShearMomentDiagram.Maximum)                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalShearMomentDiagram.MaximumOfMaximumOverTime)                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalShearMomentDiagram.MaximumOfMinimumOverTime)                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalShearMomentDiagram.Minimum)                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalShearMomentDiagram.MinimumOfMaximumOverTime)                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalShearMomentDiagram.MinimumOfMinimumOverTime)                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalShearMomentDiagram.Time)                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalShearMomentDiagram.DisplayTime)                                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalShearMomentDiagram.DisplayOption)                                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalShearMomentDiagram.DpfEvaluation)                                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalShearMomentDiagram.By)                                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalShearMomentDiagram.ItemType)                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalShearMomentDiagram.CalculateTimeHistory)                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalShearMomentDiagram.Suppressed)                                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalShearMomentDiagram.Children)                                                                     | Gets the list of children.                                             |
| [`Comments`](#DirectionalShearMomentDiagram.Comments)                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalShearMomentDiagram.Figures)                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalShearMomentDiagram.Images)                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalShearMomentDiagram.Properties)                                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalShearMomentDiagram.VisibleProperties)                                                   | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import DirectionalShearMomentDiagram
```

## Property detail

### *property* DirectionalShearMomentDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.GraphicsDisplay *: [Ansys.Mechanical.DataModel.Enums.ShearMomentDiagramOrientationType](../../../../../Mechanical/DataModel/Enums/ShearMomentDiagramOrientationType.md#ShearMomentDiagramOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphicsDisplay.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.ShearMomentType *: [Ansys.Mechanical.DataModel.Enums.ShearMomentType](../../../../../Mechanical/DataModel/Enums/ShearMomentType.md#ShearMomentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearMomentType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalShearMomentDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DirectionalShearMomentDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DirectionalShearMomentDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
