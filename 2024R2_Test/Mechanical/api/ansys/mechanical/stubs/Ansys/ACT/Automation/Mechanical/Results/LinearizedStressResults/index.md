<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults"></a>

<a id="the-linearizedstressresults-package"></a>

# The `LinearizedStressResults` package

<a id="summary"></a>

## Summary

### Classes

| [`LinearizedStressResult`](LinearizedStressResult.md#LinearizedStressResult)                               | Defines a LinearizedStressResult.           |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`LinearizedEquivalentStress`](LinearizedEquivalentStress.md#LinearizedEquivalentStress)                   | Defines a LinearizedEquivalentStress.       |
| [`LinearizedMaximumPrincipalStress`](LinearizedMaximumPrincipalStress.md#LinearizedMaximumPrincipalStress) | Defines a LinearizedMaximumPrincipalStress. |
| [`LinearizedMaximumShearStress`](LinearizedMaximumShearStress.md#LinearizedMaximumShearStress)             | Defines a LinearizedMaximumShearStress.     |
| [`LinearizedMiddlePrincipalStress`](LinearizedMiddlePrincipalStress.md#LinearizedMiddlePrincipalStress)    | Defines a LinearizedMiddlePrincipalStress.  |
| [`LinearizedMinimumPrincipalStress`](LinearizedMinimumPrincipalStress.md#LinearizedMinimumPrincipalStress) | Defines a LinearizedMinimumPrincipalStress. |
| [`LinearizedNormalStress`](LinearizedNormalStress.md#LinearizedNormalStress)                               | Defines a LinearizedNormalStress.           |
| [`LinearizedShearStress`](LinearizedShearStress.md#LinearizedShearStress)                                  | Defines a LinearizedShearStress.            |
| [`LinearizedStressIntensity`](LinearizedStressIntensity.md#LinearizedStressIntensity)                      | Defines a LinearizedStressIntensity.        |

<a id="description"></a>

## Description

LinearizedStressResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="LinearizedStressResults.LinearizedStressResult"></a>

### *class* LinearizedStressResults.LinearizedStressResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedStressResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedStressResult
```

<a id="property-detail"></a>

## Property detail

<a id="LinearizedStressResults.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.InternalObject"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LoadMultiplier"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.AverageRadiusOfCurvature"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.BendingInside"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.BendingOutside"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MembraneBendingCenter"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MembraneBendingInside"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MembraneBendingOutside"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Membrane"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.PeakCenter"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.PeakInside"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.PeakOutside"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.SweepingPhase"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Frequency"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.TotalCenter"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.TotalInside"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.TotalOutside"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Linearized2DBehavior"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Subtype"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.NormalOrientation"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Position"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.StressStrainType"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.ThroughThicknessBendingStress"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Amplitude"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.DataModelObjectCategory"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.PlotData"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Location"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.IsSolved"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.CoordinateSystem"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.ScopingMethod"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.SetNumber"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.CombinationNumber"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.SolutionCombinationDriver"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Surface"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.CrackFrontNumber"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.GlobalIDs"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Identifier"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.IterationNumber"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LoadStep"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MaximumOccursOn"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MinimumOccursOn"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LoadStepNumber"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.SolverComponentIDs"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Substep"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Average"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Maximum"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MaximumOfMaximumOverTime"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MaximumOfMinimumOverTime"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Minimum"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MinimumOfMaximumOverTime"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.MinimumOfMinimumOverTime"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Time"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.DisplayTime"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.GraphControlsXAxis"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.DisplayOption"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.DpfEvaluation"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.By"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.ItemType"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.CalculateTimeHistory"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Suppressed"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Children"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Comments"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Figures"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Images"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Properties"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.VisibleProperties"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedStressResults.ClearGeneratedData"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.EvaluateAllResults"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.FetchRemoteResults"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.ExportToTextFile"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.ExportAnimation"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.DuplicateWithoutResults"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.CreateResultsAtAllSets"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.PromoteToNamedSelection"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.CreateParameter"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.AddAlert"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.AddConvergence"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.RenameBasedOnDefinition"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Delete"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.GetChildren"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.AddComment"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.AddFigure"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.AddImage"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Activate"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.CopyTo"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.Duplicate"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.GroupAllSimilarChildren"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.GroupSimilarObjects"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.PropertyByName"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.PropertyByAPIName"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.GetParameter"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.RemoveParameter"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LinearizedEquivalentStress"></a>

### *class* LinearizedStressResults.LinearizedEquivalentStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedEquivalentStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedEquivalentStress
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

## Method detail

<a id="id81"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LinearizedMaximumPrincipalStress"></a>

### *class* LinearizedStressResults.LinearizedMaximumPrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedMaximumPrincipalStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="id108"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedMaximumPrincipalStress
```

<a id="id109"></a>

## Property detail

<a id="id110"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

## Method detail

<a id="id187"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LinearizedMaximumShearStress"></a>

### *class* LinearizedStressResults.LinearizedMaximumShearStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedMaximumShearStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ShearOrientation`](#id641)                                                                                                                | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="id214"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedMaximumShearStress
```

<a id="id215"></a>

## Property detail

<a id="id216"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.ShearOrientation"></a>

### *property* LinearizedStressResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

## Method detail

<a id="id293"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LinearizedMiddlePrincipalStress"></a>

### *class* LinearizedStressResults.LinearizedMiddlePrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedMiddlePrincipalStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="id320"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedMiddlePrincipalStress
```

<a id="id321"></a>

## Property detail

<a id="id322"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

## Method detail

<a id="id399"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LinearizedMinimumPrincipalStress"></a>

### *class* LinearizedStressResults.LinearizedMinimumPrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedMinimumPrincipalStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="id426"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedMinimumPrincipalStress
```

<a id="id427"></a>

## Property detail

<a id="id428"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

## Method detail

<a id="id505"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LinearizedNormalStress"></a>

### *class* LinearizedStressResults.LinearizedNormalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedNormalStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="id532"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedNormalStress
```

<a id="id533"></a>

## Property detail

<a id="id534"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

## Method detail

<a id="id611"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LinearizedShearStress"></a>

### *class* LinearizedStressResults.LinearizedShearStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedShearStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ShearOrientation`](#id641)                                                                                                                | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="id638"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedShearStress
```

<a id="id639"></a>

## Property detail

<a id="id640"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### *property* LinearizedStressResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id668"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id695"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id696"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id697"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

## Method detail

<a id="id718"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResults.LinearizedStressIntensity"></a>

### *class* LinearizedStressResults.LinearizedStressIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedStressIntensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id824)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id825)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id826)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id827)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id828)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id829) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id830)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id831) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id832)         | CreateParameter method.                                                           |
| [`AddAlert`](#id833)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id834)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id835) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id836)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id838)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id839)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id840)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id841)                | Creates a new child Image.                                                        |
| [`Activate`](#id842)                | Activate the current object.                                                      |
| [`CopyTo`](#id843)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id844)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id845) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id846)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id847)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id848)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id849)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id850)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#id749)                                                                                               | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#id750)                                                                                                                  | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#id751)                                                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#id752)                                                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#id753)                                                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#id754)                                                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#id755)                                                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#id756)                                                                                                          | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#id757)                                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#id758)                                                                                                                      | Gets the PeakCenter.                                                   |
| [`PeakInside`](#id759)                                                                                                                      | Gets the PeakInside.                                                   |
| [`PeakOutside`](#id760)                                                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#id761)                                                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#id762)                                                                                                                       | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#id763)                                                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#id764)                                                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#id765)                                                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#id767)                                                                                                                         | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id768)                                                                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#id772)                                                                                                                       | Gets or sets the Amplitude.                                            |
| [`PlotData`](#id773)                                                                                                                        | Gets the result table.                                                 |
| [`Location`](#id774)                                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id775)                                                                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id776)                                                                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id777)                                                                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id778)                                                                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id779)                                                                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id780)                                                                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id781)                                                                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id782)                                                                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id783)                                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id785)                                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id786)                                                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id787)                                                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id788)                                                                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`CrackFrontNumber`](#id790)                                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id791)                                                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id792)                                                                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id793)                                                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#id794)                                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id795)                                                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id796)                                                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id797)                                                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id798)                                                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id799)                                                                                                                         | Gets the Substep.                                                      |
| [`Average`](#id800)                                                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#id801)                                                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id802)                                                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id803)                                                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id804)                                                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id805)                                                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id806)                                                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id807)                                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#id808)                                                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id810)                                                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id811)                                                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id812)                                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#id813)                                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id814)                                                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id815)                                                                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#id816)                                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#id817)                                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#id818)                                                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#id819)                                                                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id820)                                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id821)                                                                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id822)                                                                                                               | Gets the list of properties that are visible for this object.          |

<a id="id745"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedStressIntensity
```

<a id="id746"></a>

## Property detail

<a id="id747"></a>

### *property* LinearizedStressResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* LinearizedStressResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* LinearizedStressResults.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* LinearizedStressResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* LinearizedStressResults.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

### *property* LinearizedStressResults.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* LinearizedStressResults.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* LinearizedStressResults.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* LinearizedStressResults.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* LinearizedStressResults.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* LinearizedStressResults.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* LinearizedStressResults.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* LinearizedStressResults.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* LinearizedStressResults.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* LinearizedStressResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* LinearizedStressResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* LinearizedStressResults.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* LinearizedStressResults.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* LinearizedStressResults.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

### *property* LinearizedStressResults.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id767"></a>

### *property* LinearizedStressResults.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### *property* LinearizedStressResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### *property* LinearizedStressResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### *property* LinearizedStressResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### *property* LinearizedStressResults.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### *property* LinearizedStressResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### *property* LinearizedStressResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### *property* LinearizedStressResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### *property* LinearizedStressResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### *property* LinearizedStressResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

### *property* LinearizedStressResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id781"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### *property* LinearizedStressResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### *property* LinearizedStressResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### *property* LinearizedStressResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

### *property* LinearizedStressResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id786"></a>

### *property* LinearizedStressResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id787"></a>

### *property* LinearizedStressResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### *property* LinearizedStressResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### *property* LinearizedStressResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### *property* LinearizedStressResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### *property* LinearizedStressResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### *property* LinearizedStressResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### *property* LinearizedStressResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id794"></a>

### *property* LinearizedStressResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id795"></a>

### *property* LinearizedStressResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id796"></a>

### *property* LinearizedStressResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### *property* LinearizedStressResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### *property* LinearizedStressResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### *property* LinearizedStressResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### *property* LinearizedStressResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### *property* LinearizedStressResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### *property* LinearizedStressResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### *property* LinearizedStressResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id804"></a>

### *property* LinearizedStressResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id805"></a>

### *property* LinearizedStressResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id806"></a>

### *property* LinearizedStressResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id807"></a>

### *property* LinearizedStressResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id808"></a>

### *property* LinearizedStressResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### *property* LinearizedStressResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### *property* LinearizedStressResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### *property* LinearizedStressResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### *property* LinearizedStressResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id813"></a>

### *property* LinearizedStressResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id814"></a>

### *property* LinearizedStressResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id815"></a>

### *property* LinearizedStressResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id816"></a>

### *property* LinearizedStressResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id817"></a>

### *property* LinearizedStressResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id818"></a>

### *property* LinearizedStressResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id819"></a>

### *property* LinearizedStressResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id820"></a>

### *property* LinearizedStressResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id821"></a>

### *property* LinearizedStressResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id822"></a>

### *property* LinearizedStressResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id823"></a>

## Method detail

<a id="id824"></a>

### LinearizedStressResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id825"></a>

### LinearizedStressResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id826"></a>

### LinearizedStressResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id827"></a>

### LinearizedStressResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id828"></a>

### LinearizedStressResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id829"></a>

### LinearizedStressResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id830"></a>

### LinearizedStressResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id831"></a>

### LinearizedStressResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id832"></a>

### LinearizedStressResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id833"></a>

### LinearizedStressResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id834"></a>

### LinearizedStressResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id835"></a>

### LinearizedStressResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id836"></a>

### LinearizedStressResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id837"></a>

### LinearizedStressResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id838"></a>

### LinearizedStressResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id839"></a>

### LinearizedStressResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id840"></a>

### LinearizedStressResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id841"></a>

### LinearizedStressResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id842"></a>

### LinearizedStressResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id843"></a>

### LinearizedStressResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id844"></a>

### LinearizedStressResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id845"></a>

### LinearizedStressResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id846"></a>

### LinearizedStressResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id847"></a>

### LinearizedStressResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id848"></a>

### LinearizedStressResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id849"></a>

### LinearizedStressResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id850"></a>

### LinearizedStressResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
