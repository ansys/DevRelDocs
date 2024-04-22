<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults"></a>

<a id="the-deformationresults-package"></a>

# The `DeformationResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------------------------------------|---------------------------------------|
| [`DeformationResult`](DeformationResult.md#DeformationResult)                            | Defines a DeformationResult.          |
| [`DirectionalAcceleration`](DirectionalAcceleration.md#DirectionalAcceleration)          | Defines a DirectionalAcceleration.    |
| [`DirectionalAccelerationPSD`](DirectionalAccelerationPSD.md#DirectionalAccelerationPSD) | Defines a DirectionalAccelerationPSD. |
| [`DirectionalAccelerationRS`](DirectionalAccelerationRS.md#DirectionalAccelerationRS)    | Defines a DirectionalAccelerationRS.  |
| [`DirectionalDeformation`](DirectionalDeformation.md#DirectionalDeformation)             | Defines a DirectionalDeformation.     |
| [`DirectionalVelocity`](DirectionalVelocity.md#DirectionalVelocity)                      | Defines a DirectionalVelocity.        |
| [`DirectionalVelocityPSD`](DirectionalVelocityPSD.md#DirectionalVelocityPSD)             | Defines a DirectionalVelocityPSD.     |
| [`DirectionalVelocityRS`](DirectionalVelocityRS.md#DirectionalVelocityRS)                | Defines a DirectionalVelocityRS.      |
| [`TotalAcceleration`](TotalAcceleration.md#TotalAcceleration)                            | Defines a TotalAcceleration.          |
| [`TotalDeformation`](TotalDeformation.md#TotalDeformation)                               | Defines a TotalDeformation.           |
| [`TotalVelocity`](TotalVelocity.md#TotalVelocity)                                        | Defines a TotalVelocity.              |
| [`VectorDeformation`](VectorDeformation.md#VectorDeformation)                            | Defines a VectorDeformation.          |

<a id="description"></a>

## Description

DeformationResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="DeformationResults.DeformationResult"></a>

### *class* DeformationResults.DeformationResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DeformationResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DeformationResult
```

<a id="property-detail"></a>

## Property detail

<a id="DeformationResults.Mode"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.ReportedFrequency"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DampedFrequency"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.EnvironmentSelection"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.InternalObject"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.LogarithmicDecrement"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.ModalDampingRatio"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.HarmonicIndex"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CyclicMode"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.IterationStep"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.LoadMultiplier"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Probability"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.ScaleFactorValue"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Stability"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CyclicPhase"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.SweepingPhase"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.PhaseIncrement"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Frequency"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DeformationType"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Reference"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.ScaleFactor"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.AccelerationInG"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Amplitude"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.AllowPhaseSweep"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DataModelObjectCategory"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.PlotData"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Location"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.TimeForMinimumOfMinimumValues"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.TimeForMinimumOfMaximumValues"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.TimeForMaximumOfMinimumValues"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.TimeForMaximumOfMaximumValues"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.IsSolved"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CoordinateSystem"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.ScopingMethod"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.SetNumber"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CombinationNumber"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.SolutionCombinationDriver"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Surface"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CrackFrontNumber"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.GlobalIDs"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Identifier"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.IterationNumber"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.LoadStep"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.MaximumOccursOn"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.MinimumOccursOn"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.LoadStepNumber"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.SolverComponentIDs"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Substep"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Average"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Maximum"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.MaximumOfMaximumOverTime"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.MaximumOfMinimumOverTime"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Minimum"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.MinimumOfMaximumOverTime"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.MinimumOfMinimumOverTime"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Time"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DisplayTime"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.GraphControlsXAxis"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DisplayOption"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DpfEvaluation"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.By"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.ItemType"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CalculateTimeHistory"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Suppressed"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Children"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Comments"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Figures"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Images"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Properties"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.VisibleProperties"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DeformationResults.ClearGeneratedData"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.EvaluateAllResults"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.FetchRemoteResults"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.ExportToTextFile"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.ExportAnimation"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DuplicateWithoutResults"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CreateResultsAtAllSets"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.PromoteToNamedSelection"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CreateParameter"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.AddAlert"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.AddConvergence"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.RenameBasedOnDefinition"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Delete"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.GetChildren"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.AddComment"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.AddFigure"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.AddImage"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Activate"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.CopyTo"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.Duplicate"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.GroupAllSimilarChildren"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.GroupSimilarObjects"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.PropertyByName"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.PropertyByAPIName"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.GetParameter"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.RemoveParameter"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DirectionalAcceleration"></a>

### *class* DeformationResults.DirectionalAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalAcceleration.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id640)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalAcceleration
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.NormalOrientation"></a>

### *property* DeformationResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

## Method detail

<a id="id80"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DirectionalAccelerationPSD"></a>

### *class* DeformationResults.DirectionalAccelerationPSD

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalAccelerationPSD.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id640)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id107"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalAccelerationPSD
```

<a id="id108"></a>

## Property detail

<a id="id109"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* DeformationResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

## Method detail

<a id="id186"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DirectionalAccelerationRS"></a>

### *class* DeformationResults.DirectionalAccelerationRS

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalAccelerationRS.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id640)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id213"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalAccelerationRS
```

<a id="id214"></a>

## Property detail

<a id="id215"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* DeformationResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

## Method detail

<a id="id292"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DirectionalDeformation"></a>

### *class* DeformationResults.DirectionalDeformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalDeformation.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id640)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id319"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalDeformation
```

<a id="id320"></a>

## Property detail

<a id="id321"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* DeformationResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

## Method detail

<a id="id398"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DirectionalVelocity"></a>

### *class* DeformationResults.DirectionalVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalVelocity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id640)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id425"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalVelocity
```

<a id="id426"></a>

## Property detail

<a id="id427"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* DeformationResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

## Method detail

<a id="id504"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DirectionalVelocityPSD"></a>

### *class* DeformationResults.DirectionalVelocityPSD

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalVelocityPSD.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id640)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id531"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalVelocityPSD
```

<a id="id532"></a>

## Property detail

<a id="id533"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### *property* DeformationResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

## Method detail

<a id="id610"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.DirectionalVelocityRS"></a>

### *class* DeformationResults.DirectionalVelocityRS

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalVelocityRS.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id640)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id637"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalVelocityRS
```

<a id="id638"></a>

## Property detail

<a id="id639"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### *property* DeformationResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

## Method detail

<a id="id716"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.TotalAcceleration"></a>

### *class* DeformationResults.TotalAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalAcceleration.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id743"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import TotalAcceleration
```

<a id="id744"></a>

## Property detail

<a id="id745"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id781"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id786"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id787"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id794"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id795"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id796"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id804"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id805"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id806"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id807"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id808"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id813"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id814"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id815"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id816"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id817"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id818"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id819"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id820"></a>

## Method detail

<a id="id821"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id822"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id823"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id824"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id825"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id826"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id827"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id828"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id829"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id830"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id831"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id832"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id833"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id834"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id835"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id836"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id837"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id838"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id839"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id840"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id841"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id842"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id843"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id844"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id845"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id846"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id847"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.TotalDeformation"></a>

### *class* DeformationResults.TotalDeformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalDeformation.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id848"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import TotalDeformation
```

<a id="id849"></a>

## Property detail

<a id="id850"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id851"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id852"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id853"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id854"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id855"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id856"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id857"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id858"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id859"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id860"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id861"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id862"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id863"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id864"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id865"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id866"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id867"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id868"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id869"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id870"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id871"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id872"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id873"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id874"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id875"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id876"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id877"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id878"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id879"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id880"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id881"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id882"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id883"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id884"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id885"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id886"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id887"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id888"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id889"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id890"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id891"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id892"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id893"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id894"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id895"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id896"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id897"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id898"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id899"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id900"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id901"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id902"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id903"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id904"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id905"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id906"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id907"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id908"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id909"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id910"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id911"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id912"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id913"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id914"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id915"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id916"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id917"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id918"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id919"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id920"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id921"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id922"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id923"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id924"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id925"></a>

## Method detail

<a id="id926"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id927"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id928"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id929"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id930"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id931"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id932"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id933"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id934"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id935"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id936"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id937"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id938"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id939"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id940"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id941"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id942"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id943"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id944"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id945"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id946"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id947"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id948"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id949"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id950"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id951"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id952"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.TotalVelocity"></a>

### *class* DeformationResults.TotalVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalVelocity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id957)                                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#id958)                                                                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#id959)                                                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#id960)                                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#id961)                                                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#id962)                                                                                             | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#id963)                                                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id964)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id965)                                                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id966)                                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#id967)                                                                                                   | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#id968)                                                                                              | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#id969)                                                                                                     | Gets the Stability.                                                    |
| [`CyclicPhase`](#id970)                                                                                                   | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#id971)                                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id972)                                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id973)                                                                                                     | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#id975)                                                                                                     | Gets the Reference.                                                    |
| [`ScaleFactor`](#id976)                                                                                                   | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#id977)                                                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#id978)                                                                                                     | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#id979)                                                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id953"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import TotalVelocity
```

<a id="id954"></a>

## Property detail

<a id="id955"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id956"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id957"></a>

### *property* DeformationResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id958"></a>

### *property* DeformationResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id959"></a>

### *property* DeformationResults.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id960"></a>

### *property* DeformationResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id961"></a>

### *property* DeformationResults.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="id962"></a>

### *property* DeformationResults.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="id963"></a>

### *property* DeformationResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id964"></a>

### *property* DeformationResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id965"></a>

### *property* DeformationResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id966"></a>

### *property* DeformationResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id967"></a>

### *property* DeformationResults.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="id968"></a>

### *property* DeformationResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id969"></a>

### *property* DeformationResults.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="id970"></a>

### *property* DeformationResults.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="id971"></a>

### *property* DeformationResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id972"></a>

### *property* DeformationResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id973"></a>

### *property* DeformationResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id974"></a>

### *property* DeformationResults.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="id975"></a>

### *property* DeformationResults.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="id976"></a>

### *property* DeformationResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id977"></a>

### *property* DeformationResults.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="id978"></a>

### *property* DeformationResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id979"></a>

### *property* DeformationResults.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="id980"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id981"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id982"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id983"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id984"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id985"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id986"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id987"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id988"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id989"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id990"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id991"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id992"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id993"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id994"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id995"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id996"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id997"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id998"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id999"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1000"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1001"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1002"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1003"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1004"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1005"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1006"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1007"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1008"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1009"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1010"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1011"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1012"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1013"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1014"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1015"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1016"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1017"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1018"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1019"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1020"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1021"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1022"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1023"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1024"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1025"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1026"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1027"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1028"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1029"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1030"></a>

## Method detail

<a id="id1031"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1032"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1033"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1034"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1035"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1036"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1037"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1038"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1039"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1040"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1041"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1042"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1043"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1044"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1045"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1046"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1047"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1048"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1049"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1050"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1051"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1052"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1053"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1054"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1055"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1056"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1057"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationResults.VectorDeformation"></a>

### *class* DeformationResults.VectorDeformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorDeformation.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1113)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1114)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1115)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1116)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1117)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1118) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1119)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1120) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1121)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1122)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1123)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1124) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1125)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1127)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1128)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1129)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1130)                | Creates a new child Image.                                                        |
| [`Activate`](#id1131)                | Activate the current object.                                                      |
| [`CopyTo`](#id1132)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1133)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1134) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1135)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1136)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1137)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1138)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1139)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1062)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1063)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1064)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1065)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1066)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1067)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1068)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1069)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1070)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1071)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1072)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1074)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1075)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1076)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1077)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1079)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1080)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1081)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1082)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1083)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1084)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1085)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1086)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1087)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1088)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1089)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1090)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1091)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1092)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1093)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1094)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1095)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1096)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1097)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1099)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1100)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1101)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1102)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1103)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1104)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1105)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1106)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1107)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1108)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1109)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1110)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1111)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1058"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import VectorDeformation
```

<a id="id1059"></a>

## Property detail

<a id="id1060"></a>

### *property* DeformationResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1061"></a>

### *property* DeformationResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1062"></a>

### *property* DeformationResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1063"></a>

### *property* DeformationResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1064"></a>

### *property* DeformationResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1065"></a>

### *property* DeformationResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1066"></a>

### *property* DeformationResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1067"></a>

### *property* DeformationResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1068"></a>

### *property* DeformationResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1069"></a>

### *property* DeformationResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1070"></a>

### *property* DeformationResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1071"></a>

### *property* DeformationResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1072"></a>

### *property* DeformationResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1073"></a>

### *property* DeformationResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1074"></a>

### *property* DeformationResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1075"></a>

### *property* DeformationResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1076"></a>

### *property* DeformationResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1077"></a>

### *property* DeformationResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1078"></a>

### *property* DeformationResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1079"></a>

### *property* DeformationResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1080"></a>

### *property* DeformationResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1081"></a>

### *property* DeformationResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1082"></a>

### *property* DeformationResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1083"></a>

### *property* DeformationResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1084"></a>

### *property* DeformationResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1085"></a>

### *property* DeformationResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1086"></a>

### *property* DeformationResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1087"></a>

### *property* DeformationResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1088"></a>

### *property* DeformationResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1089"></a>

### *property* DeformationResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1090"></a>

### *property* DeformationResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1091"></a>

### *property* DeformationResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1092"></a>

### *property* DeformationResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1093"></a>

### *property* DeformationResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1094"></a>

### *property* DeformationResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1095"></a>

### *property* DeformationResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1096"></a>

### *property* DeformationResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1097"></a>

### *property* DeformationResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1098"></a>

### *property* DeformationResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1099"></a>

### *property* DeformationResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1100"></a>

### *property* DeformationResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1101"></a>

### *property* DeformationResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1102"></a>

### *property* DeformationResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1103"></a>

### *property* DeformationResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1104"></a>

### *property* DeformationResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1105"></a>

### *property* DeformationResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1106"></a>

### *property* DeformationResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1107"></a>

### *property* DeformationResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1108"></a>

### *property* DeformationResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1109"></a>

### *property* DeformationResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1110"></a>

### *property* DeformationResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1111"></a>

### *property* DeformationResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1112"></a>

## Method detail

<a id="id1113"></a>

### DeformationResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1114"></a>

### DeformationResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1115"></a>

### DeformationResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1116"></a>

### DeformationResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1117"></a>

### DeformationResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1118"></a>

### DeformationResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1119"></a>

### DeformationResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1120"></a>

### DeformationResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1121"></a>

### DeformationResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1122"></a>

### DeformationResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1123"></a>

### DeformationResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1124"></a>

### DeformationResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1125"></a>

### DeformationResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1126"></a>

### DeformationResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1127"></a>

### DeformationResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1128"></a>

### DeformationResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1129"></a>

### DeformationResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1130"></a>

### DeformationResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1131"></a>

### DeformationResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1132"></a>

### DeformationResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1133"></a>

### DeformationResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1134"></a>

### DeformationResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1135"></a>

### DeformationResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1136"></a>

### DeformationResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1137"></a>

### DeformationResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1138"></a>

### DeformationResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1139"></a>

### DeformationResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
