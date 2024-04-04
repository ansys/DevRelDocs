# AcousticFarFieldResult

### *class* AcousticFarFieldResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFarFieldResult.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToXMLFile`](#AcousticFarFieldResult.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                   |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToWAVFile`](#AcousticFarFieldResult.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#AcousticFarFieldResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticFarFieldResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticFarFieldResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticFarFieldResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticFarFieldResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticFarFieldResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticFarFieldResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticFarFieldResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticFarFieldResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticFarFieldResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticFarFieldResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticFarFieldResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticFarFieldResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFarFieldResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFarFieldResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFarFieldResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFarFieldResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFarFieldResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFarFieldResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFarFieldResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFarFieldResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFarFieldResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFarFieldResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticFarFieldResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFarFieldResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`FarFieldMicrophoneDefinitionMethod`](#AcousticFarFieldResult.FarFieldMicrophoneDefinitionMethod)                        | Gets or sets the FarFieldMicrophoneDefinitionMethod.                   |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Worksheet`](../../Worksheet.md#Worksheet)                                                                               | Get the ObjectiveWorksheet action.                                     |
| [`ReportedFrequency`](#AcousticFarFieldResult.ReportedFrequency)                                                          | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticFarFieldResult.DampedFrequency)                                                              | Gets the DampedFrequency.                                              |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`LogarithmicDecrement`](#AcousticFarFieldResult.LogarithmicDecrement)                                                    | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticFarFieldResult.ModalDampingRatio)                                                          | Gets the ModalDampingRatio.                                            |
| [`PhiAngleNoOfDivisions`](#AcousticFarFieldResult.PhiAngleNoOfDivisions)                                                  | Gets or sets the PhiAngleNoOfDivisions.                                |
| [`ThetaAngleNoOfDivisions`](#AcousticFarFieldResult.ThetaAngleNoOfDivisions)                                              | Gets or sets the ThetaAngleNoOfDivisions.                              |
| [`Stability`](#AcousticFarFieldResult.Stability)                                                                          | Gets the Stability.                                                    |
| [`Density`](#AcousticFarFieldResult.Density)                                                                              | Gets or sets the Density.                                              |
| [`XCoordinate`](#AcousticFarFieldResult.XCoordinate)                                                                      | Gets or sets the XCoordinate.                                          |
| [`YCoordinate`](#AcousticFarFieldResult.YCoordinate)                                                                      | Gets or sets the YCoordinate.                                          |
| [`ZCoordinate`](#AcousticFarFieldResult.ZCoordinate)                                                                      | Gets or sets the ZCoordinate.                                          |
| [`ModelThicknessInZDirection`](#AcousticFarFieldResult.ModelThicknessInZDirection)                                        | Gets or sets the ModelThicknessInZDirection.                           |
| [`ReferenceRMSSoundPressure`](#AcousticFarFieldResult.ReferenceRMSSoundPressure)                                          | Gets or sets the ReferenceRMSSoundPressure.                            |
| [`ReferenceSoundPower`](#AcousticFarFieldResult.ReferenceSoundPower)                                                      | Gets or sets the ReferenceSoundPower.                                  |
| [`Frequency`](#AcousticFarFieldResult.Frequency)                                                                          | Gets or sets the Frequency.                                            |
| [`SoundSpeed`](#AcousticFarFieldResult.SoundSpeed)                                                                        | Gets or sets the SoundSpeed.                                           |
| [`EndingRadiationAnglePhi`](#AcousticFarFieldResult.EndingRadiationAnglePhi)                                              | Gets or sets the EndingRadiationAnglePhi.                              |
| [`EndingRadiationAngleTheta`](#AcousticFarFieldResult.EndingRadiationAngleTheta)                                          | Gets or sets the EndingRadiationAngleTheta.                            |
| [`StartingRadiationAnglePhi`](#AcousticFarFieldResult.StartingRadiationAnglePhi)                                          | Gets or sets the StartingRadiationAnglePhi.                            |
| [`StartingRadiationAngleTheta`](#AcousticFarFieldResult.StartingRadiationAngleTheta)                                      | Gets or sets the StartingRadiationAngleTheta.                          |
| [`PhiAngleEnd`](#AcousticFarFieldResult.PhiAngleEnd)                                                                      | Gets or sets the PhiAngleEnd.                                          |
| [`ThetaAngleEnd`](#AcousticFarFieldResult.ThetaAngleEnd)                                                                  | Gets or sets the ThetaAngleEnd.                                        |
| [`SphereRadius`](#AcousticFarFieldResult.SphereRadius)                                                                    | Gets or sets the SphereRadius.                                         |
| [`PhiAngleStart`](#AcousticFarFieldResult.PhiAngleStart)                                                                  | Gets or sets the PhiAngleStart.                                        |
| [`ThetaAngleStart`](#AcousticFarFieldResult.ThetaAngleStart)                                                              | Gets or sets the ThetaAngleStart.                                      |
| [`YAxisExtrusionAngle`](#AcousticFarFieldResult.YAxisExtrusionAngle)                                                      | Gets or sets the YAxisExtrusionAngle.                                  |
| [`ModelType`](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType)                                           | Gets or sets the ModelType.                                            |
| [`SpatialRadiationAngle`](#AcousticFarFieldResult.SpatialRadiationAngle)                                                  | Gets or sets the SpatialRadiationAngle.                                |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#AcousticFarFieldResult.PlotData)                                                                            | Gets the result table.                                                 |
| [`Location`](#AcousticFarFieldResult.Location)                                                                            | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticFarFieldResult.TimeForMinimumOfMinimumValues)                                  | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticFarFieldResult.TimeForMinimumOfMaximumValues)                                  | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFarFieldResult.LoadStepForMinimumOfMinimumValues)                          | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFarFieldResult.LoadStepForMinimumOfMaximumValues)                          | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticFarFieldResult.TimeForMaximumOfMinimumValues)                                  | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticFarFieldResult.TimeForMaximumOfMaximumValues)                                  | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFarFieldResult.LoadStepForMaximumOfMinimumValues)                          | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFarFieldResult.LoadStepForMaximumOfMaximumValues)                          | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticFarFieldResult.IsSolved)                                                                            | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticFarFieldResult.ScopingMethod)                                                                  | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticFarFieldResult.SetNumber)                                                                          | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticFarFieldResult.CombinationNumber)                                                          | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticFarFieldResult.SolutionCombinationDriver)                                          | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticFarFieldResult.WaterfallPanelShowTextOnMosaic)                                | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticFarFieldResult.CrackFrontNumber)                                                            | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticFarFieldResult.GlobalIDs)                                                                          | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticFarFieldResult.Identifier)                                                                        | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticFarFieldResult.IterationNumber)                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticFarFieldResult.LoadStep)                                                                            | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticFarFieldResult.MaximumOccursOn)                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticFarFieldResult.MinimumOccursOn)                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticFarFieldResult.LoadStepNumber)                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticFarFieldResult.SolverComponentIDs)                                                        | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticFarFieldResult.Substep)                                                                              | Gets the Substep.                                                      |
| [`Average`](#AcousticFarFieldResult.Average)                                                                              | Gets the Average.                                                      |
| [`Maximum`](#AcousticFarFieldResult.Maximum)                                                                              | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticFarFieldResult.MaximumOfMaximumOverTime)                                            | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticFarFieldResult.MaximumOfMinimumOverTime)                                            | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticFarFieldResult.Minimum)                                                                              | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticFarFieldResult.MinimumOfMaximumOverTime)                                            | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticFarFieldResult.MinimumOfMinimumOverTime)                                            | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticFarFieldResult.Time)                                                                                    | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticFarFieldResult.DisplayTime)                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticFarFieldResult.DisplayOption)                                                                  | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticFarFieldResult.DpfEvaluation)                                                                  | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticFarFieldResult.By)                                                                                        | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticFarFieldResult.ItemType)                                                                            | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticFarFieldResult.CalculateTimeHistory)                                                    | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticFarFieldResult.Suppressed)                                                                        | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticFarFieldResult.Children)                                                                            | Gets the list of children.                                             |
| [`Comments`](#AcousticFarFieldResult.Comments)                                                                            | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticFarFieldResult.Figures)                                                                              | Gets the list of associated figures.                                   |
| [`Images`](#AcousticFarFieldResult.Images)                                                                                | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticFarFieldResult.Properties)                                                                        | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticFarFieldResult.VisibleProperties)                                                          | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFarFieldResult
```

## Property detail

### *property* AcousticFarFieldResult.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.PhiAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ThetaAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Density *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ModelThicknessInZDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ReferenceRMSSoundPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ReferenceSoundPower *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.SoundSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.EndingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.EndingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.StartingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.StartingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.PhiAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ThetaAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.PhiAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ThetaAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.YAxisExtrusionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticFarFieldResult.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
