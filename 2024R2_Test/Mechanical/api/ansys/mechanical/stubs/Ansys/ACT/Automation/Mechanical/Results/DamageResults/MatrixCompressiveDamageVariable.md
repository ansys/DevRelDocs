<a id="matrixcompressivedamagevariable"></a>

# MatrixCompressiveDamageVariable

<a id="MatrixCompressiveDamageVariable"></a>

### *class* MatrixCompressiveDamageVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MatrixCompressiveDamageVariable.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MatrixCompressiveDamageVariable.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MatrixCompressiveDamageVariable.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MatrixCompressiveDamageVariable.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MatrixCompressiveDamageVariable.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MatrixCompressiveDamageVariable.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MatrixCompressiveDamageVariable.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MatrixCompressiveDamageVariable.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MatrixCompressiveDamageVariable.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MatrixCompressiveDamageVariable.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MatrixCompressiveDamageVariable.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MatrixCompressiveDamageVariable.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MatrixCompressiveDamageVariable.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MatrixCompressiveDamageVariable.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MatrixCompressiveDamageVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MatrixCompressiveDamageVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MatrixCompressiveDamageVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MatrixCompressiveDamageVariable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MatrixCompressiveDamageVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MatrixCompressiveDamageVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MatrixCompressiveDamageVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MatrixCompressiveDamageVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MatrixCompressiveDamageVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MatrixCompressiveDamageVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MatrixCompressiveDamageVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MatrixCompressiveDamageVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MatrixCompressiveDamageVariable.Mode)                                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#MatrixCompressiveDamageVariable.Ply)                                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#MatrixCompressiveDamageVariable.Plies)                                                                         | Plies property.                                                        |
| [`DamageResultType`](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType)                      | Gets the DamageResultType.                                             |
| [`PlotData`](#MatrixCompressiveDamageVariable.PlotData)                                                                   | Gets the result table.                                                 |
| [`Location`](#MatrixCompressiveDamageVariable.Location)                                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MatrixCompressiveDamageVariable.TimeForMinimumOfMinimumValues)                         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MatrixCompressiveDamageVariable.TimeForMinimumOfMaximumValues)                         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MatrixCompressiveDamageVariable.LoadStepForMinimumOfMinimumValues)                 | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MatrixCompressiveDamageVariable.LoadStepForMinimumOfMaximumValues)                 | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MatrixCompressiveDamageVariable.TimeForMaximumOfMinimumValues)                         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MatrixCompressiveDamageVariable.TimeForMaximumOfMaximumValues)                         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MatrixCompressiveDamageVariable.LoadStepForMaximumOfMinimumValues)                 | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MatrixCompressiveDamageVariable.LoadStepForMaximumOfMaximumValues)                 | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MatrixCompressiveDamageVariable.IsSolved)                                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MatrixCompressiveDamageVariable.ScopingMethod)                                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MatrixCompressiveDamageVariable.SetNumber)                                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MatrixCompressiveDamageVariable.CombinationNumber)                                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MatrixCompressiveDamageVariable.SolutionCombinationDriver)                                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MatrixCompressiveDamageVariable.WaterfallPanelShowTextOnMosaic)                       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MatrixCompressiveDamageVariable.CrackFrontNumber)                                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MatrixCompressiveDamageVariable.GlobalIDs)                                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MatrixCompressiveDamageVariable.Identifier)                                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MatrixCompressiveDamageVariable.IterationNumber)                                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MatrixCompressiveDamageVariable.LoadStep)                                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MatrixCompressiveDamageVariable.MaximumOccursOn)                                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MatrixCompressiveDamageVariable.MinimumOccursOn)                                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MatrixCompressiveDamageVariable.LoadStepNumber)                                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MatrixCompressiveDamageVariable.SolverComponentIDs)                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MatrixCompressiveDamageVariable.Substep)                                                                     | Gets the Substep.                                                      |
| [`Average`](#MatrixCompressiveDamageVariable.Average)                                                                     | Gets the Average.                                                      |
| [`Maximum`](#MatrixCompressiveDamageVariable.Maximum)                                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MatrixCompressiveDamageVariable.MaximumOfMaximumOverTime)                                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MatrixCompressiveDamageVariable.MaximumOfMinimumOverTime)                                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MatrixCompressiveDamageVariable.Minimum)                                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MatrixCompressiveDamageVariable.MinimumOfMaximumOverTime)                                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MatrixCompressiveDamageVariable.MinimumOfMinimumOverTime)                                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MatrixCompressiveDamageVariable.Time)                                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#MatrixCompressiveDamageVariable.DisplayTime)                                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MatrixCompressiveDamageVariable.DisplayOption)                                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MatrixCompressiveDamageVariable.DpfEvaluation)                                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MatrixCompressiveDamageVariable.By)                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#MatrixCompressiveDamageVariable.ItemType)                                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MatrixCompressiveDamageVariable.CalculateTimeHistory)                                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MatrixCompressiveDamageVariable.Suppressed)                                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#MatrixCompressiveDamageVariable.Children)                                                                   | Gets the list of children.                                             |
| [`Comments`](#MatrixCompressiveDamageVariable.Comments)                                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#MatrixCompressiveDamageVariable.Figures)                                                                     | Gets the list of associated figures.                                   |
| [`Images`](#MatrixCompressiveDamageVariable.Images)                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MatrixCompressiveDamageVariable.Properties)                                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MatrixCompressiveDamageVariable.VisibleProperties)                                                 | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DamageResults import MatrixCompressiveDamageVariable
```

<a id="property-detail"></a>

## Property detail

<a id="MatrixCompressiveDamageVariable.InternalObject"></a>

### *property* MatrixCompressiveDamageVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.DataModelObjectCategory"></a>

### *property* MatrixCompressiveDamageVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Mode"></a>

### *property* MatrixCompressiveDamageVariable.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Ply"></a>

### *property* MatrixCompressiveDamageVariable.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Plies"></a>

### *property* MatrixCompressiveDamageVariable.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.DamageResultType"></a>

### *property* MatrixCompressiveDamageVariable.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.PlotData"></a>

### *property* MatrixCompressiveDamageVariable.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Location"></a>

### *property* MatrixCompressiveDamageVariable.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.TimeForMinimumOfMinimumValues"></a>

### *property* MatrixCompressiveDamageVariable.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.TimeForMinimumOfMaximumValues"></a>

### *property* MatrixCompressiveDamageVariable.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.LoadStepForMinimumOfMinimumValues"></a>

### *property* MatrixCompressiveDamageVariable.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.LoadStepForMinimumOfMaximumValues"></a>

### *property* MatrixCompressiveDamageVariable.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.TimeForMaximumOfMinimumValues"></a>

### *property* MatrixCompressiveDamageVariable.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.TimeForMaximumOfMaximumValues"></a>

### *property* MatrixCompressiveDamageVariable.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.LoadStepForMaximumOfMinimumValues"></a>

### *property* MatrixCompressiveDamageVariable.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.LoadStepForMaximumOfMaximumValues"></a>

### *property* MatrixCompressiveDamageVariable.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.IsSolved"></a>

### *property* MatrixCompressiveDamageVariable.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.CoordinateSystem"></a>

### *property* MatrixCompressiveDamageVariable.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.ScopingMethod"></a>

### *property* MatrixCompressiveDamageVariable.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.SetNumber"></a>

### *property* MatrixCompressiveDamageVariable.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.CombinationNumber"></a>

### *property* MatrixCompressiveDamageVariable.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.SolutionCombinationDriver"></a>

### *property* MatrixCompressiveDamageVariable.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Path"></a>

### *property* MatrixCompressiveDamageVariable.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Surface"></a>

### *property* MatrixCompressiveDamageVariable.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.NamedSelections"></a>

### *property* MatrixCompressiveDamageVariable.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.WaterfallPanelShowTextOnMosaic"></a>

### *property* MatrixCompressiveDamageVariable.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.CrackFrontNumber"></a>

### *property* MatrixCompressiveDamageVariable.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.GlobalIDs"></a>

### *property* MatrixCompressiveDamageVariable.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Identifier"></a>

### *property* MatrixCompressiveDamageVariable.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.IterationNumber"></a>

### *property* MatrixCompressiveDamageVariable.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.LoadStep"></a>

### *property* MatrixCompressiveDamageVariable.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.MaximumOccursOn"></a>

### *property* MatrixCompressiveDamageVariable.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.MinimumOccursOn"></a>

### *property* MatrixCompressiveDamageVariable.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.LoadStepNumber"></a>

### *property* MatrixCompressiveDamageVariable.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.SolverComponentIDs"></a>

### *property* MatrixCompressiveDamageVariable.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Substep"></a>

### *property* MatrixCompressiveDamageVariable.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Average"></a>

### *property* MatrixCompressiveDamageVariable.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Maximum"></a>

### *property* MatrixCompressiveDamageVariable.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.MaximumOfMaximumOverTime"></a>

### *property* MatrixCompressiveDamageVariable.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.MaximumOfMinimumOverTime"></a>

### *property* MatrixCompressiveDamageVariable.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Minimum"></a>

### *property* MatrixCompressiveDamageVariable.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.MinimumOfMaximumOverTime"></a>

### *property* MatrixCompressiveDamageVariable.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.MinimumOfMinimumOverTime"></a>

### *property* MatrixCompressiveDamageVariable.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Time"></a>

### *property* MatrixCompressiveDamageVariable.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.DisplayTime"></a>

### *property* MatrixCompressiveDamageVariable.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.GraphControlsXAxis"></a>

### *property* MatrixCompressiveDamageVariable.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.DisplayOption"></a>

### *property* MatrixCompressiveDamageVariable.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.DpfEvaluation"></a>

### *property* MatrixCompressiveDamageVariable.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.By"></a>

### *property* MatrixCompressiveDamageVariable.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.ItemType"></a>

### *property* MatrixCompressiveDamageVariable.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.CalculateTimeHistory"></a>

### *property* MatrixCompressiveDamageVariable.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Suppressed"></a>

### *property* MatrixCompressiveDamageVariable.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Children"></a>

### *property* MatrixCompressiveDamageVariable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Comments"></a>

### *property* MatrixCompressiveDamageVariable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Figures"></a>

### *property* MatrixCompressiveDamageVariable.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Images"></a>

### *property* MatrixCompressiveDamageVariable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MatrixCompressiveDamageVariable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Properties"></a>

### *property* MatrixCompressiveDamageVariable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.VisibleProperties"></a>

### *property* MatrixCompressiveDamageVariable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatrixCompressiveDamageVariable.ClearGeneratedData"></a>

### MatrixCompressiveDamageVariable.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.EvaluateAllResults"></a>

### MatrixCompressiveDamageVariable.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.FetchRemoteResults"></a>

### MatrixCompressiveDamageVariable.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.ExportToTextFile"></a>

### MatrixCompressiveDamageVariable.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.ExportAnimation"></a>

### MatrixCompressiveDamageVariable.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.DuplicateWithoutResults"></a>

### MatrixCompressiveDamageVariable.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.CreateResultsAtAllSets"></a>

### MatrixCompressiveDamageVariable.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.PromoteToNamedSelection"></a>

### MatrixCompressiveDamageVariable.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.CreateParameter"></a>

### MatrixCompressiveDamageVariable.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.AddAlert"></a>

### MatrixCompressiveDamageVariable.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.AddConvergence"></a>

### MatrixCompressiveDamageVariable.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.RenameBasedOnDefinition"></a>

### MatrixCompressiveDamageVariable.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Delete"></a>

### MatrixCompressiveDamageVariable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.GetChildren"></a>

### MatrixCompressiveDamageVariable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MatrixCompressiveDamageVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.AddComment"></a>

### MatrixCompressiveDamageVariable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.AddFigure"></a>

### MatrixCompressiveDamageVariable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.AddImage"></a>

### MatrixCompressiveDamageVariable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Activate"></a>

### MatrixCompressiveDamageVariable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.CopyTo"></a>

### MatrixCompressiveDamageVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.Duplicate"></a>

### MatrixCompressiveDamageVariable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.GroupAllSimilarChildren"></a>

### MatrixCompressiveDamageVariable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.GroupSimilarObjects"></a>

### MatrixCompressiveDamageVariable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.PropertyByName"></a>

### MatrixCompressiveDamageVariable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.PropertyByAPIName"></a>

### MatrixCompressiveDamageVariable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.GetParameter"></a>

### MatrixCompressiveDamageVariable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveDamageVariable.RemoveParameter"></a>

### MatrixCompressiveDamageVariable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
