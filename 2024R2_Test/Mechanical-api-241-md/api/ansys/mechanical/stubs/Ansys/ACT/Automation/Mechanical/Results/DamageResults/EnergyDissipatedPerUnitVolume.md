<a id="energydissipatedperunitvolume"></a>

# EnergyDissipatedPerUnitVolume

<a id="EnergyDissipatedPerUnitVolume"></a>

### *class* EnergyDissipatedPerUnitVolume

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EnergyDissipatedPerUnitVolume.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ClearGeneratedData`](#EnergyDissipatedPerUnitVolume.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#EnergyDissipatedPerUnitVolume.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EnergyDissipatedPerUnitVolume.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EnergyDissipatedPerUnitVolume.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EnergyDissipatedPerUnitVolume.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EnergyDissipatedPerUnitVolume.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EnergyDissipatedPerUnitVolume.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EnergyDissipatedPerUnitVolume.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EnergyDissipatedPerUnitVolume.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EnergyDissipatedPerUnitVolume.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EnergyDissipatedPerUnitVolume.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EnergyDissipatedPerUnitVolume.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EnergyDissipatedPerUnitVolume.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EnergyDissipatedPerUnitVolume.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EnergyDissipatedPerUnitVolume.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EnergyDissipatedPerUnitVolume.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EnergyDissipatedPerUnitVolume.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EnergyDissipatedPerUnitVolume.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EnergyDissipatedPerUnitVolume.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EnergyDissipatedPerUnitVolume.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EnergyDissipatedPerUnitVolume.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EnergyDissipatedPerUnitVolume.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EnergyDissipatedPerUnitVolume.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EnergyDissipatedPerUnitVolume.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EnergyDissipatedPerUnitVolume.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#EnergyDissipatedPerUnitVolume.Mode)                                                                             | Gets or sets the Mode.                                                 |
| [`Ply`](#EnergyDissipatedPerUnitVolume.Ply)                                                                               | Gets or sets the Ply selection.                                        |
| [`Plies`](#EnergyDissipatedPerUnitVolume.Plies)                                                                           | Plies property.                                                        |
| [`DamageResultType`](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType)                      | Gets the DamageResultType.                                             |
| [`PlotData`](#EnergyDissipatedPerUnitVolume.PlotData)                                                                     | Gets the result table.                                                 |
| [`Location`](#EnergyDissipatedPerUnitVolume.Location)                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EnergyDissipatedPerUnitVolume.TimeForMinimumOfMinimumValues)                           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EnergyDissipatedPerUnitVolume.TimeForMinimumOfMaximumValues)                           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMinimumValues)                   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMaximumValues)                   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EnergyDissipatedPerUnitVolume.TimeForMaximumOfMinimumValues)                           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EnergyDissipatedPerUnitVolume.TimeForMaximumOfMaximumValues)                           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMinimumValues)                   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMaximumValues)                   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EnergyDissipatedPerUnitVolume.IsSolved)                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EnergyDissipatedPerUnitVolume.ScopingMethod)                                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EnergyDissipatedPerUnitVolume.SetNumber)                                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EnergyDissipatedPerUnitVolume.CombinationNumber)                                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EnergyDissipatedPerUnitVolume.SolutionCombinationDriver)                                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EnergyDissipatedPerUnitVolume.WaterfallPanelShowTextOnMosaic)                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EnergyDissipatedPerUnitVolume.CrackFrontNumber)                                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EnergyDissipatedPerUnitVolume.GlobalIDs)                                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EnergyDissipatedPerUnitVolume.Identifier)                                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EnergyDissipatedPerUnitVolume.IterationNumber)                                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#EnergyDissipatedPerUnitVolume.LoadStep)                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EnergyDissipatedPerUnitVolume.MaximumOccursOn)                                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EnergyDissipatedPerUnitVolume.MinimumOccursOn)                                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EnergyDissipatedPerUnitVolume.LoadStepNumber)                                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EnergyDissipatedPerUnitVolume.SolverComponentIDs)                                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EnergyDissipatedPerUnitVolume.Substep)                                                                       | Gets the Substep.                                                      |
| [`Average`](#EnergyDissipatedPerUnitVolume.Average)                                                                       | Gets the Average.                                                      |
| [`Maximum`](#EnergyDissipatedPerUnitVolume.Maximum)                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EnergyDissipatedPerUnitVolume.MaximumOfMaximumOverTime)                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EnergyDissipatedPerUnitVolume.MaximumOfMinimumOverTime)                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EnergyDissipatedPerUnitVolume.Minimum)                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EnergyDissipatedPerUnitVolume.MinimumOfMaximumOverTime)                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EnergyDissipatedPerUnitVolume.MinimumOfMinimumOverTime)                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EnergyDissipatedPerUnitVolume.Time)                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#EnergyDissipatedPerUnitVolume.DisplayTime)                                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EnergyDissipatedPerUnitVolume.DisplayOption)                                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EnergyDissipatedPerUnitVolume.DpfEvaluation)                                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EnergyDissipatedPerUnitVolume.By)                                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#EnergyDissipatedPerUnitVolume.ItemType)                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EnergyDissipatedPerUnitVolume.CalculateTimeHistory)                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EnergyDissipatedPerUnitVolume.Suppressed)                                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#EnergyDissipatedPerUnitVolume.Children)                                                                     | Gets the list of children.                                             |
| [`Comments`](#EnergyDissipatedPerUnitVolume.Comments)                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#EnergyDissipatedPerUnitVolume.Figures)                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#EnergyDissipatedPerUnitVolume.Images)                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EnergyDissipatedPerUnitVolume.Properties)                                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EnergyDissipatedPerUnitVolume.VisibleProperties)                                                   | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DamageResults import EnergyDissipatedPerUnitVolume
```

<a id="property-detail"></a>

## Property detail

<a id="EnergyDissipatedPerUnitVolume.InternalObject"></a>

### *property* EnergyDissipatedPerUnitVolume.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DataModelObjectCategory"></a>

### *property* EnergyDissipatedPerUnitVolume.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Mode"></a>

### *property* EnergyDissipatedPerUnitVolume.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Ply"></a>

### *property* EnergyDissipatedPerUnitVolume.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Plies"></a>

### *property* EnergyDissipatedPerUnitVolume.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DamageResultType"></a>

### *property* EnergyDissipatedPerUnitVolume.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PlotData"></a>

### *property* EnergyDissipatedPerUnitVolume.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Location"></a>

### *property* EnergyDissipatedPerUnitVolume.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TimeForMinimumOfMinimumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TimeForMinimumOfMaximumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMinimumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMaximumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TimeForMaximumOfMinimumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.TimeForMaximumOfMaximumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMinimumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMaximumValues"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.IsSolved"></a>

### *property* EnergyDissipatedPerUnitVolume.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CoordinateSystem"></a>

### *property* EnergyDissipatedPerUnitVolume.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ScopingMethod"></a>

### *property* EnergyDissipatedPerUnitVolume.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.SetNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CombinationNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.SolutionCombinationDriver"></a>

### *property* EnergyDissipatedPerUnitVolume.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Path"></a>

### *property* EnergyDissipatedPerUnitVolume.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Surface"></a>

### *property* EnergyDissipatedPerUnitVolume.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.NamedSelections"></a>

### *property* EnergyDissipatedPerUnitVolume.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.WaterfallPanelShowTextOnMosaic"></a>

### *property* EnergyDissipatedPerUnitVolume.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CrackFrontNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GlobalIDs"></a>

### *property* EnergyDissipatedPerUnitVolume.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Identifier"></a>

### *property* EnergyDissipatedPerUnitVolume.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.IterationNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStep"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MaximumOccursOn"></a>

### *property* EnergyDissipatedPerUnitVolume.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MinimumOccursOn"></a>

### *property* EnergyDissipatedPerUnitVolume.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.LoadStepNumber"></a>

### *property* EnergyDissipatedPerUnitVolume.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.SolverComponentIDs"></a>

### *property* EnergyDissipatedPerUnitVolume.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Substep"></a>

### *property* EnergyDissipatedPerUnitVolume.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Average"></a>

### *property* EnergyDissipatedPerUnitVolume.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Maximum"></a>

### *property* EnergyDissipatedPerUnitVolume.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MaximumOfMaximumOverTime"></a>

### *property* EnergyDissipatedPerUnitVolume.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MaximumOfMinimumOverTime"></a>

### *property* EnergyDissipatedPerUnitVolume.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Minimum"></a>

### *property* EnergyDissipatedPerUnitVolume.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MinimumOfMaximumOverTime"></a>

### *property* EnergyDissipatedPerUnitVolume.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.MinimumOfMinimumOverTime"></a>

### *property* EnergyDissipatedPerUnitVolume.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Time"></a>

### *property* EnergyDissipatedPerUnitVolume.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DisplayTime"></a>

### *property* EnergyDissipatedPerUnitVolume.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GraphControlsXAxis"></a>

### *property* EnergyDissipatedPerUnitVolume.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DisplayOption"></a>

### *property* EnergyDissipatedPerUnitVolume.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DpfEvaluation"></a>

### *property* EnergyDissipatedPerUnitVolume.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.By"></a>

### *property* EnergyDissipatedPerUnitVolume.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ItemType"></a>

### *property* EnergyDissipatedPerUnitVolume.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CalculateTimeHistory"></a>

### *property* EnergyDissipatedPerUnitVolume.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Suppressed"></a>

### *property* EnergyDissipatedPerUnitVolume.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Children"></a>

### *property* EnergyDissipatedPerUnitVolume.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Comments"></a>

### *property* EnergyDissipatedPerUnitVolume.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Figures"></a>

### *property* EnergyDissipatedPerUnitVolume.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Images"></a>

### *property* EnergyDissipatedPerUnitVolume.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EnergyDissipatedPerUnitVolume.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Properties"></a>

### *property* EnergyDissipatedPerUnitVolume.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.VisibleProperties"></a>

### *property* EnergyDissipatedPerUnitVolume.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EnergyDissipatedPerUnitVolume.ClearGeneratedData"></a>

### EnergyDissipatedPerUnitVolume.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.EvaluateAllResults"></a>

### EnergyDissipatedPerUnitVolume.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.FetchRemoteResults"></a>

### EnergyDissipatedPerUnitVolume.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ExportToTextFile"></a>

### EnergyDissipatedPerUnitVolume.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.ExportAnimation"></a>

### EnergyDissipatedPerUnitVolume.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.DuplicateWithoutResults"></a>

### EnergyDissipatedPerUnitVolume.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CreateResultsAtAllSets"></a>

### EnergyDissipatedPerUnitVolume.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PromoteToNamedSelection"></a>

### EnergyDissipatedPerUnitVolume.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CreateParameter"></a>

### EnergyDissipatedPerUnitVolume.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddAlert"></a>

### EnergyDissipatedPerUnitVolume.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddConvergence"></a>

### EnergyDissipatedPerUnitVolume.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RenameBasedOnDefinition"></a>

### EnergyDissipatedPerUnitVolume.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Delete"></a>

### EnergyDissipatedPerUnitVolume.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetChildren"></a>

### EnergyDissipatedPerUnitVolume.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EnergyDissipatedPerUnitVolume.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddComment"></a>

### EnergyDissipatedPerUnitVolume.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddFigure"></a>

### EnergyDissipatedPerUnitVolume.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.AddImage"></a>

### EnergyDissipatedPerUnitVolume.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Activate"></a>

### EnergyDissipatedPerUnitVolume.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.CopyTo"></a>

### EnergyDissipatedPerUnitVolume.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.Duplicate"></a>

### EnergyDissipatedPerUnitVolume.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GroupAllSimilarChildren"></a>

### EnergyDissipatedPerUnitVolume.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GroupSimilarObjects"></a>

### EnergyDissipatedPerUnitVolume.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PropertyByName"></a>

### EnergyDissipatedPerUnitVolume.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.PropertyByAPIName"></a>

### EnergyDissipatedPerUnitVolume.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.GetParameter"></a>

### EnergyDissipatedPerUnitVolume.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyDissipatedPerUnitVolume.RemoveParameter"></a>

### EnergyDissipatedPerUnitVolume.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
