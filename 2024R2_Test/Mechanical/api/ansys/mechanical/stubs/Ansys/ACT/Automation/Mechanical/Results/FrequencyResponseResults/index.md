<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults"></a>

<a id="the-frequencyresponseresults-package"></a>

# The `FrequencyResponseResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`EquivalentRadiatedPowerWaterfallDiagram`](EquivalentRadiatedPowerWaterfallDiagram.md#EquivalentRadiatedPowerWaterfallDiagram)                | Defines a EquivalentRadiatedPowerWaterfallDiagram.      |
| [`EquivalentRadiatedPower`](EquivalentRadiatedPower.md#EquivalentRadiatedPower)                                                                | Defines a EquivalentRadiatedPower.                      |
| [`FrequencyResponseResultChart`](FrequencyResponseResultChart.md#FrequencyResponseResultChart)                                                 | Defines a FrequencyResponseResultChart.                 |
| [`AcousticSPLFrequencyResponse`](AcousticSPLFrequencyResponse.md#AcousticSPLFrequencyResponse)                                                 | Defines a AcousticSPLFrequencyResponse.                 |
| [`EquivalentRadiatedPowerLevel`](EquivalentRadiatedPowerLevel.md#EquivalentRadiatedPowerLevel)                                                 | Defines a EquivalentRadiatedPowerLevel.                 |
| [`EquivalentRadiatedPowerLevelWaterfallDiagram`](EquivalentRadiatedPowerLevelWaterfallDiagram.md#EquivalentRadiatedPowerLevelWaterfallDiagram) | Defines a EquivalentRadiatedPowerLevelWaterfallDiagram. |
| [`AccelerationFrequencyResponse`](AccelerationFrequencyResponse.md#AccelerationFrequencyResponse)                                              | Defines a AccelerationFrequencyResponse.                |
| [`AccelerationWaterfallDiagram`](AccelerationWaterfallDiagram.md#AccelerationWaterfallDiagram)                                                 | Defines a AccelerationWaterfallDiagram.                 |
| [`AcousticAWeightedSPLFrequencyResponse`](AcousticAWeightedSPLFrequencyResponse.md#AcousticAWeightedSPLFrequencyResponse)                      | Defines a AcousticAWeightedSPLFrequencyResponse.        |
| [`AcousticKineticEnergyFrequencyResponse`](AcousticKineticEnergyFrequencyResponse.md#AcousticKineticEnergyFrequencyResponse)                   | Defines a AcousticKineticEnergyFrequencyResponse.       |
| [`AcousticPotentialEnergyFrequencyResponse`](AcousticPotentialEnergyFrequencyResponse.md#AcousticPotentialEnergyFrequencyResponse)             | Defines a AcousticPotentialEnergyFrequencyResponse.     |
| [`AcousticPressureFrequencyResponse`](AcousticPressureFrequencyResponse.md#AcousticPressureFrequencyResponse)                                  | Defines a AcousticPressureFrequencyResponse.            |
| [`AcousticVelocityFrequencyResponse`](AcousticVelocityFrequencyResponse.md#AcousticVelocityFrequencyResponse)                                  | Defines a AcousticVelocityFrequencyResponse.            |
| [`ChargeReactionFrequencyResponse`](ChargeReactionFrequencyResponse.md#ChargeReactionFrequencyResponse)                                        | Defines a ChargeReactionFrequencyResponse.              |
| [`DeformationFrequencyResponse`](DeformationFrequencyResponse.md#DeformationFrequencyResponse)                                                 | Defines a DeformationFrequencyResponse.                 |
| [`ElasticStrainFrequencyResponse`](ElasticStrainFrequencyResponse.md#ElasticStrainFrequencyResponse)                                           | Defines a ElasticStrainFrequencyResponse.               |
| [`ForceReactionFrequencyResponse`](ForceReactionFrequencyResponse.md#ForceReactionFrequencyResponse)                                           | Defines a ForceReactionFrequencyResponse.               |
| [`ImpedanceFrequencyResponse`](ImpedanceFrequencyResponse.md#ImpedanceFrequencyResponse)                                                       | Defines a ImpedanceFrequencyResponse.                   |
| [`MCFWaterfallDiagram`](MCFWaterfallDiagram.md#MCFWaterfallDiagram)                                                                            | Defines a MCFWaterfallDiagram.                          |
| [`StressFrequencyResponse`](StressFrequencyResponse.md#StressFrequencyResponse)                                                                | Defines a StressFrequencyResponse.                      |
| [`VelocityFrequencyResponse`](VelocityFrequencyResponse.md#VelocityFrequencyResponse)                                                          | Defines a VelocityFrequencyResponse.                    |
| [`VelocityWaterfallDiagram`](VelocityWaterfallDiagram.md#VelocityWaterfallDiagram)                                                             | Defines a VelocityWaterfallDiagram.                     |
| [`VoltageFrequencyResponse`](VoltageFrequencyResponse.md#VoltageFrequencyResponse)                                                             | Defines a VoltageFrequencyResponse.                     |

<a id="description"></a>

## Description

FrequencyResponseResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="FrequencyResponseResults.EquivalentRadiatedPowerWaterfallDiagram"></a>

### *class* FrequencyResponseResults.EquivalentRadiatedPowerWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentRadiatedPowerWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1526)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1527)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1529) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1530)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1531) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1620)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1533)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1534)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1540)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1473)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1475)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1476)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1477)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1478)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1479)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1480)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1481)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1482)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1485)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1486)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1487)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1488)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1490)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1491)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1492)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1493)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1494)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1495)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1496)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1498)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1499)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1500)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1502)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1503)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1505)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1506)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1507)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1508)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1510)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1512)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1513)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1514)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1518)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import EquivalentRadiatedPowerWaterfallDiagram
```

<a id="property-detail"></a>

## Property detail

<a id="FrequencyResponseResults.InternalObject"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.DataModelObjectCategory"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.PlotData"></a>

### *property* FrequencyResponseResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Location"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.TimeForMinimumOfMinimumValues"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.TimeForMinimumOfMaximumValues"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.TimeForMaximumOfMinimumValues"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.TimeForMaximumOfMaximumValues"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.IsSolved"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CoordinateSystem"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ScopingMethod"></a>

### *property* FrequencyResponseResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.SetNumber"></a>

### *property* FrequencyResponseResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CombinationNumber"></a>

### *property* FrequencyResponseResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.SolutionCombinationDriver"></a>

### *property* FrequencyResponseResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Surface"></a>

### *property* FrequencyResponseResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CrackFrontNumber"></a>

### *property* FrequencyResponseResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.GlobalIDs"></a>

### *property* FrequencyResponseResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Identifier"></a>

### *property* FrequencyResponseResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.IterationNumber"></a>

### *property* FrequencyResponseResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.LoadStep"></a>

### *property* FrequencyResponseResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MaximumOccursOn"></a>

### *property* FrequencyResponseResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MinimumOccursOn"></a>

### *property* FrequencyResponseResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.LoadStepNumber"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.SolverComponentIDs"></a>

### *property* FrequencyResponseResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Substep"></a>

### *property* FrequencyResponseResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Average"></a>

### *property* FrequencyResponseResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Maximum"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MaximumOfMaximumOverTime"></a>

### *property* FrequencyResponseResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MaximumOfMinimumOverTime"></a>

### *property* FrequencyResponseResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Minimum"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MinimumOfMaximumOverTime"></a>

### *property* FrequencyResponseResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MinimumOfMinimumOverTime"></a>

### *property* FrequencyResponseResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Time"></a>

### *property* FrequencyResponseResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.DisplayTime"></a>

### *property* FrequencyResponseResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.GraphControlsXAxis"></a>

### *property* FrequencyResponseResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.DisplayOption"></a>

### *property* FrequencyResponseResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.DpfEvaluation"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.By"></a>

### *property* FrequencyResponseResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ItemType"></a>

### *property* FrequencyResponseResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CalculateTimeHistory"></a>

### *property* FrequencyResponseResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Suppressed"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Children"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Comments"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Figures"></a>

### *property* FrequencyResponseResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Images"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Properties"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.VisibleProperties"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FrequencyResponseResults.ClearGeneratedData"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.EvaluateAllResults"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.FetchRemoteResults"></a>

### FrequencyResponseResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ExportToTextFile"></a>

### FrequencyResponseResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ExportAnimation"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.DuplicateWithoutResults"></a>

### FrequencyResponseResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CreateResultsAtAllSets"></a>

### FrequencyResponseResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.PromoteToNamedSelection"></a>

### FrequencyResponseResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CreateParameter"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AddAlert"></a>

### FrequencyResponseResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AddConvergence"></a>

### FrequencyResponseResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.RenameBasedOnDefinition"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Delete"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.GetChildren"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AddComment"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AddFigure"></a>

### FrequencyResponseResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AddImage"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Activate"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CopyTo"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Duplicate"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.GroupAllSimilarChildren"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.GroupSimilarObjects"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.PropertyByName"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.PropertyByAPIName"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.GetParameter"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.RemoveParameter"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.EquivalentRadiatedPower"></a>

### *class* FrequencyResponseResults.EquivalentRadiatedPower

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentRadiatedPower.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1526)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1527)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1529) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1530)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1531) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1620)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1533)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1534)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1540)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#id200)                                                                                                | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1473)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1475)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1476)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1477)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1478)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1479)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1480)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1481)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1482)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1485)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1486)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1487)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1488)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1490)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1491)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1492)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1493)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1494)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1495)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1496)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1498)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1499)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1500)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1502)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1503)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1505)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1506)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1507)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1508)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1510)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1512)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1513)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1514)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1518)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import EquivalentRadiatedPower
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MaximumFrequency"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MinimumFrequency"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.FrequencyRange"></a>

### *property* FrequencyResponseResults.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* FrequencyResponseResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* FrequencyResponseResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* FrequencyResponseResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* FrequencyResponseResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* FrequencyResponseResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* FrequencyResponseResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* FrequencyResponseResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* FrequencyResponseResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* FrequencyResponseResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* FrequencyResponseResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* FrequencyResponseResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* FrequencyResponseResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* FrequencyResponseResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* FrequencyResponseResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* FrequencyResponseResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* FrequencyResponseResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* FrequencyResponseResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* FrequencyResponseResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* FrequencyResponseResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* FrequencyResponseResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* FrequencyResponseResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* FrequencyResponseResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* FrequencyResponseResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* FrequencyResponseResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* FrequencyResponseResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* FrequencyResponseResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* FrequencyResponseResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* FrequencyResponseResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

## Method detail

<a id="id57"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### FrequencyResponseResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### FrequencyResponseResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### FrequencyResponseResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### FrequencyResponseResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### FrequencyResponseResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### FrequencyResponseResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### FrequencyResponseResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### FrequencyResponseResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.FrequencyResponseResultChart"></a>

### *class* FrequencyResponseResults.FrequencyResponseResultChart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FrequencyResponseResultChart.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.   |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                                 |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                       |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                                 |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                                |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                     |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                     |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                          |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                   |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                        |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                         |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                            |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                                 |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                  |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                                 |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                  |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                               |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                   |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                               |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                                 |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                                |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                       |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                                |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                                |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                          |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                    |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                      |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                                 |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                                 |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                               |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                     |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                       |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                         |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                          |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                           |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                         |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                         |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                              |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                                |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                                 |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                       |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                      |

<a id="id84"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import FrequencyResponseResultChart
```

<a id="id85"></a>

## Property detail

<a id="id86"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.RemotePointSelection"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ChartDimensions"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.BoundaryCondition"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CutFrequency"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.SectorNumber"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.GeometrySelectionString"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ReportedFrequency"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Duration"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.FilterMaximum"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.FilterMinimum"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.FrequencyAtMaximumAmplitude"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ImaginaryAtMaximumAmplitude"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MaximumAmplitude"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.PhaseAngle"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.RealAtMaximumAmplitude"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.RequestedFrequency"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AccelerationType"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ChartViewingStyle"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.DeformationType"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.FilterType"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.SpatialResolution"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.NormalOrientation"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.CurvesAppearanceDisplay"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ResultChartType"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.XAxisValues"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ShearOrientation"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.StressStrainType"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.TimeHistoryDisplay"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.VelocityType"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.EnhancedTracking"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.UseParentFrequencyRange"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Spring"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

## Method detail

<a id="id105"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AcousticSPLFrequencyResponse"></a>

### *class* FrequencyResponseResults.AcousticSPLFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticSPLFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToXMLFile`](#id337)          | Run the ExportToXMLFile action.                                                   |
| [`ExportToWAVFile`](#id338)          | Run the ExportToWAVFile action.                                                   |
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                             |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                    |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                    |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                         |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object. |

<a id="id124"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticSPLFrequencyResponse
```

<a id="id125"></a>

## Property detail

<a id="id126"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

## Method detail

<a id="FrequencyResponseResults.ExportToXMLFile"></a>

### FrequencyResponseResults.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ExportToWAVFile"></a>

### FrequencyResponseResults.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.EquivalentRadiatedPowerLevel"></a>

### *class* FrequencyResponseResults.EquivalentRadiatedPowerLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentRadiatedPowerLevel.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToXMLFile`](#id337)          | Run the ExportToXMLFile action.                                                   |
| [`ExportToWAVFile`](#id338)          | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1526)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1527)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1529) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1530)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1531) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1620)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1533)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1534)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1540)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#id200)                                                                                                | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1473)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1475)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1476)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1477)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1478)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1479)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1480)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1481)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1482)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1485)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1486)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1487)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1488)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1490)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1491)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1492)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1493)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1494)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1495)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1496)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1498)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1499)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1500)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1502)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1503)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1505)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1506)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1507)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1508)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1510)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1512)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1513)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1514)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1518)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id195"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import EquivalentRadiatedPowerLevel
```

<a id="id196"></a>

## Property detail

<a id="id197"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* FrequencyResponseResults.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* FrequencyResponseResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* FrequencyResponseResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* FrequencyResponseResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* FrequencyResponseResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* FrequencyResponseResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* FrequencyResponseResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* FrequencyResponseResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* FrequencyResponseResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* FrequencyResponseResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* FrequencyResponseResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* FrequencyResponseResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* FrequencyResponseResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* FrequencyResponseResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* FrequencyResponseResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* FrequencyResponseResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* FrequencyResponseResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* FrequencyResponseResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* FrequencyResponseResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* FrequencyResponseResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* FrequencyResponseResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* FrequencyResponseResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* FrequencyResponseResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* FrequencyResponseResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* FrequencyResponseResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* FrequencyResponseResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* FrequencyResponseResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* FrequencyResponseResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* FrequencyResponseResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

## Method detail

<a id="id253"></a>

### FrequencyResponseResults.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### FrequencyResponseResults.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### FrequencyResponseResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### FrequencyResponseResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### FrequencyResponseResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### FrequencyResponseResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### FrequencyResponseResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### FrequencyResponseResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### FrequencyResponseResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### FrequencyResponseResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.EquivalentRadiatedPowerLevelWaterfallDiagram"></a>

### *class* FrequencyResponseResults.EquivalentRadiatedPowerLevelWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentRadiatedPowerLevelWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToXMLFile`](#id337)          | Run the ExportToXMLFile action.                                                   |
| [`ExportToWAVFile`](#id338)          | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1526)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1527)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1529) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1530)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1531) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1620)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1533)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1534)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1540)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1473)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1475)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1476)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1477)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1478)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1479)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1480)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1481)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1482)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1485)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1486)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1487)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1488)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1490)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1491)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1492)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1493)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1494)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1495)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1496)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1498)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1499)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1500)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1502)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1503)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1505)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1506)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1507)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1508)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1510)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1512)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1513)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1514)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1518)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id282"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import EquivalentRadiatedPowerLevelWaterfallDiagram
```

<a id="id283"></a>

## Property detail

<a id="id284"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* FrequencyResponseResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* FrequencyResponseResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* FrequencyResponseResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* FrequencyResponseResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* FrequencyResponseResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* FrequencyResponseResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* FrequencyResponseResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* FrequencyResponseResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* FrequencyResponseResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* FrequencyResponseResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* FrequencyResponseResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* FrequencyResponseResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* FrequencyResponseResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* FrequencyResponseResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* FrequencyResponseResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* FrequencyResponseResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* FrequencyResponseResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* FrequencyResponseResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* FrequencyResponseResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* FrequencyResponseResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* FrequencyResponseResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* FrequencyResponseResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* FrequencyResponseResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* FrequencyResponseResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* FrequencyResponseResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* FrequencyResponseResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* FrequencyResponseResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* FrequencyResponseResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

## Method detail

<a id="id337"></a>

### FrequencyResponseResults.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### FrequencyResponseResults.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### FrequencyResponseResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### FrequencyResponseResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### FrequencyResponseResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### FrequencyResponseResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### FrequencyResponseResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### FrequencyResponseResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### FrequencyResponseResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### FrequencyResponseResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AccelerationFrequencyResponse"></a>

### *class* FrequencyResponseResults.AccelerationFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AccelerationFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id366"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AccelerationFrequencyResponse
```

<a id="id367"></a>

## Property detail

<a id="id368"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

## Method detail

<a id="id419"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AccelerationWaterfallDiagram"></a>

### *class* FrequencyResponseResults.AccelerationWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AccelerationWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1526)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1527)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1529) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1530)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1531) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1620)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1533)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1534)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1540)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                    |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1473)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1475)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1476)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1477)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1478)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1479)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1480)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1481)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1482)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1485)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1486)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1487)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1488)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1490)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1491)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1492)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1493)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1494)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1495)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1496)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1498)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1499)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1500)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1502)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1503)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1505)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1506)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1507)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1508)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1510)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1512)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1513)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1514)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1518)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id438"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AccelerationWaterfallDiagram
```

<a id="id439"></a>

## Property detail

<a id="id440"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### *property* FrequencyResponseResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* FrequencyResponseResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* FrequencyResponseResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* FrequencyResponseResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* FrequencyResponseResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* FrequencyResponseResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* FrequencyResponseResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* FrequencyResponseResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* FrequencyResponseResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* FrequencyResponseResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* FrequencyResponseResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* FrequencyResponseResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* FrequencyResponseResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* FrequencyResponseResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* FrequencyResponseResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* FrequencyResponseResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* FrequencyResponseResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* FrequencyResponseResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* FrequencyResponseResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* FrequencyResponseResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* FrequencyResponseResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* FrequencyResponseResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* FrequencyResponseResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* FrequencyResponseResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* FrequencyResponseResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* FrequencyResponseResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* FrequencyResponseResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* FrequencyResponseResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

## Method detail

<a id="id495"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### FrequencyResponseResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### FrequencyResponseResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### FrequencyResponseResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### FrequencyResponseResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### FrequencyResponseResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### FrequencyResponseResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### FrequencyResponseResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### FrequencyResponseResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AcousticAWeightedSPLFrequencyResponse"></a>

### *class* FrequencyResponseResults.AcousticAWeightedSPLFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticAWeightedSPLFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                             |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                    |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                    |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                         |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object. |

<a id="id522"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticAWeightedSPLFrequencyResponse
```

<a id="id523"></a>

## Property detail

<a id="id524"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

## Method detail

<a id="id574"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AcousticKineticEnergyFrequencyResponse"></a>

### *class* FrequencyResponseResults.AcousticKineticEnergyFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticKineticEnergyFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                             |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                    |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                    |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                         |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object. |

<a id="id593"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticKineticEnergyFrequencyResponse
```

<a id="id594"></a>

## Property detail

<a id="id595"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

## Method detail

<a id="id645"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AcousticPotentialEnergyFrequencyResponse"></a>

### *class* FrequencyResponseResults.AcousticPotentialEnergyFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticPotentialEnergyFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                             |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                    |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                    |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                         |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object. |

<a id="id664"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticPotentialEnergyFrequencyResponse
```

<a id="id665"></a>

## Property detail

<a id="id666"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

## Method detail

<a id="id716"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AcousticPressureFrequencyResponse"></a>

### *class* FrequencyResponseResults.AcousticPressureFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticPressureFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                             |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                    |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                    |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                         |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object. |

<a id="id735"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticPressureFrequencyResponse
```

<a id="id736"></a>

## Property detail

<a id="id737"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id781"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id786"></a>

## Method detail

<a id="id787"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id794"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id795"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id796"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id804"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id805"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.AcousticVelocityFrequencyResponse"></a>

### *class* FrequencyResponseResults.AcousticVelocityFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticVelocityFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                             |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                             |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                    |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                    |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                         |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object. |

<a id="id806"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticVelocityFrequencyResponse
```

<a id="id807"></a>

## Property detail

<a id="id808"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id813"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id814"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id815"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id816"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id817"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id818"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id819"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id820"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id821"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id822"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id823"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id824"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id825"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id826"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id827"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id828"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id829"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id830"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id831"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id832"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id833"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id834"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id835"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id836"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id837"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id838"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id839"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id840"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id841"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id842"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id843"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id844"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id845"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id846"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id847"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id848"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id849"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id850"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id851"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id852"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id853"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id854"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id855"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id856"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id857"></a>

## Method detail

<a id="id858"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id859"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id860"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id861"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id862"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id863"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id864"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id865"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id866"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id867"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id868"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id869"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id870"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id871"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id872"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id873"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id874"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id875"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id876"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ChargeReactionFrequencyResponse"></a>

### *class* FrequencyResponseResults.ChargeReactionFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ChargeReactionFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`LocationMethod`](#id1170)                                                                                               | Gets or sets the LocationMethod.                                                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id877"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import ChargeReactionFrequencyResponse
```

<a id="id878"></a>

## Property detail

<a id="id879"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.LocationMethod"></a>

### *property* FrequencyResponseResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id880"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id881"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id882"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id883"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id884"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id885"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id886"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id887"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id888"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id889"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id890"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id891"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id892"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id893"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id894"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id895"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id896"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id897"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id898"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id899"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id900"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id901"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id902"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id903"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id904"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id905"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id906"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id907"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id908"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id909"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id910"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id911"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id912"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id913"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id914"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id915"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id916"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id917"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id918"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id919"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id920"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id921"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id922"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id923"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id924"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id925"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id926"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id927"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id928"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id929"></a>

## Method detail

<a id="id930"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id931"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id932"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id933"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id934"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id935"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id936"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id937"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id938"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id939"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id940"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id941"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id942"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id943"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id944"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id945"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id946"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id947"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id948"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.DeformationFrequencyResponse"></a>

### *class* FrequencyResponseResults.DeformationFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DeformationFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                                                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id949"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import DeformationFrequencyResponse
```

<a id="id950"></a>

## Property detail

<a id="id951"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ContactRegion"></a>

### *property* FrequencyResponseResults.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="id952"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id953"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id954"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id955"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id956"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id957"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id958"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id959"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id960"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id961"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id962"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id963"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id964"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id965"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id966"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id967"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id968"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id969"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id970"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id971"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id972"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id973"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id974"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id975"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id976"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id977"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id978"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id979"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id980"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id981"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id982"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id983"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id984"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id985"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id986"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id987"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id988"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id989"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id990"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id991"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id992"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id993"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id994"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id995"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id996"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id997"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id998"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id999"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1000"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1001"></a>

## Method detail

<a id="id1002"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1003"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1004"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1005"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1006"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1007"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1008"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1009"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1010"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1011"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1012"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1013"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1014"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1015"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1016"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1017"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1018"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1019"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1020"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ElasticStrainFrequencyResponse"></a>

### *class* FrequencyResponseResults.ElasticStrainFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElasticStrainFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id1021"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import ElasticStrainFrequencyResponse
```

<a id="id1022"></a>

## Property detail

<a id="id1023"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1024"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1025"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id1026"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1027"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1028"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id1029"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id1030"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1031"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1032"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id1033"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1034"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1035"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id1036"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id1037"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id1038"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1039"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1040"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1041"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1042"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1043"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1044"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1045"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id1046"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1047"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1048"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id1049"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id1050"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id1051"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id1052"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id1053"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1054"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1055"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id1056"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1057"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id1058"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1059"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1060"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1061"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id1062"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1063"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id1064"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id1065"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id1066"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1067"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1068"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1069"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1070"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1071"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1072"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1073"></a>

## Method detail

<a id="id1074"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1075"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1076"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1077"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1078"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1079"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1080"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1081"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1082"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1083"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1084"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1085"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1086"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1087"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1088"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1089"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1090"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1091"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1092"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ForceReactionFrequencyResponse"></a>

### *class* FrequencyResponseResults.ForceReactionFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ForceReactionFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`LocationMethod`](#id1170)                                                                                               | Gets or sets the LocationMethod.                                                                 |
| [`Beam`](../../Connections/Beam.md#Beam)                                                                                  | Gets or sets the Beam.                                                                           |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                                                                  |
| [`RemotePoint`](../../RemotePoint.md#RemotePoint)                                                                         | Gets or sets the RemotePoint.                                                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id1093"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import ForceReactionFrequencyResponse
```

<a id="id1094"></a>

## Property detail

<a id="id1095"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1096"></a>

### *property* FrequencyResponseResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.Beam"></a>

### *property* FrequencyResponseResults.Beam *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Beam.

<!-- !! processed by numpydoc !! -->

<a id="id1097"></a>

### *property* FrequencyResponseResults.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.RemotePoint"></a>

### *property* FrequencyResponseResults.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="id1098"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1099"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id1100"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1101"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1102"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id1103"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id1104"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1105"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1106"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id1107"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1108"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1109"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id1110"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id1111"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id1112"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1113"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1114"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1115"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1116"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1117"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1118"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1119"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id1120"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1121"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1122"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id1123"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id1124"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id1125"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id1126"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id1127"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1128"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1129"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id1130"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1131"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id1132"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1133"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1134"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1135"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id1136"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1137"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id1138"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id1139"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id1140"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1141"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1142"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1143"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1144"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1145"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1146"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1147"></a>

## Method detail

<a id="id1148"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1149"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1150"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1151"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1152"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1153"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1154"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1155"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1156"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1157"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1158"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1159"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1160"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1161"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1162"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1163"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1164"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1165"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1166"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.ImpedanceFrequencyResponse"></a>

### *class* FrequencyResponseResults.ImpedanceFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImpedanceFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`LocationMethod`](#id1170)                                                                                               | Gets or sets the LocationMethod.                                                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id1167"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import ImpedanceFrequencyResponse
```

<a id="id1168"></a>

## Property detail

<a id="id1169"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1170"></a>

### *property* FrequencyResponseResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1171"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1172"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id1173"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1174"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1175"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id1176"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id1177"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1178"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1179"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id1180"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1181"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1182"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id1183"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id1184"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id1185"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1186"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1187"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1188"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1189"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1190"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1191"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1192"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id1193"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1194"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1195"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id1196"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id1197"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id1198"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id1199"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id1200"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1201"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1202"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id1203"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1204"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id1205"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1206"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1207"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1208"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id1209"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1210"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id1211"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id1212"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id1213"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1214"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1215"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1216"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1217"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1218"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1219"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1220"></a>

## Method detail

<a id="id1221"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1222"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1223"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1224"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1225"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1226"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1227"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1228"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1229"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1230"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1231"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1232"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1233"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1234"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1235"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1236"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1237"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1238"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1239"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.MCFWaterfallDiagram"></a>

### *class* FrequencyResponseResults.MCFWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MCFWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1526)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1527)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1529) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1530)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1531) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1620)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1533)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1534)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1540)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1473)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1475)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1476)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1477)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1478)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1479)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1480)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1481)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1482)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1485)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1486)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1487)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1488)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1490)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1491)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1492)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1493)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1494)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1495)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1496)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1498)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1499)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1500)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1502)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1503)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1505)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1506)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1507)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1508)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1510)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1512)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1513)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1514)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1518)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1240"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import MCFWaterfallDiagram
```

<a id="id1241"></a>

## Property detail

<a id="id1242"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1243"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1244"></a>

### *property* FrequencyResponseResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1245"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1246"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1247"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1248"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1249"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1250"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1251"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1252"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1253"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1254"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1255"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1256"></a>

### *property* FrequencyResponseResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1257"></a>

### *property* FrequencyResponseResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1258"></a>

### *property* FrequencyResponseResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1259"></a>

### *property* FrequencyResponseResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1260"></a>

### *property* FrequencyResponseResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1261"></a>

### *property* FrequencyResponseResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1262"></a>

### *property* FrequencyResponseResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1263"></a>

### *property* FrequencyResponseResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1264"></a>

### *property* FrequencyResponseResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1265"></a>

### *property* FrequencyResponseResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1266"></a>

### *property* FrequencyResponseResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1267"></a>

### *property* FrequencyResponseResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1268"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1269"></a>

### *property* FrequencyResponseResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1270"></a>

### *property* FrequencyResponseResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1271"></a>

### *property* FrequencyResponseResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1272"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1273"></a>

### *property* FrequencyResponseResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1274"></a>

### *property* FrequencyResponseResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1275"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1276"></a>

### *property* FrequencyResponseResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1277"></a>

### *property* FrequencyResponseResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1278"></a>

### *property* FrequencyResponseResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1279"></a>

### *property* FrequencyResponseResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1280"></a>

### *property* FrequencyResponseResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1281"></a>

### *property* FrequencyResponseResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1282"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1283"></a>

### *property* FrequencyResponseResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1284"></a>

### *property* FrequencyResponseResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1285"></a>

### *property* FrequencyResponseResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1286"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1287"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1288"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1289"></a>

### *property* FrequencyResponseResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1290"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1291"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1292"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1293"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1294"></a>

## Method detail

<a id="id1295"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1296"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1297"></a>

### FrequencyResponseResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1298"></a>

### FrequencyResponseResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1299"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1300"></a>

### FrequencyResponseResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1301"></a>

### FrequencyResponseResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1302"></a>

### FrequencyResponseResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1303"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1304"></a>

### FrequencyResponseResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1305"></a>

### FrequencyResponseResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1306"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1307"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1308"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1309"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1310"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1311"></a>

### FrequencyResponseResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1312"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1313"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1314"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1315"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1316"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1317"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1318"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1319"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1320"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1321"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.StressFrequencyResponse"></a>

### *class* FrequencyResponseResults.StressFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id1322"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import StressFrequencyResponse
```

<a id="id1323"></a>

## Property detail

<a id="id1324"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1325"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1326"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id1327"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1328"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1329"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id1330"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id1331"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1332"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1333"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id1334"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1335"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1336"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id1337"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id1338"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id1339"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1340"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1341"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1342"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1343"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1344"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1345"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1346"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id1347"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1348"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1349"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id1350"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id1351"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id1352"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id1353"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id1354"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1355"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1356"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id1357"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1358"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id1359"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1360"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1361"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1362"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id1363"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1364"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id1365"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id1366"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id1367"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1368"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1369"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1370"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1371"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1372"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1373"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1374"></a>

## Method detail

<a id="id1375"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1376"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1377"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1378"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1379"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1380"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1381"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1382"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1383"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1384"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1385"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1386"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1387"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1388"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1389"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1390"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1391"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1392"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1393"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.VelocityFrequencyResponse"></a>

### *class* FrequencyResponseResults.VelocityFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VelocityFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                                                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id1394"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import VelocityFrequencyResponse
```

<a id="id1395"></a>

## Property detail

<a id="id1396"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1397"></a>

### *property* FrequencyResponseResults.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="id1398"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1399"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id1400"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1401"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1402"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id1403"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id1404"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1405"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1406"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id1407"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1408"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1409"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id1410"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id1411"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id1412"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1413"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1414"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1415"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1416"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1417"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1418"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1419"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id1420"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1421"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1422"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id1423"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id1424"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id1425"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id1426"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id1427"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1428"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1429"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id1430"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1431"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id1432"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1433"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1434"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1435"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id1436"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1437"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id1438"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id1439"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id1440"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1441"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1442"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1443"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1444"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1445"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1446"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1447"></a>

## Method detail

<a id="id1448"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1449"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1450"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1451"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1452"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1453"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1454"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1455"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1456"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1457"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1458"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1459"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1460"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1461"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1462"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1463"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1464"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1465"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1466"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.VelocityWaterfallDiagram"></a>

### *class* FrequencyResponseResults.VelocityWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VelocityWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1526)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1527)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1529) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1530)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1531) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1620)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1533)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1534)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1540)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                    |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1473)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1475)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1476)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1477)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1478)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1479)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1480)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1481)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1482)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1485)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1486)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1487)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1488)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1490)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1491)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1492)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1493)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1494)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1495)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1496)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1498)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1499)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1500)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1502)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1503)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1505)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1506)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1507)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1508)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1510)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1512)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1513)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1514)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1518)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1467"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import VelocityWaterfallDiagram
```

<a id="id1468"></a>

## Property detail

<a id="id1469"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1470"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id1471"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1472"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1473"></a>

### *property* FrequencyResponseResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1474"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1475"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1476"></a>

### *property* FrequencyResponseResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1477"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1478"></a>

### *property* FrequencyResponseResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1479"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1480"></a>

### *property* FrequencyResponseResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1481"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1482"></a>

### *property* FrequencyResponseResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1483"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1484"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1485"></a>

### *property* FrequencyResponseResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1486"></a>

### *property* FrequencyResponseResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1487"></a>

### *property* FrequencyResponseResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1488"></a>

### *property* FrequencyResponseResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1489"></a>

### *property* FrequencyResponseResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1490"></a>

### *property* FrequencyResponseResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1491"></a>

### *property* FrequencyResponseResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1492"></a>

### *property* FrequencyResponseResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1493"></a>

### *property* FrequencyResponseResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1494"></a>

### *property* FrequencyResponseResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1495"></a>

### *property* FrequencyResponseResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1496"></a>

### *property* FrequencyResponseResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1497"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1498"></a>

### *property* FrequencyResponseResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1499"></a>

### *property* FrequencyResponseResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1500"></a>

### *property* FrequencyResponseResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1501"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1502"></a>

### *property* FrequencyResponseResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1503"></a>

### *property* FrequencyResponseResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1504"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1505"></a>

### *property* FrequencyResponseResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1506"></a>

### *property* FrequencyResponseResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1507"></a>

### *property* FrequencyResponseResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1508"></a>

### *property* FrequencyResponseResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1509"></a>

### *property* FrequencyResponseResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1510"></a>

### *property* FrequencyResponseResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1511"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1512"></a>

### *property* FrequencyResponseResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1513"></a>

### *property* FrequencyResponseResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1514"></a>

### *property* FrequencyResponseResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1515"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1516"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1517"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1518"></a>

### *property* FrequencyResponseResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1519"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1520"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1521"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1522"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1523"></a>

## Method detail

<a id="id1524"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1525"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1526"></a>

### FrequencyResponseResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1527"></a>

### FrequencyResponseResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1528"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1529"></a>

### FrequencyResponseResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1530"></a>

### FrequencyResponseResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1531"></a>

### FrequencyResponseResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1532"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1533"></a>

### FrequencyResponseResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1534"></a>

### FrequencyResponseResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1535"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1536"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1537"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1538"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1539"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1540"></a>

### FrequencyResponseResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1541"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1542"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1543"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1544"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1545"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1546"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1547"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1548"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1549"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1550"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResults.VoltageFrequencyResponse"></a>

### *class* FrequencyResponseResults.VoltageFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VoltageFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id1604)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id1605)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1606)      | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#id1607) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1608)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1610)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1611)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id1612)                | Creates a new child Image.                                                        |
| [`Activate`](#id1613)                | Activate the current object.                                                      |
| [`CopyTo`](#id1614)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1615)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1616) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1617)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1618)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1619)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id1620)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id1621)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1622)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`RemotePointSelection`](#id1556)                                                                                         | Gets or sets the RemotePointSelection.                                                           |
| [`IsSolved`](#id1557)                                                                                                     | Gets the IsSolved.                                                                               |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`BoundaryCondition`](#id1559)                                                                                            | Gets or sets the BoundaryCondition.                                                              |
| [`CutFrequency`](#id1560)                                                                                                 | Gets or sets the CutFrequency.                                                                   |
| [`SectorNumber`](#id1561)                                                                                                 | Gets or sets the SectorNumber.                                                                   |
| [`GeometrySelectionString`](#id1562)                                                                                      | Gets or sets the GeometrySelectionString.                                                        |
| [`LoadStepNumber`](#id1563)                                                                                               | Gets or sets the LoadStepNumber.                                                                 |
| [`ReportedFrequency`](#id1564)                                                                                            | Gets the ReportedFrequency.                                                                      |
| [`Duration`](#id1565)                                                                                                     | Gets or sets the Duration.                                                                       |
| [`FilterMaximum`](#id1566)                                                                                                | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#id1567)                                                                                                | Gets the FilterMinimum.                                                                          |
| [`FrequencyAtMaximumAmplitude`](#id1568)                                                                                  | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`ImaginaryAtMaximumAmplitude`](#id1569)                                                                                  | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`MaximumAmplitude`](#id1570)                                                                                             | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#id1571)                                                                                             | Gets or sets the MaximumFrequency.                                                               |
| [`Maximum`](#id1572)                                                                                                      | Gets the Maximum.                                                                                |
| [`MinimumFrequency`](#id1573)                                                                                             | Gets or sets the MinimumFrequency.                                                               |
| [`Minimum`](#id1574)                                                                                                      | Gets the Minimum.                                                                                |
| [`PhaseAngle`](#id1575)                                                                                                   | Gets the PhaseAngle.                                                                             |
| [`RealAtMaximumAmplitude`](#id1576)                                                                                       | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RequestedFrequency`](#id1577)                                                                                           | Gets or sets the RequestedFrequency.                                                             |
| [`AccelerationType`](#id1578)                                                                                             | Gets or sets the AccelerationType.                                                               |
| [`ChartViewingStyle`](#id1579)                                                                                            | Gets or sets the ChartViewingStyle.                                                              |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                     |
| [`SpatialResolution`](#id1582)                                                                                            | Gets or sets the SpatialResolution.                                                              |
| [`NormalOrientation`](#id1583)                                                                                            | Gets or sets the NormalOrientation.                                                              |
| [`CurvesAppearanceDisplay`](#id1584)                                                                                      | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`ResultChartType`](#id1585)                                                                                              | Gets the ResultChartType.                                                                        |
| [`DpfEvaluation`](#id1586)                                                                                                | Gets or sets the DpfEvaluation.                                                                  |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                    |
| [`ShearOrientation`](#id1588)                                                                                             | Gets or sets the ShearOrientation.                                                               |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                               |
| [`TimeHistoryDisplay`](#id1590)                                                                                           | Gets or sets the TimeHistoryDisplay.                                                             |
| [`VelocityType`](#id1591)                                                                                                 | Gets or sets the VelocityType.                                                                   |
| [`Suppressed`](#id1592)                                                                                                   | Gets or sets the Suppressed.                                                                     |
| [`EnhancedTracking`](#id1593)                                                                                             | Gets the EnhancedTracking.                                                                       |
| [`UseParentFrequencyRange`](#id1594)                                                                                      | Gets or sets the UseParentFrequencyRange.                                                        |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                         |
| [`Location`](#id1596)                                                                                                     | Gets or sets the Location.                                                                       |
| [`Children`](#id1597)                                                                                                     | Gets the list of children.                                                                       |
| [`Comments`](#id1598)                                                                                                     | Gets the list of associated comments.                                                            |
| [`Images`](#id1599)                                                                                                       | Gets the list of associated images.                                                              |
| [`InternalObject`](#id1600)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id1601)                                                                                                   | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id1602)                                                                                            | Gets the list of properties that are visible for this object.                                    |

<a id="id1551"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import VoltageFrequencyResponse
```

<a id="id1552"></a>

## Property detail

<a id="id1553"></a>

### *property* FrequencyResponseResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1554"></a>

### *property* FrequencyResponseResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1555"></a>

### *property* FrequencyResponseResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id1556"></a>

### *property* FrequencyResponseResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1557"></a>

### *property* FrequencyResponseResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1558"></a>

### *property* FrequencyResponseResults.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="id1559"></a>

### *property* FrequencyResponseResults.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="id1560"></a>

### *property* FrequencyResponseResults.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1561"></a>

### *property* FrequencyResponseResults.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1562"></a>

### *property* FrequencyResponseResults.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="id1563"></a>

### *property* FrequencyResponseResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1564"></a>

### *property* FrequencyResponseResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1565"></a>

### *property* FrequencyResponseResults.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="id1566"></a>

### *property* FrequencyResponseResults.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="id1567"></a>

### *property* FrequencyResponseResults.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id1568"></a>

### *property* FrequencyResponseResults.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1569"></a>

### *property* FrequencyResponseResults.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1570"></a>

### *property* FrequencyResponseResults.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1571"></a>

### *property* FrequencyResponseResults.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1572"></a>

### *property* FrequencyResponseResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1573"></a>

### *property* FrequencyResponseResults.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1574"></a>

### *property* FrequencyResponseResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1575"></a>

### *property* FrequencyResponseResults.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="id1576"></a>

### *property* FrequencyResponseResults.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1577"></a>

### *property* FrequencyResponseResults.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1578"></a>

### *property* FrequencyResponseResults.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="id1579"></a>

### *property* FrequencyResponseResults.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="id1580"></a>

### *property* FrequencyResponseResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id1581"></a>

### *property* FrequencyResponseResults.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="id1582"></a>

### *property* FrequencyResponseResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id1583"></a>

### *property* FrequencyResponseResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1584"></a>

### *property* FrequencyResponseResults.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1585"></a>

### *property* FrequencyResponseResults.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="id1586"></a>

### *property* FrequencyResponseResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1587"></a>

### *property* FrequencyResponseResults.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="id1588"></a>

### *property* FrequencyResponseResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1589"></a>

### *property* FrequencyResponseResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1590"></a>

### *property* FrequencyResponseResults.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id1591"></a>

### *property* FrequencyResponseResults.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="id1592"></a>

### *property* FrequencyResponseResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1593"></a>

### *property* FrequencyResponseResults.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="id1594"></a>

### *property* FrequencyResponseResults.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="id1595"></a>

### *property* FrequencyResponseResults.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="id1596"></a>

### *property* FrequencyResponseResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1597"></a>

### *property* FrequencyResponseResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1598"></a>

### *property* FrequencyResponseResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1599"></a>

### *property* FrequencyResponseResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1600"></a>

### *property* FrequencyResponseResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1601"></a>

### *property* FrequencyResponseResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1602"></a>

### *property* FrequencyResponseResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1603"></a>

## Method detail

<a id="id1604"></a>

### FrequencyResponseResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1605"></a>

### FrequencyResponseResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1606"></a>

### FrequencyResponseResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1607"></a>

### FrequencyResponseResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1608"></a>

### FrequencyResponseResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1609"></a>

### FrequencyResponseResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1610"></a>

### FrequencyResponseResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1611"></a>

### FrequencyResponseResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1612"></a>

### FrequencyResponseResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1613"></a>

### FrequencyResponseResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1614"></a>

### FrequencyResponseResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1615"></a>

### FrequencyResponseResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1616"></a>

### FrequencyResponseResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1617"></a>

### FrequencyResponseResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1618"></a>

### FrequencyResponseResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1619"></a>

### FrequencyResponseResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1620"></a>

### FrequencyResponseResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id1621"></a>

### FrequencyResponseResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1622"></a>

### FrequencyResponseResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
