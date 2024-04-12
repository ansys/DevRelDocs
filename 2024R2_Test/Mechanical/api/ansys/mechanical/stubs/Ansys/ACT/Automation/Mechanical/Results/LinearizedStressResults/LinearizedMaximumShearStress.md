<a id="linearizedmaximumshearstress"></a>

# LinearizedMaximumShearStress

<a id="LinearizedMaximumShearStress"></a>

### *class* LinearizedMaximumShearStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedMaximumShearStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#LinearizedMaximumShearStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#LinearizedMaximumShearStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#LinearizedMaximumShearStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#LinearizedMaximumShearStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#LinearizedMaximumShearStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#LinearizedMaximumShearStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#LinearizedMaximumShearStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#LinearizedMaximumShearStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#LinearizedMaximumShearStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#LinearizedMaximumShearStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#LinearizedMaximumShearStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#LinearizedMaximumShearStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#LinearizedMaximumShearStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LinearizedMaximumShearStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LinearizedMaximumShearStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LinearizedMaximumShearStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LinearizedMaximumShearStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LinearizedMaximumShearStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LinearizedMaximumShearStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LinearizedMaximumShearStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LinearizedMaximumShearStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LinearizedMaximumShearStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LinearizedMaximumShearStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#LinearizedMaximumShearStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LinearizedMaximumShearStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`ShearOrientation`](#LinearizedMaximumShearStress.ShearOrientation)                                                                        | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#LinearizedMaximumShearStress.ZeroThroughThicknessBendingStress)                                      | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#LinearizedMaximumShearStress.LoadMultiplier)                                                                            | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#LinearizedMaximumShearStress.AverageRadiusOfCurvature)                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#LinearizedMaximumShearStress.BendingInside)                                                                              | Gets the BendingInside.                                                |
| [`BendingOutside`](#LinearizedMaximumShearStress.BendingOutside)                                                                            | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#LinearizedMaximumShearStress.MembraneBendingCenter)                                                              | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#LinearizedMaximumShearStress.MembraneBendingInside)                                                              | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#LinearizedMaximumShearStress.MembraneBendingOutside)                                                            | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#LinearizedMaximumShearStress.Membrane)                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#LinearizedMaximumShearStress.PeakCenter)                                                                                    | Gets the PeakCenter.                                                   |
| [`PeakInside`](#LinearizedMaximumShearStress.PeakInside)                                                                                    | Gets the PeakInside.                                                   |
| [`PeakOutside`](#LinearizedMaximumShearStress.PeakOutside)                                                                                  | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#LinearizedMaximumShearStress.SweepingPhase)                                                                              | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#LinearizedMaximumShearStress.Frequency)                                                                                      | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#LinearizedMaximumShearStress.TotalCenter)                                                                                  | Gets the TotalCenter.                                                  |
| [`TotalInside`](#LinearizedMaximumShearStress.TotalInside)                                                                                  | Gets the TotalInside.                                                  |
| [`TotalOutside`](#LinearizedMaximumShearStress.TotalOutside)                                                                                | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#LinearizedMaximumShearStress.Subtype)                                                                                          | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#LinearizedMaximumShearStress.NormalOrientation)                                                                      | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#LinearizedMaximumShearStress.Amplitude)                                                                                      | Gets or sets the Amplitude.                                            |
| [`PlotData`](#LinearizedMaximumShearStress.PlotData)                                                                                        | Gets the result table.                                                 |
| [`Location`](#LinearizedMaximumShearStress.Location)                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#LinearizedMaximumShearStress.TimeForMinimumOfMinimumValues)                                              | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#LinearizedMaximumShearStress.TimeForMinimumOfMaximumValues)                                              | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#LinearizedMaximumShearStress.LoadStepForMinimumOfMinimumValues)                                      | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#LinearizedMaximumShearStress.LoadStepForMinimumOfMaximumValues)                                      | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#LinearizedMaximumShearStress.TimeForMaximumOfMinimumValues)                                              | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#LinearizedMaximumShearStress.TimeForMaximumOfMaximumValues)                                              | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#LinearizedMaximumShearStress.LoadStepForMaximumOfMinimumValues)                                      | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#LinearizedMaximumShearStress.LoadStepForMaximumOfMaximumValues)                                      | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#LinearizedMaximumShearStress.IsSolved)                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#LinearizedMaximumShearStress.ScopingMethod)                                                                              | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#LinearizedMaximumShearStress.SetNumber)                                                                                      | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#LinearizedMaximumShearStress.CombinationNumber)                                                                      | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#LinearizedMaximumShearStress.SolutionCombinationDriver)                                                      | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#LinearizedMaximumShearStress.WaterfallPanelShowTextOnMosaic)                                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#LinearizedMaximumShearStress.CrackFrontNumber)                                                                        | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#LinearizedMaximumShearStress.GlobalIDs)                                                                                      | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#LinearizedMaximumShearStress.Identifier)                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#LinearizedMaximumShearStress.IterationNumber)                                                                          | Gets the IterationNumber.                                              |
| [`LoadStep`](#LinearizedMaximumShearStress.LoadStep)                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#LinearizedMaximumShearStress.MaximumOccursOn)                                                                          | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#LinearizedMaximumShearStress.MinimumOccursOn)                                                                          | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#LinearizedMaximumShearStress.LoadStepNumber)                                                                            | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#LinearizedMaximumShearStress.SolverComponentIDs)                                                                    | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#LinearizedMaximumShearStress.Substep)                                                                                          | Gets the Substep.                                                      |
| [`Average`](#LinearizedMaximumShearStress.Average)                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#LinearizedMaximumShearStress.Maximum)                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#LinearizedMaximumShearStress.MaximumOfMaximumOverTime)                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#LinearizedMaximumShearStress.MaximumOfMinimumOverTime)                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#LinearizedMaximumShearStress.Minimum)                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#LinearizedMaximumShearStress.MinimumOfMaximumOverTime)                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#LinearizedMaximumShearStress.MinimumOfMinimumOverTime)                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#LinearizedMaximumShearStress.Time)                                                                                                | Gets the Time.                                                         |
| [`DisplayTime`](#LinearizedMaximumShearStress.DisplayTime)                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#LinearizedMaximumShearStress.DisplayOption)                                                                              | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#LinearizedMaximumShearStress.DpfEvaluation)                                                                              | Gets or sets the DpfEvaluation.                                        |
| [`By`](#LinearizedMaximumShearStress.By)                                                                                                    | Gets or sets the By.                                                   |
| [`ItemType`](#LinearizedMaximumShearStress.ItemType)                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#LinearizedMaximumShearStress.CalculateTimeHistory)                                                                | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#LinearizedMaximumShearStress.Suppressed)                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#LinearizedMaximumShearStress.Children)                                                                                        | Gets the list of children.                                             |
| [`Comments`](#LinearizedMaximumShearStress.Comments)                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#LinearizedMaximumShearStress.Figures)                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#LinearizedMaximumShearStress.Images)                                                                                            | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#LinearizedMaximumShearStress.Properties)                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#LinearizedMaximumShearStress.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedMaximumShearStress
```

<a id="property-detail"></a>

## Property detail

<a id="LinearizedMaximumShearStress.InternalObject"></a>

### *property* LinearizedMaximumShearStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.ShearOrientation"></a>

### *property* LinearizedMaximumShearStress.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.DataModelObjectCategory"></a>

### *property* LinearizedMaximumShearStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedMaximumShearStress.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.LoadMultiplier"></a>

### *property* LinearizedMaximumShearStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.AverageRadiusOfCurvature"></a>

### *property* LinearizedMaximumShearStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.BendingInside"></a>

### *property* LinearizedMaximumShearStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.BendingOutside"></a>

### *property* LinearizedMaximumShearStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MembraneBendingCenter"></a>

### *property* LinearizedMaximumShearStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MembraneBendingInside"></a>

### *property* LinearizedMaximumShearStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MembraneBendingOutside"></a>

### *property* LinearizedMaximumShearStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Membrane"></a>

### *property* LinearizedMaximumShearStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.PeakCenter"></a>

### *property* LinearizedMaximumShearStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.PeakInside"></a>

### *property* LinearizedMaximumShearStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.PeakOutside"></a>

### *property* LinearizedMaximumShearStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.SweepingPhase"></a>

### *property* LinearizedMaximumShearStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Frequency"></a>

### *property* LinearizedMaximumShearStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.TotalCenter"></a>

### *property* LinearizedMaximumShearStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.TotalInside"></a>

### *property* LinearizedMaximumShearStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.TotalOutside"></a>

### *property* LinearizedMaximumShearStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Linearized2DBehavior"></a>

### *property* LinearizedMaximumShearStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Subtype"></a>

### *property* LinearizedMaximumShearStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.NormalOrientation"></a>

### *property* LinearizedMaximumShearStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Position"></a>

### *property* LinearizedMaximumShearStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.StressStrainType"></a>

### *property* LinearizedMaximumShearStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.ThroughThicknessBendingStress"></a>

### *property* LinearizedMaximumShearStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Amplitude"></a>

### *property* LinearizedMaximumShearStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.PlotData"></a>

### *property* LinearizedMaximumShearStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Location"></a>

### *property* LinearizedMaximumShearStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedMaximumShearStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedMaximumShearStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedMaximumShearStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedMaximumShearStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedMaximumShearStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedMaximumShearStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedMaximumShearStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedMaximumShearStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.IsSolved"></a>

### *property* LinearizedMaximumShearStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.CoordinateSystem"></a>

### *property* LinearizedMaximumShearStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.ScopingMethod"></a>

### *property* LinearizedMaximumShearStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.SetNumber"></a>

### *property* LinearizedMaximumShearStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.CombinationNumber"></a>

### *property* LinearizedMaximumShearStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.SolutionCombinationDriver"></a>

### *property* LinearizedMaximumShearStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Path"></a>

### *property* LinearizedMaximumShearStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Surface"></a>

### *property* LinearizedMaximumShearStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.NamedSelections"></a>

### *property* LinearizedMaximumShearStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* LinearizedMaximumShearStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.CrackFrontNumber"></a>

### *property* LinearizedMaximumShearStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.GlobalIDs"></a>

### *property* LinearizedMaximumShearStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Identifier"></a>

### *property* LinearizedMaximumShearStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.IterationNumber"></a>

### *property* LinearizedMaximumShearStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.LoadStep"></a>

### *property* LinearizedMaximumShearStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MaximumOccursOn"></a>

### *property* LinearizedMaximumShearStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MinimumOccursOn"></a>

### *property* LinearizedMaximumShearStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.LoadStepNumber"></a>

### *property* LinearizedMaximumShearStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.SolverComponentIDs"></a>

### *property* LinearizedMaximumShearStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Substep"></a>

### *property* LinearizedMaximumShearStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Average"></a>

### *property* LinearizedMaximumShearStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Maximum"></a>

### *property* LinearizedMaximumShearStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MaximumOfMaximumOverTime"></a>

### *property* LinearizedMaximumShearStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MaximumOfMinimumOverTime"></a>

### *property* LinearizedMaximumShearStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Minimum"></a>

### *property* LinearizedMaximumShearStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MinimumOfMaximumOverTime"></a>

### *property* LinearizedMaximumShearStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.MinimumOfMinimumOverTime"></a>

### *property* LinearizedMaximumShearStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Time"></a>

### *property* LinearizedMaximumShearStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.DisplayTime"></a>

### *property* LinearizedMaximumShearStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.GraphControlsXAxis"></a>

### *property* LinearizedMaximumShearStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.DisplayOption"></a>

### *property* LinearizedMaximumShearStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.DpfEvaluation"></a>

### *property* LinearizedMaximumShearStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.By"></a>

### *property* LinearizedMaximumShearStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.ItemType"></a>

### *property* LinearizedMaximumShearStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.CalculateTimeHistory"></a>

### *property* LinearizedMaximumShearStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Suppressed"></a>

### *property* LinearizedMaximumShearStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Children"></a>

### *property* LinearizedMaximumShearStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Comments"></a>

### *property* LinearizedMaximumShearStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Figures"></a>

### *property* LinearizedMaximumShearStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Images"></a>

### *property* LinearizedMaximumShearStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LinearizedMaximumShearStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Properties"></a>

### *property* LinearizedMaximumShearStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.VisibleProperties"></a>

### *property* LinearizedMaximumShearStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedMaximumShearStress.ClearGeneratedData"></a>

### LinearizedMaximumShearStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.EvaluateAllResults"></a>

### LinearizedMaximumShearStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.FetchRemoteResults"></a>

### LinearizedMaximumShearStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.ExportToTextFile"></a>

### LinearizedMaximumShearStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.ExportAnimation"></a>

### LinearizedMaximumShearStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.DuplicateWithoutResults"></a>

### LinearizedMaximumShearStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.CreateResultsAtAllSets"></a>

### LinearizedMaximumShearStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.PromoteToNamedSelection"></a>

### LinearizedMaximumShearStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.CreateParameter"></a>

### LinearizedMaximumShearStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.AddAlert"></a>

### LinearizedMaximumShearStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.AddConvergence"></a>

### LinearizedMaximumShearStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.RenameBasedOnDefinition"></a>

### LinearizedMaximumShearStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Delete"></a>

### LinearizedMaximumShearStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.GetChildren"></a>

### LinearizedMaximumShearStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LinearizedMaximumShearStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.AddComment"></a>

### LinearizedMaximumShearStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.AddFigure"></a>

### LinearizedMaximumShearStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.AddImage"></a>

### LinearizedMaximumShearStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Activate"></a>

### LinearizedMaximumShearStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.CopyTo"></a>

### LinearizedMaximumShearStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.Duplicate"></a>

### LinearizedMaximumShearStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.GroupAllSimilarChildren"></a>

### LinearizedMaximumShearStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.GroupSimilarObjects"></a>

### LinearizedMaximumShearStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.PropertyByName"></a>

### LinearizedMaximumShearStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.PropertyByAPIName"></a>

### LinearizedMaximumShearStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.GetParameter"></a>

### LinearizedMaximumShearStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumShearStress.RemoveParameter"></a>

### LinearizedMaximumShearStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
