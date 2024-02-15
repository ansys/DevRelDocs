# AcousticFarFieldSoundPowerLevelWaterfallDiagram

### *class* AcousticFarFieldSoundPowerLevelWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFarFieldSoundPowerLevelWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToXMLFile`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                   |
|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToWAVFile`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                    | Gets the internal object. For advanced usage only.                     |
|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)   | Gets the current DataModelObject’s category.                           |
| [`FarFieldMicrophoneDefinitionMethod`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.FarFieldMicrophoneDefinitionMethod) | Gets or sets the FarFieldMicrophoneDefinitionMethod.                   |
| [`Worksheet`](../../Worksheet.md#Worksheet)                                                                                 | Get the ObjectiveWorksheet action.                                     |
| [`ReportedFrequency`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReportedFrequency)                                   | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DampedFrequency)                                       | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                            |
| [`PhiAngleNoOfDivisions`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleNoOfDivisions)                           | Gets or sets the PhiAngleNoOfDivisions.                                |
| [`ThetaAngleNoOfDivisions`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleNoOfDivisions)                       | Gets or sets the ThetaAngleNoOfDivisions.                              |
| [`Stability`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Stability)                                                   | Gets the Stability.                                                    |
| [`Density`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Density)                                                       | Gets or sets the Density.                                              |
| [`XCoordinate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.XCoordinate)                                               | Gets or sets the XCoordinate.                                          |
| [`YCoordinate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.YCoordinate)                                               | Gets or sets the YCoordinate.                                          |
| [`ZCoordinate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ZCoordinate)                                               | Gets or sets the ZCoordinate.                                          |
| [`ModelThicknessInZDirection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelThicknessInZDirection)                 | Gets or sets the ModelThicknessInZDirection.                           |
| [`ReferenceRMSSoundPressure`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceRMSSoundPressure)                   | Gets or sets the ReferenceRMSSoundPressure.                            |
| [`ReferenceSoundPower`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceSoundPower)                               | Gets or sets the ReferenceSoundPower.                                  |
| [`Frequency`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Frequency)                                                   | Gets or sets the Frequency.                                            |
| [`SoundSpeed`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SoundSpeed)                                                 | Gets or sets the SoundSpeed.                                           |
| [`EndingRadiationAnglePhi`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAnglePhi)                       | Gets or sets the EndingRadiationAnglePhi.                              |
| [`EndingRadiationAngleTheta`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAngleTheta)                   | Gets or sets the EndingRadiationAngleTheta.                            |
| [`StartingRadiationAnglePhi`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAnglePhi)                   | Gets or sets the StartingRadiationAnglePhi.                            |
| [`StartingRadiationAngleTheta`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAngleTheta)               | Gets or sets the StartingRadiationAngleTheta.                          |
| [`PhiAngleEnd`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleEnd)                                               | Gets or sets the PhiAngleEnd.                                          |
| [`ThetaAngleEnd`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleEnd)                                           | Gets or sets the ThetaAngleEnd.                                        |
| [`SphereRadius`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SphereRadius)                                             | Gets or sets the SphereRadius.                                         |
| [`PhiAngleStart`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleStart)                                           | Gets or sets the PhiAngleStart.                                        |
| [`ThetaAngleStart`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleStart)                                       | Gets or sets the ThetaAngleStart.                                      |
| [`YAxisExtrusionAngle`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.YAxisExtrusionAngle)                               | Gets or sets the YAxisExtrusionAngle.                                  |
| [`ModelType`](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType)                                             | Gets or sets the ModelType.                                            |
| [`SpatialRadiationAngle`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SpatialRadiationAngle)                           | Gets or sets the SpatialRadiationAngle.                                |
| [`PlotData`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PlotData)                                                     | Gets the result table.                                                 |
| [`Location`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Location)                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsSolved)                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SetNumber)                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallPanelShowTextOnMosaic)         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Identifier)                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.IterationNumber)                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStep)                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Substep)                                                       | Gets the Substep.                                                      |
| [`Average`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Average)                                                       | Gets the Average.                                                      |
| [`Maximum`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Maximum)                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Minimum)                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Time)                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayTime)                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayOption)                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.By)                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ItemType)                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Suppressed)                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Children)                                                     | Gets the list of children.                                             |
| [`Comments`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Comments)                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Figures)                                                       | Gets the list of associated figures.                                   |
| [`Images`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Images)                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Properties)                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.VisibleProperties)                                   | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFarFieldSoundPowerLevelWaterfallDiagram
```

## Property detail

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Density *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelThicknessInZDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceRMSSoundPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceSoundPower *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SoundSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.YAxisExtrusionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
