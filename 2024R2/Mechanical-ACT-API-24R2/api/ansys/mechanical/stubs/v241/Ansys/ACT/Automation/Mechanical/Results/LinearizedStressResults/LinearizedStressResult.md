# `LinearizedStressResult`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedStressResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LinearizedStressResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ZeroThroughThicknessBendingStress`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.ZeroThroughThicknessBendingStress)   | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#id0)                                                                           | Gets the internal object. For advanced usage only.                     |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.LoadMultiplier)                                         | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.BendingInside)                                           | Gets the BendingInside.                                                |
| [`BendingOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.BendingOutside)                                         | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Membrane)                                                     | Gets the Membrane.                                                     |
| [`PeakCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.PeakCenter)                                                 | Gets the PeakCenter.                                                   |
| [`PeakInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.PeakInside)                                                 | Gets the PeakInside.                                                   |
| [`PeakOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.PeakOutside)                                               | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Frequency)                                                   | Gets or sets the Frequency.                                            |
| [`TotalCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.TotalCenter)                                               | Gets the TotalCenter.                                                  |
| [`TotalInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.TotalInside)                                               | Gets the TotalInside.                                                  |
| [`TotalOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.TotalOutside)                                             | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Subtype)                                                       | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                    |
| [`Position`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Position)                                                     | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.StressStrainType)                                     | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Amplitude)                                                   | Gets or sets the Amplitude.                                            |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                           |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.PlotData)                                                     | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Location)                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.IsSolved)                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.CoordinateSystem)                                     | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.SetNumber)                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Path)                                                             | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Surface)                                                       | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.NamedSelections)                                       | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#LinearizedStressResult.WaterfallPanelShowTextOnMosaic)                                                                                                                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Identifier)                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.IterationNumber)                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.LoadStep)                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Substep)                                                       | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Average)                                                       | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Maximum)                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Minimum)                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Time)                                                             | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.DisplayTime)                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.DisplayOption)                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.By)                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.ItemType)                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Suppressed)                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Children)                                                     | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Comments)                                                     | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Figures)                                                       | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Images)                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#id0)                                                                           | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.Properties)                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedStressResult.md#LinearizedStressResult.VisibleProperties)                                   | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="LinearizedStressResult.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedStressResult.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.InternalObject"></a>

### *property* LinearizedStressResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadMultiplier"></a>

### *property* LinearizedStressResult.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AverageRadiusOfCurvature"></a>

### *property* LinearizedStressResult.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.BendingInside"></a>

### *property* LinearizedStressResult.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.BendingOutside"></a>

### *property* LinearizedStressResult.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MembraneBendingCenter"></a>

### *property* LinearizedStressResult.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MembraneBendingInside"></a>

### *property* LinearizedStressResult.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MembraneBendingOutside"></a>

### *property* LinearizedStressResult.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Membrane"></a>

### *property* LinearizedStressResult.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PeakCenter"></a>

### *property* LinearizedStressResult.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PeakInside"></a>

### *property* LinearizedStressResult.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PeakOutside"></a>

### *property* LinearizedStressResult.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SweepingPhase"></a>

### *property* LinearizedStressResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Frequency"></a>

### *property* LinearizedStressResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TotalCenter"></a>

### *property* LinearizedStressResult.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TotalInside"></a>

### *property* LinearizedStressResult.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TotalOutside"></a>

### *property* LinearizedStressResult.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Linearized2DBehavior"></a>

### *property* LinearizedStressResult.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Subtype"></a>

### *property* LinearizedStressResult.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.NormalOrientation"></a>

### *property* LinearizedStressResult.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Position"></a>

### *property* LinearizedStressResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.StressStrainType"></a>

### *property* LinearizedStressResult.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ThroughThicknessBendingStress"></a>

### *property* LinearizedStressResult.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Amplitude"></a>

### *property* LinearizedStressResult.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DataModelObjectCategory"></a>

### *property* LinearizedStressResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PlotData"></a>

### *property* LinearizedStressResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Location"></a>

### *property* LinearizedStressResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedStressResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedStressResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedStressResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedStressResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedStressResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedStressResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedStressResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedStressResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.IsSolved"></a>

### *property* LinearizedStressResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CoordinateSystem"></a>

### *property* LinearizedStressResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ScopingMethod"></a>

### *property* LinearizedStressResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SetNumber"></a>

### *property* LinearizedStressResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CombinationNumber"></a>

### *property* LinearizedStressResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SolutionCombinationDriver"></a>

### *property* LinearizedStressResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Path"></a>

### *property* LinearizedStressResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Surface"></a>

### *property* LinearizedStressResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.NamedSelections"></a>

### *property* LinearizedStressResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* LinearizedStressResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CrackFrontNumber"></a>

### *property* LinearizedStressResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GlobalIDs"></a>

### *property* LinearizedStressResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Identifier"></a>

### *property* LinearizedStressResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.IterationNumber"></a>

### *property* LinearizedStressResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStep"></a>

### *property* LinearizedStressResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MaximumOccursOn"></a>

### *property* LinearizedStressResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MinimumOccursOn"></a>

### *property* LinearizedStressResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepNumber"></a>

### *property* LinearizedStressResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SolverComponentIDs"></a>

### *property* LinearizedStressResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Substep"></a>

### *property* LinearizedStressResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Average"></a>

### *property* LinearizedStressResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Maximum"></a>

### *property* LinearizedStressResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MaximumOfMaximumOverTime"></a>

### *property* LinearizedStressResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MaximumOfMinimumOverTime"></a>

### *property* LinearizedStressResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Minimum"></a>

### *property* LinearizedStressResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MinimumOfMaximumOverTime"></a>

### *property* LinearizedStressResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MinimumOfMinimumOverTime"></a>

### *property* LinearizedStressResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Time"></a>

### *property* LinearizedStressResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DisplayTime"></a>

### *property* LinearizedStressResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GraphControlsXAxis"></a>

### *property* LinearizedStressResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DisplayOption"></a>

### *property* LinearizedStressResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DpfEvaluation"></a>

### *property* LinearizedStressResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.By"></a>

### *property* LinearizedStressResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ItemType"></a>

### *property* LinearizedStressResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CalculateTimeHistory"></a>

### *property* LinearizedStressResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Suppressed"></a>

### *property* LinearizedStressResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Children"></a>

### *property* LinearizedStressResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Comments"></a>

### *property* LinearizedStressResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Figures"></a>

### *property* LinearizedStressResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Images"></a>

### *property* LinearizedStressResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LinearizedStressResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Properties"></a>

### *property* LinearizedStressResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.VisibleProperties"></a>

### *property* LinearizedStressResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedStressResult.ClearGeneratedData"></a>

### LinearizedStressResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.EvaluateAllResults"></a>

### LinearizedStressResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.FetchRemoteResults"></a>

### LinearizedStressResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ExportToTextFile"></a>

### LinearizedStressResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ExportAnimation"></a>

### LinearizedStressResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DuplicateWithoutResults"></a>

### LinearizedStressResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CreateResultsAtAllSets"></a>

### LinearizedStressResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PromoteToNamedSelection"></a>

### LinearizedStressResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CreateParameter"></a>

### LinearizedStressResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddAlert"></a>

### LinearizedStressResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddConvergence"></a>

### LinearizedStressResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RenameBasedOnDefinition"></a>

### LinearizedStressResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Delete"></a>

### LinearizedStressResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetChildren"></a>

### LinearizedStressResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LinearizedStressResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddComment"></a>

### LinearizedStressResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddFigure"></a>

### LinearizedStressResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddImage"></a>

### LinearizedStressResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Activate"></a>

### LinearizedStressResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CopyTo"></a>

### LinearizedStressResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Duplicate"></a>

### LinearizedStressResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GroupAllSimilarChildren"></a>

### LinearizedStressResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GroupSimilarObjects"></a>

### LinearizedStressResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PropertyByName"></a>

### LinearizedStressResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PropertyByAPIName"></a>

### LinearizedStressResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetParameter"></a>

### LinearizedStressResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RemoveParameter"></a>

### LinearizedStressResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

