# `AcousticFarFieldSoundPowerLevelWaterfallDiagram`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSoundPowerLevelWaterfallDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSoundPowerLevelWaterfallDiagram(internalObject: Any)

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram"></a>

### *class* AcousticFarFieldSoundPowerLevelWaterfallDiagram(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticFarFieldSoundPowerLevelWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`ExportToWAVFile`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToWAVFile)                     | Run the ExportToWAVFile action.                                                             |
| [`ExportToXMLFile`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToXMLFile)                     | Run the ExportToXMLFile action.                                                             |
| [`FetchRemoteResult`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetJSON`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetJSON)                                     | GetJSON method.                                                                             |
| [`GetLifetimeService`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                                            | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DampedFrequency`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DampedFrequency)                                       | Gets the DampedFrequency.                                                                                |
| [`DataModelObjectCategory`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`Density`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Density)                                                       | Gets or sets the Density.                                                                                |
| [`DisplayOption`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`EndingRadiationAnglePhi`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAnglePhi)                       | Gets or sets the EndingRadiationAnglePhi.                                                                |
| [`EndingRadiationAngleTheta`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAngleTheta)                   | Gets or sets the EndingRadiationAngleTheta.                                                              |
| [`FarFieldMicrophoneDefinitionMethod`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.FarFieldMicrophoneDefinitionMethod) | Gets or sets the FarFieldMicrophoneDefinitionMethod.                                                     |
| [`Figures`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Location)                                                     | Gets or sets the Location.                                                                               |
| [`LogarithmicDecrement`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                                                           |
| [`Maximum`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`ModalDampingRatio`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                                                              |
| [`ModelThicknessInZDirection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelThicknessInZDirection)                 | Gets or sets the ModelThicknessInZDirection.                                                             |
| [`ModelType`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelType)                                                   | Gets or sets the ModelType.                                                                              |
| [`Name`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                               | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                                | Path property.                                                                                           |
| [`PhiAngleEnd`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleEnd)                                               | Gets or sets the PhiAngleEnd.                                                                            |
| [`PhiAngleNoOfDivisions`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleNoOfDivisions)                           | Gets or sets the PhiAngleNoOfDivisions.                                                                  |
| [`PhiAngleStart`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleStart)                                           | Gets or sets the PhiAngleStart.                                                                          |
| [`PlotData`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ReferenceRMSSoundPressure`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceRMSSoundPressure)                   | Gets or sets the ReferenceRMSSoundPressure.                                                              |
| [`ReferenceSoundPower`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceSoundPower)                               | Gets or sets the ReferenceSoundPower.                                                                    |
| [`ReportedFrequency`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                              |
| [`ResultType`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`SoundSpeed`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SoundSpeed)                                                 | Gets or sets the SoundSpeed.                                                                             |
| [`SpatialRadiationAngle`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SpatialRadiationAngle)                           | Gets or sets the SpatialRadiationAngle.                                                                  |
| [`SphereRadius`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.SphereRadius)                                             | Gets or sets the SphereRadius.                                                                           |
| [`Stability`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Stability)                                                   | Gets the Stability.                                                                                      |
| [`StartingRadiationAnglePhi`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAnglePhi)                   | Gets or sets the StartingRadiationAnglePhi.                                                              |
| [`StartingRadiationAngleTheta`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAngleTheta)               | Gets or sets the StartingRadiationAngleTheta.                                                            |
| [`State`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.State)                                                           | State property.                                                                                          |
| [`Substep`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                                       | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                                  | SurfaceCoating property.                                                                                 |
| [`TabularData`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`ThetaAngleEnd`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleEnd)                                           | Gets or sets the ThetaAngleEnd.                                                                          |
| [`ThetaAngleNoOfDivisions`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleNoOfDivisions)                       | Gets or sets the ThetaAngleNoOfDivisions.                                                                |
| [`ThetaAngleStart`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleStart)                                       | Gets or sets the ThetaAngleStart.                                                                        |
| [`Time`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |
| [`Worksheet`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.Worksheet)                                                   | Get the ObjectiveWorksheet action.                                                                       |
| [`XCoordinate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.XCoordinate)                                               | Gets or sets the XCoordinate.                                                                            |
| [`YAxisExtrusionAngle`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.YAxisExtrusionAngle)                               | Gets or sets the YAxisExtrusionAngle.                                                                    |
| [`YCoordinate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.YCoordinate)                                               | Gets or sets the YCoordinate.                                                                            |
| [`ZCoordinate`](#AcousticFarFieldSoundPowerLevelWaterfallDiagram.ZCoordinate)                                               | Gets or sets the ZCoordinate.                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.AttachedRefs"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Average"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.By"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.CalculateTimeHistory"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Children"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ClsId"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.CombinationNumber"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Comments"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.CoordinateSystem"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.CrackFrontNumber"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.DampedFrequency"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.DataModelObjectCategory"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Density"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Density *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayOption"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayTime"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.DpfEvaluation"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAnglePhi"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAnglePhi *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAngleTheta"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.EndingRadiationAngleTheta *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.FarFieldMicrophoneDefinitionMethod"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Figures"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Frequency"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GlobalIDs"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GraphControlsXAxis"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupingFolder"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.IconName"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Identifier"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Images"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.InternalObject"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsSolved"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ItemType"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.IterationNumber"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStep"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepNumber"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Location"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.LogarithmicDecrement"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.LogarithmicDecrement *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Maximum"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOccursOn"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Minimum"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOccursOn"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModalDampingRatio"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModalDampingRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelThicknessInZDirection"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelThicknessInZDirection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelType"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ModelType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Name"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.NamedSelections"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectId"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectState"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectTags"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Parent"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Path"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleEnd"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleEnd *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleNoOfDivisions"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleNoOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleStart"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PhiAngleStart *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.PlotData"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Properties"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.RPMSelection"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceRMSSoundPressure"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceRMSSoundPressure *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceSoundPower"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReferenceSoundPower *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReportedFrequency"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ResultType"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.RpmSetNumber"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ScopingMethod"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.SeparateDataByEntity"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.SetNumber"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolverComponentIDs"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.SoundSpeed"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SoundSpeed *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.SpatialRadiationAngle"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SpatialRadiationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.SphereRadius"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SphereRadius *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Stability"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAnglePhi"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAnglePhi *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAngleTheta"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.StartingRadiationAngleTheta *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.State"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Substep"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Suppressed"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Surface"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.SurfaceCoating"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.TabularData"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleEnd"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleEnd *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleNoOfDivisions"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleNoOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleStart"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ThetaAngleStart *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Time"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Total"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.VisibleProperties"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayFilterBy"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayFrequencySelection"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayInterpolateData"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayLowerBand"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayMaxRPM"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayMinRPM"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayModeSelection"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayOrderSelection"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayRpmSelection"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayScopeToOrderLines"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayTimeSelection"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayUpperBand"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMaximum"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMinimum"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMaximum"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMinimum"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallShowTextOnMosaic"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Worksheet"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.XCoordinate"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.YAxisExtrusionAngle"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.YAxisExtrusionAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.YCoordinate"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ZCoordinate"></a>

### *property* AcousticFarFieldSoundPowerLevelWaterfallDiagram.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Activate"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddAlert"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddComment"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddConvergence"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddFigure"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddImage"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.BodyWhereMaximumOccurs"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ClearGeneratedData"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Copy"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.CopyTo"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateObjRef"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateParameter"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateResultsAtAllSets"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Cut"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Delete"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Duplicate"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.DuplicateWithoutResults"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Equals"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.EvaluateAllResults"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportAnimation"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToSTLFile"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToTextFile"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToWAVFile"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToWAVFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToXMLFile"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.ExportToXMLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.FetchRemoteResult"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.FetchRemoteResults"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetAPIName"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetAllProperties"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetChildren"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetDetailsView"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetEnumName"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetHashCode"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetIconFile"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetJSON"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetJSON() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetJSON method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetLifetimeService"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetNodalValues"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetObjectData"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetParameter"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPath"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPropertyName"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPropertyValue"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetQuantityName"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetVisibleProperties"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetVisiblePropertyNames"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupAllSimilarChildren"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupSimilarObjects"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.InitializeLifetimeService"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsPropertyEditable"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsPropertyVisible"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.Paste"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.PromoteToNamedSelection"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByAPIName"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyById"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByName"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveFromGroup"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveParameter"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.RenameBasedOnDefinition"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.RetrieveRemoteDPFResults"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSoundPowerLevelWaterfallDiagram.RetrieveResult"></a>

### AcousticFarFieldSoundPowerLevelWaterfallDiagram.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

