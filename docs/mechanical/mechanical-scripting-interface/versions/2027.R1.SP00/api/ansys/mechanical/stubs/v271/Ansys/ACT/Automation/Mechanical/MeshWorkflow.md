# `MeshWorkflow`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflow(internalObject: Any)

<a id="MeshWorkflow"></a>

### *class* MeshWorkflow(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Object that wraps IDSMeshWorkflow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflow.Activate)                                                                                         | Activate the current object.                                                                                                                                                                                                                                                                               |
| [`AddCreateLabelsFromLabelScope`](#MeshWorkflow.AddCreateLabelsFromLabelScope)                                               | Creates a label on entities identified by an existing source label scope. Evaluates the source label,                                                                                                                                                                                                      |
| [`AddFigure`](#MeshWorkflow.AddFigure)                                                                                       | Creates a new child Figure.                                                                                                                                                                                                                                                                                |
| [`AddImage`](#MeshWorkflow.AddImage)                                                                                         | Creates a new child Image.                                                                                                                                                                                                                                                                                 |
| [`AddInput`](#MeshWorkflow.AddInput)                                                                                         | Adds an “Input” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowInput object if not existent, otherwise it returns the already available MeshWorkflowInput object.                                                                                                          |
| [`AddMeshMetrics`](#MeshWorkflow.AddMeshMetrics)                                                                             | AddMeshMetrics method.                                                                                                                                                                                                                                                                                     |
| [`AddOutput`](#MeshWorkflow.AddOutput)                                                                                       | Adds an “Output” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowOutput object if not existent, otherwise it returns the already available MeshWorkflowOutput object.                                                                                                       |
| [`AddScopeToSelection`](#MeshWorkflow.AddScopeToSelection)                                                                   | AddScopeToSelection method.                                                                                                                                                                                                                                                                                |
| [`CanClearOutputData`](#MeshWorkflow.CanClearOutputData)                                                                     | Returns whether the workflow output data can be cleared.                                                                                                                                                                                                                                                   |
| [`CanFinalize`](#MeshWorkflow.CanFinalize)                                                                                   | Returns whether the workflow can be finalized.                                                                                                                                                                                                                                                             |
| [`CanGenerate`](#MeshWorkflow.CanGenerate)                                                                                   | Returns whether the workflow is ready to be generated — the same gate the product “Generate” launch uses (native isWorkflowReadyForExecution). Lets a caller pre-check before invoking .                                                                                                                   |
| [`CanInitialize`](#MeshWorkflow.CanInitialize)                                                                               | Returns whether the workflow can be initialized.                                                                                                                                                                                                                                                           |
| [`CanPreviewNextStep`](#MeshWorkflow.CanPreviewNextStep)                                                                     | Returns whether the next available step in the workflow is ready for preview. The preview is used to generate an outcome with the information required for the validation of the user inputs.                                                                                                              |
| [`CanRevertToLastCheckpoint`](#MeshWorkflow.CanRevertToLastCheckpoint)                                                       | Returns whether the workflow can be reverted to the last available checkpoint data.                                                                                                                                                                                                                        |
| [`CanRunNextStep`](#MeshWorkflow.CanRunNextStep)                                                                             | Returns whether the next step is ready for execution.                                                                                                                                                                                                                                                      |
| [`ClearDataAndDisableCheckpoints`](#MeshWorkflow.ClearDataAndDisableCheckpoints)                                             | Clear all checkpoints data and disable checkpointing for the workflow.                                                                                                                                                                                                                                     |
| [`ClearGeneratedData`](#MeshWorkflow.ClearGeneratedData)                                                                     | Clears all the generated data, i.e.,  It resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| [`ClearOutputData`](#MeshWorkflow.ClearOutputData)                                                                           | Clears only the “Output” data, i.e., the generated Geometry part(s) and the associated mesh.                                                                                                                                                                                                               |
| [`ComputeMeshQualityMetrics`](#MeshWorkflow.ComputeMeshQualityMetrics)                                                       | ComputeMeshQualityMetrics method.                                                                                                                                                                                                                                                                          |
| [`Copy`](#MeshWorkflow.Copy)                                                                                                 | Copies the current DataModelObject.                                                                                                                                                                                                                                                                        |
| [`CopyTo`](#MeshWorkflow.CopyTo)                                                                                             | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                 |
| [`CreateLabelFromScope`](#MeshWorkflow.CreateLabelFromScope)                                                                 | CreateLabelFromScope method.                                                                                                                                                                                                                                                                               |
| [`CreateLabelFromSelection`](#MeshWorkflow.CreateLabelFromSelection)                                                         | CreateLabelFromSelection method.                                                                                                                                                                                                                                                                           |
| [`CreateObjRef`](#MeshWorkflow.CreateObjRef)                                                                                 | CreateObjRef method.                                                                                                                                                                                                                                                                                       |
| [`CreateParameter`](#MeshWorkflow.CreateParameter)                                                                           | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                    |
| [`Cut`](#MeshWorkflow.Cut)                                                                                                   | Cuts the current DataModelObject.                                                                                                                                                                                                                                                                          |
| [`Delete`](#MeshWorkflow.Delete)                                                                                             | Run the Delete action.                                                                                                                                                                                                                                                                                     |
| [`Duplicate`](#MeshWorkflow.Duplicate)                                                                                       | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                             |
| [`Equals`](#MeshWorkflow.Equals)                                                                                             | Equals method.                                                                                                                                                                                                                                                                                             |
| [`ExportFullWorkflow`](#MeshWorkflow.ExportFullWorkflow)                                                                     | Exports the steps into a .emx file.                                                                                                                                                                                                                                                                        |
| [`ExportWorkflow`](#MeshWorkflow.ExportWorkflow)                                                                             | Exports the steps as template into a .emx file.                                                                                                                                                                                                                                                            |
| [`FinalizeWorkflow`](#MeshWorkflow.FinalizeWorkflow)                                                                         | Once all steps in a mesh workflow are completed successfully, the workflow can be completed which will transfer the generated data back into new Mechanical geometry part(s) together with the corresponding part mesh(es).                                                                                |
| [`Generate`](#MeshWorkflow.Generate)                                                                                         | Generates the desired data by executing the whole workflow, i.e., transferring the input data, executing all steps, and completing the workflow by transferring the output data back into Geometry and Mesh data.                                                                                          |
| [`GetAPIName`](#MeshWorkflow.GetAPIName)                                                                                     | Property name bound to dispId.                                                                                                                                                                                                                                                                             |
| [`GetAllElementSetNames`](#MeshWorkflow.GetAllElementSetNames)                                                               | Gets all the PrimeMesh model elementSets names currently defined for the workflow.                                                                                                                                                                                                                         |
| [`GetAllElementSets`](#MeshWorkflow.GetAllElementSets)                                                                       | Gets all the PrimeMesh model elementSets currently defined for the workflow.                                                                                                                                                                                                                               |
| [`GetAllLabelNames`](#MeshWorkflow.GetAllLabelNames)                                                                         | Gets all the PrimeMesh model labels names currently defined for the workflow.                                                                                                                                                                                                                              |
| [`GetAllLabels`](#MeshWorkflow.GetAllLabels)                                                                                 | Gets all the PrimeMesh model labels currently defined for the workflow.                                                                                                                                                                                                                                    |
| [`GetAllMorphFieldNames`](#MeshWorkflow.GetAllMorphFieldNames)                                                               | Gets all the PrimeMesh model morph field names currently defined for the workflow.                                                                                                                                                                                                                         |
| [`GetAllMorphFields`](#MeshWorkflow.GetAllMorphFields)                                                                       | Gets all the PrimeMesh model moprh fields info currently defined for the workflow.                                                                                                                                                                                                                         |
| [`GetAllPartNames`](#MeshWorkflow.GetAllPartNames)                                                                           | Gets all the PrimeMesh model parts names currently defined for the workflow.                                                                                                                                                                                                                               |
| [`GetAllParts`](#MeshWorkflow.GetAllParts)                                                                                   | Gets all the PrimeMesh model parts currently defined for the workflow.                                                                                                                                                                                                                                     |
| [`GetAllProperties`](#MeshWorkflow.GetAllProperties)                                                                         | GetAllProperties method.                                                                                                                                                                                                                                                                                   |
| [`GetAllSizeFieldNames`](#MeshWorkflow.GetAllSizeFieldNames)                                                                 | Gets all the PrimeMesh model volumetric size field names currently defined for the workflow.                                                                                                                                                                                                               |
| [`GetAllSizeFields`](#MeshWorkflow.GetAllSizeFields)                                                                         | Gets all the PrimeMesh model volumetric size field currently defined for the workflow.                                                                                                                                                                                                                     |
| [`GetAllZoneNames`](#MeshWorkflow.GetAllZoneNames)                                                                           | Gets all the PrimeMesh model zones names currently defined for the workflow.                                                                                                                                                                                                                               |
| [`GetAllZones`](#MeshWorkflow.GetAllZones)                                                                                   | Gets all the PrimeMesh model zones currently defined for the workflow.                                                                                                                                                                                                                                     |
| [`GetApplicableMeshMetrics`](#MeshWorkflow.GetApplicableMeshMetrics)                                                         | GetApplicableMeshMetrics method.                                                                                                                                                                                                                                                                           |
| [`GetChildren`](#MeshWorkflow.GetChildren)                                                                                   | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                               |
| [`GetDetailsView`](#MeshWorkflow.GetDetailsView)                                                                             | GetDetailsView method.                                                                                                                                                                                                                                                                                     |
| [`GetDomainBrowserAvailableMorphFieldPatterns`](#MeshWorkflow.GetDomainBrowserAvailableMorphFieldPatterns)                   | GetDomainBrowserAvailableMorphFieldPatterns method.                                                                                                                                                                                                                                                        |
| [`GetDomainBrowserAvailableScopes`](#MeshWorkflow.GetDomainBrowserAvailableScopes)                                           | GetDomainBrowserAvailableScopes method.                                                                                                                                                                                                                                                                    |
| [`GetDomainBrowserAvailableSizeFieldPatterns`](#MeshWorkflow.GetDomainBrowserAvailableSizeFieldPatterns)                     | GetDomainBrowserAvailableSizeFieldPatterns method.                                                                                                                                                                                                                                                         |
| [`GetEnumName`](#MeshWorkflow.GetEnumName)                                                                                   | Enum name bound to value                                                                                                                                                                                                                                                                                   |
| [`GetHashCode`](#MeshWorkflow.GetHashCode)                                                                                   | GetHashCode method.                                                                                                                                                                                                                                                                                        |
| [`GetIconFile`](#MeshWorkflow.GetIconFile)                                                                                   | GetIconFile method.                                                                                                                                                                                                                                                                                        |
| [`GetLifetimeService`](#MeshWorkflow.GetLifetimeService)                                                                     | GetLifetimeService method.                                                                                                                                                                                                                                                                                 |
| [`GetMeshMetrics`](#MeshWorkflow.GetMeshMetrics)                                                                             | GetMeshMetrics method.                                                                                                                                                                                                                                                                                     |
| [`GetMeshQualityTabIndex`](#MeshWorkflow.GetMeshQualityTabIndex)                                                             | GetMeshQualityTabIndex method.                                                                                                                                                                                                                                                                             |
| [`GetMetricName`](#MeshWorkflow.GetMetricName)                                                                               | GetMetricName method.                                                                                                                                                                                                                                                                                      |
| [`GetObjectData`](#MeshWorkflow.GetObjectData)                                                                               | GetObjectData method.                                                                                                                                                                                                                                                                                      |
| [`GetParameter`](#MeshWorkflow.GetParameter)                                                                                 | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                    |
| [`GetPath`](#MeshWorkflow.GetPath)                                                                                           | GetPath method.                                                                                                                                                                                                                                                                                            |
| [`GetPrimeMeshModelId`](#MeshWorkflow.GetPrimeMeshModelId)                                                                   | GetPrimeMeshModelId method.                                                                                                                                                                                                                                                                                |
| [`GetPrimeMeshModelIndex`](#MeshWorkflow.GetPrimeMeshModelIndex)                                                             | GetPrimeMeshModelIndex method.                                                                                                                                                                                                                                                                             |
| [`GetPropertyName`](#MeshWorkflow.GetPropertyName)                                                                           | GetPropertyName method.                                                                                                                                                                                                                                                                                    |
| [`GetPropertyValue`](#MeshWorkflow.GetPropertyValue)                                                                         | GetPropertyValue method.                                                                                                                                                                                                                                                                                   |
| [`GetPropertyWorksheetInfo`](#MeshWorkflow.GetPropertyWorksheetInfo)                                                         | GetPropertyWorksheetInfo method.                                                                                                                                                                                                                                                                           |
| [`GetScopePatternOfMetrics`](#MeshWorkflow.GetScopePatternOfMetrics)                                                         | GetScopePatternOfMetrics method.                                                                                                                                                                                                                                                                           |
| [`GetScopeTypeOfMetrics`](#MeshWorkflow.GetScopeTypeOfMetrics)                                                               | GetScopeTypeOfMetrics method.                                                                                                                                                                                                                                                                              |
| [`GetSheetQuantityTypeString`](#MeshWorkflow.GetSheetQuantityTypeString)                                                     | Get quantity type of sheet metric from mesh metric type                                                                                                                                                                                                                                                    |
| [`GetSolidMeshMetrics`](#MeshWorkflow.GetSolidMeshMetrics)                                                                   | GetSolidMeshMetrics method.                                                                                                                                                                                                                                                                                |
| [`GetSolidMeshQualityState`](#MeshWorkflow.GetSolidMeshQualityState)                                                         | Get the state of solid mesh quality worksheet tab                                                                                                                                                                                                                                                          |
| [`GetSolidSurfaceMeshMetrics`](#MeshWorkflow.GetSolidSurfaceMeshMetrics)                                                     | GetSolidSurfaceMeshMetrics method.                                                                                                                                                                                                                                                                         |
| [`GetSolidSurfaceMeshQualityErrorLimit`](#MeshWorkflow.GetSolidSurfaceMeshQualityErrorLimit)                                 | Get Mesh Quality Error Limit                                                                                                                                                                                                                                                                               |
| [`GetSolidSurfaceMeshQualityErrorLimitIsDefault`](#MeshWorkflow.GetSolidSurfaceMeshQualityErrorLimitIsDefault)               | Get SolidSurface Mesh Quality Worksheet Error Limit is Default                                                                                                                                                                                                                                             |
| [`GetSolidSurfaceMeshQualityName`](#MeshWorkflow.GetSolidSurfaceMeshQualityName)                                             | Get Mesh Quality Name                                                                                                                                                                                                                                                                                      |
| [`GetSolidSurfaceMeshQualityState`](#MeshWorkflow.GetSolidSurfaceMeshQualityState)                                           | Get the state of solid surface mesh quality worksheet tab                                                                                                                                                                                                                                                  |
| [`GetSolidSurfaceMeshQualityWarningLimit`](#MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimit)                             | Get Mesh Quality Warning Limit                                                                                                                                                                                                                                                                             |
| [`GetSolidSurfaceMeshQualityWarningLimitIsDefault`](#MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimitIsDefault)           | Get SolidSurface Mesh Quality Worksheet Warning Limit is Default                                                                                                                                                                                                                                           |
| [`GetSolidSurfaceMeshQualityWorstMetricBackgroundColor`](#MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor) | Get Mesh Quality Worst Metric BackgroundColor                                                                                                                                                                                                                                                              |
| [`GetSolidSurfaceMeshQualityWorstMetricTooltip`](#MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricTooltip)                 | Get Mesh Quality Worst Metric Tooltip                                                                                                                                                                                                                                                                      |
| [`GetSolidSurfaceMeshQualityWorstMetricValue`](#MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricValue)                     | Get Mesh Quality Worst Metric Value                                                                                                                                                                                                                                                                        |
| [`GetSolidSurfaceQuantityTypeString`](#MeshWorkflow.GetSolidSurfaceQuantityTypeString)                                       | Get Quantity type from SolidSurface mesh metric type                                                                                                                                                                                                                                                       |
| [`GetSurfaceMeshMetrics`](#MeshWorkflow.GetSurfaceMeshMetrics)                                                               | GetSurfaceMeshMetrics method.                                                                                                                                                                                                                                                                              |
| [`GetSurfaceMeshQualityErrorLimit`](#MeshWorkflow.GetSurfaceMeshQualityErrorLimit)                                           | Get User Mesh Quality Error Limit                                                                                                                                                                                                                                                                          |
| [`GetSurfaceMeshQualityErrorLimitIsDefault`](#MeshWorkflow.GetSurfaceMeshQualityErrorLimitIsDefault)                         | Get Mesh Quality Error Limit is default                                                                                                                                                                                                                                                                    |
| [`GetSurfaceMeshQualityName`](#MeshWorkflow.GetSurfaceMeshQualityName)                                                       | GetSurfaceMeshQualityName method.                                                                                                                                                                                                                                                                          |
| [`GetSurfaceMeshQualityState`](#MeshWorkflow.GetSurfaceMeshQualityState)                                                     | Get the state of surface mesh quality worksheet tab                                                                                                                                                                                                                                                        |
| [`GetSurfaceMeshQualityWarningLimit`](#MeshWorkflow.GetSurfaceMeshQualityWarningLimit)                                       | Get User Mesh Quality Warning Limit                                                                                                                                                                                                                                                                        |
| [`GetSurfaceMeshQualityWarningLimitIsDefault`](#MeshWorkflow.GetSurfaceMeshQualityWarningLimitIsDefault)                     | Get Mesh Quality Warning Limit is default                                                                                                                                                                                                                                                                  |
| [`GetSurfaceMeshQualityWorstMetricBackgroundColor`](#MeshWorkflow.GetSurfaceMeshQualityWorstMetricBackgroundColor)           | Get Mesh Quality Worst Metric Background Colour                                                                                                                                                                                                                                                            |
| [`GetSurfaceMeshQualityWorstMetricTooltip`](#MeshWorkflow.GetSurfaceMeshQualityWorstMetricTooltip)                           | Get Mesh Quality Worst Metric Tooltip                                                                                                                                                                                                                                                                      |
| [`GetSurfaceMeshQualityWorstMetricValue`](#MeshWorkflow.GetSurfaceMeshQualityWorstMetricValue)                               | Get Mesh Quality Worst Metric Value                                                                                                                                                                                                                                                                        |
| [`GetUnpublishedList`](#MeshWorkflow.GetUnpublishedList)                                                                     | GetUnpublishedList method.                                                                                                                                                                                                                                                                                 |
| [`GetVisibleProperties`](#MeshWorkflow.GetVisibleProperties)                                                                 | GetVisibleProperties method.                                                                                                                                                                                                                                                                               |
| [`GetVisiblePropertyNames`](#MeshWorkflow.GetVisiblePropertyNames)                                                           | GetVisiblePropertyNames method.                                                                                                                                                                                                                                                                            |
| [`GetVolumeMeshQualityErrorLimit`](#MeshWorkflow.GetVolumeMeshQualityErrorLimit)                                             | Get Mesh Quality Error Limit                                                                                                                                                                                                                                                                               |
| [`GetVolumeMeshQualityErrorLimitIsDefault`](#MeshWorkflow.GetVolumeMeshQualityErrorLimitIsDefault)                           | Get Volume Mesh Quality Worksheet Error Limit is Default                                                                                                                                                                                                                                                   |
| [`GetVolumeMeshQualityName`](#MeshWorkflow.GetVolumeMeshQualityName)                                                         | Get Mesh Quality Name                                                                                                                                                                                                                                                                                      |
| [`GetVolumeMeshQualityWarningLimit`](#MeshWorkflow.GetVolumeMeshQualityWarningLimit)                                         | Get Mesh Quality Warning Limit                                                                                                                                                                                                                                                                             |
| [`GetVolumeMeshQualityWarningLimitIsDefault`](#MeshWorkflow.GetVolumeMeshQualityWarningLimitIsDefault)                       | Get Volume Mesh Quality Worksheet Warning Limit is Default                                                                                                                                                                                                                                                 |
| [`GetVolumeMeshQualityWorstMetricBackgroundColor`](#MeshWorkflow.GetVolumeMeshQualityWorstMetricBackgroundColor)             | Get Mesh Quality Worst Metric BackgroundColor                                                                                                                                                                                                                                                              |
| [`GetVolumeMeshQualityWorstMetricTooltip`](#MeshWorkflow.GetVolumeMeshQualityWorstMetricTooltip)                             | Get Mesh Quality Worst Metric Tooltip                                                                                                                                                                                                                                                                      |
| [`GetVolumeMeshQualityWorstMetricValue`](#MeshWorkflow.GetVolumeMeshQualityWorstMetricValue)                                 | Get Mesh Quality Worst Metric Value                                                                                                                                                                                                                                                                        |
| [`GetVolumeQuantityTypeString`](#MeshWorkflow.GetVolumeQuantityTypeString)                                                   | Get Quantity type from solid mesh metric type                                                                                                                                                                                                                                                              |
| [`GetWorkflowStepsGroup`](#MeshWorkflow.GetWorkflowStepsGroup)                                                               | Updates incremental meshing workflow group object -> generates all need generated steps.                                                                                                                                                                                                                   |
| [`GroupAllSimilarChildren`](#MeshWorkflow.GroupAllSimilarChildren)                                                           | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                    |
| [`GroupSimilarObjects`](#MeshWorkflow.GroupSimilarObjects)                                                                   | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                        |
| [`ImportWorkflow`](#MeshWorkflow.ImportWorkflow)                                                                             | Imports the steps from a template .emx file.                                                                                                                                                                                                                                                               |
| [`InitializeLifetimeService`](#MeshWorkflow.InitializeLifetimeService)                                                       | InitializeLifetimeService method.                                                                                                                                                                                                                                                                          |
| [`InitializeWorkflow`](#MeshWorkflow.InitializeWorkflow)                                                                     | Initializes the mesh workflow by transferring the scoped geometry parts/bodies from Mechanical into the PrimeMesh model and updates the “Input” node state accordingly.                                                                                                                                    |
| [`IsPropertyEditable`](#MeshWorkflow.IsPropertyEditable)                                                                     | IsPropertyEditable method.                                                                                                                                                                                                                                                                                 |
| [`IsPropertyVisible`](#MeshWorkflow.IsPropertyVisible)                                                                       | IsPropertyVisible method.                                                                                                                                                                                                                                                                                  |
| [`IsWBInReadOnlyLicMode`](#MeshWorkflow.IsWBInReadOnlyLicMode)                                                               | Executes the next available step in the workflow.                                                                                                                                                                                                                                                          |
| [`Paste`](#MeshWorkflow.Paste)                                                                                               | Pastes to the current DataModelObject context.                                                                                                                                                                                                                                                             |
| [`PreviewNextStep`](#MeshWorkflow.PreviewNextStep)                                                                           | Previews the next available step in the workflow. After the preview, the step will contain a preview outcome with the information required for the validation of the user inputs. The preview outcome can be returned using the MeshWorkflowOutcomes method of the step.                                   |
| [`PropertyByAPIName`](#MeshWorkflow.PropertyByAPIName)                                                                       | Get a property by its API name.                                                                                                                                                                                                                                                                            |
| [`PropertyById`](#MeshWorkflow.PropertyById)                                                                                 | PropertyById method.                                                                                                                                                                                                                                                                                       |
| [`PropertyByName`](#MeshWorkflow.PropertyByName)                                                                             | Get a property by its unique name.                                                                                                                                                                                                                                                                         |
| [`PropertyTypeInfo`](#MeshWorkflow.PropertyTypeInfo)                                                                         | PropertyTypeInfo method.                                                                                                                                                                                                                                                                                   |
| [`RemoveFromGroup`](#MeshWorkflow.RemoveFromGroup)                                                                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                                                                                                                                                                                |
| [`RemoveMeshMetrics`](#MeshWorkflow.RemoveMeshMetrics)                                                                       | RemoveMeshMetrics method.                                                                                                                                                                                                                                                                                  |
| [`RemoveParameter`](#MeshWorkflow.RemoveParameter)                                                                           | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                          |
| [`RenameBasedOnType`](#MeshWorkflow.RenameBasedOnType)                                                                       | Renames applying the default name based on type.                                                                                                                                                                                                                                                           |
| [`ResetMeshQualityMetrics`](#MeshWorkflow.ResetMeshQualityMetrics)                                                           | ResetMeshQualityMetrics method.                                                                                                                                                                                                                                                                            |
| [`RevertToLastCheckpoint`](#MeshWorkflow.RevertToLastCheckpoint)                                                             | Reverts to the last available checkpoint data.                                                                                                                                                                                                                                                             |
| [`RunNextStep`](#MeshWorkflow.RunNextStep)                                                                                   | Executes the next available step in the workflow.                                                                                                                                                                                                                                                          |
| [`RunQuery`](#MeshWorkflow.RunQuery)                                                                                         | Runs the given Maestro query and returns the raw result map.                                                                                                                                                                                                                                               |
| [`SetMeshQualityTabIndex`](#MeshWorkflow.SetMeshQualityTabIndex)                                                             | SetMeshQualityTabIndex method.                                                                                                                                                                                                                                                                             |
| [`SetScopeOfMetrics`](#MeshWorkflow.SetScopeOfMetrics)                                                                       | SetScopeOfMetrics method.                                                                                                                                                                                                                                                                                  |
| [`SetSolidSurfaceMeshQualityErrorLimit`](#MeshWorkflow.SetSolidSurfaceMeshQualityErrorLimit)                                 | Set Mesh Quality Error Limit                                                                                                                                                                                                                                                                               |
| [`SetSolidSurfaceMeshQualityWarningLimit`](#MeshWorkflow.SetSolidSurfaceMeshQualityWarningLimit)                             | Set Mesh Quality Warning Limit                                                                                                                                                                                                                                                                             |
| [`SetSurfaceMeshQualityErrorLimit`](#MeshWorkflow.SetSurfaceMeshQualityErrorLimit)                                           | Set Mesh Quality Error Level                                                                                                                                                                                                                                                                               |
| [`SetSurfaceMeshQualityWarningLimit`](#MeshWorkflow.SetSurfaceMeshQualityWarningLimit)                                       | Set Mesh Quality Warning Limit                                                                                                                                                                                                                                                                             |
| [`SetVolumeMeshQualityErrorLimit`](#MeshWorkflow.SetVolumeMeshQualityErrorLimit)                                             | Set Mesh Quality Error Limit                                                                                                                                                                                                                                                                               |
| [`SetVolumeMeshQualityWarningLimit`](#MeshWorkflow.SetVolumeMeshQualityWarningLimit)                                         | Set Mesh Quality Warning Limit                                                                                                                                                                                                                                                                             |
| [`ShowGroupedTreeView`](#MeshWorkflow.ShowGroupedTreeView)                                                                   | Sets whether to Show Grouped Tree View.                                                                                                                                                                                                                                                                    |
| [`UpdateWorkflow`](#MeshWorkflow.UpdateWorkflow)                                                                             | Updates incremental meshing workflow group object -> generates all need generated steps.                                                                                                                                                                                                                   |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [`AdvancedTopologyDiagnostics`](#MeshWorkflow.AdvancedTopologyDiagnostics)                       | Gets the advanced topology diagnostics query sub-object.                                                                              |
| [`AttachedRefs`](#MeshWorkflow.AttachedRefs)                                                     | AttachedRefs property.                                                                                                                |
| [`Children`](#MeshWorkflow.Children)                                                             | Gets the list of children.                                                                                                            |
| [`ClsId`](#MeshWorkflow.ClsId)                                                                   | ClsId property.                                                                                                                       |
| [`DataModelObjectCategory`](#MeshWorkflow.DataModelObjectCategory)                               | Gets the current DataModelObject's category.                                                                                          |
| [`Domain`](#MeshWorkflow.Domain)                                                                 | Gets the Domain statistics sub-object containing model and mesh statistics.                                                           |
| [`Figures`](#MeshWorkflow.Figures)                                                               | Gets the list of associated figures.                                                                                                  |
| [`GroupingFolder`](#MeshWorkflow.GroupingFolder)                                                 | GroupingFolder property.                                                                                                              |
| [`IconName`](#MeshWorkflow.IconName)                                                             | IconName property.                                                                                                                    |
| [`Images`](#MeshWorkflow.Images)                                                                 | Gets the list of associated images.                                                                                                   |
| [`ImportedWorkflowFilename`](#MeshWorkflow.ImportedWorkflowFilename)                             | The filename of the template.emx file that populated the workflow initially.                                                          |
| [`InternalObject`](#MeshWorkflow.InternalObject)                                                 | Gets the internal object. For advanced usage only.                                                                                    |
| [`IsInitialized`](#MeshWorkflow.IsInitialized)                                                   | Gets whether the workflow has been initialized or not.                                                                                |
| [`MeshWorkflowDescription`](#MeshWorkflow.MeshWorkflowDescription)                               | MeshWorkflowDescription property.                                                                                                     |
| [`MeshWorkflowDescriptionJson`](#MeshWorkflow.MeshWorkflowDescriptionJson)                       | MeshWorkflowDescriptionJson property.                                                                                                 |
| [`MeshWorkflowInput`](MeshWorkflowInput.md#MeshWorkflowInput)                                    | Gets the MeshWorkflowInput object.                                                                                                    |
| [`MeshWorkflowOutput`](MeshWorkflowOutput.md#MeshWorkflowOutput)                                 | Gets the MeshWorkflowOutput object.                                                                                                   |
| [`MeshWorkflowTypeInformation`](#MeshWorkflow.MeshWorkflowTypeInformation)                       | MeshWorkflowTypeInformation property.                                                                                                 |
| [`MeshWorkflowTypeInformationJson`](#MeshWorkflow.MeshWorkflowTypeInformationJson)               | MeshWorkflowTypeInformationJson property.                                                                                             |
| [`ModelContextString`](#MeshWorkflow.ModelContextString)                                         | Gets the ModelContextString.                                                                                                          |
| [`Name`](#MeshWorkflow.Name)                                                                     | Name property.                                                                                                                        |
| [`NumberOfShellMeshQualityMetrics`](#MeshWorkflow.NumberOfShellMeshQualityMetrics)               | NumberOfShellMeshQualityMetrics property.                                                                                             |
| [`NumberOfSolidMeshQualityMetrics`](#MeshWorkflow.NumberOfSolidMeshQualityMetrics)               | NumberOfSolidMeshQualityMetrics property.                                                                                             |
| [`NumberOfSolidSurfaceMeshQualityMetrics`](#MeshWorkflow.NumberOfSolidSurfaceMeshQualityMetrics) | NumberOfSolidSurfaceMeshQualityMetrics property.                                                                                      |
| [`ObjectId`](#MeshWorkflow.ObjectId)                                                             | ObjectId property.                                                                                                                    |
| [`ObjectState`](#MeshWorkflow.ObjectState)                                                       | ObjectState property.                                                                                                                 |
| [`ObjectTags`](#MeshWorkflow.ObjectTags)                                                         | ObjectTags property.                                                                                                                  |
| [`Parent`](#MeshWorkflow.Parent)                                                                 | Parent property.                                                                                                                      |
| [`Properties`](#MeshWorkflow.Properties)                                                         | Gets the list of properties for this object.                                                                                          |
| [`Separator`](#MeshWorkflow.Separator)                                                           | Gets or sets the separator string for grouped tree view.                                                                              |
| [`StackerCharacteristics`](#MeshWorkflow.StackerCharacteristics)                                 | Gets the Stacker Characteristics sub-object.                                                                                          |
| [`State`](#MeshWorkflow.State)                                                                   | State property.                                                                                                                       |
| [`Suppressed`](#MeshWorkflow.Suppressed)                                                         | Gets or sets the Suppressed.                                                                                                          |
| [`SurfaceDiagnostics`](#MeshWorkflow.SurfaceDiagnostics)                                         | Gets the surface diagnostics query sub-object.                                                                                        |
| [`TopologyDiagnostics`](#MeshWorkflow.TopologyDiagnostics)                                       | Gets the topology diagnostics query sub-object.                                                                                       |
| [`UnitSystem`](#MeshWorkflow.UnitSystem)                                                         | Defines the “unit system” of a Prime Model, if not defined, the unit system is deduced from the geometry at input data transfer time. |
| [`Validation`](#MeshWorkflow.Validation)                                                         | Gets the mesh validation query sub-object.                                                                                            |
| [`VisibleProperties`](#MeshWorkflow.VisibleProperties)                                           | Gets the list of properties that are visible for this object.                                                                         |
| [`WorkflowType`](#MeshWorkflow.WorkflowType)                                                     | Returns the workflow type which is applicable to the Input, Steps, and Output.                                                        |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflow.AdvancedTopologyDiagnostics"></a>

### *property* MeshWorkflow.AdvancedTopologyDiagnostics *: Ansys.ACT.Automation.Mechanical.MeshWorkflowAdvancedTopologyDiagnostics | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the advanced topology diagnostics query sub-object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AttachedRefs"></a>

### *property* MeshWorkflow.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Children"></a>

### *property* MeshWorkflow.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ClsId"></a>

### *property* MeshWorkflow.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.DataModelObjectCategory"></a>

### *property* MeshWorkflow.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Domain"></a>

### *property* MeshWorkflow.Domain *: Ansys.ACT.Automation.Mechanical.MeshWorkflowDomainStatistics | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Domain statistics sub-object containing model and mesh statistics.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Figures"></a>

### *property* MeshWorkflow.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GroupingFolder"></a>

### *property* MeshWorkflow.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.IconName"></a>

### *property* MeshWorkflow.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Images"></a>

### *property* MeshWorkflow.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ImportedWorkflowFilename"></a>

### *property* MeshWorkflow.ImportedWorkflowFilename *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The filename of the template.emx file that populated the workflow initially.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.InternalObject"></a>

### *property* MeshWorkflow.InternalObject *: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.IsInitialized"></a>

### *property* MeshWorkflow.IsInitialized *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets whether the workflow has been initialized or not.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.MeshWorkflowDescription"></a>

### *property* MeshWorkflow.MeshWorkflowDescription *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshWorkflowDescription property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.MeshWorkflowDescriptionJson"></a>

### *property* MeshWorkflow.MeshWorkflowDescriptionJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshWorkflowDescriptionJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.MeshWorkflowInput"></a>

### *property* MeshWorkflow.MeshWorkflowInput *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowInput](MeshWorkflowInput.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowInput) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MeshWorkflowInput object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.MeshWorkflowOutput"></a>

### *property* MeshWorkflow.MeshWorkflowOutput *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput](MeshWorkflowOutput.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MeshWorkflowOutput object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.MeshWorkflowTypeInformation"></a>

### *property* MeshWorkflow.MeshWorkflowTypeInformation *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshWorkflowTypeInformation property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.MeshWorkflowTypeInformationJson"></a>

### *property* MeshWorkflow.MeshWorkflowTypeInformationJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshWorkflowTypeInformationJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ModelContextString"></a>

### *property* MeshWorkflow.ModelContextString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ModelContextString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Name"></a>

### *property* MeshWorkflow.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.NumberOfShellMeshQualityMetrics"></a>

### *property* MeshWorkflow.NumberOfShellMeshQualityMetrics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfShellMeshQualityMetrics property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.NumberOfSolidMeshQualityMetrics"></a>

### *property* MeshWorkflow.NumberOfSolidMeshQualityMetrics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfSolidMeshQualityMetrics property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.NumberOfSolidSurfaceMeshQualityMetrics"></a>

### *property* MeshWorkflow.NumberOfSolidSurfaceMeshQualityMetrics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfSolidSurfaceMeshQualityMetrics property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ObjectId"></a>

### *property* MeshWorkflow.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ObjectState"></a>

### *property* MeshWorkflow.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ObjectTags"></a>

### *property* MeshWorkflow.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Parent"></a>

### *property* MeshWorkflow.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Properties"></a>

### *property* MeshWorkflow.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Separator"></a>

### *property* MeshWorkflow.Separator *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the separator string for grouped tree view.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.StackerCharacteristics"></a>

### *property* MeshWorkflow.StackerCharacteristics *: Ansys.ACT.Automation.Mechanical.MeshWorkflowStackerCharacteristics | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Stacker Characteristics sub-object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.State"></a>

### *property* MeshWorkflow.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Suppressed"></a>

### *property* MeshWorkflow.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SurfaceDiagnostics"></a>

### *property* MeshWorkflow.SurfaceDiagnostics *: Ansys.ACT.Automation.Mechanical.MeshWorkflowSurfaceDiagnostics | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the surface diagnostics query sub-object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.TopologyDiagnostics"></a>

### *property* MeshWorkflow.TopologyDiagnostics *: Ansys.ACT.Automation.Mechanical.MeshWorkflowTopologyDiagnostics | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the topology diagnostics query sub-object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.UnitSystem"></a>

### *property* MeshWorkflow.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines the “unit system” of a Prime Model, if not defined, the unit system is deduced from the geometry at input data transfer time.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Validation"></a>

### *property* MeshWorkflow.Validation *: Ansys.ACT.Automation.Mechanical.MeshWorkflowValidation | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the mesh validation query sub-object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.VisibleProperties"></a>

### *property* MeshWorkflow.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.WorkflowType"></a>

### *property* MeshWorkflow.WorkflowType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the workflow type which is applicable to the Input, Steps, and Output.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflow.Activate"></a>

### MeshWorkflow.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddCreateLabelsFromLabelScope"></a>

### MeshWorkflow.AddCreateLabelsFromLabelScope(sourceLabelName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), newLabelName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), position: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Creates a label on entities identified by an existing source label scope. Evaluates the source label,
    captures the scoped entities, reverts to the insertion position, and creates a new label with the given name.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddFigure"></a>

### MeshWorkflow.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddImage"></a>

### MeshWorkflow.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddInput"></a>

### MeshWorkflow.AddInput() → [Ansys.ACT.Automation.Mechanical.MeshWorkflowInput](MeshWorkflowInput.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowInput)

Adds an “Input” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowInput object if not existent, otherwise it returns the already available MeshWorkflowInput object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddMeshMetrics"></a>

### MeshWorkflow.AddMeshMetrics(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab, metricType: Ansys.Common.Interop.DSObjectTypes.DSMeshMetric) → [None](https://docs.python.org/3/builtins/constants.html#None)

AddMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddOutput"></a>

### MeshWorkflow.AddOutput() → [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput](MeshWorkflowOutput.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput)

Adds an “Output” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowOutput object if not existent, otherwise it returns the already available MeshWorkflowOutput object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddScopeToSelection"></a>

### MeshWorkflow.AddScopeToSelection(scopeType: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType), scopeExpression: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

AddScopeToSelection method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CanClearOutputData"></a>

### MeshWorkflow.CanClearOutputData() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the workflow output data can be cleared.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CanFinalize"></a>

### MeshWorkflow.CanFinalize() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the workflow can be finalized.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CanGenerate"></a>

### MeshWorkflow.CanGenerate() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the workflow is ready to be generated — the same gate the product “Generate” launch uses (native isWorkflowReadyForExecution). Lets a caller pre-check before invoking .

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CanInitialize"></a>

### MeshWorkflow.CanInitialize() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the workflow can be initialized.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CanPreviewNextStep"></a>

### MeshWorkflow.CanPreviewNextStep() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the next available step in the workflow is ready for preview. The preview is used to generate an outcome with the information required for the validation of the user inputs.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CanRevertToLastCheckpoint"></a>

### MeshWorkflow.CanRevertToLastCheckpoint() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the workflow can be reverted to the last available checkpoint data.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CanRunNextStep"></a>

### MeshWorkflow.CanRunNextStep() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the next step is ready for execution.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ClearDataAndDisableCheckpoints"></a>

### MeshWorkflow.ClearDataAndDisableCheckpoints() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear all checkpoints data and disable checkpointing for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ClearGeneratedData"></a>

### MeshWorkflow.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears all the generated data, i.e.,  It resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ClearOutputData"></a>

### MeshWorkflow.ClearOutputData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears only the “Output” data, i.e., the generated Geometry part(s) and the associated mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ComputeMeshQualityMetrics"></a>

### MeshWorkflow.ComputeMeshQualityMetrics() → [None](https://docs.python.org/3/builtins/constants.html#None)

ComputeMeshQualityMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Copy"></a>

### MeshWorkflow.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CopyTo"></a>

### MeshWorkflow.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CreateLabelFromScope"></a>

### MeshWorkflow.CreateLabelFromScope(labelName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), scopeType: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType), scopeExpression: [str](https://docs.python.org/3/builtins/stdtypes.html#str), entityFilter: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.LabelCreationFilter) → [None](https://docs.python.org/3/builtins/constants.html#None)

CreateLabelFromScope method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CreateLabelFromSelection"></a>

### MeshWorkflow.CreateLabelFromSelection(labelName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), entityFilter: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.LabelCreationFilter) → [None](https://docs.python.org/3/builtins/constants.html#None)

CreateLabelFromSelection method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CreateObjRef"></a>

### MeshWorkflow.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CreateParameter"></a>

### MeshWorkflow.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Cut"></a>

### MeshWorkflow.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Delete"></a>

### MeshWorkflow.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Duplicate"></a>

### MeshWorkflow.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Equals"></a>

### MeshWorkflow.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ExportFullWorkflow"></a>

### MeshWorkflow.ExportFullWorkflow(fileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports the steps into a .emx file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ExportWorkflow"></a>

### MeshWorkflow.ExportWorkflow(fileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports the steps as template into a .emx file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.FinalizeWorkflow"></a>

### MeshWorkflow.FinalizeWorkflow() → [None](https://docs.python.org/3/builtins/constants.html#None)

Once all steps in a mesh workflow are completed successfully, the workflow can be completed which will transfer the generated data back into new Mechanical geometry part(s) together with the corresponding part mesh(es).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Generate"></a>

### MeshWorkflow.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generates the desired data by executing the whole workflow, i.e., transferring the input data, executing all steps, and completing the workflow by transferring the output data back into Geometry and Mesh data.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAPIName"></a>

### MeshWorkflow.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllElementSetNames"></a>

### MeshWorkflow.GetAllElementSetNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

Gets all the PrimeMesh model elementSets names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllElementSets"></a>

### MeshWorkflow.GetAllElementSets() → List[Ansys.Common.Interop.WBPrimeMesh.IElementSet]

Gets all the PrimeMesh model elementSets currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllLabelNames"></a>

### MeshWorkflow.GetAllLabelNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

Gets all the PrimeMesh model labels names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllLabels"></a>

### MeshWorkflow.GetAllLabels() → List[Ansys.Common.Interop.WBPrimeMesh.ILabel]

Gets all the PrimeMesh model labels currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllMorphFieldNames"></a>

### MeshWorkflow.GetAllMorphFieldNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

Gets all the PrimeMesh model morph field names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllMorphFields"></a>

### MeshWorkflow.GetAllMorphFields() → List[Ansys.Common.Interop.WBPrimeMesh.IMorphField]

Gets all the PrimeMesh model moprh fields info currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllPartNames"></a>

### MeshWorkflow.GetAllPartNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

Gets all the PrimeMesh model parts names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllParts"></a>

### MeshWorkflow.GetAllParts() → List[Ansys.Common.Interop.WBPrimeMesh.IPart]

Gets all the PrimeMesh model parts currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllProperties"></a>

### MeshWorkflow.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllSizeFieldNames"></a>

### MeshWorkflow.GetAllSizeFieldNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

Gets all the PrimeMesh model volumetric size field names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllSizeFields"></a>

### MeshWorkflow.GetAllSizeFields() → List[Ansys.Common.Interop.WBPrimeMesh.ISizeField]

Gets all the PrimeMesh model volumetric size field currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllZoneNames"></a>

### MeshWorkflow.GetAllZoneNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

Gets all the PrimeMesh model zones names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllZones"></a>

### MeshWorkflow.GetAllZones() → List[Ansys.Common.Interop.WBPrimeMesh.IZone]

Gets all the PrimeMesh model zones currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetApplicableMeshMetrics"></a>

### MeshWorkflow.GetApplicableMeshMetrics(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab) → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetApplicableMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetChildren"></a>

### MeshWorkflow.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshWorkflow.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetDetailsView"></a>

### MeshWorkflow.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetDomainBrowserAvailableMorphFieldPatterns"></a>

### MeshWorkflow.GetDomainBrowserAvailableMorphFieldPatterns() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableMorphFieldPatterns method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetDomainBrowserAvailableScopes"></a>

### MeshWorkflow.GetDomainBrowserAvailableScopes() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableScopes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetDomainBrowserAvailableSizeFieldPatterns"></a>

### MeshWorkflow.GetDomainBrowserAvailableSizeFieldPatterns() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableSizeFieldPatterns method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetEnumName"></a>

### MeshWorkflow.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetHashCode"></a>

### MeshWorkflow.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetIconFile"></a>

### MeshWorkflow.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetLifetimeService"></a>

### MeshWorkflow.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetMeshMetrics"></a>

### MeshWorkflow.GetMeshMetrics(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab) → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetMeshQualityTabIndex"></a>

### MeshWorkflow.GetMeshQualityTabIndex() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetMeshQualityTabIndex method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetMetricName"></a>

### MeshWorkflow.GetMetricName(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab, meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetMetricName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetObjectData"></a>

### MeshWorkflow.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetParameter"></a>

### MeshWorkflow.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetPath"></a>

### MeshWorkflow.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetPrimeMeshModelId"></a>

### MeshWorkflow.GetPrimeMeshModelId() → System.Int64

GetPrimeMeshModelId method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetPrimeMeshModelIndex"></a>

### MeshWorkflow.GetPrimeMeshModelIndex() → System.Int64

GetPrimeMeshModelIndex method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetPropertyName"></a>

### MeshWorkflow.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetPropertyValue"></a>

### MeshWorkflow.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetPropertyWorksheetInfo"></a>

### MeshWorkflow.GetPropertyWorksheetInfo() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetPropertyWorksheetInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetScopePatternOfMetrics"></a>

### MeshWorkflow.GetScopePatternOfMetrics() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetScopePatternOfMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetScopeTypeOfMetrics"></a>

### MeshWorkflow.GetScopeTypeOfMetrics() → Ansys.Common.Interop.DSObjectTypes.MeshWorkflowScopeType

GetScopeTypeOfMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSheetQuantityTypeString"></a>

### MeshWorkflow.GetSheetQuantityTypeString(metric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get quantity type of sheet metric from mesh metric type

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidMeshMetrics"></a>

### MeshWorkflow.GetSolidMeshMetrics() → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetSolidMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidMeshQualityState"></a>

### MeshWorkflow.GetSolidMeshQualityState() → Ansys.Common.Interop.DSObjectTypes.DSWorksheetTabState

Get the state of solid mesh quality worksheet tab

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshMetrics"></a>

### MeshWorkflow.GetSolidSurfaceMeshMetrics() → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetSolidSurfaceMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityErrorLimit"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityErrorLimitIsDefault"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityErrorLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get SolidSurface Mesh Quality Worksheet Error Limit is Default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityName"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityState"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityState() → Ansys.Common.Interop.DSObjectTypes.DSWorksheetTabState

Get the state of solid surface mesh quality worksheet tab

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimitIsDefault"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get SolidSurface Mesh Quality Worksheet Warning Limit is Default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricTooltip"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricTooltip(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric Tooltip

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricValue"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceQuantityTypeString"></a>

### MeshWorkflow.GetSolidSurfaceQuantityTypeString(metric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Quantity type from SolidSurface mesh metric type

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshMetrics"></a>

### MeshWorkflow.GetSurfaceMeshMetrics() → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetSurfaceMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityErrorLimit"></a>

### MeshWorkflow.GetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get User Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityErrorLimitIsDefault"></a>

### MeshWorkflow.GetSurfaceMeshQualityErrorLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get Mesh Quality Error Limit is default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityName"></a>

### MeshWorkflow.GetSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetSurfaceMeshQualityName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityState"></a>

### MeshWorkflow.GetSurfaceMeshQualityState() → Ansys.Common.Interop.DSObjectTypes.DSWorksheetTabState

Get the state of surface mesh quality worksheet tab

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflow.GetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get User Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityWarningLimitIsDefault"></a>

### MeshWorkflow.GetSurfaceMeshQualityWarningLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get Mesh Quality Warning Limit is default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityWorstMetricBackgroundColor"></a>

### MeshWorkflow.GetSurfaceMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric Background Colour

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityWorstMetricTooltip"></a>

### MeshWorkflow.GetSurfaceMeshQualityWorstMetricTooltip(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric Tooltip

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSurfaceMeshQualityWorstMetricValue"></a>

### MeshWorkflow.GetSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetUnpublishedList"></a>

### MeshWorkflow.GetUnpublishedList() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetUnpublishedList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVisibleProperties"></a>

### MeshWorkflow.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVisiblePropertyNames"></a>

### MeshWorkflow.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeMeshQualityErrorLimit"></a>

### MeshWorkflow.GetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeMeshQualityErrorLimitIsDefault"></a>

### MeshWorkflow.GetVolumeMeshQualityErrorLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get Volume Mesh Quality Worksheet Error Limit is Default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeMeshQualityName"></a>

### MeshWorkflow.GetVolumeMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeMeshQualityWarningLimit"></a>

### MeshWorkflow.GetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeMeshQualityWarningLimitIsDefault"></a>

### MeshWorkflow.GetVolumeMeshQualityWarningLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get Volume Mesh Quality Worksheet Warning Limit is Default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeMeshQualityWorstMetricBackgroundColor"></a>

### MeshWorkflow.GetVolumeMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeMeshQualityWorstMetricTooltip"></a>

### MeshWorkflow.GetVolumeMeshQualityWorstMetricTooltip(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric Tooltip

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeMeshQualityWorstMetricValue"></a>

### MeshWorkflow.GetVolumeMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetVolumeQuantityTypeString"></a>

### MeshWorkflow.GetVolumeQuantityTypeString(metric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Quantity type from solid mesh metric type

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetWorkflowStepsGroup"></a>

### MeshWorkflow.GetWorkflowStepsGroup() → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup](MeshWorkflowStepGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup)

Updates incremental meshing workflow group object -> generates all need generated steps.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GroupAllSimilarChildren"></a>

### MeshWorkflow.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GroupSimilarObjects"></a>

### MeshWorkflow.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ImportWorkflow"></a>

### MeshWorkflow.ImportWorkflow(fileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Imports the steps from a template .emx file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.InitializeLifetimeService"></a>

### MeshWorkflow.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.InitializeWorkflow"></a>

### MeshWorkflow.InitializeWorkflow() → [None](https://docs.python.org/3/builtins/constants.html#None)

Initializes the mesh workflow by transferring the scoped geometry parts/bodies from Mechanical into the PrimeMesh model and updates the “Input” node state accordingly.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.IsPropertyEditable"></a>

### MeshWorkflow.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflow.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.IsPropertyVisible"></a>

### MeshWorkflow.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflow.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.IsWBInReadOnlyLicMode"></a>

### MeshWorkflow.IsWBInReadOnlyLicMode() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Executes the next available step in the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Paste"></a>

### MeshWorkflow.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PreviewNextStep"></a>

### MeshWorkflow.PreviewNextStep() → [None](https://docs.python.org/3/builtins/constants.html#None)

Previews the next available step in the workflow. After the preview, the step will contain a preview outcome with the information required for the validation of the user inputs. The preview outcome can be returned using the MeshWorkflowOutcomes method of the step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PropertyByAPIName"></a>

### MeshWorkflow.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PropertyById"></a>

### MeshWorkflow.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PropertyByName"></a>

### MeshWorkflow.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PropertyTypeInfo"></a>

### MeshWorkflow.PropertyTypeInfo(property: Ansys.ACT.Automation.Mechanical.Property) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

PropertyTypeInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RemoveFromGroup"></a>

### MeshWorkflow.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RemoveMeshMetrics"></a>

### MeshWorkflow.RemoveMeshMetrics(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab, metricType: Ansys.Common.Interop.DSObjectTypes.DSMeshMetric) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RemoveParameter"></a>

### MeshWorkflow.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RenameBasedOnType"></a>

### MeshWorkflow.RenameBasedOnType() → [None](https://docs.python.org/3/builtins/constants.html#None)

Renames applying the default name based on type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ResetMeshQualityMetrics"></a>

### MeshWorkflow.ResetMeshQualityMetrics() → [None](https://docs.python.org/3/builtins/constants.html#None)

ResetMeshQualityMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RevertToLastCheckpoint"></a>

### MeshWorkflow.RevertToLastCheckpoint() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reverts to the last available checkpoint data.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RunNextStep"></a>

### MeshWorkflow.RunNextStep() → [None](https://docs.python.org/3/builtins/constants.html#None)

Executes the next available step in the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RunQuery"></a>

### MeshWorkflow.RunQuery(queryType: Ansys.Common.Interop.DSObjectTypes.MeshWorkflowQueryType, scopeType: Ansys.Common.Interop.DSObjectTypes.MeshWorkflowScopeType, scopePattern: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.Common.Interop.WBPrimeMesh.IWBPrimeQueryResult

Runs the given Maestro query and returns the raw result map.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SetMeshQualityTabIndex"></a>

### MeshWorkflow.SetMeshQualityTabIndex(tabIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetMeshQualityTabIndex method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SetScopeOfMetrics"></a>

### MeshWorkflow.SetScopeOfMetrics(scopeType: Ansys.Common.Interop.DSObjectTypes.MeshWorkflowScopeType, scopePattern: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetScopeOfMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SetSolidSurfaceMeshQualityErrorLimit"></a>

### MeshWorkflow.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflow.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SetSolidSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflow.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflow.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SetSurfaceMeshQualityErrorLimit"></a>

### MeshWorkflow.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflow.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SetSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflow.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflow.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SetVolumeMeshQualityErrorLimit"></a>

### MeshWorkflow.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflow.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.SetVolumeMeshQualityWarningLimit"></a>

### MeshWorkflow.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflow.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ShowGroupedTreeView"></a>

### MeshWorkflow.ShowGroupedTreeView(newvalue: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether to Show Grouped Tree View.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.UpdateWorkflow"></a>

### MeshWorkflow.UpdateWorkflow() → [None](https://docs.python.org/3/builtins/constants.html#None)

Updates incremental meshing workflow group object -> generates all need generated steps.

<!-- !! processed by numpydoc !! -->

