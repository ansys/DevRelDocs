# `MeshWorkflowStepGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup(internalObject: Any)

<a id="MeshWorkflowStepGroup"></a>

### *class* MeshWorkflowStepGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Object that wraps IDSMeshWorkflowSteps.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|---------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`GetMeshWorkflowsControlPropertyList`](#MeshWorkflowStepGroup.GetMeshWorkflowsControlPropertyList)     | GetMeshWorkflowsControlPropertyList method.   |
| [`GetMeshWorkflowsOperationPropertyList`](#MeshWorkflowStepGroup.GetMeshWorkflowsOperationPropertyList) | GetMeshWorkflowsOperationPropertyList method. |
| [`GetMeshWorkflowsOutcomePropertyList`](#MeshWorkflowStepGroup.GetMeshWorkflowsOutcomePropertyList)     | GetMeshWorkflowsOutcomePropertyList method.   |
| [`GetMeshWorkflowsPropertyList`](#MeshWorkflowStepGroup.GetMeshWorkflowsPropertyList)                   | GetMeshWorkflowsPropertyList method.          |

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowStepGroup.Activate)                                                                       | Activate the current object.                                                                                                                                                                                                                                                                                                      |
| [`AddFigure`](#MeshWorkflowStepGroup.AddFigure)                                                                     | Creates a new child Figure.                                                                                                                                                                                                                                                                                                       |
| [`AddImage`](#MeshWorkflowStepGroup.AddImage)                                                                       | Creates a new child Image.                                                                                                                                                                                                                                                                                                        |
| [`AddSettings`](#MeshWorkflowStepGroup.AddSettings)                                                                 | Add the settings of the input SettingsType to the Steps node.                                                                                                                                                                                                                                                                     |
| [`AddStep`](#MeshWorkflowStepGroup.AddStep)                                                                         | Add another operation to the sequence of steps to be executed for the mesh workflow.                                                                                                                                                                                                                                              |
| [`CanCheckPublicStateCallbackForIM`](#MeshWorkflowStepGroup.CanCheckPublicStateCallbackForIM)                       | CanCheckPublicStateCallbackForIM method.                                                                                                                                                                                                                                                                                          |
| [`CanConvertSizingSettings`](#MeshWorkflowStepGroup.CanConvertSizingSettings)                                       | Returns whether the active sizing settings can be converted to the input SettingsType.                                                                                                                                                                                                                                            |
| [`CanInsertOperationByType`](#MeshWorkflowStepGroup.CanInsertOperationByType)                                       | Returns whether an operation of the given type can be inserted at the requested position. The ignoreExecutedChecks parameter determines whether to ignore any checks for already executed operations.                                                                                                                             |
| [`CanRunNextStep`](#MeshWorkflowStepGroup.CanRunNextStep)                                                           | CanRunNextStep method.                                                                                                                                                                                                                                                                                                            |
| [`CanShowPublishStateIM`](#MeshWorkflowStepGroup.CanShowPublishStateIM)                                             | CanShowPublishStateIM method.                                                                                                                                                                                                                                                                                                     |
| [`ClearDataAndDisableCheckpoints`](#MeshWorkflowStepGroup.ClearDataAndDisableCheckpoints)                           | Clear all checkpoints data and disable checkpointing for the workflow.                                                                                                                                                                                                                                                            |
| [`ConvertSizingSettings`](#MeshWorkflowStepGroup.ConvertSizingSettings)                                             | Convert the active sizing settings to the input SettingsType for the Steps node.                                                                                                                                                                                                                                                  |
| [`ConvertWorkflow`](#MeshWorkflowStepGroup.ConvertWorkflow)                                                         | Converts the workflow type to Custom                                                                                                                                                                                                                                                                                              |
| [`Copy`](#MeshWorkflowStepGroup.Copy)                                                                               | Copies the current DataModelObject.                                                                                                                                                                                                                                                                                               |
| [`CopyAttachmentPathToClipboard`](#MeshWorkflowStepGroup.CopyAttachmentPathToClipboard)                             | Copies the current attachment path to clipboard.                                                                                                                                                                                                                                                                                  |
| [`CopyTo`](#MeshWorkflowStepGroup.CopyTo)                                                                           | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                        |
| [`CreateObjRef`](#MeshWorkflowStepGroup.CreateObjRef)                                                               | CreateObjRef method.                                                                                                                                                                                                                                                                                                              |
| [`CreateParameter`](#MeshWorkflowStepGroup.CreateParameter)                                                         | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                           |
| [`Cut`](#MeshWorkflowStepGroup.Cut)                                                                                 | Cuts the current DataModelObject.                                                                                                                                                                                                                                                                                                 |
| [`Delete`](#MeshWorkflowStepGroup.Delete)                                                                           | Run the Delete action.                                                                                                                                                                                                                                                                                                            |
| [`DeleteAllStepsAndClearGeneratedData`](#MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData)                 | Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| [`DeleteSettings`](#MeshWorkflowStepGroup.DeleteSettings)                                                           | Delete the settings of the input SettingsType from the Steps node. All the Settings specific entries are removed automatically to the Steps details.                                                                                                                                                                              |
| [`DisableAllCheckpoints`](#MeshWorkflowStepGroup.DisableAllCheckpoints)                                             | Disables checkpoints for all editable steps in the workflow.                                                                                                                                                                                                                                                                      |
| [`Duplicate`](#MeshWorkflowStepGroup.Duplicate)                                                                     | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                    |
| [`EnableAllCheckpoints`](#MeshWorkflowStepGroup.EnableAllCheckpoints)                                               | Enables checkpoints for all editable steps in the workflow.                                                                                                                                                                                                                                                                       |
| [`Equals`](#MeshWorkflowStepGroup.Equals)                                                                           | Equals method.                                                                                                                                                                                                                                                                                                                    |
| [`ExecuteAllSteps`](#MeshWorkflowStepGroup.ExecuteAllSteps)                                                         | Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).                                                                                                                                                                                                                                    |
| [`ExecuteNextStep`](#MeshWorkflowStepGroup.ExecuteNextStep)                                                         | Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.                                                                                                                                                                                                                |
| [`ExecuteUpToStep`](#MeshWorkflowStepGroup.ExecuteUpToStep)                                                         | Executes any not yet ready steps up to and including the specified step.                                                                                                                                                                                                                                                          |
| [`ForceRevertStepAndExecuteToPrevious`](#MeshWorkflowStepGroup.ForceRevertStepAndExecuteToPrevious)                 | Revert to the last available checkpoint; if no checkpoint is available, clear generated data, enable the checkpoint for current step and execute up to the previous operation.                                                                                                                                                    |
| [`GetAPIName`](#MeshWorkflowStepGroup.GetAPIName)                                                                   | Property name bound to dispId.                                                                                                                                                                                                                                                                                                    |
| [`GetAllProperties`](#MeshWorkflowStepGroup.GetAllProperties)                                                       | GetAllProperties method.                                                                                                                                                                                                                                                                                                          |
| [`GetApplicableOperationTypes`](#MeshWorkflowStepGroup.GetApplicableOperationTypes)                                 | GetApplicableOperationTypes method.                                                                                                                                                                                                                                                                                               |
| [`GetChildren`](#MeshWorkflowStepGroup.GetChildren)                                                                 | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                      |
| [`GetDetailsView`](#MeshWorkflowStepGroup.GetDetailsView)                                                           | GetDetailsView method.                                                                                                                                                                                                                                                                                                            |
| [`GetDomainBrowserAvailableMorphFieldPatterns`](#MeshWorkflowStepGroup.GetDomainBrowserAvailableMorphFieldPatterns) | GetDomainBrowserAvailableMorphFieldPatterns method.                                                                                                                                                                                                                                                                               |
| [`GetDomainBrowserAvailableScopes`](#MeshWorkflowStepGroup.GetDomainBrowserAvailableScopes)                         | GetDomainBrowserAvailableScopes method.                                                                                                                                                                                                                                                                                           |
| [`GetDomainBrowserAvailableSizeFieldPatterns`](#MeshWorkflowStepGroup.GetDomainBrowserAvailableSizeFieldPatterns)   | GetDomainBrowserAvailableSizeFieldPatterns method.                                                                                                                                                                                                                                                                                |
| [`GetEnumName`](#MeshWorkflowStepGroup.GetEnumName)                                                                 | Enum name bound to value                                                                                                                                                                                                                                                                                                          |
| [`GetHashCode`](#MeshWorkflowStepGroup.GetHashCode)                                                                 | GetHashCode method.                                                                                                                                                                                                                                                                                                               |
| [`GetIconFile`](#MeshWorkflowStepGroup.GetIconFile)                                                                 | GetIconFile method.                                                                                                                                                                                                                                                                                                               |
| [`GetLifetimeService`](#MeshWorkflowStepGroup.GetLifetimeService)                                                   | GetLifetimeService method.                                                                                                                                                                                                                                                                                                        |
| [`GetNextExecutableControlIdByType`](#MeshWorkflowStepGroup.GetNextExecutableControlIdByType)                       | GetNextExecutableControlIdByType method.                                                                                                                                                                                                                                                                                          |
| [`GetNextExecutableOrUndefinedControlIdByType`](#MeshWorkflowStepGroup.GetNextExecutableOrUndefinedControlIdByType) | GetNextExecutableOrUndefinedControlIdByType method.                                                                                                                                                                                                                                                                               |
| [`GetObjectData`](#MeshWorkflowStepGroup.GetObjectData)                                                             | GetObjectData method.                                                                                                                                                                                                                                                                                                             |
| [`GetParameter`](#MeshWorkflowStepGroup.GetParameter)                                                               | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                           |
| [`GetPath`](#MeshWorkflowStepGroup.GetPath)                                                                         | GetPath method.                                                                                                                                                                                                                                                                                                                   |
| [`GetPropertyName`](#MeshWorkflowStepGroup.GetPropertyName)                                                         | GetPropertyName method.                                                                                                                                                                                                                                                                                                           |
| [`GetPropertyValue`](#MeshWorkflowStepGroup.GetPropertyValue)                                                       | GetPropertyValue method.                                                                                                                                                                                                                                                                                                          |
| [`GetPropertyWorksheetInfo`](#MeshWorkflowStepGroup.GetPropertyWorksheetInfo)                                       | GetPropertyWorksheetInfo method.                                                                                                                                                                                                                                                                                                  |
| [`GetUnpublishedList`](#MeshWorkflowStepGroup.GetUnpublishedList)                                                   | GetUnpublishedList method.                                                                                                                                                                                                                                                                                                        |
| [`GetVisibleProperties`](#MeshWorkflowStepGroup.GetVisibleProperties)                                               | GetVisibleProperties method.                                                                                                                                                                                                                                                                                                      |
| [`GetVisiblePropertyNames`](#MeshWorkflowStepGroup.GetVisiblePropertyNames)                                         | GetVisiblePropertyNames method.                                                                                                                                                                                                                                                                                                   |
| [`GroupAllSimilarChildren`](#MeshWorkflowStepGroup.GroupAllSimilarChildren)                                         | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                           |
| [`GroupSimilarObjects`](#MeshWorkflowStepGroup.GroupSimilarObjects)                                                 | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                               |
| [`GroupSteps`](#MeshWorkflowStepGroup.GroupSteps)                                                                   | GroupSteps method.                                                                                                                                                                                                                                                                                                                |
| [`HasUnderdefinedSettingsData`](#MeshWorkflowStepGroup.HasUnderdefinedSettingsData)                                 | HasUnderdefinedSettingsData method.                                                                                                                                                                                                                                                                                               |
| [`InitializeLifetimeService`](#MeshWorkflowStepGroup.InitializeLifetimeService)                                     | InitializeLifetimeService method.                                                                                                                                                                                                                                                                                                 |
| [`IsPropertyEditable`](#MeshWorkflowStepGroup.IsPropertyEditable)                                                   | IsPropertyEditable method.                                                                                                                                                                                                                                                                                                        |
| [`IsPropertyVisible`](#MeshWorkflowStepGroup.IsPropertyVisible)                                                     | IsPropertyVisible method.                                                                                                                                                                                                                                                                                                         |
| [`IsSizingSettings`](#MeshWorkflowStepGroup.IsSizingSettings)                                                       | IsSizingSettings method.                                                                                                                                                                                                                                                                                                          |
| [`MeshWorkflowSteps`](#MeshWorkflowStepGroup.MeshWorkflowSteps)                                                     | Gets the ordered list of Steps for the workflow.                                                                                                                                                                                                                                                                                  |
| [`Paste`](#MeshWorkflowStepGroup.Paste)                                                                             | Pastes to the current DataModelObject context.                                                                                                                                                                                                                                                                                    |
| [`PreviewNextStep`](#MeshWorkflowStepGroup.PreviewNextStep)                                                         | Previews the next available step in the workflow. After the preview, the step will contain a preview outcome with the information required for the validation of the user inputs. The preview outcome can be returned using the MeshWorkflowOutcomes method of the step.                                                          |
| [`PropagateSettings`](#MeshWorkflowStepGroup.PropagateSettings)                                                     | Propagate the settings of the input SettingsType to the attributes of the Step nodes. The meshing attributes of the Step nodes will then be automatically defined based on the physical parameters of the settings. Otherwise, the meshing attributes need to be manually specified.                                              |
| [`PropertyByAPIName`](#MeshWorkflowStepGroup.PropertyByAPIName)                                                     | Get a property by its API name.                                                                                                                                                                                                                                                                                                   |
| [`PropertyById`](#MeshWorkflowStepGroup.PropertyById)                                                               | PropertyById method.                                                                                                                                                                                                                                                                                                              |
| [`PropertyByName`](#MeshWorkflowStepGroup.PropertyByName)                                                           | Get a property by its unique name.                                                                                                                                                                                                                                                                                                |
| [`PropertyTypeInfo`](#MeshWorkflowStepGroup.PropertyTypeInfo)                                                       | PropertyTypeInfo method.                                                                                                                                                                                                                                                                                                          |
| [`PublishIMProp`](#MeshWorkflowStepGroup.PublishIMProp)                                                             | PublishIMProp method.                                                                                                                                                                                                                                                                                                             |
| [`RemoveFromGroup`](#MeshWorkflowStepGroup.RemoveFromGroup)                                                         | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                                                                                                                                                                                                       |
| [`RemoveParameter`](#MeshWorkflowStepGroup.RemoveParameter)                                                         | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                 |
| [`RenameBasedOnType`](#MeshWorkflowStepGroup.RenameBasedOnType)                                                     | Renames applying the default name based on type.                                                                                                                                                                                                                                                                                  |
| [`RevertToLastCheckpoint`](#MeshWorkflowStepGroup.RevertToLastCheckpoint)                                           | Revert to the last available checkpoint; if no checkpoint is available, then an exception will be raised.                                                                                                                                                                                                                         |
| [`RevertToStep`](#MeshWorkflowStepGroup.RevertToStep)                                                               | Revert to the specified step; if no checkpoint is available, then an exception will be raised.                                                                                                                                                                                                                                    |
| [`SetPropertyValue`](#MeshWorkflowStepGroup.SetPropertyValue)                                                       | SetPropertyValue method.                                                                                                                                                                                                                                                                                                          |
| [`SetPublish`](#MeshWorkflowStepGroup.SetPublish)                                                                   | SetPublish method.                                                                                                                                                                                                                                                                                                                |
| [`SetUnpublish`](#MeshWorkflowStepGroup.SetUnpublish)                                                               | SetUnpublish method.                                                                                                                                                                                                                                                                                                              |
| [`SettingsReleaseStatusString`](#MeshWorkflowStepGroup.SettingsReleaseStatusString)                                 | SettingsReleaseStatusString method.                                                                                                                                                                                                                                                                                               |
| [`SettingsTypeInformation`](#MeshWorkflowStepGroup.SettingsTypeInformation)                                         | SettingsTypeInformation method.                                                                                                                                                                                                                                                                                                   |
| [`SettingsTypeInformationJson`](#MeshWorkflowStepGroup.SettingsTypeInformationJson)                                 | SettingsTypeInformationJson method.                                                                                                                                                                                                                                                                                               |
| [`StartCodeGeneration`](#MeshWorkflowStepGroup.StartCodeGeneration)                                                 | Start the code generation for the Meshing operations.                                                                                                                                                                                                                                                                             |
| [`StopCodeGeneration`](#MeshWorkflowStepGroup.StopCodeGeneration)                                                   | Stop the code generation for the Meshing operations.                                                                                                                                                                                                                                                                              |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AbsoluteDistanceAcousticLayer`](#MeshWorkflowStepGroup.AbsoluteDistanceAcousticLayer)                 | Gets or sets the absolute distance for the acoustic layer when not computing from frequency.                                                                                                                          |
| [`AbsoluteDistancePML`](#MeshWorkflowStepGroup.AbsoluteDistancePML)                                     | Gets or sets the absolute distance for the PML layer when not computing from frequency.                                                                                                                               |
| [`AcousticCurvatureAngle`](#MeshWorkflowStepGroup.AcousticCurvatureAngle)                               | Gets or sets the curvature angle of the mesh to be used in workflow steps for the acoustic workflow. If set to 0, the default curvature angle is used.                                                                |
| [`AcousticDefeatureMeshSize`](#MeshWorkflowStepGroup.AcousticDefeatureMeshSize)                         | Gets or sets the defeature element size of the mesh to be used in workflow steps for the acoustic workflow. If set to 0, the value is automatically defined based on the model size.                                  |
| [`AcousticGrowthRate`](#MeshWorkflowStepGroup.AcousticGrowthRate)                                       | Gets or sets the growth rate of the mesh to be used in workflow steps for the acoustic workflow. If set to 0, the default growth rate is used.                                                                        |
| [`AcousticMinimalFrequency`](#MeshWorkflowStepGroup.AcousticMinimalFrequency)                           | Gets or sets the minimal frequency used for computing absolute distances in frequency range mode.                                                                                                                     |
| [`AcousticMinimumMeshSize`](#MeshWorkflowStepGroup.AcousticMinimumMeshSize)                             | Gets or sets the minimum element size of the mesh to be used in workflow steps for the acoustic workflow. If set to 0, the value is automatically defined based on the model size.                                    |
| [`AcousticSettingsMode`](#MeshWorkflowStepGroup.AcousticSettingsMode)                                   | Gets or sets the acoustic settings mode defining whether to use a single frequency or a frequency range for the acoustic scenario.                                                                                    |
| [`ActiveSizingSettings`](#MeshWorkflowStepGroup.ActiveSizingSettings)                                   | Gets the active sizing settings type.                                                                                                                                                                                 |
| [`AnalysisFrequency`](#MeshWorkflowStepGroup.AnalysisFrequency)                                         | Defines the analysis frequency of the acoustic scenario.                                                                                                                                                              |
| [`ApplicableSettingsTypes`](#MeshWorkflowStepGroup.ApplicableSettingsTypes)                             | ApplicableSettingsTypes property.                                                                                                                                                                                     |
| [`AttachedRefs`](#MeshWorkflowStepGroup.AttachedRefs)                                                   | AttachedRefs property.                                                                                                                                                                                                |
| [`Attachment`](#MeshWorkflowStepGroup.Attachment)                                                       |                                                                                                                                                                                                                       |
| [`BoundingBoxFactor`](#MeshWorkflowStepGroup.BoundingBoxFactor)                                         | Gets or sets the bounding box factor applied to compute automatically the StackerMeshSize from the model. If set to 0, the default bouding box factor is used.                                                        |
| [`Children`](#MeshWorkflowStepGroup.Children)                                                           | Gets the list of children.                                                                                                                                                                                            |
| [`ClsId`](#MeshWorkflowStepGroup.ClsId)                                                                 | ClsId property.                                                                                                                                                                                                       |
| [`ComputeAbsoluteDistancesFromFrequency`](#MeshWorkflowStepGroup.ComputeAbsoluteDistancesFromFrequency) | Gets or sets whether to compute the PML and acoustic layer absolute distances from the acoustic frequency and wave velocity.                                                                                          |
| [`CurvatureAngle`](#MeshWorkflowStepGroup.CurvatureAngle)                                               | Gets or sets the curvature angle of the mesh to be used in workflow steps. If set to 0, the default curvature angle is used.                                                                                          |
| [`CustomGlobalCurvatureAngle`](#MeshWorkflowStepGroup.CustomGlobalCurvatureAngle)                       | Gets or sets the custom angle to be used for the GlobalCurvatureAngle. If this value is 0, the default GlobalCurvatureAngle is used. Defaults to 0. This property should only accessed for internal usage.            |
| [`CustomGlobalGrowthRate`](#MeshWorkflowStepGroup.CustomGlobalGrowthRate)                               | Gets or sets the custom growth rate to be used for the GlobalGrowthRate. If this value is 0, the default GlobalGrowthRate is used. Defaults to 0. This property should only accessed for internal usage.              |
| [`CustomGlobalMeshSize`](#MeshWorkflowStepGroup.CustomGlobalMeshSize)                                   | Gets or sets the custom size to be used for the GlobalMeshSize. If this value is 0, the default GlobalMeshSize is used. Defaults to 0. This property should only accessed for internal usage.                         |
| [`CustomGlobalMinimalMeshSize`](#MeshWorkflowStepGroup.CustomGlobalMinimalMeshSize)                     | Gets or sets the custom size to be used for the GlobalMinimalMeshSize. If this value is 0, the default GlobalMinimalMeshSize is used. Defaults to 0. This property should only accessed for internal usage.           |
| [`CustomNumberOfAcousticLayers`](#MeshWorkflowStepGroup.CustomNumberOfAcousticLayers)                   | Gets or sets the custom number of layers in the acoustic region. If this value is 0, the default NumberOfAcousticLayers is used. Defaults to 0. This property should only accessed for internal usage.                |
| [`CustomNumberOfPMLs`](#MeshWorkflowStepGroup.CustomNumberOfPMLs)                                       | Gets or sets the custom number of layers in the perfectly meshed layers region. If this value is 0, the default NumberOfAcousticLayers is used. Defaults to 0. This property should only accessed for internal usage. |
| [`DataModelObjectCategory`](#MeshWorkflowStepGroup.DataModelObjectCategory)                             | Gets the current DataModelObject's category.                                                                                                                                                                          |
| [`Direction`](#MeshWorkflowStepGroup.Direction)                                                         | Gets or sets the Stacker Direction coordinates.                                                                                                                                                                       |
| [`DirectionX`](#MeshWorkflowStepGroup.DirectionX)                                                       | Gets or sets the X component of stacking direction used by stacker operations , with respect to Global Coordinate System.                                                                                             |
| [`DirectionY`](#MeshWorkflowStepGroup.DirectionY)                                                       | Gets or sets the Y component of stacking direction to be used in stacker steps, with respect to Global Coordinate System.                                                                                             |
| [`DirectionZ`](#MeshWorkflowStepGroup.DirectionZ)                                                       | Gets or sets the Z component of stacking direction to be used in stacker steps, with respect to Global Coordinate System.                                                                                             |
| [`Figures`](#MeshWorkflowStepGroup.Figures)                                                             | Gets the list of associated figures.                                                                                                                                                                                  |
| [`GlobalBoundingBoxFactor`](#MeshWorkflowStepGroup.GlobalBoundingBoxFactor)                             | Gets or sets the bounding box factor applied to compute automatically the GlobalMeshSize from the model. If set to 0, the default bouding box factor is used.                                                         |
| [`GlobalCurvatureAngle`](#MeshWorkflowStepGroup.GlobalCurvatureAngle)                                   | Gets or sets the curvature angle of the mesh to be used in workflow steps. If set to 0, the default curvature angle is used.                                                                                          |
| [`GlobalDefeatureMeshSize`](#MeshWorkflowStepGroup.GlobalDefeatureMeshSize)                             | Gets or sets the defeature element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.                                                            |
| [`GlobalGrowthRate`](#MeshWorkflowStepGroup.GlobalGrowthRate)                                           | Gets or sets the growth rate of the mesh to be used in workflow steps. If set to 0, the default growth rate is used.                                                                                                  |
| [`GlobalMeshSize`](#MeshWorkflowStepGroup.GlobalMeshSize)                                               | Gets or sets the element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.                                                                      |
| [`GlobalMinimalMeshSize`](#MeshWorkflowStepGroup.GlobalMinimalMeshSize)                                 | Gets or sets the minimal element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.                                                              |
| [`GroupingFolder`](#MeshWorkflowStepGroup.GroupingFolder)                                               | GroupingFolder property.                                                                                                                                                                                              |
| [`GrowthRate`](#MeshWorkflowStepGroup.GrowthRate)                                                       | Gets or sets the growth rate of the mesh to be used in workflow steps. If set to 0, the default growth rate is used.                                                                                                  |
| [`IconName`](#MeshWorkflowStepGroup.IconName)                                                           | IconName property.                                                                                                                                                                                                    |
| [`Images`](#MeshWorkflowStepGroup.Images)                                                               | Gets the list of associated images.                                                                                                                                                                                   |
| [`InternalObject`](#MeshWorkflowStepGroup.InternalObject)                                               | Gets the internal object. For advanced usage only.                                                                                                                                                                    |
| [`LateralDefeatureSize`](#MeshWorkflowStepGroup.LateralDefeatureSize)                                   | Gets or sets the defeature size to be used along the lateral direction of stacking in stacker operations.                                                                                                             |
| [`MaximumMeshSize`](#MeshWorkflowStepGroup.MaximumMeshSize)                                             | Gets or sets the element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.                                                                      |
| [`MeshSize`](#MeshWorkflowStepGroup.MeshSize)                                                           | Defines the mesh size of the acoustic scenario based on the wave velocity and the frequency.                                                                                                                          |
| [`MinimumMeshSize`](#MeshWorkflowStepGroup.MinimumMeshSize)                                             | Gets or sets the minimal element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.                                                              |
| [`Name`](#MeshWorkflowStepGroup.Name)                                                                   | Name property.                                                                                                                                                                                                        |
| [`NonStackableBodyMeshSize`](#MeshWorkflowStepGroup.NonStackableBodyMeshSize)                           | Gets or sets the element size to be used in meshing non-stackable bodies in stacker workflow.                                                                                                                         |
| [`NumberOfAcousticLayers`](#MeshWorkflowStepGroup.NumberOfAcousticLayers)                               | Gets or sets the number of layers in the acoustic region. If set to 0, the value defaults to 1 if QuadraticElements is enabled (see ) or 2 otherwise.                                                                 |
| [`NumberOfCores`](#MeshWorkflowStepGroup.NumberOfCores)                                                 | Defines how many CPU cores to be used in an operation (if supported by the operation).                                                                                                                                |
| [`NumberOfPMLs`](#MeshWorkflowStepGroup.NumberOfPMLs)                                                   | Gets or sets the number of layers in the perfectly meshed layers region. If set to 0, the value defaults to 2 if QuadraticElements is enabled (see ) or 4 otherwise.                                                  |
| [`ObjectId`](#MeshWorkflowStepGroup.ObjectId)                                                           | ObjectId property.                                                                                                                                                                                                    |
| [`ObjectState`](#MeshWorkflowStepGroup.ObjectState)                                                     | ObjectState property.                                                                                                                                                                                                 |
| [`ObjectTags`](#MeshWorkflowStepGroup.ObjectTags)                                                       | ObjectTags property.                                                                                                                                                                                                  |
| [`Origin`](#MeshWorkflowStepGroup.Origin)                                                               | Gets or sets the Stacker origin coordinates.                                                                                                                                                                          |
| [`OriginX`](#MeshWorkflowStepGroup.OriginX)                                                             | Gets or sets the X coordinate location of base face for the volume flattening step.                                                                                                                                   |
| [`OriginY`](#MeshWorkflowStepGroup.OriginY)                                                             | Gets or sets the Y coordinate location of base face for the volume flattening step.                                                                                                                                   |
| [`OriginZ`](#MeshWorkflowStepGroup.OriginZ)                                                             | Gets or sets the Z coordinate location of base face for the volume flattening step.                                                                                                                                   |
| [`PMLModality`](#MeshWorkflowStepGroup.PMLModality)                                                     | Gets or sets the PML grid modality (O-Grid or H-Grid) for the acoustic settings.                                                                                                                                      |
| [`Parent`](#MeshWorkflowStepGroup.Parent)                                                               | Parent property.                                                                                                                                                                                                      |
| [`Properties`](#MeshWorkflowStepGroup.Properties)                                                       | Gets the list of properties for this object.                                                                                                                                                                          |
| [`QuadraticElements`](#MeshWorkflowStepGroup.QuadraticElements)                                         | Defines if the quadratic elements are used for the mesh generation.                                                                                                                                                   |
| [`QueryMappingInfo`](#MeshWorkflowStepGroup.QueryMappingInfo)                                           | QueryMappingInfo property.                                                                                                                                                                                            |
| [`QueryMappingInfoJson`](#MeshWorkflowStepGroup.QueryMappingInfoJson)                                   | QueryMappingInfoJson property.                                                                                                                                                                                        |
| [`SlicerLayerHeight`](#MeshWorkflowStepGroup.SlicerLayerHeight)                                         | Gets or sets the spacing between newly created parallel planes used in workflow steps for the slicer workflow.                                                                                                        |
| [`SlicerLayerStart`](#MeshWorkflowStepGroup.SlicerLayerStart)                                           | Gets or sets the z coordinate of the first plane used in workflow steps for the slicer workflow.                                                                                                                      |
| [`SolidAspectRatioHeightLimit`](#MeshWorkflowStepGroup.SolidAspectRatioHeightLimit)                     | Defines the aspect ratio height limit to be used when determining if the mesh meets quality criteria. If exceeded, an element set will be created and an error will be returned.                                      |
| [`SolidQuality`](#MeshWorkflowStepGroup.SolidQuality)                                                   | Defines if the solid mesh quality will be validated.                                                                                                                                                                  |
| [`SolidSkewnessLimit`](#MeshWorkflowStepGroup.SolidSkewnessLimit)                                       | Defines the skewness limit to be used when determining if the mesh meets quality criteria. If exceeded, an element set will be created and an error will be returned.                                                 |
| [`SpeedOfSound`](#MeshWorkflowStepGroup.SpeedOfSound)                                                   | Defines the speed of sound in the acoustic scenario.                                                                                                                                                                  |
| [`StackingDefeatureSize`](#MeshWorkflowStepGroup.StackingDefeatureSize)                                 | Gets or sets the defeature size to be used along the stacking direction in stacker operations.                                                                                                                        |
| [`State`](#MeshWorkflowStepGroup.State)                                                                 | State property.                                                                                                                                                                                                       |
| [`Suppressed`](#MeshWorkflowStepGroup.Suppressed)                                                       | Gets or sets the Suppressed.                                                                                                                                                                                          |
| [`SurfaceAspectRatioHeightLimit`](#MeshWorkflowStepGroup.SurfaceAspectRatioHeightLimit)                 | Defines the aspect ratio height limit to be used when determining if the mesh meets quality criteria. If exceeded, an element set will be created and an error will be returned.                                      |
| [`SurfaceQuality`](#MeshWorkflowStepGroup.SurfaceQuality)                                               | Defines if the surface mesh quality will be validated.                                                                                                                                                                |
| [`SurfaceSkewnessLimit`](#MeshWorkflowStepGroup.SurfaceSkewnessLimit)                                   | Defines the skewness limit to be used when determining if the mesh meets quality criteria. If exceeded, an element set will be created and an error will be returned.                                                 |
| [`VisibleProperties`](#MeshWorkflowStepGroup.VisibleProperties)                                         | Gets the list of properties that are visible for this object.                                                                                                                                                         |
| [`WorkflowDescription`](#MeshWorkflowStepGroup.WorkflowDescription)                                     | WorkflowDescription property.                                                                                                                                                                                         |
| [`WorkflowDescriptionJson`](#MeshWorkflowStepGroup.WorkflowDescriptionJson)                             | WorkflowDescriptionJson property.                                                                                                                                                                                     |
| [`WorkflowFailureInformation`](#MeshWorkflowStepGroup.WorkflowFailureInformation)                       | WorkflowFailureInformation property.                                                                                                                                                                                  |
| [`WorkflowFailureInformationJson`](#MeshWorkflowStepGroup.WorkflowFailureInformationJson)               | WorkflowFailureInformationJson property.                                                                                                                                                                              |
| [`WorkflowReleaseStatusString`](#MeshWorkflowStepGroup.WorkflowReleaseStatusString)                     | WorkflowReleaseStatusString property.                                                                                                                                                                                 |
| [`WorkflowString`](#MeshWorkflowStepGroup.WorkflowString)                                               | Gets the WorkflowString.                                                                                                                                                                                              |
| [`WorkflowType`](#MeshWorkflowStepGroup.WorkflowType)                                                   | Returns the type of the operation. .                                                                                                                                                                                  |
| [`WorkflowTypeInformation`](#MeshWorkflowStepGroup.WorkflowTypeInformation)                             | WorkflowTypeInformation property.                                                                                                                                                                                     |
| [`WorkflowTypeInformationJson`](#MeshWorkflowStepGroup.WorkflowTypeInformationJson)                     | WorkflowTypeInformationJson property.                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowStepGroup.AbsoluteDistanceAcousticLayer"></a>

### *property* MeshWorkflowStepGroup.AbsoluteDistanceAcousticLayer *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the absolute distance for the acoustic layer when not computing from frequency.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AbsoluteDistancePML"></a>

### *property* MeshWorkflowStepGroup.AbsoluteDistancePML *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the absolute distance for the PML layer when not computing from frequency.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AcousticCurvatureAngle"></a>

### *property* MeshWorkflowStepGroup.AcousticCurvatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the curvature angle of the mesh to be used in workflow steps for the acoustic workflow. If set to 0, the default curvature angle is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AcousticDefeatureMeshSize"></a>

### *property* MeshWorkflowStepGroup.AcousticDefeatureMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the defeature element size of the mesh to be used in workflow steps for the acoustic workflow. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AcousticGrowthRate"></a>

### *property* MeshWorkflowStepGroup.AcousticGrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the growth rate of the mesh to be used in workflow steps for the acoustic workflow. If set to 0, the default growth rate is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AcousticMinimalFrequency"></a>

### *property* MeshWorkflowStepGroup.AcousticMinimalFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimal frequency used for computing absolute distances in frequency range mode.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AcousticMinimumMeshSize"></a>

### *property* MeshWorkflowStepGroup.AcousticMinimumMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum element size of the mesh to be used in workflow steps for the acoustic workflow. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AcousticSettingsMode"></a>

### *property* MeshWorkflowStepGroup.AcousticSettingsMode *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.AcousticSettingsModeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the acoustic settings mode defining whether to use a single frequency or a frequency range for the acoustic scenario.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ActiveSizingSettings"></a>

### *property* MeshWorkflowStepGroup.ActiveSizingSettings *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the active sizing settings type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AnalysisFrequency"></a>

### *property* MeshWorkflowStepGroup.AnalysisFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines the analysis frequency of the acoustic scenario.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ApplicableSettingsTypes"></a>

### *property* MeshWorkflowStepGroup.ApplicableSettingsTypes *: List[[Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ApplicableSettingsTypes property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AttachedRefs"></a>

### *property* MeshWorkflowStepGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Attachment"></a>

### *property* MeshWorkflowStepGroup.Attachment *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="MeshWorkflowStepGroup.BoundingBoxFactor"></a>

### *property* MeshWorkflowStepGroup.BoundingBoxFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the bounding box factor applied to compute automatically the StackerMeshSize from the model. If set to 0, the default bouding box factor is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Children"></a>

### *property* MeshWorkflowStepGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ClsId"></a>

### *property* MeshWorkflowStepGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ComputeAbsoluteDistancesFromFrequency"></a>

### *property* MeshWorkflowStepGroup.ComputeAbsoluteDistancesFromFrequency *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to compute the PML and acoustic layer absolute distances from the acoustic frequency and wave velocity.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CurvatureAngle"></a>

### *property* MeshWorkflowStepGroup.CurvatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the curvature angle of the mesh to be used in workflow steps. If set to 0, the default curvature angle is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CustomGlobalCurvatureAngle"></a>

### *property* MeshWorkflowStepGroup.CustomGlobalCurvatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the custom angle to be used for the GlobalCurvatureAngle. If this value is 0, the default GlobalCurvatureAngle is used. Defaults to 0. This property should only accessed for internal usage.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CustomGlobalGrowthRate"></a>

### *property* MeshWorkflowStepGroup.CustomGlobalGrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the custom growth rate to be used for the GlobalGrowthRate. If this value is 0, the default GlobalGrowthRate is used. Defaults to 0. This property should only accessed for internal usage.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CustomGlobalMeshSize"></a>

### *property* MeshWorkflowStepGroup.CustomGlobalMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the custom size to be used for the GlobalMeshSize. If this value is 0, the default GlobalMeshSize is used. Defaults to 0. This property should only accessed for internal usage.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CustomGlobalMinimalMeshSize"></a>

### *property* MeshWorkflowStepGroup.CustomGlobalMinimalMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the custom size to be used for the GlobalMinimalMeshSize. If this value is 0, the default GlobalMinimalMeshSize is used. Defaults to 0. This property should only accessed for internal usage.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CustomNumberOfAcousticLayers"></a>

### *property* MeshWorkflowStepGroup.CustomNumberOfAcousticLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the custom number of layers in the acoustic region. If this value is 0, the default NumberOfAcousticLayers is used. Defaults to 0. This property should only accessed for internal usage.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CustomNumberOfPMLs"></a>

### *property* MeshWorkflowStepGroup.CustomNumberOfPMLs *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the custom number of layers in the perfectly meshed layers region. If this value is 0, the default NumberOfAcousticLayers is used. Defaults to 0. This property should only accessed for internal usage.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DataModelObjectCategory"></a>

### *property* MeshWorkflowStepGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Direction"></a>

### *property* MeshWorkflowStepGroup.Direction *: Iterable[[float](https://docs.python.org/3/builtins/functions.html#float)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Stacker Direction coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DirectionX"></a>

### *property* MeshWorkflowStepGroup.DirectionX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X component of stacking direction used by stacker operations , with respect to Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DirectionY"></a>

### *property* MeshWorkflowStepGroup.DirectionY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y component of stacking direction to be used in stacker steps, with respect to Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DirectionZ"></a>

### *property* MeshWorkflowStepGroup.DirectionZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z component of stacking direction to be used in stacker steps, with respect to Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Figures"></a>

### *property* MeshWorkflowStepGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GlobalBoundingBoxFactor"></a>

### *property* MeshWorkflowStepGroup.GlobalBoundingBoxFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the bounding box factor applied to compute automatically the GlobalMeshSize from the model. If set to 0, the default bouding box factor is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GlobalCurvatureAngle"></a>

### *property* MeshWorkflowStepGroup.GlobalCurvatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the curvature angle of the mesh to be used in workflow steps. If set to 0, the default curvature angle is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GlobalDefeatureMeshSize"></a>

### *property* MeshWorkflowStepGroup.GlobalDefeatureMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the defeature element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GlobalGrowthRate"></a>

### *property* MeshWorkflowStepGroup.GlobalGrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the growth rate of the mesh to be used in workflow steps. If set to 0, the default growth rate is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GlobalMeshSize"></a>

### *property* MeshWorkflowStepGroup.GlobalMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GlobalMinimalMeshSize"></a>

### *property* MeshWorkflowStepGroup.GlobalMinimalMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimal element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupingFolder"></a>

### *property* MeshWorkflowStepGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GrowthRate"></a>

### *property* MeshWorkflowStepGroup.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the growth rate of the mesh to be used in workflow steps. If set to 0, the default growth rate is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.IconName"></a>

### *property* MeshWorkflowStepGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Images"></a>

### *property* MeshWorkflowStepGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.InternalObject"></a>

### *property* MeshWorkflowStepGroup.InternalObject *: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowStepsAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.LateralDefeatureSize"></a>

### *property* MeshWorkflowStepGroup.LateralDefeatureSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the defeature size to be used along the lateral direction of stacking in stacker operations.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.MaximumMeshSize"></a>

### *property* MeshWorkflowStepGroup.MaximumMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.MeshSize"></a>

### *property* MeshWorkflowStepGroup.MeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines the mesh size of the acoustic scenario based on the wave velocity and the frequency.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.MinimumMeshSize"></a>

### *property* MeshWorkflowStepGroup.MinimumMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimal element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Name"></a>

### *property* MeshWorkflowStepGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NonStackableBodyMeshSize"></a>

### *property* MeshWorkflowStepGroup.NonStackableBodyMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the element size to be used in meshing non-stackable bodies in stacker workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfAcousticLayers"></a>

### *property* MeshWorkflowStepGroup.NumberOfAcousticLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of layers in the acoustic region. If set to 0, the value defaults to 1 if QuadraticElements is enabled (see ) or 2 otherwise.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfCores"></a>

### *property* MeshWorkflowStepGroup.NumberOfCores *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines how many CPU cores to be used in an operation (if supported by the operation).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfPMLs"></a>

### *property* MeshWorkflowStepGroup.NumberOfPMLs *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of layers in the perfectly meshed layers region. If set to 0, the value defaults to 2 if QuadraticElements is enabled (see ) or 4 otherwise.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ObjectId"></a>

### *property* MeshWorkflowStepGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ObjectState"></a>

### *property* MeshWorkflowStepGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ObjectTags"></a>

### *property* MeshWorkflowStepGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Origin"></a>

### *property* MeshWorkflowStepGroup.Origin *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Stacker origin coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.OriginX"></a>

### *property* MeshWorkflowStepGroup.OriginX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate location of base face for the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.OriginY"></a>

### *property* MeshWorkflowStepGroup.OriginY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate location of base face for the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.OriginZ"></a>

### *property* MeshWorkflowStepGroup.OriginZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate location of base face for the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PMLModality"></a>

### *property* MeshWorkflowStepGroup.PMLModality *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ExtrusionGridType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PML grid modality (O-Grid or H-Grid) for the acoustic settings.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Parent"></a>

### *property* MeshWorkflowStepGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Properties"></a>

### *property* MeshWorkflowStepGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.QuadraticElements"></a>

### *property* MeshWorkflowStepGroup.QuadraticElements *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines if the quadratic elements are used for the mesh generation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.QueryMappingInfo"></a>

### *property* MeshWorkflowStepGroup.QueryMappingInfo *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

QueryMappingInfo property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.QueryMappingInfoJson"></a>

### *property* MeshWorkflowStepGroup.QueryMappingInfoJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

QueryMappingInfoJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SlicerLayerHeight"></a>

### *property* MeshWorkflowStepGroup.SlicerLayerHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the spacing between newly created parallel planes used in workflow steps for the slicer workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SlicerLayerStart"></a>

### *property* MeshWorkflowStepGroup.SlicerLayerStart *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the z coordinate of the first plane used in workflow steps for the slicer workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SolidAspectRatioHeightLimit"></a>

### *property* MeshWorkflowStepGroup.SolidAspectRatioHeightLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines the aspect ratio height limit to be used when determining if the mesh meets quality criteria. If exceeded, an element set will be created and an error will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SolidQuality"></a>

### *property* MeshWorkflowStepGroup.SolidQuality *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines if the solid mesh quality will be validated.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SolidSkewnessLimit"></a>

### *property* MeshWorkflowStepGroup.SolidSkewnessLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines the skewness limit to be used when determining if the mesh meets quality criteria. If exceeded, an element set will be created and an error will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SpeedOfSound"></a>

### *property* MeshWorkflowStepGroup.SpeedOfSound *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines the speed of sound in the acoustic scenario.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.StackingDefeatureSize"></a>

### *property* MeshWorkflowStepGroup.StackingDefeatureSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the defeature size to be used along the stacking direction in stacker operations.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.State"></a>

### *property* MeshWorkflowStepGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Suppressed"></a>

### *property* MeshWorkflowStepGroup.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SurfaceAspectRatioHeightLimit"></a>

### *property* MeshWorkflowStepGroup.SurfaceAspectRatioHeightLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines the aspect ratio height limit to be used when determining if the mesh meets quality criteria. If exceeded, an element set will be created and an error will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SurfaceQuality"></a>

### *property* MeshWorkflowStepGroup.SurfaceQuality *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines if the surface mesh quality will be validated.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SurfaceSkewnessLimit"></a>

### *property* MeshWorkflowStepGroup.SurfaceSkewnessLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines the skewness limit to be used when determining if the mesh meets quality criteria. If exceeded, an element set will be created and an error will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.VisibleProperties"></a>

### *property* MeshWorkflowStepGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowDescription"></a>

### *property* MeshWorkflowStepGroup.WorkflowDescription *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkflowDescription property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowDescriptionJson"></a>

### *property* MeshWorkflowStepGroup.WorkflowDescriptionJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkflowDescriptionJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowFailureInformation"></a>

### *property* MeshWorkflowStepGroup.WorkflowFailureInformation *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkflowFailureInformation property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowFailureInformationJson"></a>

### *property* MeshWorkflowStepGroup.WorkflowFailureInformationJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkflowFailureInformationJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowReleaseStatusString"></a>

### *property* MeshWorkflowStepGroup.WorkflowReleaseStatusString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkflowReleaseStatusString property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowString"></a>

### *property* MeshWorkflowStepGroup.WorkflowString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the WorkflowString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowType"></a>

### *property* MeshWorkflowStepGroup.WorkflowType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the type of the operation. .

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowTypeInformation"></a>

### *property* MeshWorkflowStepGroup.WorkflowTypeInformation *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkflowTypeInformation property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.WorkflowTypeInformationJson"></a>

### *property* MeshWorkflowStepGroup.WorkflowTypeInformationJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkflowTypeInformationJson property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowStepGroup.Activate"></a>

### MeshWorkflowStepGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddFigure"></a>

### MeshWorkflowStepGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddImage"></a>

### MeshWorkflowStepGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddSettings"></a>

### MeshWorkflowStepGroup.AddSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add the settings of the input SettingsType to the Steps node.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddStep"></a>

### MeshWorkflowStepGroup.AddStep(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](MeshWorkflowStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)

Add another operation to the sequence of steps to be executed for the mesh workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CanCheckPublicStateCallbackForIM"></a>

### MeshWorkflowStepGroup.CanCheckPublicStateCallbackForIM() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanCheckPublicStateCallbackForIM method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CanConvertSizingSettings"></a>

### MeshWorkflowStepGroup.CanConvertSizingSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the active sizing settings can be converted to the input SettingsType.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CanInsertOperationByType"></a>

### MeshWorkflowStepGroup.CanInsertOperationByType(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType), position: [int](https://docs.python.org/3/builtins/functions.html#int), ignoreExecutedChecks: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether an operation of the given type can be inserted at the requested position. The ignoreExecutedChecks parameter determines whether to ignore any checks for already executed operations.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CanRunNextStep"></a>

### MeshWorkflowStepGroup.CanRunNextStep() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanRunNextStep method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CanShowPublishStateIM"></a>

### MeshWorkflowStepGroup.CanShowPublishStateIM() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanShowPublishStateIM method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ClearDataAndDisableCheckpoints"></a>

### MeshWorkflowStepGroup.ClearDataAndDisableCheckpoints() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear all checkpoints data and disable checkpointing for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ConvertSizingSettings"></a>

### MeshWorkflowStepGroup.ConvertSizingSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Convert the active sizing settings to the input SettingsType for the Steps node.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ConvertWorkflow"></a>

### MeshWorkflowStepGroup.ConvertWorkflow(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Converts the workflow type to Custom

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Copy"></a>

### MeshWorkflowStepGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CopyAttachmentPathToClipboard"></a>

### MeshWorkflowStepGroup.CopyAttachmentPathToClipboard() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current attachment path to clipboard.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CopyTo"></a>

### MeshWorkflowStepGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CreateObjRef"></a>

### MeshWorkflowStepGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CreateParameter"></a>

### MeshWorkflowStepGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Cut"></a>

### MeshWorkflowStepGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Delete"></a>

### MeshWorkflowStepGroup.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData"></a>

### MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DeleteSettings"></a>

### MeshWorkflowStepGroup.DeleteSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete the settings of the input SettingsType from the Steps node. All the Settings specific entries are removed automatically to the Steps details.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DisableAllCheckpoints"></a>

### MeshWorkflowStepGroup.DisableAllCheckpoints() → [None](https://docs.python.org/3/builtins/constants.html#None)

Disables checkpoints for all editable steps in the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Duplicate"></a>

### MeshWorkflowStepGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.EnableAllCheckpoints"></a>

### MeshWorkflowStepGroup.EnableAllCheckpoints() → [None](https://docs.python.org/3/builtins/constants.html#None)

Enables checkpoints for all editable steps in the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Equals"></a>

### MeshWorkflowStepGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteAllSteps"></a>

### MeshWorkflowStepGroup.ExecuteAllSteps() → [None](https://docs.python.org/3/builtins/constants.html#None)

Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteNextStep"></a>

### MeshWorkflowStepGroup.ExecuteNextStep() → [None](https://docs.python.org/3/builtins/constants.html#None)

Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteUpToStep"></a>

### MeshWorkflowStepGroup.ExecuteUpToStep(arg: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Executes any not yet ready steps up to and including the specified step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ForceRevertStepAndExecuteToPrevious"></a>

### MeshWorkflowStepGroup.ForceRevertStepAndExecuteToPrevious(arg: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Revert to the last available checkpoint; if no checkpoint is available, clear generated data, enable the checkpoint for current step and execute up to the previous operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetAPIName"></a>

### MeshWorkflowStepGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetAllProperties"></a>

### MeshWorkflowStepGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetApplicableOperationTypes"></a>

### MeshWorkflowStepGroup.GetApplicableOperationTypes() → List[[Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType)]

GetApplicableOperationTypes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetChildren"></a>

### MeshWorkflowStepGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshWorkflowStepGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetDetailsView"></a>

### MeshWorkflowStepGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetDomainBrowserAvailableMorphFieldPatterns"></a>

### MeshWorkflowStepGroup.GetDomainBrowserAvailableMorphFieldPatterns() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableMorphFieldPatterns method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetDomainBrowserAvailableScopes"></a>

### MeshWorkflowStepGroup.GetDomainBrowserAvailableScopes() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableScopes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetDomainBrowserAvailableSizeFieldPatterns"></a>

### MeshWorkflowStepGroup.GetDomainBrowserAvailableSizeFieldPatterns() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableSizeFieldPatterns method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetEnumName"></a>

### MeshWorkflowStepGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetHashCode"></a>

### MeshWorkflowStepGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetIconFile"></a>

### MeshWorkflowStepGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetLifetimeService"></a>

### MeshWorkflowStepGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetMeshWorkflowsControlPropertyList"></a>

### *classmethod* MeshWorkflowStepGroup.GetMeshWorkflowsControlPropertyList(control: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowControlAuto, pathBase: [str](https://docs.python.org/3/builtins/stdtypes.html#str), result: List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]], filter: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterUnpublishedProps: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterPropertyNames: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetMeshWorkflowsControlPropertyList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetMeshWorkflowsOperationPropertyList"></a>

### *classmethod* MeshWorkflowStepGroup.GetMeshWorkflowsOperationPropertyList(operation: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowOperationAuto, pathBase: [str](https://docs.python.org/3/builtins/stdtypes.html#str), result: List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]], filter: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterUnpublishedProps: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterPropertyNames: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetMeshWorkflowsOperationPropertyList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetMeshWorkflowsOutcomePropertyList"></a>

### *classmethod* MeshWorkflowStepGroup.GetMeshWorkflowsOutcomePropertyList(outcome: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowOutcomeAuto, pathBase: [str](https://docs.python.org/3/builtins/stdtypes.html#str), result: List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]], filter: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterUnpublishedProps: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterPropertyNames: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetMeshWorkflowsOutcomePropertyList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetMeshWorkflowsPropertyList"></a>

### *classmethod* MeshWorkflowStepGroup.GetMeshWorkflowsPropertyList(workflow: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowStepsAuto, result: List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]], filter: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterUnpublished: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterPropertyNames: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetMeshWorkflowsPropertyList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetNextExecutableControlIdByType"></a>

### MeshWorkflowStepGroup.GetNextExecutableControlIdByType(controlTypeEnumValue: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType)) → [int](https://docs.python.org/3/builtins/functions.html#int)

GetNextExecutableControlIdByType method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetNextExecutableOrUndefinedControlIdByType"></a>

### MeshWorkflowStepGroup.GetNextExecutableOrUndefinedControlIdByType(controlTypeEnumValue: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType)) → [int](https://docs.python.org/3/builtins/functions.html#int)

GetNextExecutableOrUndefinedControlIdByType method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetObjectData"></a>

### MeshWorkflowStepGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetParameter"></a>

### MeshWorkflowStepGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetPath"></a>

### MeshWorkflowStepGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetPropertyName"></a>

### MeshWorkflowStepGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetPropertyValue"></a>

### MeshWorkflowStepGroup.GetPropertyValue(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

### MeshWorkflowStepGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetPropertyWorksheetInfo"></a>

### MeshWorkflowStepGroup.GetPropertyWorksheetInfo() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetPropertyWorksheetInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetUnpublishedList"></a>

### MeshWorkflowStepGroup.GetUnpublishedList() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetUnpublishedList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetVisibleProperties"></a>

### MeshWorkflowStepGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetVisiblePropertyNames"></a>

### MeshWorkflowStepGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupAllSimilarChildren"></a>

### MeshWorkflowStepGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupSimilarObjects"></a>

### MeshWorkflowStepGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupSteps"></a>

### MeshWorkflowStepGroup.GroupSteps(stepObjects: Iterable[[Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](MeshWorkflowStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

GroupSteps method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.HasUnderdefinedSettingsData"></a>

### MeshWorkflowStepGroup.HasUnderdefinedSettingsData() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

HasUnderdefinedSettingsData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.InitializeLifetimeService"></a>

### MeshWorkflowStepGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.IsPropertyEditable"></a>

### MeshWorkflowStepGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowStepGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.IsPropertyVisible"></a>

### MeshWorkflowStepGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowStepGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.IsSizingSettings"></a>

### MeshWorkflowStepGroup.IsSizingSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsSizingSettings method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.MeshWorkflowSteps"></a>

### MeshWorkflowStepGroup.MeshWorkflowSteps() → List[[Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](MeshWorkflowStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)]

Gets the ordered list of Steps for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Paste"></a>

### MeshWorkflowStepGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PreviewNextStep"></a>

### MeshWorkflowStepGroup.PreviewNextStep() → [None](https://docs.python.org/3/builtins/constants.html#None)

Previews the next available step in the workflow. After the preview, the step will contain a preview outcome with the information required for the validation of the user inputs. The preview outcome can be returned using the MeshWorkflowOutcomes method of the step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropagateSettings"></a>

### MeshWorkflowStepGroup.PropagateSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Propagate the settings of the input SettingsType to the attributes of the Step nodes. The meshing attributes of the Step nodes will then be automatically defined based on the physical parameters of the settings. Otherwise, the meshing attributes need to be manually specified.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyByAPIName"></a>

### MeshWorkflowStepGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyById"></a>

### MeshWorkflowStepGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyByName"></a>

### MeshWorkflowStepGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyTypeInfo"></a>

### MeshWorkflowStepGroup.PropertyTypeInfo(property: Ansys.ACT.Automation.Mechanical.Property) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

PropertyTypeInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PublishIMProp"></a>

### MeshWorkflowStepGroup.PublishIMProp() → [None](https://docs.python.org/3/builtins/constants.html#None)

PublishIMProp method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RemoveFromGroup"></a>

### MeshWorkflowStepGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RemoveParameter"></a>

### MeshWorkflowStepGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RenameBasedOnType"></a>

### MeshWorkflowStepGroup.RenameBasedOnType() → [None](https://docs.python.org/3/builtins/constants.html#None)

Renames applying the default name based on type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RevertToLastCheckpoint"></a>

### MeshWorkflowStepGroup.RevertToLastCheckpoint() → [None](https://docs.python.org/3/builtins/constants.html#None)

Revert to the last available checkpoint; if no checkpoint is available, then an exception will be raised.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RevertToStep"></a>

### MeshWorkflowStepGroup.RevertToStep(arg: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Revert to the specified step; if no checkpoint is available, then an exception will be raised.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SetPropertyValue"></a>

### MeshWorkflowStepGroup.SetPropertyValue(id: [int](https://docs.python.org/3/builtins/functions.html#int), value: [str](https://docs.python.org/3/builtins/stdtypes.html#str), validate: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SetPublish"></a>

### MeshWorkflowStepGroup.SetPublish(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetPublish method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SetUnpublish"></a>

### MeshWorkflowStepGroup.SetUnpublish(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetUnpublish method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SettingsReleaseStatusString"></a>

### MeshWorkflowStepGroup.SettingsReleaseStatusString(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

SettingsReleaseStatusString method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SettingsTypeInformation"></a>

### MeshWorkflowStepGroup.SettingsTypeInformation(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

SettingsTypeInformation method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SettingsTypeInformationJson"></a>

### MeshWorkflowStepGroup.SettingsTypeInformationJson(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

SettingsTypeInformationJson method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.StartCodeGeneration"></a>

### MeshWorkflowStepGroup.StartCodeGeneration() → [None](https://docs.python.org/3/builtins/constants.html#None)

Start the code generation for the Meshing operations.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.StopCodeGeneration"></a>

### MeshWorkflowStepGroup.StopCodeGeneration() → [None](https://docs.python.org/3/builtins/constants.html#None)

Stop the code generation for the Meshing operations.

<!-- !! processed by numpydoc !! -->

