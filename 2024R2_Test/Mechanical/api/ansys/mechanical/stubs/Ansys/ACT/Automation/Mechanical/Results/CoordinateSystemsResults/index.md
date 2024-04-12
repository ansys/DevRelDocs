<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults"></a>

<a id="the-coordinatesystemsresults-package"></a>

# The `CoordinateSystemsResults` package

<a id="summary"></a>

## Summary

### Classes

| [`CoordinateSystemsResult`](CoordinateSystemsResult.md#CoordinateSystemsResult)   | Defines a CoordinateSystemsResult.   |
|-----------------------------------------------------------------------------------|--------------------------------------|
| [`ElementalEulerXYAngle`](ElementalEulerXYAngle.md#ElementalEulerXYAngle)         | Defines a ElementalEulerXYAngle.     |
| [`ElementalEulerXZAngle`](ElementalEulerXZAngle.md#ElementalEulerXZAngle)         | Defines a ElementalEulerXZAngle.     |
| [`ElementalEulerYZAngle`](ElementalEulerYZAngle.md#ElementalEulerYZAngle)         | Defines a ElementalEulerYZAngle.     |
| [`ElementalTriads`](ElementalTriads.md#ElementalTriads)                           | Defines a ElementalTriads.           |
| [`NodalEulerXYAngle`](NodalEulerXYAngle.md#NodalEulerXYAngle)                     | Defines a NodalEulerXYAngle.         |
| [`NodalEulerXZAngle`](NodalEulerXZAngle.md#NodalEulerXZAngle)                     | Defines a NodalEulerXZAngle.         |
| [`NodalEulerYZAngle`](NodalEulerYZAngle.md#NodalEulerYZAngle)                     | Defines a NodalEulerYZAngle.         |
| [`NodalTriads`](NodalTriads.md#NodalTriads)                                       | Defines a NodalTriads.               |

<a id="description"></a>

## Description

CoordinateSystemsResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="CoordinateSystemsResults.CoordinateSystemsResult"></a>

### *class* CoordinateSystemsResults.CoordinateSystemsResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CoordinateSystemsResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import CoordinateSystemsResult
```

<a id="property-detail"></a>

## Property detail

<a id="CoordinateSystemsResults.Mode"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Ply"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.InternalObject"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.LoadMultiplier"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ScaleFactorValue"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.SweepingPhase"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.PhaseIncrement"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Frequency"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ScaleFactor"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Position"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.SubScopeBy"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Amplitude"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.DataModelObjectCategory"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.PlotData"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Location"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.TimeForMinimumOfMinimumValues"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.TimeForMinimumOfMaximumValues"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.TimeForMaximumOfMinimumValues"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.TimeForMaximumOfMaximumValues"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.IsSolved"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.CoordinateSystem"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ScopingMethod"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.SetNumber"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.CombinationNumber"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.SolutionCombinationDriver"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Surface"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.CrackFrontNumber"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.GlobalIDs"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Identifier"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.IterationNumber"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.LoadStep"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.MaximumOccursOn"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.MinimumOccursOn"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.LoadStepNumber"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.SolverComponentIDs"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Substep"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Average"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Maximum"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.MaximumOfMaximumOverTime"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.MaximumOfMinimumOverTime"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Minimum"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.MinimumOfMaximumOverTime"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.MinimumOfMinimumOverTime"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Time"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.DisplayTime"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.GraphControlsXAxis"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.DisplayOption"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.DpfEvaluation"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.By"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ItemType"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.CalculateTimeHistory"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Suppressed"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Children"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Comments"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Figures"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Images"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Properties"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.VisibleProperties"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoordinateSystemsResults.ClearGeneratedData"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.EvaluateAllResults"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.FetchRemoteResults"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ExportToTextFile"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ExportAnimation"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.DuplicateWithoutResults"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.CreateResultsAtAllSets"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.PromoteToNamedSelection"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.CreateParameter"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.AddAlert"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.AddConvergence"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.RenameBasedOnDefinition"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Delete"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.GetChildren"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.AddComment"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.AddFigure"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.AddImage"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Activate"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.CopyTo"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.Duplicate"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.GroupAllSimilarChildren"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.GroupSimilarObjects"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.PropertyByName"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.PropertyByAPIName"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.GetParameter"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.RemoveParameter"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ElementalEulerXYAngle"></a>

### *class* CoordinateSystemsResults.ElementalEulerXYAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementalEulerXYAngle.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import ElementalEulerXYAngle
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

## Method detail

<a id="id68"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ElementalEulerXZAngle"></a>

### *class* CoordinateSystemsResults.ElementalEulerXZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementalEulerXZAngle.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id95"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import ElementalEulerXZAngle
```

<a id="id96"></a>

## Property detail

<a id="id97"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

## Method detail

<a id="id161"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ElementalEulerYZAngle"></a>

### *class* CoordinateSystemsResults.ElementalEulerYZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementalEulerYZAngle.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id188"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import ElementalEulerYZAngle
```

<a id="id189"></a>

## Property detail

<a id="id190"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

## Method detail

<a id="id254"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.ElementalTriads"></a>

### *class* CoordinateSystemsResults.ElementalTriads

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementalTriads.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id281"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import ElementalTriads
```

<a id="id282"></a>

## Property detail

<a id="id283"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

## Method detail

<a id="id347"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.NodalEulerXYAngle"></a>

### *class* CoordinateSystemsResults.NodalEulerXYAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalEulerXYAngle.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id374"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import NodalEulerXYAngle
```

<a id="id375"></a>

## Property detail

<a id="id376"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

## Method detail

<a id="id440"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.NodalEulerXZAngle"></a>

### *class* CoordinateSystemsResults.NodalEulerXZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalEulerXZAngle.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id467"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import NodalEulerXZAngle
```

<a id="id468"></a>

## Property detail

<a id="id469"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

## Method detail

<a id="id533"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.NodalEulerYZAngle"></a>

### *class* CoordinateSystemsResults.NodalEulerYZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalEulerYZAngle.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id560"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import NodalEulerYZAngle
```

<a id="id561"></a>

## Property detail

<a id="id562"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

## Method detail

<a id="id626"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResults.NodalTriads"></a>

### *class* CoordinateSystemsResults.NodalTriads

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodalTriads.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id719)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id720)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id721)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id722)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id723)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id724) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id725)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id726) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id727)         | CreateParameter method.                                                           |
| [`AddAlert`](#id728)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id729)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id730) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id731)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id733)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id734)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id735)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id736)                | Creates a new child Image.                                                        |
| [`Activate`](#id737)                | Activate the current object.                                                      |
| [`CopyTo`](#id738)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id739)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id740) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id741)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id742)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id743)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id744)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id745)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id657)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#id658)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#id659)                                                                                                | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#id660)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#id661)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id662)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id663)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#id664)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#id666)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id667)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id668)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id669)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id670)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id671)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id672)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id673)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id674)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id675)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id676)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id677)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id678)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id680)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id681)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id682)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id683)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id685)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id686)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id687)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id688)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id689)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id690)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id691)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id692)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id693)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id694)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id695)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id696)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id697)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id698)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id699)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id700)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id701)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id702)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id703)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id705)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id706)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id707)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id708)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id709)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id710)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id711)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id712)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id713)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id714)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id715)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id716)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id717)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id653"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import NodalTriads
```

<a id="id654"></a>

## Property detail

<a id="id655"></a>

### *property* CoordinateSystemsResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* CoordinateSystemsResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* CoordinateSystemsResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* CoordinateSystemsResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* CoordinateSystemsResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* CoordinateSystemsResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* CoordinateSystemsResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* CoordinateSystemsResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* CoordinateSystemsResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* CoordinateSystemsResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* CoordinateSystemsResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* CoordinateSystemsResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* CoordinateSystemsResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* CoordinateSystemsResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* CoordinateSystemsResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* CoordinateSystemsResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* CoordinateSystemsResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* CoordinateSystemsResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* CoordinateSystemsResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* CoordinateSystemsResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* CoordinateSystemsResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* CoordinateSystemsResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* CoordinateSystemsResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* CoordinateSystemsResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* CoordinateSystemsResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* CoordinateSystemsResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* CoordinateSystemsResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* CoordinateSystemsResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* CoordinateSystemsResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* CoordinateSystemsResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### *property* CoordinateSystemsResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### *property* CoordinateSystemsResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### *property* CoordinateSystemsResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### *property* CoordinateSystemsResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### *property* CoordinateSystemsResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### *property* CoordinateSystemsResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### *property* CoordinateSystemsResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### *property* CoordinateSystemsResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### *property* CoordinateSystemsResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* CoordinateSystemsResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* CoordinateSystemsResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* CoordinateSystemsResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* CoordinateSystemsResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* CoordinateSystemsResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### *property* CoordinateSystemsResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### *property* CoordinateSystemsResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### *property* CoordinateSystemsResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### *property* CoordinateSystemsResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### *property* CoordinateSystemsResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### *property* CoordinateSystemsResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### *property* CoordinateSystemsResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### *property* CoordinateSystemsResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### *property* CoordinateSystemsResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### *property* CoordinateSystemsResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### *property* CoordinateSystemsResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### *property* CoordinateSystemsResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### *property* CoordinateSystemsResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### *property* CoordinateSystemsResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### *property* CoordinateSystemsResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

## Method detail

<a id="id719"></a>

### CoordinateSystemsResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### CoordinateSystemsResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### CoordinateSystemsResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### CoordinateSystemsResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### CoordinateSystemsResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### CoordinateSystemsResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### CoordinateSystemsResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### CoordinateSystemsResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### CoordinateSystemsResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### CoordinateSystemsResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### CoordinateSystemsResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### CoordinateSystemsResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### CoordinateSystemsResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### CoordinateSystemsResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### CoordinateSystemsResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### CoordinateSystemsResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### CoordinateSystemsResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### CoordinateSystemsResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### CoordinateSystemsResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### CoordinateSystemsResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### CoordinateSystemsResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### CoordinateSystemsResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### CoordinateSystemsResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### CoordinateSystemsResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### CoordinateSystemsResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### CoordinateSystemsResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### CoordinateSystemsResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
