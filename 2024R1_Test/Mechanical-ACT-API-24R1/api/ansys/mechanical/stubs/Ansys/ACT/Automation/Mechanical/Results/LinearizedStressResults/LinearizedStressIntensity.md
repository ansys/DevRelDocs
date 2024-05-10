# LinearizedStressIntensity

<a id="LinearizedStressIntensity"></a>

### *class* LinearizedStressIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LinearizedStressIntensity.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#LinearizedStressIntensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#LinearizedStressIntensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#LinearizedStressIntensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#LinearizedStressIntensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#LinearizedStressIntensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#LinearizedStressIntensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#LinearizedStressIntensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#LinearizedStressIntensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#LinearizedStressIntensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#LinearizedStressIntensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#LinearizedStressIntensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#LinearizedStressIntensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#LinearizedStressIntensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LinearizedStressIntensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LinearizedStressIntensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LinearizedStressIntensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LinearizedStressIntensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LinearizedStressIntensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LinearizedStressIntensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LinearizedStressIntensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LinearizedStressIntensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LinearizedStressIntensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LinearizedStressIntensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#LinearizedStressIntensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LinearizedStressIntensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](#LinearizedStressIntensity.ZeroThroughThicknessBendingStress)                                         | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](#LinearizedStressIntensity.LoadMultiplier)                                                                               | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](#LinearizedStressIntensity.AverageRadiusOfCurvature)                                                           | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#LinearizedStressIntensity.BendingInside)                                                                                 | Gets the BendingInside.                                                |
| [`BendingOutside`](#LinearizedStressIntensity.BendingOutside)                                                                               | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#LinearizedStressIntensity.MembraneBendingCenter)                                                                 | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#LinearizedStressIntensity.MembraneBendingInside)                                                                 | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#LinearizedStressIntensity.MembraneBendingOutside)                                                               | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#LinearizedStressIntensity.Membrane)                                                                                           | Gets the Membrane.                                                     |
| [`PeakCenter`](#LinearizedStressIntensity.PeakCenter)                                                                                       | Gets the PeakCenter.                                                   |
| [`PeakInside`](#LinearizedStressIntensity.PeakInside)                                                                                       | Gets the PeakInside.                                                   |
| [`PeakOutside`](#LinearizedStressIntensity.PeakOutside)                                                                                     | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#LinearizedStressIntensity.SweepingPhase)                                                                                 | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#LinearizedStressIntensity.Frequency)                                                                                         | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#LinearizedStressIntensity.TotalCenter)                                                                                     | Gets the TotalCenter.                                                  |
| [`TotalInside`](#LinearizedStressIntensity.TotalInside)                                                                                     | Gets the TotalInside.                                                  |
| [`TotalOutside`](#LinearizedStressIntensity.TotalOutside)                                                                                   | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](./../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#LinearizedStressIntensity.Subtype)                                                                                             | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#LinearizedStressIntensity.NormalOrientation)                                                                         | Gets or sets the NormalOrientation.                                    |
| [`Position`](./../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](./../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#LinearizedStressIntensity.Amplitude)                                                                                         | Gets or sets the Amplitude.                                            |
| [`PlotData`](#LinearizedStressIntensity.PlotData)                                                                                           | Gets the result table.                                                 |
| [`Location`](#LinearizedStressIntensity.Location)                                                                                           | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#LinearizedStressIntensity.TimeForMinimumOfMinimumValues)                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#LinearizedStressIntensity.TimeForMinimumOfMaximumValues)                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#LinearizedStressIntensity.LoadStepForMinimumOfMinimumValues)                                         | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#LinearizedStressIntensity.LoadStepForMinimumOfMaximumValues)                                         | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#LinearizedStressIntensity.TimeForMaximumOfMinimumValues)                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#LinearizedStressIntensity.TimeForMaximumOfMaximumValues)                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#LinearizedStressIntensity.LoadStepForMaximumOfMinimumValues)                                         | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#LinearizedStressIntensity.LoadStepForMaximumOfMaximumValues)                                         | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#LinearizedStressIntensity.IsSolved)                                                                                           | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#LinearizedStressIntensity.ScopingMethod)                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#LinearizedStressIntensity.SetNumber)                                                                                         | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#LinearizedStressIntensity.CombinationNumber)                                                                         | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#LinearizedStressIntensity.SolutionCombinationDriver)                                                         | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](./../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](./../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](./../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#LinearizedStressIntensity.WaterfallPanelShowTextOnMosaic)                                               | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#LinearizedStressIntensity.CrackFrontNumber)                                                                           | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#LinearizedStressIntensity.GlobalIDs)                                                                                         | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#LinearizedStressIntensity.Identifier)                                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#LinearizedStressIntensity.IterationNumber)                                                                             | Gets the IterationNumber.                                              |
| [`LoadStep`](#LinearizedStressIntensity.LoadStep)                                                                                           | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#LinearizedStressIntensity.MaximumOccursOn)                                                                             | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#LinearizedStressIntensity.MinimumOccursOn)                                                                             | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#LinearizedStressIntensity.LoadStepNumber)                                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#LinearizedStressIntensity.SolverComponentIDs)                                                                       | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#LinearizedStressIntensity.Substep)                                                                                             | Gets the Substep.                                                      |
| [`Average`](#LinearizedStressIntensity.Average)                                                                                             | Gets the Average.                                                      |
| [`Maximum`](#LinearizedStressIntensity.Maximum)                                                                                             | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#LinearizedStressIntensity.MaximumOfMaximumOverTime)                                                           | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#LinearizedStressIntensity.MaximumOfMinimumOverTime)                                                           | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#LinearizedStressIntensity.Minimum)                                                                                             | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#LinearizedStressIntensity.MinimumOfMaximumOverTime)                                                           | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#LinearizedStressIntensity.MinimumOfMinimumOverTime)                                                           | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#LinearizedStressIntensity.Time)                                                                                                   | Gets the Time.                                                         |
| [`DisplayTime`](#LinearizedStressIntensity.DisplayTime)                                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#LinearizedStressIntensity.DisplayOption)                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#LinearizedStressIntensity.DpfEvaluation)                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#LinearizedStressIntensity.By)                                                                                                       | Gets or sets the By.                                                   |
| [`ItemType`](#LinearizedStressIntensity.ItemType)                                                                                           | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#LinearizedStressIntensity.CalculateTimeHistory)                                                                   | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#LinearizedStressIntensity.Suppressed)                                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#LinearizedStressIntensity.Children)                                                                                           | Gets the list of children.                                             |
| [`Comments`](#LinearizedStressIntensity.Comments)                                                                                           | Gets the list of associated comments.                                  |
| [`Figures`](#LinearizedStressIntensity.Figures)                                                                                             | Gets the list of associated figures.                                   |
| [`Images`](#LinearizedStressIntensity.Images)                                                                                               | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#LinearizedStressIntensity.Properties)                                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#LinearizedStressIntensity.VisibleProperties)                                                                         | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults import LinearizedStressIntensity
```

<a id="property-detail"></a>

## Property detail

<a id="LinearizedStressIntensity.InternalObject"></a>

### *property* LinearizedStressIntensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.DataModelObjectCategory"></a>

### *property* LinearizedStressIntensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedStressIntensity.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.LoadMultiplier"></a>

### *property* LinearizedStressIntensity.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.AverageRadiusOfCurvature"></a>

### *property* LinearizedStressIntensity.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.BendingInside"></a>

### *property* LinearizedStressIntensity.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.BendingOutside"></a>

### *property* LinearizedStressIntensity.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MembraneBendingCenter"></a>

### *property* LinearizedStressIntensity.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MembraneBendingInside"></a>

### *property* LinearizedStressIntensity.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MembraneBendingOutside"></a>

### *property* LinearizedStressIntensity.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Membrane"></a>

### *property* LinearizedStressIntensity.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.PeakCenter"></a>

### *property* LinearizedStressIntensity.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.PeakInside"></a>

### *property* LinearizedStressIntensity.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.PeakOutside"></a>

### *property* LinearizedStressIntensity.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.SweepingPhase"></a>

### *property* LinearizedStressIntensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Frequency"></a>

### *property* LinearizedStressIntensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.TotalCenter"></a>

### *property* LinearizedStressIntensity.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.TotalInside"></a>

### *property* LinearizedStressIntensity.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.TotalOutside"></a>

### *property* LinearizedStressIntensity.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Linearized2DBehavior"></a>

### *property* LinearizedStressIntensity.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](./../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Subtype"></a>

### *property* LinearizedStressIntensity.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](./../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.NormalOrientation"></a>

### *property* LinearizedStressIntensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Position"></a>

### *property* LinearizedStressIntensity.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](./../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.StressStrainType"></a>

### *property* LinearizedStressIntensity.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.ThroughThicknessBendingStress"></a>

### *property* LinearizedStressIntensity.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](./../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Amplitude"></a>

### *property* LinearizedStressIntensity.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.PlotData"></a>

### *property* LinearizedStressIntensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](./../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Location"></a>

### *property* LinearizedStressIntensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedStressIntensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedStressIntensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedStressIntensity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedStressIntensity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedStressIntensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedStressIntensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedStressIntensity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedStressIntensity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.IsSolved"></a>

### *property* LinearizedStressIntensity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.CoordinateSystem"></a>

### *property* LinearizedStressIntensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.ScopingMethod"></a>

### *property* LinearizedStressIntensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.SetNumber"></a>

### *property* LinearizedStressIntensity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.CombinationNumber"></a>

### *property* LinearizedStressIntensity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.SolutionCombinationDriver"></a>

### *property* LinearizedStressIntensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](./../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Path"></a>

### *property* LinearizedStressIntensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](./../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Surface"></a>

### *property* LinearizedStressIntensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.NamedSelections"></a>

### *property* LinearizedStressIntensity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.WaterfallPanelShowTextOnMosaic"></a>

### *property* LinearizedStressIntensity.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.CrackFrontNumber"></a>

### *property* LinearizedStressIntensity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.GlobalIDs"></a>

### *property* LinearizedStressIntensity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Identifier"></a>

### *property* LinearizedStressIntensity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.IterationNumber"></a>

### *property* LinearizedStressIntensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.LoadStep"></a>

### *property* LinearizedStressIntensity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MaximumOccursOn"></a>

### *property* LinearizedStressIntensity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MinimumOccursOn"></a>

### *property* LinearizedStressIntensity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.LoadStepNumber"></a>

### *property* LinearizedStressIntensity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.SolverComponentIDs"></a>

### *property* LinearizedStressIntensity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Substep"></a>

### *property* LinearizedStressIntensity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Average"></a>

### *property* LinearizedStressIntensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Maximum"></a>

### *property* LinearizedStressIntensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MaximumOfMaximumOverTime"></a>

### *property* LinearizedStressIntensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MaximumOfMinimumOverTime"></a>

### *property* LinearizedStressIntensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Minimum"></a>

### *property* LinearizedStressIntensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MinimumOfMaximumOverTime"></a>

### *property* LinearizedStressIntensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.MinimumOfMinimumOverTime"></a>

### *property* LinearizedStressIntensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Time"></a>

### *property* LinearizedStressIntensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.DisplayTime"></a>

### *property* LinearizedStressIntensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.GraphControlsXAxis"></a>

### *property* LinearizedStressIntensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.DisplayOption"></a>

### *property* LinearizedStressIntensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](./../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.DpfEvaluation"></a>

### *property* LinearizedStressIntensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.By"></a>

### *property* LinearizedStressIntensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](./../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.ItemType"></a>

### *property* LinearizedStressIntensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](./../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.CalculateTimeHistory"></a>

### *property* LinearizedStressIntensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Suppressed"></a>

### *property* LinearizedStressIntensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Children"></a>

### *property* LinearizedStressIntensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Comments"></a>

### *property* LinearizedStressIntensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Figures"></a>

### *property* LinearizedStressIntensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Images"></a>

### *property* LinearizedStressIntensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LinearizedStressIntensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Properties"></a>

### *property* LinearizedStressIntensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.VisibleProperties"></a>

### *property* LinearizedStressIntensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedStressIntensity.ClearGeneratedData"></a>

### LinearizedStressIntensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.EvaluateAllResults"></a>

### LinearizedStressIntensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.FetchRemoteResults"></a>

### LinearizedStressIntensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.ExportToTextFile"></a>

### LinearizedStressIntensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.ExportAnimation"></a>

### LinearizedStressIntensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.DuplicateWithoutResults"></a>

### LinearizedStressIntensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.CreateResultsAtAllSets"></a>

### LinearizedStressIntensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.PromoteToNamedSelection"></a>

### LinearizedStressIntensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.CreateParameter"></a>

### LinearizedStressIntensity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.AddAlert"></a>

### LinearizedStressIntensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.AddConvergence"></a>

### LinearizedStressIntensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.RenameBasedOnDefinition"></a>

### LinearizedStressIntensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Delete"></a>

### LinearizedStressIntensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.GetChildren"></a>

### LinearizedStressIntensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LinearizedStressIntensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.AddComment"></a>

### LinearizedStressIntensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.AddFigure"></a>

### LinearizedStressIntensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.AddImage"></a>

### LinearizedStressIntensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Activate"></a>

### LinearizedStressIntensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.CopyTo"></a>

### LinearizedStressIntensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.Duplicate"></a>

### LinearizedStressIntensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.GroupAllSimilarChildren"></a>

### LinearizedStressIntensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.GroupSimilarObjects"></a>

### LinearizedStressIntensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.PropertyByName"></a>

### LinearizedStressIntensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.PropertyByAPIName"></a>

### LinearizedStressIntensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.GetParameter"></a>

### LinearizedStressIntensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressIntensity.RemoveParameter"></a>

### LinearizedStressIntensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
