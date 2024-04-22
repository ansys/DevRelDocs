<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults"></a>

<a id="the-beamresults-package"></a>

# The `BeamResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------------------------|------------------------------------------|
| [`BeamResult`](BeamResult.md#BeamResult)                                                          | Defines a BeamResult.                    |
| [`DirectionalAxialForce`](DirectionalAxialForce.md#DirectionalAxialForce)                         | Defines a DirectionalAxialForce.         |
| [`DirectionalBendingMoment`](DirectionalBendingMoment.md#DirectionalBendingMoment)                | Defines a DirectionalBendingMoment.      |
| [`DirectionalShearForce`](DirectionalShearForce.md#DirectionalShearForce)                         | Defines a DirectionalShearForce.         |
| [`DirectionalShearMomentDiagram`](DirectionalShearMomentDiagram.md#DirectionalShearMomentDiagram) | Defines a DirectionalShearMomentDiagram. |
| [`DirectionalTorsionalMoment`](DirectionalTorsionalMoment.md#DirectionalTorsionalMoment)          | Defines a DirectionalTorsionalMoment.    |
| [`TotalAxialForce`](TotalAxialForce.md#TotalAxialForce)                                           | Defines a TotalAxialForce.               |
| [`TotalBendingMoment`](TotalBendingMoment.md#TotalBendingMoment)                                  | Defines a TotalBendingMoment.            |
| [`TotalShearForce`](TotalShearForce.md#TotalShearForce)                                           | Defines a TotalShearForce.               |
| [`TotalShearMomentDiagram`](TotalShearMomentDiagram.md#TotalShearMomentDiagram)                   | Defines a TotalShearMomentDiagram.       |
| [`TotalTorsionalMoment`](TotalTorsionalMoment.md#TotalTorsionalMoment)                            | Defines a TotalTorsionalMoment.          |
| [`VectorAxialForce`](VectorAxialForce.md#VectorAxialForce)                                        | Defines a VectorAxialForce.              |
| [`VectorBendingMoment`](VectorBendingMoment.md#VectorBendingMoment)                               | Defines a VectorBendingMoment.           |
| [`VectorShearForce`](VectorShearForce.md#VectorShearForce)                                        | Defines a VectorShearForce.              |
| [`VectorTorsionalMoment`](VectorTorsionalMoment.md#VectorTorsionalMoment)                         | Defines a VectorTorsionalMoment.         |

<a id="description"></a>

## Description

BeamResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="BeamResults.BeamResult"></a>

### *class* BeamResults.BeamResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BeamResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import BeamResult
```

<a id="property-detail"></a>

## Property detail

<a id="BeamResults.InternalObject"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.BeamResultType"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DataModelObjectCategory"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.PlotData"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Location"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TimeForMinimumOfMinimumValues"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TimeForMinimumOfMaximumValues"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TimeForMaximumOfMinimumValues"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TimeForMaximumOfMaximumValues"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.IsSolved"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.CoordinateSystem"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.ScopingMethod"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.SetNumber"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.CombinationNumber"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.SolutionCombinationDriver"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Surface"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.CrackFrontNumber"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.GlobalIDs"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Identifier"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.IterationNumber"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.LoadStep"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.MaximumOccursOn"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.MinimumOccursOn"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.LoadStepNumber"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.SolverComponentIDs"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Substep"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Average"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Maximum"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.MaximumOfMaximumOverTime"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.MaximumOfMinimumOverTime"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Minimum"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.MinimumOfMaximumOverTime"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.MinimumOfMinimumOverTime"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Time"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DisplayTime"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.GraphControlsXAxis"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DisplayOption"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DpfEvaluation"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.By"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.ItemType"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.CalculateTimeHistory"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Suppressed"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Children"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Comments"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Figures"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Images"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Properties"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.VisibleProperties"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BeamResults.ClearGeneratedData"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.EvaluateAllResults"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.FetchRemoteResults"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.ExportToTextFile"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.ExportAnimation"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DuplicateWithoutResults"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.CreateResultsAtAllSets"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.PromoteToNamedSelection"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.CreateParameter"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.AddAlert"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.AddConvergence"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.RenameBasedOnDefinition"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Delete"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.GetChildren"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.AddComment"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.AddFigure"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.AddImage"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Activate"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.CopyTo"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.Duplicate"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.GroupAllSimilarChildren"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.GroupSimilarObjects"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.PropertyByName"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.PropertyByAPIName"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.GetParameter"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.RemoveParameter"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DirectionalAxialForce"></a>

### *class* BeamResults.DirectionalAxialForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalAxialForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import DirectionalAxialForce
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

## Method detail

<a id="id58"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DirectionalBendingMoment"></a>

### *class* BeamResults.DirectionalBendingMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalBendingMoment.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#BeamResults.NormalOrientation)                                                                     | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id85"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import DirectionalBendingMoment
```

<a id="id86"></a>

## Property detail

<a id="id87"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.NormalOrientation"></a>

### *property* BeamResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

## Method detail

<a id="id141"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DirectionalShearForce"></a>

### *class* BeamResults.DirectionalShearForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalShearForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id168"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import DirectionalShearForce
```

<a id="id169"></a>

## Property detail

<a id="id170"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

## Method detail

<a id="id224"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DirectionalShearMomentDiagram"></a>

### *class* BeamResults.DirectionalShearMomentDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalShearMomentDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`GraphicsDisplay`](#id668)                                                                                               | Gets or sets the GraphicsDisplay.                                      |
| [`ShearMomentType`](../../../../../Mechanical/DataModel/Enums/ShearMomentType.md#ShearMomentType)                         | Gets or sets the ShearMomentType.                                      |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id251"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import DirectionalShearMomentDiagram
```

<a id="id252"></a>

## Property detail

<a id="id253"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.GraphicsDisplay"></a>

### *property* BeamResults.GraphicsDisplay *: [Ansys.Mechanical.DataModel.Enums.ShearMomentDiagramOrientationType](../../../../../Mechanical/DataModel/Enums/ShearMomentDiagramOrientationType.md#ShearMomentDiagramOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphicsDisplay.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.ShearMomentType"></a>

### *property* BeamResults.ShearMomentType *: [Ansys.Mechanical.DataModel.Enums.ShearMomentType](../../../../../Mechanical/DataModel/Enums/ShearMomentType.md#ShearMomentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearMomentType.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

## Method detail

<a id="id307"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.DirectionalTorsionalMoment"></a>

### *class* BeamResults.DirectionalTorsionalMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalTorsionalMoment.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id334"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import DirectionalTorsionalMoment
```

<a id="id335"></a>

## Property detail

<a id="id336"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

## Method detail

<a id="id390"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TotalAxialForce"></a>

### *class* BeamResults.TotalAxialForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalAxialForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id417"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import TotalAxialForce
```

<a id="id418"></a>

## Property detail

<a id="id419"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

## Method detail

<a id="id472"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TotalBendingMoment"></a>

### *class* BeamResults.TotalBendingMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalBendingMoment.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id499"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import TotalBendingMoment
```

<a id="id500"></a>

## Property detail

<a id="id501"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

## Method detail

<a id="id555"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TotalShearForce"></a>

### *class* BeamResults.TotalShearForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalShearForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id582"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import TotalShearForce
```

<a id="id583"></a>

## Property detail

<a id="id584"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

## Method detail

<a id="id638"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TotalShearMomentDiagram"></a>

### *class* BeamResults.TotalShearMomentDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalShearMomentDiagram.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`GraphicsDisplay`](#id668)                                                                                               | Gets or sets the GraphicsDisplay.                                      |
| [`ShearMomentType`](../../../../../Mechanical/DataModel/Enums/ShearMomentType.md#ShearMomentType)                         | Gets or sets the ShearMomentType.                                      |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#id671)                                                                                                | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id665"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import TotalShearMomentDiagram
```

<a id="id666"></a>

## Property detail

<a id="id667"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* BeamResults.GraphicsDisplay *: [Ansys.Mechanical.DataModel.Enums.ShearMomentDiagramOrientationType](../../../../../Mechanical/DataModel/Enums/ShearMomentDiagramOrientationType.md#ShearMomentDiagramOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphicsDisplay.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* BeamResults.ShearMomentType *: [Ansys.Mechanical.DataModel.Enums.ShearMomentType](../../../../../Mechanical/DataModel/Enums/ShearMomentType.md#ShearMomentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearMomentType.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* BeamResults.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

## Method detail

<a id="id723"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.TotalTorsionalMoment"></a>

### *class* BeamResults.TotalTorsionalMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalTorsionalMoment.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id750"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import TotalTorsionalMoment
```

<a id="id751"></a>

## Property detail

<a id="id752"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id781"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id786"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id787"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id794"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id795"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id796"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id804"></a>

## Method detail

<a id="id805"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id806"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id807"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id808"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id813"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id814"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id815"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id816"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id817"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id818"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id819"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id820"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id821"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id822"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id823"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id824"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id825"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id826"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id827"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id828"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id829"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id830"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id831"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.VectorAxialForce"></a>

### *class* BeamResults.VectorAxialForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorAxialForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id832"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import VectorAxialForce
```

<a id="id833"></a>

## Property detail

<a id="id834"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id835"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id836"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id837"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id838"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id839"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id840"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id841"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id842"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id843"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id844"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id845"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id846"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id847"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id848"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id849"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id850"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id851"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id852"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id853"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id854"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id855"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id856"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id857"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id858"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id859"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id860"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id861"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id862"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id863"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id864"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id865"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id866"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id867"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id868"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id869"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id870"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id871"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id872"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id873"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id874"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id875"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id876"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id877"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id878"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id879"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id880"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id881"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id882"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id883"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id884"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id885"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id886"></a>

## Method detail

<a id="id887"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id888"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id889"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id890"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id891"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id892"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id893"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id894"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id895"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id896"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id897"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id898"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id899"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id900"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id901"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id902"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id903"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id904"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id905"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id906"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id907"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id908"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id909"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id910"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id911"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id912"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id913"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.VectorBendingMoment"></a>

### *class* BeamResults.VectorBendingMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorBendingMoment.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id914"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import VectorBendingMoment
```

<a id="id915"></a>

## Property detail

<a id="id916"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id917"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id918"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id919"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id920"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id921"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id922"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id923"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id924"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id925"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id926"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id927"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id928"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id929"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id930"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id931"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id932"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id933"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id934"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id935"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id936"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id937"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id938"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id939"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id940"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id941"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id942"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id943"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id944"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id945"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id946"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id947"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id948"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id949"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id950"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id951"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id952"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id953"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id954"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id955"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id956"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id957"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id958"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id959"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id960"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id961"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id962"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id963"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id964"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id965"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id966"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id967"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id968"></a>

## Method detail

<a id="id969"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id970"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id971"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id972"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id973"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id974"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id975"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id976"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id977"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id978"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id979"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id980"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id981"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id982"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id983"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id984"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id985"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id986"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id987"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id988"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id989"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id990"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id991"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id992"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id993"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id994"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id995"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.VectorShearForce"></a>

### *class* BeamResults.VectorShearForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorShearForce.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id996"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import VectorShearForce
```

<a id="id997"></a>

## Property detail

<a id="id998"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id999"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1000"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1001"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1002"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1003"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1004"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1005"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1006"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1007"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1008"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1009"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1010"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1011"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1012"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1013"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1014"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1015"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1016"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1017"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1018"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1019"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1020"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1021"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1022"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1023"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1024"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1025"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1026"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1027"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1028"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1029"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1030"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1031"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1032"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1033"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1034"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1035"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1036"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1037"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1038"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1039"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1040"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1041"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1042"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1043"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1044"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1045"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1046"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1047"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1048"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1049"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1050"></a>

## Method detail

<a id="id1051"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1052"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1053"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1054"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1055"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1056"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1057"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1058"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1059"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1060"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1061"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1062"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1063"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1064"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1065"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1066"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1067"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1068"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1069"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1070"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1071"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1072"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1073"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1074"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1075"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1076"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1077"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResults.VectorTorsionalMoment"></a>

### *class* BeamResults.VectorTorsionalMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorTorsionalMoment.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1133)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1134)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1135)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1136)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1137)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1138) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1139)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1140) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1141)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1142)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1143)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1144) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1145)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1147)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1148)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1149)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1150)                | Creates a new child Image.                                                        |
| [`Activate`](#id1151)                | Activate the current object.                                                      |
| [`CopyTo`](#id1152)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1153)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1154) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1155)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1156)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1157)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1158)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1159)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1082)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1083)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1084)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1085)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1086)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1087)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1088)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1089)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1090)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1091)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1092)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1094)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1095)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1096)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1097)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1099)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1100)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1101)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1102)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1103)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1104)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1105)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1106)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1107)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1108)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1109)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1110)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1111)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1112)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1113)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1114)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1115)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1116)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1117)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1119)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1120)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1121)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1122)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1123)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1124)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1125)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1126)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1127)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1128)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1129)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1130)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1131)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1078"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import VectorTorsionalMoment
```

<a id="id1079"></a>

## Property detail

<a id="id1080"></a>

### *property* BeamResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1081"></a>

### *property* BeamResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1082"></a>

### *property* BeamResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1083"></a>

### *property* BeamResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1084"></a>

### *property* BeamResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1085"></a>

### *property* BeamResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1086"></a>

### *property* BeamResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1087"></a>

### *property* BeamResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1088"></a>

### *property* BeamResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1089"></a>

### *property* BeamResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1090"></a>

### *property* BeamResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1091"></a>

### *property* BeamResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1092"></a>

### *property* BeamResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1093"></a>

### *property* BeamResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1094"></a>

### *property* BeamResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1095"></a>

### *property* BeamResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1096"></a>

### *property* BeamResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1097"></a>

### *property* BeamResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1098"></a>

### *property* BeamResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1099"></a>

### *property* BeamResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1100"></a>

### *property* BeamResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1101"></a>

### *property* BeamResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1102"></a>

### *property* BeamResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1103"></a>

### *property* BeamResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1104"></a>

### *property* BeamResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1105"></a>

### *property* BeamResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1106"></a>

### *property* BeamResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1107"></a>

### *property* BeamResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1108"></a>

### *property* BeamResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1109"></a>

### *property* BeamResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1110"></a>

### *property* BeamResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1111"></a>

### *property* BeamResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1112"></a>

### *property* BeamResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1113"></a>

### *property* BeamResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1114"></a>

### *property* BeamResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1115"></a>

### *property* BeamResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1116"></a>

### *property* BeamResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1117"></a>

### *property* BeamResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1118"></a>

### *property* BeamResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1119"></a>

### *property* BeamResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1120"></a>

### *property* BeamResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1121"></a>

### *property* BeamResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1122"></a>

### *property* BeamResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1123"></a>

### *property* BeamResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1124"></a>

### *property* BeamResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1125"></a>

### *property* BeamResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1126"></a>

### *property* BeamResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1127"></a>

### *property* BeamResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1128"></a>

### *property* BeamResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1129"></a>

### *property* BeamResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1130"></a>

### *property* BeamResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1131"></a>

### *property* BeamResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1132"></a>

## Method detail

<a id="id1133"></a>

### BeamResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1134"></a>

### BeamResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1135"></a>

### BeamResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1136"></a>

### BeamResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1137"></a>

### BeamResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1138"></a>

### BeamResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1139"></a>

### BeamResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1140"></a>

### BeamResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1141"></a>

### BeamResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1142"></a>

### BeamResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1143"></a>

### BeamResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1144"></a>

### BeamResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1145"></a>

### BeamResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1146"></a>

### BeamResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1147"></a>

### BeamResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1148"></a>

### BeamResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1149"></a>

### BeamResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1150"></a>

### BeamResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1151"></a>

### BeamResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1152"></a>

### BeamResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1153"></a>

### BeamResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1154"></a>

### BeamResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1155"></a>

### BeamResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1156"></a>

### BeamResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1157"></a>

### BeamResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1158"></a>

### BeamResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1159"></a>

### BeamResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
