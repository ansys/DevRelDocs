# AcousticFarFieldSPLMicWaterfallDiagram

### *class* AcousticFarFieldSPLMicWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFarFieldSPLMicWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToXMLFile`](#AcousticFarFieldSPLMicWaterfallDiagram.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                   |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToWAVFile`](#AcousticFarFieldSPLMicWaterfallDiagram.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#AcousticFarFieldSPLMicWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticFarFieldSPLMicWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticFarFieldSPLMicWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticFarFieldSPLMicWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticFarFieldSPLMicWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticFarFieldSPLMicWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticFarFieldSPLMicWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticFarFieldSPLMicWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticFarFieldSPLMicWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticFarFieldSPLMicWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticFarFieldSPLMicWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticFarFieldSPLMicWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticFarFieldSPLMicWaterfallDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFarFieldSPLMicWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFarFieldSPLMicWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFarFieldSPLMicWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFarFieldSPLMicWaterfallDiagram.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFarFieldSPLMicWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFarFieldSPLMicWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFarFieldSPLMicWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFarFieldSPLMicWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFarFieldSPLMicWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFarFieldSPLMicWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticFarFieldSPLMicWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFarFieldSPLMicWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`FarFieldMicrophoneDefinitionMethod`](#AcousticFarFieldSPLMicWaterfallDiagram.FarFieldMicrophoneDefinitionMethod)        | Gets or sets the FarFieldMicrophoneDefinitionMethod.                   |
| [`Worksheet`](../../Worksheet.md#Worksheet)                                                                               | Get the ObjectiveWorksheet action.                                     |
| [`ReportedFrequency`](#AcousticFarFieldSPLMicWaterfallDiagram.ReportedFrequency)                                          | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticFarFieldSPLMicWaterfallDiagram.DampedFrequency)                                              | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticFarFieldSPLMicWaterfallDiagram.LogarithmicDecrement)                                    | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticFarFieldSPLMicWaterfallDiagram.ModalDampingRatio)                                          | Gets the ModalDampingRatio.                                            |
| [`PhiAngleNoOfDivisions`](#AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleNoOfDivisions)                                  | Gets or sets the PhiAngleNoOfDivisions.                                |
| [`ThetaAngleNoOfDivisions`](#AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleNoOfDivisions)                              | Gets or sets the ThetaAngleNoOfDivisions.                              |
| [`Stability`](#AcousticFarFieldSPLMicWaterfallDiagram.Stability)                                                          | Gets the Stability.                                                    |
| [`Density`](#AcousticFarFieldSPLMicWaterfallDiagram.Density)                                                              | Gets or sets the Density.                                              |
| [`XCoordinate`](#AcousticFarFieldSPLMicWaterfallDiagram.XCoordinate)                                                      | Gets or sets the XCoordinate.                                          |
| [`YCoordinate`](#AcousticFarFieldSPLMicWaterfallDiagram.YCoordinate)                                                      | Gets or sets the YCoordinate.                                          |
| [`ZCoordinate`](#AcousticFarFieldSPLMicWaterfallDiagram.ZCoordinate)                                                      | Gets or sets the ZCoordinate.                                          |
| [`ModelThicknessInZDirection`](#AcousticFarFieldSPLMicWaterfallDiagram.ModelThicknessInZDirection)                        | Gets or sets the ModelThicknessInZDirection.                           |
| [`ReferenceRMSSoundPressure`](#AcousticFarFieldSPLMicWaterfallDiagram.ReferenceRMSSoundPressure)                          | Gets or sets the ReferenceRMSSoundPressure.                            |
| [`ReferenceSoundPower`](#AcousticFarFieldSPLMicWaterfallDiagram.ReferenceSoundPower)                                      | Gets or sets the ReferenceSoundPower.                                  |
| [`Frequency`](#AcousticFarFieldSPLMicWaterfallDiagram.Frequency)                                                          | Gets or sets the Frequency.                                            |
| [`SoundSpeed`](#AcousticFarFieldSPLMicWaterfallDiagram.SoundSpeed)                                                        | Gets or sets the SoundSpeed.                                           |
| [`EndingRadiationAnglePhi`](#AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAnglePhi)                              | Gets or sets the EndingRadiationAnglePhi.                              |
| [`EndingRadiationAngleTheta`](#AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAngleTheta)                          | Gets or sets the EndingRadiationAngleTheta.                            |
| [`StartingRadiationAnglePhi`](#AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAnglePhi)                          | Gets or sets the StartingRadiationAnglePhi.                            |
| [`StartingRadiationAngleTheta`](#AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAngleTheta)                      | Gets or sets the StartingRadiationAngleTheta.                          |
| [`PhiAngleEnd`](#AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleEnd)                                                      | Gets or sets the PhiAngleEnd.                                          |
| [`ThetaAngleEnd`](#AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleEnd)                                                  | Gets or sets the ThetaAngleEnd.                                        |
| [`SphereRadius`](#AcousticFarFieldSPLMicWaterfallDiagram.SphereRadius)                                                    | Gets or sets the SphereRadius.                                         |
| [`PhiAngleStart`](#AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleStart)                                                  | Gets or sets the PhiAngleStart.                                        |
| [`ThetaAngleStart`](#AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleStart)                                              | Gets or sets the ThetaAngleStart.                                      |
| [`YAxisExtrusionAngle`](#AcousticFarFieldSPLMicWaterfallDiagram.YAxisExtrusionAngle)                                      | Gets or sets the YAxisExtrusionAngle.                                  |
| [`ModelType`](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType)                                           | Gets or sets the ModelType.                                            |
| [`SpatialRadiationAngle`](#AcousticFarFieldSPLMicWaterfallDiagram.SpatialRadiationAngle)                                  | Gets or sets the SpatialRadiationAngle.                                |
| [`PlotData`](#AcousticFarFieldSPLMicWaterfallDiagram.PlotData)                                                            | Gets the result table.                                                 |
| [`Location`](#AcousticFarFieldSPLMicWaterfallDiagram.Location)                                                            | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMinimumValues)                  | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMaximumValues)                  | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMinimumValues)          | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMaximumValues)          | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMinimumValues)                  | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMaximumValues)                  | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMinimumValues)          | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMaximumValues)          | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticFarFieldSPLMicWaterfallDiagram.IsSolved)                                                            | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticFarFieldSPLMicWaterfallDiagram.ScopingMethod)                                                  | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.SetNumber)                                                          | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.CombinationNumber)                                          | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticFarFieldSPLMicWaterfallDiagram.SolutionCombinationDriver)                          | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticFarFieldSPLMicWaterfallDiagram.WaterfallPanelShowTextOnMosaic)                | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.CrackFrontNumber)                                            | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticFarFieldSPLMicWaterfallDiagram.GlobalIDs)                                                          | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticFarFieldSPLMicWaterfallDiagram.Identifier)                                                        | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.IterationNumber)                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStep)                                                            | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticFarFieldSPLMicWaterfallDiagram.MaximumOccursOn)                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticFarFieldSPLMicWaterfallDiagram.MinimumOccursOn)                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepNumber)                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticFarFieldSPLMicWaterfallDiagram.SolverComponentIDs)                                        | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticFarFieldSPLMicWaterfallDiagram.Substep)                                                              | Gets the Substep.                                                      |
| [`Average`](#AcousticFarFieldSPLMicWaterfallDiagram.Average)                                                              | Gets the Average.                                                      |
| [`Maximum`](#AcousticFarFieldSPLMicWaterfallDiagram.Maximum)                                                              | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMaximumOverTime)                            | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMinimumOverTime)                            | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticFarFieldSPLMicWaterfallDiagram.Minimum)                                                              | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMaximumOverTime)                            | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMinimumOverTime)                            | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticFarFieldSPLMicWaterfallDiagram.Time)                                                                    | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticFarFieldSPLMicWaterfallDiagram.DisplayTime)                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticFarFieldSPLMicWaterfallDiagram.DisplayOption)                                                  | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticFarFieldSPLMicWaterfallDiagram.DpfEvaluation)                                                  | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticFarFieldSPLMicWaterfallDiagram.By)                                                                        | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticFarFieldSPLMicWaterfallDiagram.ItemType)                                                            | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticFarFieldSPLMicWaterfallDiagram.CalculateTimeHistory)                                    | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticFarFieldSPLMicWaterfallDiagram.Suppressed)                                                        | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticFarFieldSPLMicWaterfallDiagram.Children)                                                            | Gets the list of children.                                             |
| [`Comments`](#AcousticFarFieldSPLMicWaterfallDiagram.Comments)                                                            | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticFarFieldSPLMicWaterfallDiagram.Figures)                                                              | Gets the list of associated figures.                                   |
| [`Images`](#AcousticFarFieldSPLMicWaterfallDiagram.Images)                                                                | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticFarFieldSPLMicWaterfallDiagram.Properties)                                                        | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticFarFieldSPLMicWaterfallDiagram.VisibleProperties)                                          | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFarFieldSPLMicWaterfallDiagram
```

## Property detail

### *property* AcousticFarFieldSPLMicWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Density *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ModelThicknessInZDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ReferenceRMSSoundPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ReferenceSoundPower *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SoundSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.YAxisExtrusionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSPLMicWaterfallDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticFarFieldSPLMicWaterfallDiagram.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSPLMicWaterfallDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
