<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults"></a>

<a id="the-acousticresults-package"></a>

# The `AcousticResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`AcousticPressureResult`](AcousticPressureResult.md#AcousticPressureResult)                                                                            | Defines a AcousticPressureResult.                          |
| [`AcousticResult`](AcousticResult.md#AcousticResult)                                                                                                    | Defines a AcousticResult.                                  |
| [`AcousticFarFieldResult`](AcousticFarFieldResult.md#AcousticFarFieldResult)                                                                            | Defines a AcousticFarFieldResult.                          |
| [`AcousticAbsorptionCoefficient`](AcousticAbsorptionCoefficient.md#AcousticAbsorptionCoefficient)                                                       | Defines a AcousticAbsorptionCoefficient.                   |
| [`AcousticReturnLoss`](AcousticReturnLoss.md#AcousticReturnLoss)                                                                                        | Defines a AcousticReturnLoss.                              |
| [`AcousticTransmissionLoss`](AcousticTransmissionLoss.md#AcousticTransmissionLoss)                                                                      | Defines a AcousticTransmissionLoss.                        |
| [`AcousticAWeightedSoundPressureLevel`](AcousticAWeightedSoundPressureLevel.md#AcousticAWeightedSoundPressureLevel)                                     | Defines a AcousticAWeightedSoundPressureLevel.             |
| [`AcousticDiffuseSoundTransmissionLoss`](AcousticDiffuseSoundTransmissionLoss.md#AcousticDiffuseSoundTransmissionLoss)                                  | Defines a AcousticDiffuseSoundTransmissionLoss.            |
| [`AcousticDirectionalVelocityResult`](AcousticDirectionalVelocityResult.md#AcousticDirectionalVelocityResult)                                           | Defines a AcousticDirectionalVelocityResult.               |
| [`AcousticFarFieldSoundPowerLevelWaterfallDiagram`](AcousticFarFieldSoundPowerLevelWaterfallDiagram.md#AcousticFarFieldSoundPowerLevelWaterfallDiagram) | Defines a AcousticFarFieldSoundPowerLevelWaterfallDiagram. |
| [`AcousticFarFieldSPLMicWaterfallDiagram`](AcousticFarFieldSPLMicWaterfallDiagram.md#AcousticFarFieldSPLMicWaterfallDiagram)                            | Defines a AcousticFarFieldSPLMicWaterfallDiagram.          |
| [`AcousticFrequencyBandAWeightedSPL`](AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL)                                           | Defines a AcousticFrequencyBandAWeightedSPL.               |
| [`AcousticFrequencyBandSPL`](AcousticFrequencyBandSPL.md#AcousticFrequencyBandSPL)                                                                      | Defines a AcousticFrequencyBandSPL.                        |
| [`AcousticKineticEnergy`](AcousticKineticEnergy.md#AcousticKineticEnergy)                                                                               | Defines a AcousticKineticEnergy.                           |
| [`AcousticPotentialEnergy`](AcousticPotentialEnergy.md#AcousticPotentialEnergy)                                                                         | Defines a AcousticPotentialEnergy.                         |
| [`AcousticSoundPressureLevel`](AcousticSoundPressureLevel.md#AcousticSoundPressureLevel)                                                                | Defines a AcousticSoundPressureLevel.                      |
| [`AcousticTotalVelocityResult`](AcousticTotalVelocityResult.md#AcousticTotalVelocityResult)                                                             | Defines a AcousticTotalVelocityResult.                     |

<a id="description"></a>

## Description

AcousticResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="AcousticResults.AcousticPressureResult"></a>

### *class* AcousticResults.AcousticPressureResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticPressureResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToWAVFile`](#id936)          | Run the Export To WAVFile action.                                                 |
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticPressureResult
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticResults.InternalObject"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.DataModelObjectCategory"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Mode"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ReportedFrequency"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.DampedFrequency"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.LogarithmicDecrement"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ModalDampingRatio"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Stability"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.SweepingPhase"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Frequency"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Amplitude"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.PlotData"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Location"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.IsSolved"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.CoordinateSystem"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ScopingMethod"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.SetNumber"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.CombinationNumber"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.SolutionCombinationDriver"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Surface"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.CrackFrontNumber"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.GlobalIDs"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Identifier"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.IterationNumber"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.LoadStep"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.MaximumOccursOn"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.MinimumOccursOn"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.LoadStepNumber"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.SolverComponentIDs"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Substep"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Average"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Maximum"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.MaximumOfMaximumOverTime"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.MaximumOfMinimumOverTime"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Minimum"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.MinimumOfMaximumOverTime"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.MinimumOfMinimumOverTime"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Time"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.DisplayTime"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.GraphControlsXAxis"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.DisplayOption"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.DpfEvaluation"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.By"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ItemType"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.CalculateTimeHistory"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Suppressed"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Children"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Comments"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Figures"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Images"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Properties"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.VisibleProperties"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticResults.ExportToWAVFile"></a>

### AcousticResults.ExportToWAVFile(filePath: System.String)

Run the Export To WAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ClearGeneratedData"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.EvaluateAllResults"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.FetchRemoteResults"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ExportToTextFile"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ExportAnimation"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.DuplicateWithoutResults"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.CreateResultsAtAllSets"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.PromoteToNamedSelection"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.CreateParameter"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AddAlert"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AddConvergence"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.RenameBasedOnDefinition"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Delete"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.GetChildren"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AddComment"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AddFigure"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AddImage"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Activate"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.CopyTo"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Duplicate"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.GroupAllSimilarChildren"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.GroupSimilarObjects"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.PropertyByName"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.PropertyByAPIName"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.GetParameter"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.RemoveParameter"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticResult"></a>

### *class* AcousticResults.AcousticResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticResult
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

## Method detail

<a id="id66"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticFarFieldResult"></a>

### *class* AcousticResults.AcousticFarFieldResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFarFieldResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToXMLFile`](#id935)          | Run the ExportToXMLFile action.                                                   |
| [`ExportToWAVFile`](#id936)          | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`FarFieldMicrophoneDefinitionMethod`](#id855)                                                                            | Gets or sets the FarFieldMicrophoneDefinitionMethod.                   |
| [`Worksheet`](../../Worksheet.md#Worksheet)                                                                               | Get the ObjectiveWorksheet action.                                     |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`PhiAngleNoOfDivisions`](#id861)                                                                                         | Gets or sets the PhiAngleNoOfDivisions.                                |
| [`ThetaAngleNoOfDivisions`](#id862)                                                                                       | Gets or sets the ThetaAngleNoOfDivisions.                              |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`Density`](#id864)                                                                                                       | Gets or sets the Density.                                              |
| [`XCoordinate`](#id865)                                                                                                   | Gets or sets the XCoordinate.                                          |
| [`YCoordinate`](#id866)                                                                                                   | Gets or sets the YCoordinate.                                          |
| [`ZCoordinate`](#id867)                                                                                                   | Gets or sets the ZCoordinate.                                          |
| [`ModelThicknessInZDirection`](#id868)                                                                                    | Gets or sets the ModelThicknessInZDirection.                           |
| [`ReferenceRMSSoundPressure`](#id869)                                                                                     | Gets or sets the ReferenceRMSSoundPressure.                            |
| [`ReferenceSoundPower`](#id870)                                                                                           | Gets or sets the ReferenceSoundPower.                                  |
| [`SoundSpeed`](#id871)                                                                                                    | Gets or sets the SoundSpeed.                                           |
| [`EndingRadiationAnglePhi`](#id872)                                                                                       | Gets or sets the EndingRadiationAnglePhi.                              |
| [`EndingRadiationAngleTheta`](#id873)                                                                                     | Gets or sets the EndingRadiationAngleTheta.                            |
| [`StartingRadiationAnglePhi`](#id874)                                                                                     | Gets or sets the StartingRadiationAnglePhi.                            |
| [`StartingRadiationAngleTheta`](#id875)                                                                                   | Gets or sets the StartingRadiationAngleTheta.                          |
| [`PhiAngleEnd`](#id876)                                                                                                   | Gets or sets the PhiAngleEnd.                                          |
| [`ThetaAngleEnd`](#id877)                                                                                                 | Gets or sets the ThetaAngleEnd.                                        |
| [`SphereRadius`](#id878)                                                                                                  | Gets or sets the SphereRadius.                                         |
| [`PhiAngleStart`](#id879)                                                                                                 | Gets or sets the PhiAngleStart.                                        |
| [`ThetaAngleStart`](#id880)                                                                                               | Gets or sets the ThetaAngleStart.                                      |
| [`YAxisExtrusionAngle`](#id881)                                                                                           | Gets or sets the YAxisExtrusionAngle.                                  |
| [`ModelType`](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType)                                           | Gets or sets the ModelType.                                            |
| [`SpatialRadiationAngle`](#id883)                                                                                         | Gets or sets the SpatialRadiationAngle.                                |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id93"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFarFieldResult
```

<a id="id94"></a>

## Property detail

<a id="AcousticResults.FarFieldMicrophoneDefinitionMethod"></a>

### *property* AcousticResults.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Worksheet"></a>

### *property* AcousticResults.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.PhiAngleNoOfDivisions"></a>

### *property* AcousticResults.PhiAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ThetaAngleNoOfDivisions"></a>

### *property* AcousticResults.ThetaAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.Density"></a>

### *property* AcousticResults.Density *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.XCoordinate"></a>

### *property* AcousticResults.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.YCoordinate"></a>

### *property* AcousticResults.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ZCoordinate"></a>

### *property* AcousticResults.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ModelThicknessInZDirection"></a>

### *property* AcousticResults.ModelThicknessInZDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ReferenceRMSSoundPressure"></a>

### *property* AcousticResults.ReferenceRMSSoundPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ReferenceSoundPower"></a>

### *property* AcousticResults.ReferenceSoundPower *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.SoundSpeed"></a>

### *property* AcousticResults.SoundSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.EndingRadiationAnglePhi"></a>

### *property* AcousticResults.EndingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.EndingRadiationAngleTheta"></a>

### *property* AcousticResults.EndingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.StartingRadiationAnglePhi"></a>

### *property* AcousticResults.StartingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.StartingRadiationAngleTheta"></a>

### *property* AcousticResults.StartingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.PhiAngleEnd"></a>

### *property* AcousticResults.PhiAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ThetaAngleEnd"></a>

### *property* AcousticResults.ThetaAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.SphereRadius"></a>

### *property* AcousticResults.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.PhiAngleStart"></a>

### *property* AcousticResults.PhiAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ThetaAngleStart"></a>

### *property* AcousticResults.ThetaAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.YAxisExtrusionAngle"></a>

### *property* AcousticResults.YAxisExtrusionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.ModelType"></a>

### *property* AcousticResults.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.SpatialRadiationAngle"></a>

### *property* AcousticResults.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

## Method detail

<a id="AcousticResults.ExportToXMLFile"></a>

### AcousticResults.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### AcousticResults.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticAbsorptionCoefficient"></a>

### *class* AcousticResults.AcousticAbsorptionCoefficient

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticAbsorptionCoefficient.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InputPort`](#id369)                                                                                                     | Gets or sets the InputPort.                                            |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#id556)                                                                                              | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#id557)                                                                                              | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#id558)                                                                                                | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id181"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticAbsorptionCoefficient
```

<a id="id182"></a>

## Property detail

<a id="AcousticResults.InputPort"></a>

### *property* AcousticResults.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.MaximumFrequency"></a>

### *property* AcousticResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.MinimumFrequency"></a>

### *property* AcousticResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.FrequencyRange"></a>

### *property* AcousticResults.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

## Method detail

<a id="id245"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticReturnLoss"></a>

### *class* AcousticResults.AcousticReturnLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticReturnLoss.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InputPort`](#id369)                                                                                                     | Gets or sets the InputPort.                                            |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#id556)                                                                                              | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#id557)                                                                                              | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#id558)                                                                                                | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id272"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticReturnLoss
```

<a id="id273"></a>

## Property detail

<a id="id274"></a>

### *property* AcousticResults.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* AcousticResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* AcousticResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* AcousticResults.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

## Method detail

<a id="id340"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticTransmissionLoss"></a>

### *class* AcousticResults.AcousticTransmissionLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticTransmissionLoss.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InputPort`](#id369)                                                                                                     | Gets or sets the InputPort.                                            |
| [`OutputPort`](#AcousticResults.OutputPort)                                                                               | Gets or sets the OutputPort.                                           |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#id556)                                                                                              | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#id557)                                                                                              | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#id558)                                                                                                | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id367"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticTransmissionLoss
```

<a id="id368"></a>

## Property detail

<a id="id369"></a>

### *property* AcousticResults.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.OutputPort"></a>

### *property* AcousticResults.OutputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputPort.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* AcousticResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* AcousticResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* AcousticResults.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

## Method detail

<a id="id435"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticAWeightedSoundPressureLevel"></a>

### *class* AcousticResults.AcousticAWeightedSoundPressureLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticAWeightedSoundPressureLevel.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id462"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticAWeightedSoundPressureLevel
```

<a id="id463"></a>

## Property detail

<a id="id464"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

## Method detail

<a id="id526"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticDiffuseSoundTransmissionLoss"></a>

### *class* AcousticResults.AcousticDiffuseSoundTransmissionLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticDiffuseSoundTransmissionLoss.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#id556)                                                                                              | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#id557)                                                                                              | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#id558)                                                                                                | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id553"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticDiffuseSoundTransmissionLoss
```

<a id="id554"></a>

## Property detail

<a id="id555"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* AcousticResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* AcousticResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* AcousticResults.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

## Method detail

<a id="id620"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticDirectionalVelocityResult"></a>

### *class* AcousticResults.AcousticDirectionalVelocityResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticDirectionalVelocityResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#AcousticResults.NormalOrientation)                                                                 | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id647"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticDirectionalVelocityResult
```

<a id="id648"></a>

## Property detail

<a id="id649"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.NormalOrientation"></a>

### *property* AcousticResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

## Method detail

<a id="id711"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticFarFieldSoundPowerLevelWaterfallDiagram"></a>

### *class* AcousticResults.AcousticFarFieldSoundPowerLevelWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFarFieldSoundPowerLevelWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToXMLFile`](#id935)          | Run the ExportToXMLFile action.                                                   |
| [`ExportToWAVFile`](#id936)          | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`FarFieldMicrophoneDefinitionMethod`](#id855)                                                                            | Gets or sets the FarFieldMicrophoneDefinitionMethod.                   |
| [`Worksheet`](../../Worksheet.md#Worksheet)                                                                               | Get the ObjectiveWorksheet action.                                     |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`PhiAngleNoOfDivisions`](#id861)                                                                                         | Gets or sets the PhiAngleNoOfDivisions.                                |
| [`ThetaAngleNoOfDivisions`](#id862)                                                                                       | Gets or sets the ThetaAngleNoOfDivisions.                              |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`Density`](#id864)                                                                                                       | Gets or sets the Density.                                              |
| [`XCoordinate`](#id865)                                                                                                   | Gets or sets the XCoordinate.                                          |
| [`YCoordinate`](#id866)                                                                                                   | Gets or sets the YCoordinate.                                          |
| [`ZCoordinate`](#id867)                                                                                                   | Gets or sets the ZCoordinate.                                          |
| [`ModelThicknessInZDirection`](#id868)                                                                                    | Gets or sets the ModelThicknessInZDirection.                           |
| [`ReferenceRMSSoundPressure`](#id869)                                                                                     | Gets or sets the ReferenceRMSSoundPressure.                            |
| [`ReferenceSoundPower`](#id870)                                                                                           | Gets or sets the ReferenceSoundPower.                                  |
| [`SoundSpeed`](#id871)                                                                                                    | Gets or sets the SoundSpeed.                                           |
| [`EndingRadiationAnglePhi`](#id872)                                                                                       | Gets or sets the EndingRadiationAnglePhi.                              |
| [`EndingRadiationAngleTheta`](#id873)                                                                                     | Gets or sets the EndingRadiationAngleTheta.                            |
| [`StartingRadiationAnglePhi`](#id874)                                                                                     | Gets or sets the StartingRadiationAnglePhi.                            |
| [`StartingRadiationAngleTheta`](#id875)                                                                                   | Gets or sets the StartingRadiationAngleTheta.                          |
| [`PhiAngleEnd`](#id876)                                                                                                   | Gets or sets the PhiAngleEnd.                                          |
| [`ThetaAngleEnd`](#id877)                                                                                                 | Gets or sets the ThetaAngleEnd.                                        |
| [`SphereRadius`](#id878)                                                                                                  | Gets or sets the SphereRadius.                                         |
| [`PhiAngleStart`](#id879)                                                                                                 | Gets or sets the PhiAngleStart.                                        |
| [`ThetaAngleStart`](#id880)                                                                                               | Gets or sets the ThetaAngleStart.                                      |
| [`YAxisExtrusionAngle`](#id881)                                                                                           | Gets or sets the YAxisExtrusionAngle.                                  |
| [`ModelType`](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType)                                           | Gets or sets the ModelType.                                            |
| [`SpatialRadiationAngle`](#id883)                                                                                         | Gets or sets the SpatialRadiationAngle.                                |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id738"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFarFieldSoundPowerLevelWaterfallDiagram
```

<a id="id739"></a>

## Property detail

<a id="id740"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### *property* AcousticResults.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### *property* AcousticResults.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* AcousticResults.PhiAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* AcousticResults.ThetaAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* AcousticResults.Density *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

### *property* AcousticResults.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* AcousticResults.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* AcousticResults.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* AcousticResults.ModelThicknessInZDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* AcousticResults.ReferenceRMSSoundPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* AcousticResults.ReferenceSoundPower *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* AcousticResults.SoundSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* AcousticResults.EndingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* AcousticResults.EndingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* AcousticResults.StartingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* AcousticResults.StartingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* AcousticResults.PhiAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* AcousticResults.ThetaAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* AcousticResults.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### *property* AcousticResults.PhiAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### *property* AcousticResults.ThetaAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### *property* AcousticResults.YAxisExtrusionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### *property* AcousticResults.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### *property* AcousticResults.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id781"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id786"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id787"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id794"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id795"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id796"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id804"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id805"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id806"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id807"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id808"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id813"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id814"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id815"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id816"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id817"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id818"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id819"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id820"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id821"></a>

## Method detail

<a id="id822"></a>

### AcousticResults.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="id823"></a>

### AcousticResults.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="id824"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id825"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id826"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id827"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id828"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id829"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id830"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id831"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id832"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id833"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id834"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id835"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id836"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id837"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id838"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id839"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id840"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id841"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id842"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id843"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id844"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id845"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id846"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id847"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id848"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id849"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id850"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticFarFieldSPLMicWaterfallDiagram"></a>

### *class* AcousticResults.AcousticFarFieldSPLMicWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFarFieldSPLMicWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToXMLFile`](#id935)          | Run the ExportToXMLFile action.                                                   |
| [`ExportToWAVFile`](#id936)          | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`FarFieldMicrophoneDefinitionMethod`](#id855)                                                                            | Gets or sets the FarFieldMicrophoneDefinitionMethod.                   |
| [`Worksheet`](../../Worksheet.md#Worksheet)                                                                               | Get the ObjectiveWorksheet action.                                     |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`PhiAngleNoOfDivisions`](#id861)                                                                                         | Gets or sets the PhiAngleNoOfDivisions.                                |
| [`ThetaAngleNoOfDivisions`](#id862)                                                                                       | Gets or sets the ThetaAngleNoOfDivisions.                              |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`Density`](#id864)                                                                                                       | Gets or sets the Density.                                              |
| [`XCoordinate`](#id865)                                                                                                   | Gets or sets the XCoordinate.                                          |
| [`YCoordinate`](#id866)                                                                                                   | Gets or sets the YCoordinate.                                          |
| [`ZCoordinate`](#id867)                                                                                                   | Gets or sets the ZCoordinate.                                          |
| [`ModelThicknessInZDirection`](#id868)                                                                                    | Gets or sets the ModelThicknessInZDirection.                           |
| [`ReferenceRMSSoundPressure`](#id869)                                                                                     | Gets or sets the ReferenceRMSSoundPressure.                            |
| [`ReferenceSoundPower`](#id870)                                                                                           | Gets or sets the ReferenceSoundPower.                                  |
| [`SoundSpeed`](#id871)                                                                                                    | Gets or sets the SoundSpeed.                                           |
| [`EndingRadiationAnglePhi`](#id872)                                                                                       | Gets or sets the EndingRadiationAnglePhi.                              |
| [`EndingRadiationAngleTheta`](#id873)                                                                                     | Gets or sets the EndingRadiationAngleTheta.                            |
| [`StartingRadiationAnglePhi`](#id874)                                                                                     | Gets or sets the StartingRadiationAnglePhi.                            |
| [`StartingRadiationAngleTheta`](#id875)                                                                                   | Gets or sets the StartingRadiationAngleTheta.                          |
| [`PhiAngleEnd`](#id876)                                                                                                   | Gets or sets the PhiAngleEnd.                                          |
| [`ThetaAngleEnd`](#id877)                                                                                                 | Gets or sets the ThetaAngleEnd.                                        |
| [`SphereRadius`](#id878)                                                                                                  | Gets or sets the SphereRadius.                                         |
| [`PhiAngleStart`](#id879)                                                                                                 | Gets or sets the PhiAngleStart.                                        |
| [`ThetaAngleStart`](#id880)                                                                                               | Gets or sets the ThetaAngleStart.                                      |
| [`YAxisExtrusionAngle`](#id881)                                                                                           | Gets or sets the YAxisExtrusionAngle.                                  |
| [`ModelType`](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType)                                           | Gets or sets the ModelType.                                            |
| [`SpatialRadiationAngle`](#id883)                                                                                         | Gets or sets the SpatialRadiationAngle.                                |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id851"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFarFieldSPLMicWaterfallDiagram
```

<a id="id852"></a>

## Property detail

<a id="id853"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id854"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id855"></a>

### *property* AcousticResults.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

<a id="id856"></a>

### *property* AcousticResults.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="id857"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id858"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id859"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id860"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id861"></a>

### *property* AcousticResults.PhiAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="id862"></a>

### *property* AcousticResults.ThetaAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="id863"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id864"></a>

### *property* AcousticResults.Density *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

<a id="id865"></a>

### *property* AcousticResults.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id866"></a>

### *property* AcousticResults.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id867"></a>

### *property* AcousticResults.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id868"></a>

### *property* AcousticResults.ModelThicknessInZDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

<a id="id869"></a>

### *property* AcousticResults.ReferenceRMSSoundPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

<a id="id870"></a>

### *property* AcousticResults.ReferenceSoundPower *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

<a id="id871"></a>

### *property* AcousticResults.SoundSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

<a id="id872"></a>

### *property* AcousticResults.EndingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="id873"></a>

### *property* AcousticResults.EndingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="id874"></a>

### *property* AcousticResults.StartingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="id875"></a>

### *property* AcousticResults.StartingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="id876"></a>

### *property* AcousticResults.PhiAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="id877"></a>

### *property* AcousticResults.ThetaAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="id878"></a>

### *property* AcousticResults.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="id879"></a>

### *property* AcousticResults.PhiAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="id880"></a>

### *property* AcousticResults.ThetaAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="id881"></a>

### *property* AcousticResults.YAxisExtrusionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

<a id="id882"></a>

### *property* AcousticResults.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

<a id="id883"></a>

### *property* AcousticResults.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

<a id="id884"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id885"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id886"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id887"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id888"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id889"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id890"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id891"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id892"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id893"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id894"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id895"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id896"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id897"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id898"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id899"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id900"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id901"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id902"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id903"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id904"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id905"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id906"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id907"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id908"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id909"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id910"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id911"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id912"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id913"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id914"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id915"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id916"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id917"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id918"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id919"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id920"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id921"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id922"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id923"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id924"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id925"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id926"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id927"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id928"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id929"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id930"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id931"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id932"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id933"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id934"></a>

## Method detail

<a id="id935"></a>

### AcousticResults.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="id936"></a>

### AcousticResults.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="id937"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id938"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id939"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id940"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id941"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id942"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id943"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id944"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id945"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id946"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id947"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id948"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id949"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id950"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id951"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id952"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id953"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id954"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id955"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id956"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id957"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id958"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id959"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id960"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id961"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id962"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id963"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticFrequencyBandAWeightedSPL"></a>

### *class* AcousticResults.AcousticFrequencyBandAWeightedSPL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFrequencyBandAWeightedSPL.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id964"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFrequencyBandAWeightedSPL
```

<a id="id965"></a>

## Property detail

<a id="id966"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id967"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id968"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id969"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id970"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id971"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id972"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id973"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id974"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id975"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id976"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id977"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id978"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id979"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id980"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id981"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id982"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id983"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id984"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id985"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id986"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id987"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id988"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id989"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id990"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id991"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id992"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id993"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id994"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id995"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id996"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id997"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id998"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id999"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1000"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1001"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1002"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1003"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1004"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1005"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1006"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1007"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1008"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1009"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1010"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1011"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1012"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1013"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1014"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1015"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1016"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1017"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1018"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1019"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1020"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1021"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1022"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1023"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1024"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1025"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1026"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1027"></a>

## Method detail

<a id="id1028"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1029"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1030"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1031"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1032"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1033"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1034"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1035"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1036"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1037"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1038"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1039"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1040"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1041"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1042"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1043"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1044"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1045"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1046"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1047"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1048"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1049"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1050"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1051"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1052"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1053"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1054"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticFrequencyBandSPL"></a>

### *class* AcousticResults.AcousticFrequencyBandSPL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFrequencyBandSPL.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1055"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFrequencyBandSPL
```

<a id="id1056"></a>

## Property detail

<a id="id1057"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1058"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1059"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1060"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1061"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1062"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id1063"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id1064"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id1065"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1066"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1067"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1068"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1069"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1070"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1071"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1072"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1073"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1074"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1075"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1076"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1077"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1078"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1079"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1080"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1081"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1082"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1083"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1084"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1085"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1086"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1087"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1088"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1089"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1090"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1091"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1092"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1093"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1094"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1095"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1096"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1097"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1098"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1099"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1100"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1101"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1102"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1103"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1104"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1105"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1106"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1107"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1108"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1109"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1110"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1111"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1112"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1113"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1114"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1115"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1116"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1117"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1118"></a>

## Method detail

<a id="id1119"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1120"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1121"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1122"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1123"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1124"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1125"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1126"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1127"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1128"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1129"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1130"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1131"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1132"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1133"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1134"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1135"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1136"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1137"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1138"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1139"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1140"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1141"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1142"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1143"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1144"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1145"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticKineticEnergy"></a>

### *class* AcousticResults.AcousticKineticEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticKineticEnergy.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1146"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticKineticEnergy
```

<a id="id1147"></a>

## Property detail

<a id="id1148"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1149"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1150"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1151"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1152"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1153"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id1154"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id1155"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id1156"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1157"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1158"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1159"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1160"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1161"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1162"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1163"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1164"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1165"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1166"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1167"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1168"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1169"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1170"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1171"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1172"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1173"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1174"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1175"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1176"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1177"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1178"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1179"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1180"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1181"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1182"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1183"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1184"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1185"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1186"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1187"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1188"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1189"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1190"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1191"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1192"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1193"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1194"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1195"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1196"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1197"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1198"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1199"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1200"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1201"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1202"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1203"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1204"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1205"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1206"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1207"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1208"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1209"></a>

## Method detail

<a id="id1210"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1211"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1212"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1213"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1214"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1215"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1216"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1217"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1218"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1219"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1220"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1221"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1222"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1223"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1224"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1225"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1226"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1227"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1228"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1229"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1230"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1231"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1232"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1233"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1234"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1235"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1236"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticPotentialEnergy"></a>

### *class* AcousticResults.AcousticPotentialEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticPotentialEnergy.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1237"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticPotentialEnergy
```

<a id="id1238"></a>

## Property detail

<a id="id1239"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1240"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1241"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1242"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1243"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1244"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id1245"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id1246"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id1247"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1248"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1249"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1250"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1251"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1252"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1253"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1254"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1255"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1256"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1257"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1258"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1259"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1260"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1261"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1262"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1263"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1264"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1265"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1266"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1267"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1268"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1269"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1270"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1271"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1272"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1273"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1274"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1275"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1276"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1277"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1278"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1279"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1280"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1281"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1282"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1283"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1284"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1285"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1286"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1287"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1288"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1289"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1290"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1291"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1292"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1293"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1294"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1295"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1296"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1297"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1298"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1299"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1300"></a>

## Method detail

<a id="id1301"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1302"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1303"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1304"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1305"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1306"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1307"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1308"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1309"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1310"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1311"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1312"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1313"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1314"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1315"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1316"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1317"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1318"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1319"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1320"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1321"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1322"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1323"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1324"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1325"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1326"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1327"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticSoundPressureLevel"></a>

### *class* AcousticResults.AcousticSoundPressureLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticSoundPressureLevel.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1328"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticSoundPressureLevel
```

<a id="id1329"></a>

## Property detail

<a id="id1330"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1331"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1332"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1333"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1334"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1335"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id1336"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id1337"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id1338"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1339"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1340"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1341"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1342"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1343"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1344"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1345"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1346"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1347"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1348"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1349"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1350"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1351"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1352"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1353"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1354"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1355"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1356"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1357"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1358"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1359"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1360"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1361"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1362"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1363"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1364"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1365"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1366"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1367"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1368"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1369"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1370"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1371"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1372"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1373"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1374"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1375"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1376"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1377"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1378"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1379"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1380"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1381"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1382"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1383"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1384"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1385"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1386"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1387"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1388"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1389"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1390"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1391"></a>

## Method detail

<a id="id1392"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1393"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1394"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1395"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1396"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1397"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1398"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1399"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1400"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1401"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1402"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1403"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1404"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1405"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1406"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1407"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1408"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1409"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1410"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1411"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1412"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1413"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1414"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1415"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1416"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1417"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1418"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticResults.AcousticTotalVelocityResult"></a>

### *class* AcousticResults.AcousticTotalVelocityResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticTotalVelocityResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1483)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1484)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1485)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1486)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1487)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1488) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1489)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1490) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1491)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1492)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1493)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1494) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1495)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1497)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1498)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1499)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1500)                | Creates a new child Image.                                                        |
| [`Activate`](#id1501)                | Activate the current object.                                                      |
| [`CopyTo`](#id1502)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1503)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1504) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1505)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1506)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1507)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1508)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1509)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1423)                                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id1424)                                                                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id1425)                                                                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#id1426)                                                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id1427)                                                                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#id1428)                                                                                                    | Gets the Stability.                                                    |
| [`SweepingPhase`](#id1429)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id1430)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Amplitude`](#id1431)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id1432)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1433)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1434)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1435)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1436)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1437)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1438)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1439)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1440)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1441)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1442)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1444)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1445)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1446)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1447)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1449)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1450)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1451)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1452)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1453)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1454)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1455)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1456)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1457)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1458)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1459)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1460)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1461)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1462)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1463)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1464)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1465)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1466)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1467)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1469)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1470)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1471)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1472)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1473)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1474)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1475)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1476)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1477)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1478)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1479)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1480)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1481)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1419"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticTotalVelocityResult
```

<a id="id1420"></a>

## Property detail

<a id="id1421"></a>

### *property* AcousticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1422"></a>

### *property* AcousticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1423"></a>

### *property* AcousticResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1424"></a>

### *property* AcousticResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1425"></a>

### *property* AcousticResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1426"></a>

### *property* AcousticResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id1427"></a>

### *property* AcousticResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id1428"></a>

### *property* AcousticResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id1429"></a>

### *property* AcousticResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1430"></a>

### *property* AcousticResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1431"></a>

### *property* AcousticResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1432"></a>

### *property* AcousticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1433"></a>

### *property* AcousticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1434"></a>

### *property* AcousticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1435"></a>

### *property* AcousticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1436"></a>

### *property* AcousticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1437"></a>

### *property* AcousticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1438"></a>

### *property* AcousticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1439"></a>

### *property* AcousticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1440"></a>

### *property* AcousticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1441"></a>

### *property* AcousticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1442"></a>

### *property* AcousticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1443"></a>

### *property* AcousticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1444"></a>

### *property* AcousticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1445"></a>

### *property* AcousticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1446"></a>

### *property* AcousticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1447"></a>

### *property* AcousticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1448"></a>

### *property* AcousticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1449"></a>

### *property* AcousticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1450"></a>

### *property* AcousticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1451"></a>

### *property* AcousticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1452"></a>

### *property* AcousticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1453"></a>

### *property* AcousticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1454"></a>

### *property* AcousticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1455"></a>

### *property* AcousticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1456"></a>

### *property* AcousticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1457"></a>

### *property* AcousticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1458"></a>

### *property* AcousticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1459"></a>

### *property* AcousticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1460"></a>

### *property* AcousticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1461"></a>

### *property* AcousticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1462"></a>

### *property* AcousticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1463"></a>

### *property* AcousticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1464"></a>

### *property* AcousticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1465"></a>

### *property* AcousticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1466"></a>

### *property* AcousticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1467"></a>

### *property* AcousticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1468"></a>

### *property* AcousticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1469"></a>

### *property* AcousticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1470"></a>

### *property* AcousticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1471"></a>

### *property* AcousticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1472"></a>

### *property* AcousticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1473"></a>

### *property* AcousticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1474"></a>

### *property* AcousticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1475"></a>

### *property* AcousticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1476"></a>

### *property* AcousticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1477"></a>

### *property* AcousticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1478"></a>

### *property* AcousticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1479"></a>

### *property* AcousticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1480"></a>

### *property* AcousticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1481"></a>

### *property* AcousticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1482"></a>

## Method detail

<a id="id1483"></a>

### AcousticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1484"></a>

### AcousticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1485"></a>

### AcousticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1486"></a>

### AcousticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1487"></a>

### AcousticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1488"></a>

### AcousticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1489"></a>

### AcousticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1490"></a>

### AcousticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1491"></a>

### AcousticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1492"></a>

### AcousticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1493"></a>

### AcousticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1494"></a>

### AcousticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1495"></a>

### AcousticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1496"></a>

### AcousticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1497"></a>

### AcousticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1498"></a>

### AcousticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1499"></a>

### AcousticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1500"></a>

### AcousticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1501"></a>

### AcousticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1502"></a>

### AcousticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1503"></a>

### AcousticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1504"></a>

### AcousticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1505"></a>

### AcousticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1506"></a>

### AcousticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1507"></a>

### AcousticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1508"></a>

### AcousticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1509"></a>

### AcousticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
