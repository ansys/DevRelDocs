# LinearizedMinimumPrincipalStress

### *class* LinearizedMinimumPrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedMinimumPrincipalStress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#LinearizedMinimumPrincipalStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#LinearizedMinimumPrincipalStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#LinearizedMinimumPrincipalStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#LinearizedMinimumPrincipalStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#LinearizedMinimumPrincipalStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#LinearizedMinimumPrincipalStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#LinearizedMinimumPrincipalStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#LinearizedMinimumPrincipalStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#LinearizedMinimumPrincipalStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#LinearizedMinimumPrincipalStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#LinearizedMinimumPrincipalStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#LinearizedMinimumPrincipalStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#LinearizedMinimumPrincipalStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LinearizedMinimumPrincipalStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LinearizedMinimumPrincipalStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LinearizedMinimumPrincipalStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LinearizedMinimumPrincipalStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LinearizedMinimumPrincipalStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LinearizedMinimumPrincipalStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LinearizedMinimumPrincipalStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LinearizedMinimumPrincipalStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LinearizedMinimumPrincipalStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LinearizedMinimumPrincipalStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#LinearizedMinimumPrincipalStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LinearizedMinimumPrincipalStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#LinearizedMinimumPrincipalStress.ZeroThroughThicknessBendingStress)                                  | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#LinearizedMinimumPrincipalStress.LoadMultiplier)                                                                        | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#LinearizedMinimumPrincipalStress.AverageRadiusOfCurvature)                                                    | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#LinearizedMinimumPrincipalStress.BendingInside)                                                                          | Gets the BendingInside.                                                |
| [`BendingOutside`](#LinearizedMinimumPrincipalStress.BendingOutside)                                                                        | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#LinearizedMinimumPrincipalStress.MembraneBendingCenter)                                                          | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#LinearizedMinimumPrincipalStress.MembraneBendingInside)                                                          | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#LinearizedMinimumPrincipalStress.MembraneBendingOutside)                                                        | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#LinearizedMinimumPrincipalStress.Membrane)                                                                                    | Gets the Membrane.                                                     |
| [`PeakCenter`](#LinearizedMinimumPrincipalStress.PeakCenter)                                                                                | Gets the PeakCenter.                                                   |
| [`PeakInside`](#LinearizedMinimumPrincipalStress.PeakInside)                                                                                | Gets the PeakInside.                                                   |
| [`PeakOutside`](#LinearizedMinimumPrincipalStress.PeakOutside)                                                                              | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#LinearizedMinimumPrincipalStress.SweepingPhase)                                                                          | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#LinearizedMinimumPrincipalStress.Frequency)                                                                                  | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#LinearizedMinimumPrincipalStress.TotalCenter)                                                                              | Gets the TotalCenter.                                                  |
| [`TotalInside`](#LinearizedMinimumPrincipalStress.TotalInside)                                                                              | Gets the TotalInside.                                                  |
| [`TotalOutside`](#LinearizedMinimumPrincipalStress.TotalOutside)                                                                            | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#LinearizedMinimumPrincipalStress.Subtype)                                                                                      | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#LinearizedMinimumPrincipalStress.NormalOrientation)                                                                  | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#LinearizedMinimumPrincipalStress.Amplitude)                                                                                  | Gets or sets the Amplitude.                                            |
| [`PlotData`](#LinearizedMinimumPrincipalStress.PlotData)                                                                                    | Gets the result table.                                                 |
| [`Location`](#LinearizedMinimumPrincipalStress.Location)                                                                                    | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#LinearizedMinimumPrincipalStress.TimeForMinimumOfMinimumValues)                                          | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#LinearizedMinimumPrincipalStress.TimeForMinimumOfMaximumValues)                                          | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#LinearizedMinimumPrincipalStress.LoadStepForMinimumOfMinimumValues)                                  | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#LinearizedMinimumPrincipalStress.LoadStepForMinimumOfMaximumValues)                                  | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#LinearizedMinimumPrincipalStress.TimeForMaximumOfMinimumValues)                                          | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#LinearizedMinimumPrincipalStress.TimeForMaximumOfMaximumValues)                                          | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#LinearizedMinimumPrincipalStress.LoadStepForMaximumOfMinimumValues)                                  | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#LinearizedMinimumPrincipalStress.LoadStepForMaximumOfMaximumValues)                                  | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#LinearizedMinimumPrincipalStress.IsSolved)                                                                                    | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#LinearizedMinimumPrincipalStress.ScopingMethod)                                                                          | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#LinearizedMinimumPrincipalStress.SetNumber)                                                                                  | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#LinearizedMinimumPrincipalStress.CombinationNumber)                                                                  | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#LinearizedMinimumPrincipalStress.SolutionCombinationDriver)                                                  | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#LinearizedMinimumPrincipalStress.WaterfallPanelShowTextOnMosaic)                                        | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#LinearizedMinimumPrincipalStress.CrackFrontNumber)                                                                    | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#LinearizedMinimumPrincipalStress.GlobalIDs)                                                                                  | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#LinearizedMinimumPrincipalStress.Identifier)                                                                                | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#LinearizedMinimumPrincipalStress.IterationNumber)                                                                      | Gets the IterationNumber.                                              |
| [`LoadStep`](#LinearizedMinimumPrincipalStress.LoadStep)                                                                                    | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#LinearizedMinimumPrincipalStress.MaximumOccursOn)                                                                      | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#LinearizedMinimumPrincipalStress.MinimumOccursOn)                                                                      | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#LinearizedMinimumPrincipalStress.LoadStepNumber)                                                                        | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#LinearizedMinimumPrincipalStress.SolverComponentIDs)                                                                | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#LinearizedMinimumPrincipalStress.Substep)                                                                                      | Gets the Substep.                                                      |
| [`Average`](#LinearizedMinimumPrincipalStress.Average)                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#LinearizedMinimumPrincipalStress.Maximum)                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#LinearizedMinimumPrincipalStress.MaximumOfMaximumOverTime)                                                    | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#LinearizedMinimumPrincipalStress.MaximumOfMinimumOverTime)                                                    | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#LinearizedMinimumPrincipalStress.Minimum)                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#LinearizedMinimumPrincipalStress.MinimumOfMaximumOverTime)                                                    | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#LinearizedMinimumPrincipalStress.MinimumOfMinimumOverTime)                                                    | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#LinearizedMinimumPrincipalStress.Time)                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#LinearizedMinimumPrincipalStress.DisplayTime)                                                                              | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#LinearizedMinimumPrincipalStress.DisplayOption)                                                                          | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#LinearizedMinimumPrincipalStress.DpfEvaluation)                                                                          | Gets or sets the DpfEvaluation.                                        |
| [`By`](#LinearizedMinimumPrincipalStress.By)                                                                                                | Gets or sets the By.                                                   |
| [`ItemType`](#LinearizedMinimumPrincipalStress.ItemType)                                                                                    | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#LinearizedMinimumPrincipalStress.CalculateTimeHistory)                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#LinearizedMinimumPrincipalStress.Suppressed)                                                                                | Gets or sets the Suppressed.                                           |
| [`Children`](#LinearizedMinimumPrincipalStress.Children)                                                                                    | Gets the list of children.                                             |
| [`Comments`](#LinearizedMinimumPrincipalStress.Comments)                                                                                    | Gets the list of associated comments.                                  |
| [`Figures`](#LinearizedMinimumPrincipalStress.Figures)                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#LinearizedMinimumPrincipalStress.Images)                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#LinearizedMinimumPrincipalStress.Properties)                                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#LinearizedMinimumPrincipalStress.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedMinimumPrincipalStress
```

## Property detail

### *property* LinearizedMinimumPrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* LinearizedMinimumPrincipalStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### LinearizedMinimumPrincipalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### LinearizedMinimumPrincipalStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
