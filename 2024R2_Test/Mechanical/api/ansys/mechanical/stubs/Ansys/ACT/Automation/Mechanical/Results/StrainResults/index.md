<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults"></a>

<a id="the-strainresults-package"></a>

# The `StrainResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`StrainResult`](StrainResult.md#StrainResult)                                                                   | Defines a StrainResult.                       |
| [`AccumulatedEquivalentPlasticStrain`](AccumulatedEquivalentPlasticStrain.md#AccumulatedEquivalentPlasticStrain) | Defines a AccumulatedEquivalentPlasticStrain. |
| [`DirectionalThermalStrain`](DirectionalThermalStrain.md#DirectionalThermalStrain)                               | Defines a DirectionalThermalStrain.           |
| [`ElasticStrainIntensity`](ElasticStrainIntensity.md#ElasticStrainIntensity)                                     | Defines a ElasticStrainIntensity.             |
| [`EquivalentCreepStrain`](EquivalentCreepStrain.md#EquivalentCreepStrain)                                        | Defines a EquivalentCreepStrain.              |
| [`EquivalentCreepStrainRST`](EquivalentCreepStrainRST.md#EquivalentCreepStrainRST)                               | Defines a EquivalentCreepStrainRST.           |
| [`EquivalentElasticStrain`](EquivalentElasticStrain.md#EquivalentElasticStrain)                                  | Defines a EquivalentElasticStrain.            |
| [`EquivalentElasticStrainRST`](EquivalentElasticStrainRST.md#EquivalentElasticStrainRST)                         | Defines a EquivalentElasticStrainRST.         |
| [`EquivalentPlasticStrain`](EquivalentPlasticStrain.md#EquivalentPlasticStrain)                                  | Defines a EquivalentPlasticStrain.            |
| [`EquivalentPlasticStrainRST`](EquivalentPlasticStrainRST.md#EquivalentPlasticStrainRST)                         | Defines a EquivalentPlasticStrainRST.         |
| [`EquivalentTotalStrain`](EquivalentTotalStrain.md#EquivalentTotalStrain)                                        | Defines a EquivalentTotalStrain.              |
| [`MaximumPrincipalElasticStrain`](MaximumPrincipalElasticStrain.md#MaximumPrincipalElasticStrain)                | Defines a MaximumPrincipalElasticStrain.      |
| [`MaximumPrincipalThermalStrain`](MaximumPrincipalThermalStrain.md#MaximumPrincipalThermalStrain)                | Defines a MaximumPrincipalThermalStrain.      |
| [`MaximumShearElasticStrain`](MaximumShearElasticStrain.md#MaximumShearElasticStrain)                            | Defines a MaximumShearElasticStrain.          |
| [`MiddlePrincipalElasticStrain`](MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain)                   | Defines a MiddlePrincipalElasticStrain.       |
| [`MiddlePrincipalThermalStrain`](MiddlePrincipalThermalStrain.md#MiddlePrincipalThermalStrain)                   | Defines a MiddlePrincipalThermalStrain.       |
| [`MinimumPrincipalElasticStrain`](MinimumPrincipalElasticStrain.md#MinimumPrincipalElasticStrain)                | Defines a MinimumPrincipalElasticStrain.      |
| [`NormalElasticStrain`](NormalElasticStrain.md#NormalElasticStrain)                                              | Defines a NormalElasticStrain.                |
| [`ShearElasticStrain`](ShearElasticStrain.md#ShearElasticStrain)                                                 | Defines a ShearElasticStrain.                 |
| [`VectorPrincipalElasticStrain`](VectorPrincipalElasticStrain.md#VectorPrincipalElasticStrain)                   | Defines a VectorPrincipalElasticStrain.       |

<a id="description"></a>

## Description

StrainResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="StrainResults.StrainResult"></a>

### *class* StrainResults.StrainResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StrainResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import StrainResult
```

<a id="property-detail"></a>

## Property detail

<a id="StrainResults.Mode"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Ply"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Plies"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EnvironmentSelection"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.InternalObject"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.HarmonicIndex"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.CyclicMode"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.IterationStep"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.LoadMultiplier"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ReportedFrequency"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.SweepingPhase"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.PhaseIncrement"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Frequency"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Position"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.StressStrainType"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.SubScopeBy"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Amplitude"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.AverageAcrossBodies"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.DataModelObjectCategory"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.PlotData"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Location"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.TimeForMinimumOfMinimumValues"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.TimeForMinimumOfMaximumValues"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.TimeForMaximumOfMinimumValues"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.TimeForMaximumOfMaximumValues"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.IsSolved"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.CoordinateSystem"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ScopingMethod"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.SetNumber"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.CombinationNumber"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.SolutionCombinationDriver"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Surface"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.CrackFrontNumber"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.GlobalIDs"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Identifier"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.IterationNumber"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.LoadStep"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MaximumOccursOn"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MinimumOccursOn"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.LoadStepNumber"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.SolverComponentIDs"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Substep"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Average"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Maximum"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MaximumOfMaximumOverTime"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MaximumOfMinimumOverTime"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Minimum"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MinimumOfMaximumOverTime"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MinimumOfMinimumOverTime"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Time"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.DisplayTime"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.GraphControlsXAxis"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.DisplayOption"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.DpfEvaluation"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.By"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ItemType"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.CalculateTimeHistory"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Suppressed"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Children"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Comments"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Figures"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Images"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Properties"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.VisibleProperties"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StrainResults.ClearGeneratedData"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EvaluateAllResults"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.FetchRemoteResults"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ExportToTextFile"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ExportAnimation"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.DuplicateWithoutResults"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.CreateResultsAtAllSets"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.PromoteToNamedSelection"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.CreateParameter"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.AddAlert"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.AddConvergence"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.RenameBasedOnDefinition"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Delete"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.GetChildren"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.AddComment"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.AddFigure"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.AddImage"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Activate"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.CopyTo"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Duplicate"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.GroupAllSimilarChildren"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.GroupSimilarObjects"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.PropertyByName"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.PropertyByAPIName"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.GetParameter"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.RemoveParameter"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.AccumulatedEquivalentPlasticStrain"></a>

### *class* StrainResults.AccumulatedEquivalentPlasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AccumulatedEquivalentPlasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import AccumulatedEquivalentPlasticStrain
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

## Method detail

<a id="id74"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.DirectionalThermalStrain"></a>

### *class* StrainResults.DirectionalThermalStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalThermalStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#id1590)                                                                                            | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id101"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import DirectionalThermalStrain
```

<a id="id102"></a>

## Property detail

<a id="id103"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.NormalOrientation"></a>

### *property* StrainResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

## Method detail

<a id="id173"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ElasticStrainIntensity"></a>

### *class* StrainResults.ElasticStrainIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElasticStrainIntensity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id200"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import ElasticStrainIntensity
```

<a id="id201"></a>

## Property detail

<a id="id202"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

## Method detail

<a id="id272"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EquivalentCreepStrain"></a>

### *class* StrainResults.EquivalentCreepStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentCreepStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id299"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentCreepStrain
```

<a id="id300"></a>

## Property detail

<a id="id301"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

## Method detail

<a id="id371"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EquivalentCreepStrainRST"></a>

### *class* StrainResults.EquivalentCreepStrainRST

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentCreepStrainRST.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id398"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentCreepStrainRST
```

<a id="id399"></a>

## Property detail

<a id="id400"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

## Method detail

<a id="id470"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EquivalentElasticStrain"></a>

### *class* StrainResults.EquivalentElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentElasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id497"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentElasticStrain
```

<a id="id498"></a>

## Property detail

<a id="id499"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

## Method detail

<a id="id569"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EquivalentElasticStrainRST"></a>

### *class* StrainResults.EquivalentElasticStrainRST

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentElasticStrainRST.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id596"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentElasticStrainRST
```

<a id="id597"></a>

## Property detail

<a id="id598"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id666"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id667"></a>

## Method detail

<a id="id668"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id669"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id670"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id671"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id672"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id673"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id674"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id675"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id676"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id677"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id678"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id679"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id680"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id681"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id682"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id683"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id684"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id685"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id686"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id687"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id688"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id689"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id690"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id691"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id692"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id693"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id694"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EquivalentPlasticStrain"></a>

### *class* StrainResults.EquivalentPlasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentPlasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id695"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentPlasticStrain
```

<a id="id696"></a>

## Property detail

<a id="id697"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id698"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id699"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id700"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id701"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id702"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id703"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id704"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id705"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id706"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id707"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id708"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id709"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id710"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id711"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id712"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id713"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id714"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id715"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id716"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id717"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id718"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id719"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id720"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id721"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id722"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id723"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id724"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id725"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id726"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id727"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id728"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id729"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id730"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id731"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id732"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id733"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id734"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id735"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id736"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id737"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id738"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id739"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id740"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id741"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id742"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id743"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id744"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id745"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id746"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id747"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id748"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id749"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id750"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id751"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id752"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id753"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id754"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id755"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id756"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id757"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id758"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id759"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id760"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id761"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id762"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id763"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id764"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id765"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id766"></a>

## Method detail

<a id="id767"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id768"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id769"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id770"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id771"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id772"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id773"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id774"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id775"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id776"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id777"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id778"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id779"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id780"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id781"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id782"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id783"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id784"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id785"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id786"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id787"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id788"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id789"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id790"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id791"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id792"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id793"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EquivalentPlasticStrainRST"></a>

### *class* StrainResults.EquivalentPlasticStrainRST

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentPlasticStrainRST.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id794"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentPlasticStrainRST
```

<a id="id795"></a>

## Property detail

<a id="id796"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id797"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id798"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id799"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id800"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id801"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id802"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id803"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id804"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id805"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id806"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id807"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id808"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id809"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id810"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id811"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id812"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id813"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id814"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id815"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id816"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id817"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id818"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id819"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id820"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id821"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id822"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id823"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id824"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id825"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id826"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id827"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id828"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id829"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id830"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id831"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id832"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id833"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id834"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id835"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id836"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id837"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id838"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id839"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id840"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id841"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id842"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id843"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id844"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id845"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id846"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id847"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id848"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id849"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id850"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id851"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id852"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id853"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id854"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id855"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id856"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id857"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id858"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id859"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id860"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id861"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id862"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id863"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id864"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id865"></a>

## Method detail

<a id="id866"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id867"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id868"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id869"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id870"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id871"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id872"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id873"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id874"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id875"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id876"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id877"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id878"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id879"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id880"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id881"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id882"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id883"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id884"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id885"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id886"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id887"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id888"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id889"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id890"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id891"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id892"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.EquivalentTotalStrain"></a>

### *class* StrainResults.EquivalentTotalStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentTotalStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id893"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentTotalStrain
```

<a id="id894"></a>

## Property detail

<a id="id895"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id896"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id897"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id898"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id899"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id900"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id901"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id902"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id903"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id904"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id905"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id906"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id907"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id908"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id909"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id910"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id911"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id912"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id913"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id914"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id915"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id916"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id917"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id918"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id919"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id920"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id921"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id922"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id923"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id924"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id925"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id926"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id927"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id928"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id929"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id930"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id931"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id932"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id933"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id934"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id935"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id936"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id937"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id938"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id939"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id940"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id941"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id942"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id943"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id944"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id945"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id946"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id947"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id948"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id949"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id950"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id951"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id952"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id953"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id954"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id955"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id956"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id957"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id958"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id959"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id960"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id961"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id962"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id963"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id964"></a>

## Method detail

<a id="id965"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id966"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id967"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id968"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id969"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id970"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id971"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id972"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id973"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id974"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id975"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id976"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id977"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id978"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id979"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id980"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id981"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id982"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id983"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id984"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id985"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id986"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id987"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id988"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id989"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id990"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id991"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MaximumPrincipalElasticStrain"></a>

### *class* StrainResults.MaximumPrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaximumPrincipalElasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Layer`](#StrainResults.Layer)                                                                                           | Gets or sets the Layer.                                                |
| [`NormalOrientation`](#id1590)                                                                                            | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id992"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import MaximumPrincipalElasticStrain
```

<a id="id993"></a>

## Property detail

<a id="id994"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.Layer"></a>

### *property* StrainResults.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="id995"></a>

### *property* StrainResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id996"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id997"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id998"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id999"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1000"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1001"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1002"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1003"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1004"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1005"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1006"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1007"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1008"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1009"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1010"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1011"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1012"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1013"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1014"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1015"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1016"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1017"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1018"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1019"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1020"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1021"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1022"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1023"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1024"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1025"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1026"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1027"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1028"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1029"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1030"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1031"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1032"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1033"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1034"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1035"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1036"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1037"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1038"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1039"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1040"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1041"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1042"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1043"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1044"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1045"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1046"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1047"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1048"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1049"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1050"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1051"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1052"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1053"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1054"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1055"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1056"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1057"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1058"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1059"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1060"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1061"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1062"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1063"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1064"></a>

## Method detail

<a id="id1065"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1066"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1067"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1068"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1069"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1070"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1071"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1072"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1073"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1074"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1075"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1076"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1077"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1078"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1079"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1080"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1081"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1082"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1083"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1084"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1085"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1086"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1087"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1088"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1089"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1090"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1091"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MaximumPrincipalThermalStrain"></a>

### *class* StrainResults.MaximumPrincipalThermalStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaximumPrincipalThermalStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1092"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import MaximumPrincipalThermalStrain
```

<a id="id1093"></a>

## Property detail

<a id="id1094"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1095"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1096"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1097"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id1098"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1099"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1100"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1101"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1102"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1103"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1104"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1105"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1106"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1107"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1108"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1109"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1110"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1111"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1112"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1113"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1114"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1115"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1116"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1117"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1118"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1119"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1120"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1121"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1122"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1123"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1124"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1125"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1126"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1127"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1128"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1129"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1130"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1131"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1132"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1133"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1134"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1135"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1136"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1137"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1138"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1139"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1140"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1141"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1142"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1143"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1144"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1145"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1146"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1147"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1148"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1149"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1150"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1151"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1152"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1153"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1154"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1155"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1156"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1157"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1158"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1159"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1160"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1161"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1162"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1163"></a>

## Method detail

<a id="id1164"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1165"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1166"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1167"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1168"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1169"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1170"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1171"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1172"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1173"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1174"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1175"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1176"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1177"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1178"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1179"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1180"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1181"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1182"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1183"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1184"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1185"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1186"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1187"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1188"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1189"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1190"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MaximumShearElasticStrain"></a>

### *class* StrainResults.MaximumShearElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaximumShearElasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`ShearOrientation`](#id1692)                                                                                             | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1191"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import MaximumShearElasticStrain
```

<a id="id1192"></a>

## Property detail

<a id="id1193"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ShearOrientation"></a>

### *property* StrainResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1194"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1195"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1196"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id1197"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1198"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1199"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1200"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1201"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1202"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1203"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1204"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1205"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1206"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1207"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1208"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1209"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1210"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1211"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1212"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1213"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1214"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1215"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1216"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1217"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1218"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1219"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1220"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1221"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1222"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1223"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1224"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1225"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1226"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1227"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1228"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1229"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1230"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1231"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1232"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1233"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1234"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1235"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1236"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1237"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1238"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1239"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1240"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1241"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1242"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1243"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1244"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1245"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1246"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1247"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1248"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1249"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1250"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1251"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1252"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1253"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1254"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1255"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1256"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1257"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1258"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1259"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1260"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1261"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1262"></a>

## Method detail

<a id="id1263"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1264"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1265"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1266"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1267"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1268"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1269"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1270"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1271"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1272"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1273"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1274"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1275"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1276"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1277"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1278"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1279"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1280"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1281"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1282"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1283"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1284"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1285"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1286"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1287"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1288"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1289"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MiddlePrincipalElasticStrain"></a>

### *class* StrainResults.MiddlePrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MiddlePrincipalElasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1290"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import MiddlePrincipalElasticStrain
```

<a id="id1291"></a>

## Property detail

<a id="id1292"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1293"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1294"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1295"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id1296"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1297"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1298"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1299"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1300"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1301"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1302"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1303"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1304"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1305"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1306"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1307"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1308"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1309"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1310"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1311"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1312"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1313"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1314"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1315"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1316"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1317"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1318"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1319"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1320"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1321"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1322"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1323"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1324"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1325"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1326"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1327"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1328"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1329"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1330"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1331"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1332"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1333"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1334"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1335"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1336"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1337"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1338"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1339"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1340"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1341"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1342"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1343"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1344"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1345"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1346"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1347"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1348"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1349"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1350"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1351"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1352"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1353"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1354"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1355"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1356"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1357"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1358"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1359"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1360"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1361"></a>

## Method detail

<a id="id1362"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1363"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1364"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1365"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1366"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1367"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1368"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1369"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1370"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1371"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1372"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1373"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1374"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1375"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1376"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1377"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1378"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1379"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1380"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1381"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1382"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1383"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1384"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1385"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1386"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1387"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1388"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MiddlePrincipalThermalStrain"></a>

### *class* StrainResults.MiddlePrincipalThermalStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MiddlePrincipalThermalStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1389"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import MiddlePrincipalThermalStrain
```

<a id="id1390"></a>

## Property detail

<a id="id1391"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1392"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1393"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1394"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id1395"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1396"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1397"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1398"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1399"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1400"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1401"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1402"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1403"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1404"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1405"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1406"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1407"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1408"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1409"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1410"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1411"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1412"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1413"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1414"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1415"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1416"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1417"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1418"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1419"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1420"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1421"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1422"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1423"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1424"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1425"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1426"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1427"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1428"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1429"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1430"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1431"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1432"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1433"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1434"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1435"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1436"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1437"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1438"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1439"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1440"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1441"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1442"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1443"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1444"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1445"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1446"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1447"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1448"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1449"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1450"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1451"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1452"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1453"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1454"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1455"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1456"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1457"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1458"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1459"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1460"></a>

## Method detail

<a id="id1461"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1462"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1463"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1464"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1465"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1466"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1467"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1468"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1469"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1470"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1471"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1472"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1473"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1474"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1475"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1476"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1477"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1478"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1479"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1480"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1481"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1482"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1483"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1484"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1485"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1486"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1487"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.MinimumPrincipalElasticStrain"></a>

### *class* StrainResults.MinimumPrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MinimumPrincipalElasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1488"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import MinimumPrincipalElasticStrain
```

<a id="id1489"></a>

## Property detail

<a id="id1490"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1491"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1492"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1493"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id1494"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1495"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1496"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1497"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1498"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1499"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1500"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1501"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1502"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1503"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1504"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1505"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1506"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1507"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1508"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1509"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1510"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1511"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1512"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1513"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1514"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1515"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1516"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1517"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1518"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1519"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1520"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1521"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1522"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1523"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1524"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1525"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1526"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1527"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1528"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1529"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1530"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1531"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1532"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1533"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1534"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1535"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1536"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1537"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1538"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1539"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1540"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1541"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1542"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1543"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1544"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1545"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1546"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1547"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1548"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1549"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1550"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1551"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1552"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1553"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1554"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1555"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1556"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1557"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1558"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1559"></a>

## Method detail

<a id="id1560"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1561"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1562"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1563"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1564"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1565"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1566"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1567"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1568"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1569"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1570"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1571"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1572"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1573"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1574"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1575"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1576"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1577"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1578"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1579"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1580"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1581"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1582"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1583"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1584"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1585"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1586"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.NormalElasticStrain"></a>

### *class* StrainResults.NormalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NormalElasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`ScaleFactorValue`](#id1690)                                                                                             | Gets or sets the ScaleFactorValue.                                     |
| [`NormalOrientation`](#id1590)                                                                                            | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#id1691)                                                                                                  | Gets or sets the ScaleFactor.                                          |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1587"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import NormalElasticStrain
```

<a id="id1588"></a>

## Property detail

<a id="id1589"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ScaleFactorValue"></a>

### *property* StrainResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id1590"></a>

### *property* StrainResults.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ScaleFactor"></a>

### *property* StrainResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id1591"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1592"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1593"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id1594"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1595"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1596"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1597"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1598"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1599"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1600"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1601"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1602"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1603"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1604"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1605"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1606"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1607"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1608"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1609"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1610"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1611"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1612"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1613"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1614"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1615"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1616"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1617"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1618"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1619"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1620"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1621"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1622"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1623"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1624"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1625"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1626"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1627"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1628"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1629"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1630"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1631"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1632"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1633"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1634"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1635"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1636"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1637"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1638"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1639"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1640"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1641"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1642"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1643"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1644"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1645"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1646"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1647"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1648"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1649"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1650"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1651"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1652"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1653"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1654"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1655"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1656"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1657"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1658"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1659"></a>

## Method detail

<a id="id1660"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1661"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1662"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1663"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1664"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1665"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1666"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1667"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1668"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1669"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1670"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1671"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1672"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1673"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1674"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1675"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1676"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1677"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1678"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1679"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1680"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1681"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1682"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1683"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1684"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1685"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1686"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.ShearElasticStrain"></a>

### *class* StrainResults.ShearElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ShearElasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`ScaleFactorValue`](#id1690)                                                                                             | Gets or sets the ScaleFactorValue.                                     |
| [`ScaleFactor`](#id1691)                                                                                                  | Gets or sets the ScaleFactor.                                          |
| [`ShearOrientation`](#id1692)                                                                                             | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1687"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import ShearElasticStrain
```

<a id="id1688"></a>

## Property detail

<a id="id1689"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1690"></a>

### *property* StrainResults.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="id1691"></a>

### *property* StrainResults.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="id1692"></a>

### *property* StrainResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id1693"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1694"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1695"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id1696"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1697"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1698"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1699"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1700"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1701"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1702"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1703"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1704"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1705"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1706"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1707"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1708"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1709"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1710"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1711"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1712"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1713"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1714"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1715"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1716"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1717"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1718"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1719"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1720"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1721"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1722"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1723"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1724"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1725"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1726"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1727"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1728"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1729"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1730"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1731"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1732"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1733"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1734"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1735"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1736"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1737"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1738"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1739"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1740"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1741"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1742"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1743"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1744"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1745"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1746"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1747"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1748"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1749"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1750"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1751"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1752"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1753"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1754"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1755"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1756"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1757"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1758"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1759"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1760"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1761"></a>

## Method detail

<a id="id1762"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1763"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1764"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1765"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1766"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1767"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1768"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1769"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1770"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1771"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1772"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1773"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1774"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1775"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1776"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1777"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1778"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1779"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1780"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1781"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1782"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1783"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1784"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1785"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1786"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1787"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1788"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResults.VectorPrincipalElasticStrain"></a>

### *class* StrainResults.VectorPrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorPrincipalElasticStrain.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id1861)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id1862)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id1863)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id1864)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id1865)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id1866) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id1867)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id1868) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id1869)         | CreateParameter method.                                                           |
| [`AddAlert`](#id1870)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id1871)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id1872) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id1873)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1875)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id1876)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id1877)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id1878)                | Creates a new child Image.                                                        |
| [`Activate`](#id1879)                | Activate the current object.                                                      |
| [`CopyTo`](#id1880)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id1881)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id1882) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id1883)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id1884)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id1885)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id1886)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id1887)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#id1793)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#id1794)                                                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#id1795)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#id1796)                                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#id1797)                                                                                                | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#id1798)                                                                                                   | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#id1799)                                                                                                | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#id1800)                                                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#id1801)                                                                                            | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#id1802)                                                                                                | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#id1803)                                                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#id1804)                                                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#id1807)                                                                                                   | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#id1808)                                                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#id1809)                                                                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id1810)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#id1811)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id1812)                                                                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id1813)                                                                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id1814)                                                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id1815)                                                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id1816)                                                                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id1817)                                                                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id1818)                                                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id1819)                                                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id1820)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id1822)                                                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id1823)                                                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id1824)                                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id1825)                                                                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id1827)                                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id1828)                                                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id1829)                                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id1830)                                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#id1831)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id1832)                                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id1833)                                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id1834)                                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id1835)                                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id1836)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#id1837)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#id1838)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id1839)                                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id1840)                                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id1841)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id1842)                                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id1843)                                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id1844)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#id1845)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id1847)                                                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id1848)                                                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id1849)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#id1850)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id1851)                                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id1852)                                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#id1853)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#id1854)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#id1855)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#id1856)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id1857)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id1858)                                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id1859)                                                                                            | Gets the list of properties that are visible for this object.          |

<a id="id1789"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import VectorPrincipalElasticStrain
```

<a id="id1790"></a>

## Property detail

<a id="id1791"></a>

### *property* StrainResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1792"></a>

### *property* StrainResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id1793"></a>

### *property* StrainResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id1794"></a>

### *property* StrainResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id1795"></a>

### *property* StrainResults.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="id1796"></a>

### *property* StrainResults.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="id1797"></a>

### *property* StrainResults.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="id1798"></a>

### *property* StrainResults.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="id1799"></a>

### *property* StrainResults.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="id1800"></a>

### *property* StrainResults.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id1801"></a>

### *property* StrainResults.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="id1802"></a>

### *property* StrainResults.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="id1803"></a>

### *property* StrainResults.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="id1804"></a>

### *property* StrainResults.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="id1805"></a>

### *property* StrainResults.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="id1806"></a>

### *property* StrainResults.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="id1807"></a>

### *property* StrainResults.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="id1808"></a>

### *property* StrainResults.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="id1809"></a>

### *property* StrainResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id1810"></a>

### *property* StrainResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id1811"></a>

### *property* StrainResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id1812"></a>

### *property* StrainResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1813"></a>

### *property* StrainResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1814"></a>

### *property* StrainResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1815"></a>

### *property* StrainResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1816"></a>

### *property* StrainResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1817"></a>

### *property* StrainResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1818"></a>

### *property* StrainResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id1819"></a>

### *property* StrainResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id1820"></a>

### *property* StrainResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id1821"></a>

### *property* StrainResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id1822"></a>

### *property* StrainResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id1823"></a>

### *property* StrainResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id1824"></a>

### *property* StrainResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id1825"></a>

### *property* StrainResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id1826"></a>

### *property* StrainResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id1827"></a>

### *property* StrainResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1828"></a>

### *property* StrainResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1829"></a>

### *property* StrainResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id1830"></a>

### *property* StrainResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1831"></a>

### *property* StrainResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id1832"></a>

### *property* StrainResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1833"></a>

### *property* StrainResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id1834"></a>

### *property* StrainResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id1835"></a>

### *property* StrainResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id1836"></a>

### *property* StrainResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id1837"></a>

### *property* StrainResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id1838"></a>

### *property* StrainResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id1839"></a>

### *property* StrainResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1840"></a>

### *property* StrainResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1841"></a>

### *property* StrainResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id1842"></a>

### *property* StrainResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1843"></a>

### *property* StrainResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id1844"></a>

### *property* StrainResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id1845"></a>

### *property* StrainResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id1846"></a>

### *property* StrainResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id1847"></a>

### *property* StrainResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id1848"></a>

### *property* StrainResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id1849"></a>

### *property* StrainResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id1850"></a>

### *property* StrainResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id1851"></a>

### *property* StrainResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id1852"></a>

### *property* StrainResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id1853"></a>

### *property* StrainResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id1854"></a>

### *property* StrainResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id1855"></a>

### *property* StrainResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id1856"></a>

### *property* StrainResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1857"></a>

### *property* StrainResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id1858"></a>

### *property* StrainResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1859"></a>

### *property* StrainResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id1860"></a>

## Method detail

<a id="id1861"></a>

### StrainResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id1862"></a>

### StrainResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1863"></a>

### StrainResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id1864"></a>

### StrainResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id1865"></a>

### StrainResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id1866"></a>

### StrainResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id1867"></a>

### StrainResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id1868"></a>

### StrainResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id1869"></a>

### StrainResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id1870"></a>

### StrainResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id1871"></a>

### StrainResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id1872"></a>

### StrainResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id1873"></a>

### StrainResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id1874"></a>

### StrainResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1875"></a>

### StrainResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1876"></a>

### StrainResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id1877"></a>

### StrainResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id1878"></a>

### StrainResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id1879"></a>

### StrainResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id1880"></a>

### StrainResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id1881"></a>

### StrainResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id1882"></a>

### StrainResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1883"></a>

### StrainResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id1884"></a>

### StrainResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id1885"></a>

### StrainResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id1886"></a>

### StrainResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id1887"></a>

### StrainResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
