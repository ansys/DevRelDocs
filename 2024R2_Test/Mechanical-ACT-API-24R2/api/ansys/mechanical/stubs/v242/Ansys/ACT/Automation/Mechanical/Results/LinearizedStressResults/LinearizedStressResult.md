# `LinearizedStressResult`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedStressResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LinearizedStressResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#LinearizedStressResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#LinearizedStressResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#LinearizedStressResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#LinearizedStressResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#LinearizedStressResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#LinearizedStressResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#LinearizedStressResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#LinearizedStressResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#LinearizedStressResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#LinearizedStressResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#LinearizedStressResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#LinearizedStressResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#LinearizedStressResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LinearizedStressResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LinearizedStressResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LinearizedStressResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LinearizedStressResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LinearizedStressResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LinearizedStressResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LinearizedStressResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LinearizedStressResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LinearizedStressResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LinearizedStressResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#LinearizedStressResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LinearizedStressResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ZeroThroughThicknessBendingStress`](#LinearizedStressResult.ZeroThroughThicknessBendingStress)   | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`InternalObject`](#id0)                                                                           | Gets the internal object. For advanced usage only.                     |
| [`LoadMultiplier`](#LinearizedStressResult.LoadMultiplier)                                         | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#LinearizedStressResult.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#LinearizedStressResult.BendingInside)                                           | Gets the BendingInside.                                                |
| [`BendingOutside`](#LinearizedStressResult.BendingOutside)                                         | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#LinearizedStressResult.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#LinearizedStressResult.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#LinearizedStressResult.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#LinearizedStressResult.Membrane)                                                     | Gets the Membrane.                                                     |
| [`PeakCenter`](#LinearizedStressResult.PeakCenter)                                                 | Gets the PeakCenter.                                                   |
| [`PeakInside`](#LinearizedStressResult.PeakInside)                                                 | Gets the PeakInside.                                                   |
| [`PeakOutside`](#LinearizedStressResult.PeakOutside)                                               | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#LinearizedStressResult.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#LinearizedStressResult.Frequency)                                                   | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#LinearizedStressResult.TotalCenter)                                               | Gets the TotalCenter.                                                  |
| [`TotalInside`](#LinearizedStressResult.TotalInside)                                               | Gets the TotalInside.                                                  |
| [`TotalOutside`](#LinearizedStressResult.TotalOutside)                                             | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](#LinearizedStressResult.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#LinearizedStressResult.Subtype)                                                       | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#LinearizedStressResult.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                    |
| [`Position`](#LinearizedStressResult.Position)                                                     | Gets or sets the Position.                                             |
| [`StressStrainType`](#LinearizedStressResult.StressStrainType)                                     | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](#LinearizedStressResult.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#LinearizedStressResult.Amplitude)                                                   | Gets or sets the Amplitude.                                            |
| [`DataModelObjectCategory`](#LinearizedStressResult.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                           |
| [`PlotData`](#LinearizedStressResult.PlotData)                                                     | Gets the result table.                                                 |
| [`Location`](#LinearizedStressResult.Location)                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#LinearizedStressResult.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#LinearizedStressResult.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#LinearizedStressResult.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#LinearizedStressResult.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#LinearizedStressResult.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#LinearizedStressResult.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#LinearizedStressResult.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#LinearizedStressResult.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#LinearizedStressResult.IsSolved)                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#LinearizedStressResult.CoordinateSystem)                                     | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#LinearizedStressResult.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#LinearizedStressResult.SetNumber)                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#LinearizedStressResult.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#LinearizedStressResult.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#LinearizedStressResult.Path)                                                             | Path property.                                                         |
| [`Surface`](#LinearizedStressResult.Surface)                                                       | Surface property.                                                      |
| [`SurfaceCoating`](#LinearizedStressResult.SurfaceCoating)                                         | SurfaceCoating property.                                               |
| [`NamedSelections`](#LinearizedStressResult.NamedSelections)                                       | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#LinearizedStressResult.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#LinearizedStressResult.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#LinearizedStressResult.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#LinearizedStressResult.Identifier)                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#LinearizedStressResult.IterationNumber)                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#LinearizedStressResult.LoadStep)                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#LinearizedStressResult.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#LinearizedStressResult.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#LinearizedStressResult.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#LinearizedStressResult.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#LinearizedStressResult.Substep)                                                       | Gets the Substep.                                                      |
| [`Average`](#LinearizedStressResult.Average)                                                       | Gets the Average.                                                      |
| [`Maximum`](#LinearizedStressResult.Maximum)                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#LinearizedStressResult.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#LinearizedStressResult.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#LinearizedStressResult.Minimum)                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#LinearizedStressResult.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#LinearizedStressResult.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#LinearizedStressResult.Time)                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#LinearizedStressResult.DisplayTime)                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#LinearizedStressResult.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#LinearizedStressResult.DisplayOption)                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#LinearizedStressResult.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#LinearizedStressResult.By)                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#LinearizedStressResult.ItemType)                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#LinearizedStressResult.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#LinearizedStressResult.Suppressed)                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#LinearizedStressResult.Children)                                                     | Gets the list of children.                                             |
| [`Comments`](#LinearizedStressResult.Comments)                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#LinearizedStressResult.Figures)                                                       | Gets the list of associated figures.                                   |
| [`Images`](#LinearizedStressResult.Images)                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                           | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#LinearizedStressResult.Properties)                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#LinearizedStressResult.VisibleProperties)                                   | Gets the list of properties that are visible for this object.          |

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

### *property* LinearizedStressResult.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Subtype"></a>

### *property* LinearizedStressResult.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.NormalOrientation"></a>

### *property* LinearizedStressResult.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Position"></a>

### *property* LinearizedStressResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.StressStrainType"></a>

### *property* LinearizedStressResult.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ThroughThicknessBendingStress"></a>

### *property* LinearizedStressResult.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Amplitude"></a>

### *property* LinearizedStressResult.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DataModelObjectCategory"></a>

### *property* LinearizedStressResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PlotData"></a>

### *property* LinearizedStressResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* LinearizedStressResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ScopingMethod"></a>

### *property* LinearizedStressResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* LinearizedStressResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Path"></a>

### *property* LinearizedStressResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Surface"></a>

### *property* LinearizedStressResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SurfaceCoating"></a>

### *property* LinearizedStressResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.NamedSelections"></a>

### *property* LinearizedStressResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallShowTextOnMosaic"></a>

### *property* LinearizedStressResult.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

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

### *property* LinearizedStressResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DisplayOption"></a>

### *property* LinearizedStressResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DpfEvaluation"></a>

### *property* LinearizedStressResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.By"></a>

### *property* LinearizedStressResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ItemType"></a>

### *property* LinearizedStressResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* LinearizedStressResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Figures"></a>

### *property* LinearizedStressResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Images"></a>

### *property* LinearizedStressResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### LinearizedStressResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

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

### LinearizedStressResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

