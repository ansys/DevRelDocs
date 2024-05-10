<a id="fatiguebiaxialityindication"></a>

# FatigueBiaxialityIndication

<a id="FatigueBiaxialityIndication"></a>

### *class* FatigueBiaxialityIndication

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueBiaxialityIndication.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ClearGeneratedData`](#FatigueBiaxialityIndication.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FatigueBiaxialityIndication.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FatigueBiaxialityIndication.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FatigueBiaxialityIndication.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FatigueBiaxialityIndication.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FatigueBiaxialityIndication.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FatigueBiaxialityIndication.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FatigueBiaxialityIndication.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FatigueBiaxialityIndication.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FatigueBiaxialityIndication.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FatigueBiaxialityIndication.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FatigueBiaxialityIndication.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueBiaxialityIndication.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueBiaxialityIndication.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FatigueBiaxialityIndication.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueBiaxialityIndication.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueBiaxialityIndication.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueBiaxialityIndication.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueBiaxialityIndication.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueBiaxialityIndication.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueBiaxialityIndication.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueBiaxialityIndication.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueBiaxialityIndication.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FatigueBiaxialityIndication.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueBiaxialityIndication.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#FatigueBiaxialityIndication.Method)                                                                           | Gets the Method.                                                       |
| [`DesignLife`](#FatigueBiaxialityIndication.DesignLife)                                                                   | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#FatigueBiaxialityIndication.AverageAcrossBodies)                                                 | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FatigueBiaxialityIndication.PlotData)                                                                       | Gets the result table.                                                 |
| [`Location`](#FatigueBiaxialityIndication.Location)                                                                       | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FatigueBiaxialityIndication.TimeForMinimumOfMinimumValues)                             | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueBiaxialityIndication.TimeForMinimumOfMaximumValues)                             | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueBiaxialityIndication.LoadStepForMinimumOfMinimumValues)                     | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueBiaxialityIndication.LoadStepForMinimumOfMaximumValues)                     | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FatigueBiaxialityIndication.TimeForMaximumOfMinimumValues)                             | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FatigueBiaxialityIndication.TimeForMaximumOfMaximumValues)                             | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueBiaxialityIndication.LoadStepForMaximumOfMinimumValues)                     | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueBiaxialityIndication.LoadStepForMaximumOfMaximumValues)                     | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FatigueBiaxialityIndication.IsSolved)                                                                       | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FatigueBiaxialityIndication.ScopingMethod)                                                             | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueBiaxialityIndication.SetNumber)                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FatigueBiaxialityIndication.CombinationNumber)                                                     | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FatigueBiaxialityIndication.SolutionCombinationDriver)                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FatigueBiaxialityIndication.WaterfallPanelShowTextOnMosaic)                           | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FatigueBiaxialityIndication.CrackFrontNumber)                                                       | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FatigueBiaxialityIndication.GlobalIDs)                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FatigueBiaxialityIndication.Identifier)                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FatigueBiaxialityIndication.IterationNumber)                                                         | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueBiaxialityIndication.LoadStep)                                                                       | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FatigueBiaxialityIndication.MaximumOccursOn)                                                         | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FatigueBiaxialityIndication.MinimumOccursOn)                                                         | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FatigueBiaxialityIndication.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FatigueBiaxialityIndication.SolverComponentIDs)                                                   | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueBiaxialityIndication.Substep)                                                                         | Gets the Substep.                                                      |
| [`Average`](#FatigueBiaxialityIndication.Average)                                                                         | Gets the Average.                                                      |
| [`Maximum`](#FatigueBiaxialityIndication.Maximum)                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FatigueBiaxialityIndication.MaximumOfMaximumOverTime)                                       | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueBiaxialityIndication.MaximumOfMinimumOverTime)                                       | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FatigueBiaxialityIndication.Minimum)                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FatigueBiaxialityIndication.MinimumOfMaximumOverTime)                                       | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueBiaxialityIndication.MinimumOfMinimumOverTime)                                       | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FatigueBiaxialityIndication.Time)                                                                               | Gets the Time.                                                         |
| [`DisplayTime`](#FatigueBiaxialityIndication.DisplayTime)                                                                 | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FatigueBiaxialityIndication.DisplayOption)                                                             | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FatigueBiaxialityIndication.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FatigueBiaxialityIndication.By)                                                                                   | Gets or sets the By.                                                   |
| [`ItemType`](#FatigueBiaxialityIndication.ItemType)                                                                       | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FatigueBiaxialityIndication.CalculateTimeHistory)                                               | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FatigueBiaxialityIndication.Suppressed)                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#FatigueBiaxialityIndication.Children)                                                                       | Gets the list of children.                                             |
| [`Comments`](#FatigueBiaxialityIndication.Comments)                                                                       | Gets the list of associated comments.                                  |
| [`Figures`](#FatigueBiaxialityIndication.Figures)                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#FatigueBiaxialityIndication.Images)                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FatigueBiaxialityIndication.Properties)                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FatigueBiaxialityIndication.VisibleProperties)                                                     | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueBiaxialityIndication
```

<a id="property-detail"></a>

## Property detail

<a id="FatigueBiaxialityIndication.InternalObject"></a>

### *property* FatigueBiaxialityIndication.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.DataModelObjectCategory"></a>

### *property* FatigueBiaxialityIndication.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Method"></a>

### *property* FatigueBiaxialityIndication.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.DesignLife"></a>

### *property* FatigueBiaxialityIndication.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.AverageAcrossBodies"></a>

### *property* FatigueBiaxialityIndication.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.PlotData"></a>

### *property* FatigueBiaxialityIndication.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Location"></a>

### *property* FatigueBiaxialityIndication.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueBiaxialityIndication.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueBiaxialityIndication.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueBiaxialityIndication.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueBiaxialityIndication.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueBiaxialityIndication.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueBiaxialityIndication.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueBiaxialityIndication.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueBiaxialityIndication.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.IsSolved"></a>

### *property* FatigueBiaxialityIndication.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.CoordinateSystem"></a>

### *property* FatigueBiaxialityIndication.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.ScopingMethod"></a>

### *property* FatigueBiaxialityIndication.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.SetNumber"></a>

### *property* FatigueBiaxialityIndication.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.CombinationNumber"></a>

### *property* FatigueBiaxialityIndication.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.SolutionCombinationDriver"></a>

### *property* FatigueBiaxialityIndication.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Path"></a>

### *property* FatigueBiaxialityIndication.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Surface"></a>

### *property* FatigueBiaxialityIndication.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.NamedSelections"></a>

### *property* FatigueBiaxialityIndication.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.WaterfallPanelShowTextOnMosaic"></a>

### *property* FatigueBiaxialityIndication.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.CrackFrontNumber"></a>

### *property* FatigueBiaxialityIndication.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.GlobalIDs"></a>

### *property* FatigueBiaxialityIndication.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Identifier"></a>

### *property* FatigueBiaxialityIndication.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.IterationNumber"></a>

### *property* FatigueBiaxialityIndication.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.LoadStep"></a>

### *property* FatigueBiaxialityIndication.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.MaximumOccursOn"></a>

### *property* FatigueBiaxialityIndication.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.MinimumOccursOn"></a>

### *property* FatigueBiaxialityIndication.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.LoadStepNumber"></a>

### *property* FatigueBiaxialityIndication.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.SolverComponentIDs"></a>

### *property* FatigueBiaxialityIndication.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Substep"></a>

### *property* FatigueBiaxialityIndication.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Average"></a>

### *property* FatigueBiaxialityIndication.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Maximum"></a>

### *property* FatigueBiaxialityIndication.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.MaximumOfMaximumOverTime"></a>

### *property* FatigueBiaxialityIndication.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.MaximumOfMinimumOverTime"></a>

### *property* FatigueBiaxialityIndication.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Minimum"></a>

### *property* FatigueBiaxialityIndication.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.MinimumOfMaximumOverTime"></a>

### *property* FatigueBiaxialityIndication.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.MinimumOfMinimumOverTime"></a>

### *property* FatigueBiaxialityIndication.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Time"></a>

### *property* FatigueBiaxialityIndication.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.DisplayTime"></a>

### *property* FatigueBiaxialityIndication.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.GraphControlsXAxis"></a>

### *property* FatigueBiaxialityIndication.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.DisplayOption"></a>

### *property* FatigueBiaxialityIndication.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.DpfEvaluation"></a>

### *property* FatigueBiaxialityIndication.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.By"></a>

### *property* FatigueBiaxialityIndication.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.ItemType"></a>

### *property* FatigueBiaxialityIndication.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.CalculateTimeHistory"></a>

### *property* FatigueBiaxialityIndication.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Suppressed"></a>

### *property* FatigueBiaxialityIndication.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Children"></a>

### *property* FatigueBiaxialityIndication.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Comments"></a>

### *property* FatigueBiaxialityIndication.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Figures"></a>

### *property* FatigueBiaxialityIndication.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Images"></a>

### *property* FatigueBiaxialityIndication.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueBiaxialityIndication.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Properties"></a>

### *property* FatigueBiaxialityIndication.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.VisibleProperties"></a>

### *property* FatigueBiaxialityIndication.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueBiaxialityIndication.ClearGeneratedData"></a>

### FatigueBiaxialityIndication.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.EvaluateAllResults"></a>

### FatigueBiaxialityIndication.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.FetchRemoteResults"></a>

### FatigueBiaxialityIndication.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.ExportToTextFile"></a>

### FatigueBiaxialityIndication.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.ExportAnimation"></a>

### FatigueBiaxialityIndication.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.DuplicateWithoutResults"></a>

### FatigueBiaxialityIndication.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.CreateResultsAtAllSets"></a>

### FatigueBiaxialityIndication.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.PromoteToNamedSelection"></a>

### FatigueBiaxialityIndication.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.CreateParameter"></a>

### FatigueBiaxialityIndication.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.AddAlert"></a>

### FatigueBiaxialityIndication.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.AddConvergence"></a>

### FatigueBiaxialityIndication.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.RenameBasedOnDefinition"></a>

### FatigueBiaxialityIndication.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Delete"></a>

### FatigueBiaxialityIndication.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.GetChildren"></a>

### FatigueBiaxialityIndication.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueBiaxialityIndication.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.AddComment"></a>

### FatigueBiaxialityIndication.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.AddFigure"></a>

### FatigueBiaxialityIndication.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.AddImage"></a>

### FatigueBiaxialityIndication.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Activate"></a>

### FatigueBiaxialityIndication.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.CopyTo"></a>

### FatigueBiaxialityIndication.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.Duplicate"></a>

### FatigueBiaxialityIndication.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.GroupAllSimilarChildren"></a>

### FatigueBiaxialityIndication.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.GroupSimilarObjects"></a>

### FatigueBiaxialityIndication.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.PropertyByName"></a>

### FatigueBiaxialityIndication.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.PropertyByAPIName"></a>

### FatigueBiaxialityIndication.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.GetParameter"></a>

### FatigueBiaxialityIndication.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueBiaxialityIndication.RemoveParameter"></a>

### FatigueBiaxialityIndication.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
