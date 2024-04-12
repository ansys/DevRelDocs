<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults"></a>

<a id="the-electromagneticresults-package"></a>

# The `ElectromagneticResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| [`ElectromagneticResult`](ElectromagneticResult.md#ElectromagneticResult)                                     | Defines a ElectromagneticResult.             |
| [`CurrentDensity`](CurrentDensity.md#CurrentDensity)                                                          | Defines a CurrentDensity.                    |
| [`DirectionalMagneticFieldIntensity`](DirectionalMagneticFieldIntensity.md#DirectionalMagneticFieldIntensity) | Defines a DirectionalMagneticFieldIntensity. |
| [`DirectionalMagneticFluxDensity`](DirectionalMagneticFluxDensity.md#DirectionalMagneticFluxDensity)          | Defines a DirectionalMagneticFluxDensity.    |
| [`ElectricPotential`](ElectricPotential.md#ElectricPotential)                                                 | Defines a ElectricPotential.                 |
| [`FluxLinkage`](FluxLinkage.md#FluxLinkage)                                                                   | Defines a FluxLinkage.                       |
| [`Inductance`](Inductance.md#Inductance)                                                                      | Defines a Inductance.                        |
| [`MagneticDirectionalForces`](MagneticDirectionalForces.md#MagneticDirectionalForces)                         | Defines a MagneticDirectionalForces.         |
| [`MagneticError`](MagneticError.md#MagneticError)                                                             | Defines a MagneticError.                     |
| [`MagneticTotalForces`](MagneticTotalForces.md#MagneticTotalForces)                                           | Defines a MagneticTotalForces.               |
| [`TotalMagneticFieldIntensity`](TotalMagneticFieldIntensity.md#TotalMagneticFieldIntensity)                   | Defines a TotalMagneticFieldIntensity.       |
| [`TotalMagneticFluxDensity`](TotalMagneticFluxDensity.md#TotalMagneticFluxDensity)                            | Defines a TotalMagneticFluxDensity.          |

<a id="description"></a>

## Description

ElectromagneticResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ElectromagneticResults.ElectromagneticResult"></a>

### *class* ElectromagneticResults.ElectromagneticResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectromagneticResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import ElectromagneticResult
```

<a id="property-detail"></a>

## Property detail

<a id="ElectromagneticResults.InternalObject"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.ElectromagneticResultType"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.AverageAcrossBodies"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.DataModelObjectCategory"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.PlotData"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Location"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.TimeForMinimumOfMinimumValues"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.TimeForMinimumOfMaximumValues"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.TimeForMaximumOfMinimumValues"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.TimeForMaximumOfMaximumValues"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.IsSolved"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.CoordinateSystem"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.ScopingMethod"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.SetNumber"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.CombinationNumber"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.SolutionCombinationDriver"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Surface"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.CrackFrontNumber"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.GlobalIDs"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Identifier"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.IterationNumber"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.LoadStep"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MaximumOccursOn"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MinimumOccursOn"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.LoadStepNumber"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.SolverComponentIDs"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Substep"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Average"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Maximum"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MaximumOfMaximumOverTime"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MaximumOfMinimumOverTime"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Minimum"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MinimumOfMaximumOverTime"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MinimumOfMinimumOverTime"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Time"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.DisplayTime"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.GraphControlsXAxis"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.DisplayOption"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.DpfEvaluation"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.By"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.ItemType"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.CalculateTimeHistory"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Suppressed"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Children"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Comments"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Figures"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Images"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Properties"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.VisibleProperties"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectromagneticResults.ClearGeneratedData"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.EvaluateAllResults"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.FetchRemoteResults"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.ExportToTextFile"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.ExportAnimation"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.DuplicateWithoutResults"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.CreateResultsAtAllSets"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.PromoteToNamedSelection"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.CreateParameter"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.AddAlert"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.AddConvergence"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.RenameBasedOnDefinition"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Delete"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.GetChildren"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.AddComment"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.AddFigure"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.AddImage"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Activate"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.CopyTo"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Duplicate"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.GroupAllSimilarChildren"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.GroupSimilarObjects"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.PropertyByName"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.PropertyByAPIName"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.GetParameter"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.RemoveParameter"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.CurrentDensity"></a>

### *class* ElectromagneticResults.CurrentDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CurrentDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import CurrentDensity
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

## Method detail

<a id="id59"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.DirectionalMagneticFieldIntensity"></a>

### *class* ElectromagneticResults.DirectionalMagneticFieldIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalMagneticFieldIntensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id395)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id86"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import DirectionalMagneticFieldIntensity
```

<a id="id87"></a>

## Property detail

<a id="id88"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.NormalOrientation"></a>

### *property* ElectromagneticResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

## Method detail

<a id="id143"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.DirectionalMagneticFluxDensity"></a>

### *class* ElectromagneticResults.DirectionalMagneticFluxDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalMagneticFluxDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id395)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id170"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import DirectionalMagneticFluxDensity
```

<a id="id171"></a>

## Property detail

<a id="id172"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* ElectromagneticResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

## Method detail

<a id="id228"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.ElectricPotential"></a>

### *class* ElectromagneticResults.ElectricPotential

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectricPotential.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id255"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import ElectricPotential
```

<a id="id256"></a>

## Property detail

<a id="id257"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

## Method detail

<a id="id312"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.FluxLinkage"></a>

### *class* ElectromagneticResults.FluxLinkage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluxLinkage.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id794)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Multiplier`](#id369)                                                                                                    | Gets or sets the Multiplier.                                  |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id339"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import FluxLinkage
```

<a id="id340"></a>

## Property detail

<a id="id341"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Multiplier"></a>

### *property* ElectromagneticResults.Multiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

## Method detail

<a id="id350"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Inductance"></a>

### *class* ElectromagneticResults.Inductance

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Inductance.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id794)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Multiplier`](#id369)                                                                                                    | Gets or sets the Multiplier.                                  |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                         |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="id365"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import Inductance
```

<a id="id366"></a>

## Property detail

<a id="id367"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* ElectromagneticResults.Multiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

## Method detail

<a id="id377"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MagneticDirectionalForces"></a>

### *class* ElectromagneticResults.MagneticDirectionalForces

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MagneticDirectionalForces.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id395)                                                                                             | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id392"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import MagneticDirectionalForces
```

<a id="id393"></a>

## Property detail

<a id="id394"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* ElectromagneticResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

## Method detail

<a id="id450"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MagneticError"></a>

### *class* ElectromagneticResults.MagneticError

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MagneticError.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id477"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import MagneticError
```

<a id="id478"></a>

## Property detail

<a id="id479"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

## Method detail

<a id="id534"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.MagneticTotalForces"></a>

### *class* ElectromagneticResults.MagneticTotalForces

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MagneticTotalForces.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Total`](#ElectromagneticResults.Total)                                                                                  | Gets the Total.                                                        |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id561"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import MagneticTotalForces
```

<a id="id562"></a>

## Property detail

<a id="id563"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.Total"></a>

### *property* ElectromagneticResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

## Method detail

<a id="id618"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.TotalMagneticFieldIntensity"></a>

### *class* ElectromagneticResults.TotalMagneticFieldIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalMagneticFieldIntensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id645"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import TotalMagneticFieldIntensity
```

<a id="id646"></a>

## Property detail

<a id="id647"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

## Method detail

<a id="id702"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromagneticResults.TotalMagneticFluxDensity"></a>

### *class* ElectromagneticResults.TotalMagneticFluxDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalMagneticFluxDensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id786)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id787)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id788)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id789)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id790)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id791) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id792)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id793) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id794)         | CreateParameter method.                                                           |
| [`AddAlert`](#id795)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id796)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id797) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id798)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id800)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id801)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id802)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id803)                | Creates a new child Image.                                                        |
| [`Activate`](#id804)                | Activate the current object.                                                      |
| [`CopyTo`](#id805)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id806)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id807) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id808)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id809)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id810)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id811)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id812)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ElectromagneticResultType`](#id733)                                                                                     | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#id734)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id735)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id736)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id737)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id738)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id739)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id740)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id741)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id742)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id743)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id744)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id745)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id747)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id748)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id749)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id750)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id752)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id753)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id754)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id755)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id756)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id757)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id758)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id759)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id760)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id761)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id762)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id763)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id764)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id765)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id766)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id767)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id768)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id769)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id770)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id772)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id773)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id774)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id775)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id776)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id777)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id778)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id779)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id780)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id781)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id782)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id783)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id784)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id729"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import TotalMagneticFluxDensity
```

<a id="id730"></a>

## Property detail

<a id="id731"></a>

### *property* ElectromagneticResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### *property* ElectromagneticResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### *property* ElectromagneticResults.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### *property* ElectromagneticResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### *property* ElectromagneticResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### *property* ElectromagneticResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### *property* ElectromagneticResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### *property* ElectromagneticResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### *property* ElectromagneticResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### *property* ElectromagneticResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### *property* ElectromagneticResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### *property* ElectromagneticResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### *property* ElectromagneticResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* ElectromagneticResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* ElectromagneticResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* ElectromagneticResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* ElectromagneticResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

### *property* ElectromagneticResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* ElectromagneticResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* ElectromagneticResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* ElectromagneticResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* ElectromagneticResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* ElectromagneticResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* ElectromagneticResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* ElectromagneticResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* ElectromagneticResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* ElectromagneticResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* ElectromagneticResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* ElectromagneticResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* ElectromagneticResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* ElectromagneticResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### *property* ElectromagneticResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### *property* ElectromagneticResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### *property* ElectromagneticResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### *property* ElectromagneticResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### *property* ElectromagneticResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### *property* ElectromagneticResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### *property* ElectromagneticResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### *property* ElectromagneticResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### *property* ElectromagneticResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### *property* ElectromagneticResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### *property* ElectromagneticResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### *property* ElectromagneticResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### *property* ElectromagneticResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### *property* ElectromagneticResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

### *property* ElectromagneticResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id781"></a>

### *property* ElectromagneticResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### *property* ElectromagneticResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### *property* ElectromagneticResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### *property* ElectromagneticResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

## Method detail

<a id="id786"></a>

### ElectromagneticResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id787"></a>

### ElectromagneticResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### ElectromagneticResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### ElectromagneticResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### ElectromagneticResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### ElectromagneticResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### ElectromagneticResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### ElectromagneticResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id794"></a>

### ElectromagneticResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id795"></a>

### ElectromagneticResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id796"></a>

### ElectromagneticResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### ElectromagneticResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### ElectromagneticResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### ElectromagneticResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### ElectromagneticResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### ElectromagneticResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### ElectromagneticResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### ElectromagneticResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id804"></a>

### ElectromagneticResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id805"></a>

### ElectromagneticResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id806"></a>

### ElectromagneticResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id807"></a>

### ElectromagneticResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id808"></a>

### ElectromagneticResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### ElectromagneticResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### ElectromagneticResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### ElectromagneticResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### ElectromagneticResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
