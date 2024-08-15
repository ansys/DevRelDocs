# `AcousticFarFieldSoundPowerLevelWaterfallDiagram`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSoundPowerLevelWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFarFieldSoundPowerLevelWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `ExportToXMLFile`         | Run the ExportToXMLFile action.                                                   |
| `ExportToWAVFile`         | Run the ExportToWAVFile action.                                                   |
| `ClearGeneratedData`      | Run the ClearGeneratedData action.                                                |
| `EvaluateAllResults`      | Run the EvaluateAllResults action.                                                |
| `FetchRemoteResults`      | Run the FetchRemoteResult action.                                                 |
| `ExportToTextFile`        | Run the ExportToTextFile action.                                                  |
| `ExportAnimation`         | Run the ExportAnimation action.                                                   |
| `DuplicateWithoutResults` | Run the DuplicateWithoutResults action.                                           |
| `CreateResultsAtAllSets`  | Creates results at all sets for results under a solution.                         |
| `PromoteToNamedSelection` | Run the PromoteToNamedSelection action.                                           |
| `CreateParameter`         | CreateParameter method.                                                           |
| `AddAlert`                | Creates a new Alert                                                               |
| `AddConvergence`          | Creates a new Convergence                                                         |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------|------------------------------------------------------------------------|
| `InternalObject`                     | Gets the internal object. For advanced usage only.                     |
| `DataModelObjectCategory`            | Gets the current DataModelObject's category.                           |
| `FarFieldMicrophoneDefinitionMethod` | Gets or sets the FarFieldMicrophoneDefinitionMethod.                   |
| `Worksheet`                          | Get the ObjectiveWorksheet action.                                     |
| `ReportedFrequency`                  | Gets the ReportedFrequency.                                            |
| `DampedFrequency`                    | Gets the DampedFrequency.                                              |
| `LogarithmicDecrement`               | Gets the LogarithmicDecrement.                                         |
| `ModalDampingRatio`                  | Gets the ModalDampingRatio.                                            |
| `PhiAngleNoOfDivisions`              | Gets or sets the PhiAngleNoOfDivisions.                                |
| `ThetaAngleNoOfDivisions`            | Gets or sets the ThetaAngleNoOfDivisions.                              |
| `Stability`                          | Gets the Stability.                                                    |
| `Density`                            | Gets or sets the Density.                                              |
| `XCoordinate`                        | Gets or sets the XCoordinate.                                          |
| `YCoordinate`                        | Gets or sets the YCoordinate.                                          |
| `ZCoordinate`                        | Gets or sets the ZCoordinate.                                          |
| `ModelThicknessInZDirection`         | Gets or sets the ModelThicknessInZDirection.                           |
| `ReferenceRMSSoundPressure`          | Gets or sets the ReferenceRMSSoundPressure.                            |
| `ReferenceSoundPower`                | Gets or sets the ReferenceSoundPower.                                  |
| `Frequency`                          | Gets or sets the Frequency.                                            |
| `SoundSpeed`                         | Gets or sets the SoundSpeed.                                           |
| `EndingRadiationAnglePhi`            | Gets or sets the EndingRadiationAnglePhi.                              |
| `EndingRadiationAngleTheta`          | Gets or sets the EndingRadiationAngleTheta.                            |
| `StartingRadiationAnglePhi`          | Gets or sets the StartingRadiationAnglePhi.                            |
| `StartingRadiationAngleTheta`        | Gets or sets the StartingRadiationAngleTheta.                          |
| `PhiAngleEnd`                        | Gets or sets the PhiAngleEnd.                                          |
| `ThetaAngleEnd`                      | Gets or sets the ThetaAngleEnd.                                        |
| `SphereRadius`                       | Gets or sets the SphereRadius.                                         |
| `PhiAngleStart`                      | Gets or sets the PhiAngleStart.                                        |
| `ThetaAngleStart`                    | Gets or sets the ThetaAngleStart.                                      |
| `YAxisExtrusionAngle`                | Gets or sets the YAxisExtrusionAngle.                                  |
| `ModelType`                          | Gets or sets the ModelType.                                            |
| `SpatialRadiationAngle`              | Gets or sets the SpatialRadiationAngle.                                |
| `PlotData`                           | Gets the result table.                                                 |
| `Location`                           | Gets or sets the Location.                                             |
| `TimeForMinimumOfMinimumValues`      | Get the Time for the minimum of minimum values.                        |
| `TimeForMinimumOfMaximumValues`      | Get the Time for the minimum of maximum values.                        |
| `LoadStepForMinimumOfMinimumValues`  | Get the Load Step for the minimum of minimum values.                   |
| `LoadStepForMinimumOfMaximumValues`  | Get the Load Step for the minimum of maximum values.                   |
| `TimeForMaximumOfMinimumValues`      | Get the Time for the maximum of minimum values.                        |
| `TimeForMaximumOfMaximumValues`      | Get the Time for the maximum of maximum values.                        |
| `LoadStepForMaximumOfMinimumValues`  | Get the Load Step for the maximum of minimum values.                   |
| `LoadStepForMaximumOfMaximumValues`  | Get the Load Step for the maximum of maximum values.                   |
| `IsSolved`                           | Gets the IsSolved.                                                     |
| `CoordinateSystem`                   | Gets or sets the Coordinate System.                                    |
| `ScopingMethod`                      | Gets or sets the ScopingMethod.                                        |
| `SetNumber`                          | Gets or sets the Set Number.                                           |
| `CombinationNumber`                  | Gets or sets the Combination Number for a Solution Combination result. |
| `SolutionCombinationDriver`          | Gets or sets the SolutionCombinationDriver.                            |
| `Path`                               | Path property.                                                         |
| `Surface`                            | Surface property.                                                      |
| `NamedSelections`                    | Gets or sets the NamedSelections.                                      |
| `WaterfallPanelShowTextOnMosaic`     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| `CrackFrontNumber`                   | Gets or sets the CrackFrontNumber.                                     |
| `GlobalIDs`                          | Gets or sets the GlobalIDs.                                            |
| `Identifier`                         | Gets or sets the Identifier.                                           |
| `IterationNumber`                    | Gets the IterationNumber.                                              |
| `LoadStep`                           | Gets the LoadStep.                                                     |
| `MaximumOccursOn`                    | Gets the MaximumOccursOn.                                              |
| `MinimumOccursOn`                    | Gets the MinimumOccursOn.                                              |
| `LoadStepNumber`                     | Gets or sets the LoadStepNumber.                                       |
| `SolverComponentIDs`                 | Gets or sets the SolverComponentIDs.                                   |
| `Substep`                            | Gets the Substep.                                                      |
| `Average`                            | Gets the Average.                                                      |
| `Maximum`                            | Gets the Maximum.                                                      |
| `MaximumOfMaximumOverTime`           | Gets the MaximumOfMaximumOverTime.                                     |
| `MaximumOfMinimumOverTime`           | Gets the MaximumOfMinimumOverTime.                                     |
| `Minimum`                            | Gets the Minimum.                                                      |
| `MinimumOfMaximumOverTime`           | Gets the MinimumOfMaximumOverTime.                                     |
| `MinimumOfMinimumOverTime`           | Gets the MinimumOfMinimumOverTime.                                     |
| `Time`                               | Gets the Time.                                                         |
| `DisplayTime`                        | Gets or sets the DisplayTime.                                          |
| `GraphControlsXAxis`                 | Gets or sets the GraphControlsXAxis.                                   |
| `DisplayOption`                      | Gets or sets the DisplayOption.                                        |
| `DpfEvaluation`                      | Gets or sets the DpfEvaluation.                                        |
| `By`                                 | Gets or sets the By.                                                   |
| `ItemType`                           | Gets or sets the ItemType.                                             |
| `CalculateTimeHistory`               | Gets or sets the CalculateTimeHistory.                                 |
| `Suppressed`                         | Gets or sets the Suppressed.                                           |
| `Children`                           | Gets the list of children.                                             |
| `Comments`                           | Gets the list of associated comments.                                  |
| `Figures`                            | Gets the list of associated figures.                                   |
| `Images`                             | Gets the list of associated images.                                    |
| `InternalObject`                     | Gets the internal object. For advanced usage only.                     |
| `Properties`                         | Gets the list of properties for this object.                           |
| `VisibleProperties`                  | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

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

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

