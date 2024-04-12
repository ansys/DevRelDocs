<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults"></a>

<a id="the-electricresults-package"></a>

# The `ElectricResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| [`ElectricResult`](ElectricResult.md#ElectricResult)                                                          | Defines a ElectricResult.                    |
| [`DirectionalCurrentDensity`](DirectionalCurrentDensity.md#DirectionalCurrentDensity)                         | Defines a DirectionalCurrentDensity.         |
| [`DirectionalElectricFieldIntensity`](DirectionalElectricFieldIntensity.md#DirectionalElectricFieldIntensity) | Defines a DirectionalElectricFieldIntensity. |
| [`DirectionalElectricFluxDensity`](DirectionalElectricFluxDensity.md#DirectionalElectricFluxDensity)          | Defines a DirectionalElectricFluxDensity.    |
| [`DirectionalElectrostaticForce`](DirectionalElectrostaticForce.md#DirectionalElectrostaticForce)             | Defines a DirectionalElectrostaticForce.     |
| [`ElectricVoltage`](ElectricVoltage.md#ElectricVoltage)                                                       | Defines a ElectricVoltage.                   |
| [`JouleHeat`](JouleHeat.md#JouleHeat)                                                                         | Defines a JouleHeat.                         |
| [`TotalCurrentDensity`](TotalCurrentDensity.md#TotalCurrentDensity)                                           | Defines a TotalCurrentDensity.               |
| [`TotalElectricFieldIntensity`](TotalElectricFieldIntensity.md#TotalElectricFieldIntensity)                   | Defines a TotalElectricFieldIntensity.       |
| [`TotalElectricFluxDensity`](TotalElectricFluxDensity.md#TotalElectricFluxDensity)                            | Defines a TotalElectricFluxDensity.          |
| [`TotalElectrostaticForce`](TotalElectrostaticForce.md#TotalElectrostaticForce)                               | Defines a TotalElectrostaticForce.           |

<a id="description"></a>

## Description

ElectricResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ElectricResults.ElectricResult"></a>

### *class* ElectricResults.ElectricResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectricResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import ElectricResult
```

<a id="property-detail"></a>

## Property detail

<a id="ElectricResults.InternalObject"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.ReportedFrequency"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.SweepingPhase"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.PhaseIncrement"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Frequency"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.ElectricResultType"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Amplitude"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.AverageAcrossBodies"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DataModelObjectCategory"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.PlotData"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Location"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.TimeForMinimumOfMinimumValues"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.TimeForMinimumOfMaximumValues"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.TimeForMaximumOfMinimumValues"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.TimeForMaximumOfMaximumValues"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.IsSolved"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.CoordinateSystem"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.ScopingMethod"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.SetNumber"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.CombinationNumber"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.SolutionCombinationDriver"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Surface"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.CrackFrontNumber"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.GlobalIDs"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Identifier"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.IterationNumber"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.LoadStep"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.MaximumOccursOn"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.MinimumOccursOn"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.LoadStepNumber"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.SolverComponentIDs"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Substep"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Average"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Maximum"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.MaximumOfMaximumOverTime"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.MaximumOfMinimumOverTime"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Minimum"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.MinimumOfMaximumOverTime"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.MinimumOfMinimumOverTime"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Time"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DisplayTime"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.GraphControlsXAxis"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DisplayOption"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DpfEvaluation"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.By"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.ItemType"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.CalculateTimeHistory"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Suppressed"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Children"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Comments"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Figures"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Images"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Properties"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.VisibleProperties"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectricResults.ClearGeneratedData"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.EvaluateAllResults"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.FetchRemoteResults"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.ExportToTextFile"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.ExportAnimation"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DuplicateWithoutResults"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.CreateResultsAtAllSets"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.PromoteToNamedSelection"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.CreateParameter"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.AddAlert"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.AddConvergence"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.RenameBasedOnDefinition"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Delete"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.GetChildren"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.AddComment"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.AddFigure"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.AddImage"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Activate"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.CopyTo"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Duplicate"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.GroupAllSimilarChildren"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.GroupSimilarObjects"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.PropertyByName"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.PropertyByAPIName"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.GetParameter"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.RemoveParameter"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DirectionalCurrentDensity"></a>

### *class* ElectricResults.DirectionalCurrentDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalCurrentDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id274)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import DirectionalCurrentDensity
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.NormalOrientation"></a>

### *property* ElectricResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

## Method detail

<a id="id64"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DirectionalElectricFieldIntensity"></a>

### *class* ElectricResults.DirectionalElectricFieldIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalElectricFieldIntensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id274)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id91"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import DirectionalElectricFieldIntensity
```

<a id="id92"></a>

## Property detail

<a id="id93"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* ElectricResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

## Method detail

<a id="id154"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DirectionalElectricFluxDensity"></a>

### *class* ElectricResults.DirectionalElectricFluxDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalElectricFluxDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id274)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id181"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import DirectionalElectricFluxDensity
```

<a id="id182"></a>

## Property detail

<a id="id183"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* ElectricResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

## Method detail

<a id="id244"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.DirectionalElectrostaticForce"></a>

### *class* ElectricResults.DirectionalElectrostaticForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalElectrostaticForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Total`](#id809)                                                                                                         | Gets the Total.                                                        |
| [`NormalOrientation`](#id274)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id271"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import DirectionalElectrostaticForce
```

<a id="id272"></a>

## Property detail

<a id="id273"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.Total"></a>

### *property* ElectricResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* ElectricResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

## Method detail

<a id="id334"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.ElectricVoltage"></a>

### *class* ElectricResults.ElectricVoltage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectricVoltage.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id361"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import ElectricVoltage
```

<a id="id362"></a>

## Property detail

<a id="id363"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

## Method detail

<a id="id423"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.JouleHeat"></a>

### *class* ElectricResults.JouleHeat

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a JouleHeat.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id450"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import JouleHeat
```

<a id="id451"></a>

## Property detail

<a id="id452"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

## Method detail

<a id="id512"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.TotalCurrentDensity"></a>

### *class* ElectricResults.TotalCurrentDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalCurrentDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id539"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import TotalCurrentDensity
```

<a id="id540"></a>

## Property detail

<a id="id541"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

## Method detail

<a id="id601"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.TotalElectricFieldIntensity"></a>

### *class* ElectricResults.TotalElectricFieldIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalElectricFieldIntensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id628"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import TotalElectricFieldIntensity
```

<a id="id629"></a>

## Property detail

<a id="id630"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

## Method detail

<a id="id690"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.TotalElectricFluxDensity"></a>

### *class* ElectricResults.TotalElectricFluxDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalElectricFluxDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id717"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import TotalElectricFluxDensity
```

<a id="id718"></a>

## Property detail

<a id="id719"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

## Method detail

<a id="id779"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id781"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id786"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id787"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id794"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id795"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id796"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id804"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id805"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResults.TotalElectrostaticForce"></a>

### *class* ElectricResults.TotalElectrostaticForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalElectrostaticForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id869)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id870)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id871)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id872)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id873)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id874) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id875)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id876) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id877)         | CreateParameter method.                                                           |
| [`AddAlert`](#id878)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id879)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id880) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id881)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id883)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id884)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id885)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id886)                | Creates a new child Image.                                                        |
| [`Activate`](#id887)                | Activate the current object.                                                      |
| [`CopyTo`](#id888)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id889)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id890) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id891)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id892)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id893)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id894)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id895)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Total`](#id809)                                                                                                         | Gets the Total.                                                        |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#id811)                                                                                             | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id812)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id813)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id814)                                                                                                     | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#id815)                                                                                            | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#id816)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id817)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id818)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id819)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id820)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id821)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id822)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id823)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id824)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id825)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id826)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id827)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id828)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id830)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id831)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id832)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id833)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id835)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id836)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id837)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id838)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id839)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id840)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id841)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id842)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id843)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id844)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id845)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id846)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id847)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id848)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id849)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id850)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id851)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id852)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id853)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id855)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id856)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id857)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id858)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id859)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id860)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id861)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id862)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id863)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id864)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id865)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id866)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id867)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id806"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import TotalElectrostaticForce
```

<a id="id807"></a>

## Property detail

<a id="id808"></a>

### *property* ElectricResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### *property* ElectricResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### *property* ElectricResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### *property* ElectricResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### *property* ElectricResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id813"></a>

### *property* ElectricResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id814"></a>

### *property* ElectricResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id815"></a>

### *property* ElectricResults.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="id816"></a>

### *property* ElectricResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id817"></a>

### *property* ElectricResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id818"></a>

### *property* ElectricResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id819"></a>

### *property* ElectricResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id820"></a>

### *property* ElectricResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id821"></a>

### *property* ElectricResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id822"></a>

### *property* ElectricResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id823"></a>

### *property* ElectricResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id824"></a>

### *property* ElectricResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id825"></a>

### *property* ElectricResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id826"></a>

### *property* ElectricResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id827"></a>

### *property* ElectricResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id828"></a>

### *property* ElectricResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id829"></a>

### *property* ElectricResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id830"></a>

### *property* ElectricResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id831"></a>

### *property* ElectricResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id832"></a>

### *property* ElectricResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id833"></a>

### *property* ElectricResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id834"></a>

### *property* ElectricResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id835"></a>

### *property* ElectricResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id836"></a>

### *property* ElectricResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id837"></a>

### *property* ElectricResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id838"></a>

### *property* ElectricResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id839"></a>

### *property* ElectricResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id840"></a>

### *property* ElectricResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id841"></a>

### *property* ElectricResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id842"></a>

### *property* ElectricResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id843"></a>

### *property* ElectricResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id844"></a>

### *property* ElectricResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id845"></a>

### *property* ElectricResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id846"></a>

### *property* ElectricResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id847"></a>

### *property* ElectricResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id848"></a>

### *property* ElectricResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id849"></a>

### *property* ElectricResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id850"></a>

### *property* ElectricResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id851"></a>

### *property* ElectricResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id852"></a>

### *property* ElectricResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id853"></a>

### *property* ElectricResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id854"></a>

### *property* ElectricResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id855"></a>

### *property* ElectricResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id856"></a>

### *property* ElectricResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id857"></a>

### *property* ElectricResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id858"></a>

### *property* ElectricResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id859"></a>

### *property* ElectricResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id860"></a>

### *property* ElectricResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id861"></a>

### *property* ElectricResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id862"></a>

### *property* ElectricResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id863"></a>

### *property* ElectricResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id864"></a>

### *property* ElectricResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id865"></a>

### *property* ElectricResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id866"></a>

### *property* ElectricResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id867"></a>

### *property* ElectricResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id868"></a>

## Method detail

<a id="id869"></a>

### ElectricResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id870"></a>

### ElectricResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id871"></a>

### ElectricResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id872"></a>

### ElectricResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id873"></a>

### ElectricResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id874"></a>

### ElectricResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id875"></a>

### ElectricResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id876"></a>

### ElectricResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id877"></a>

### ElectricResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id878"></a>

### ElectricResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id879"></a>

### ElectricResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id880"></a>

### ElectricResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id881"></a>

### ElectricResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id882"></a>

### ElectricResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id883"></a>

### ElectricResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id884"></a>

### ElectricResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id885"></a>

### ElectricResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id886"></a>

### ElectricResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id887"></a>

### ElectricResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id888"></a>

### ElectricResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id889"></a>

### ElectricResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id890"></a>

### ElectricResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id891"></a>

### ElectricResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id892"></a>

### ElectricResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id893"></a>

### ElectricResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id894"></a>

### ElectricResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id895"></a>

### ElectricResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
