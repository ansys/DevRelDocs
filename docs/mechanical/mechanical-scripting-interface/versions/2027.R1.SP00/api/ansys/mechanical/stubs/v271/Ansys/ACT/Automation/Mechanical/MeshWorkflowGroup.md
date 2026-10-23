# `MeshWorkflowGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup(internalObject: Any)

<a id="MeshWorkflowGroup"></a>

### *class* MeshWorkflowGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MeshWorkflowGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-----------------------------------------------------------------------------|------------------------------------|
| [`SendBodiesToMeshWorkflow`](#MeshWorkflowGroup.SendBodiesToMeshWorkflow)   | SendBodiesToMeshWorkflow method.   |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowGroup.Activate)                                                                                         | Activate the current object.                                                                                                                                                                                                                                                                                           |
| [`AddComment`](#MeshWorkflowGroup.AddComment)                                                                                     | Creates a new child Comment.                                                                                                                                                                                                                                                                                           |
| [`AddFigure`](#MeshWorkflowGroup.AddFigure)                                                                                       | Creates a new child Figure.                                                                                                                                                                                                                                                                                            |
| [`AddImage`](#MeshWorkflowGroup.AddImage)                                                                                         | Creates a new child Image.                                                                                                                                                                                                                                                                                             |
| [`AddMeshMetrics`](#MeshWorkflowGroup.AddMeshMetrics)                                                                             | AddMeshMetrics method.                                                                                                                                                                                                                                                                                                 |
| [`AddMeshWorkflow`](#MeshWorkflowGroup.AddMeshWorkflow)                                                                           | Adds a new workflow to the “MeshWorkflowGroup” object.                                                                                                                                                                                                                                                                 |
| [`ClearGeneratedData`](#MeshWorkflowGroup.ClearGeneratedData)                                                                     | Resets all mesh workflows completely, i.e. also the geometry scoping transferred into each mesh workflow will be reset and all inactive geometry parts/bodies will become active again. Steps, controls, and outcomes will be reset to their initial state while any user-defined property settings will remain as-is. |
| [`ClearOutputData`](#MeshWorkflowGroup.ClearOutputData)                                                                           | Clears all MeshWorkflowGroup generated mesh and geometry output data (for all children workflow groups transferring meshes)                                                                                                                                                                                            |
| [`ClearOutputMeshes`](#MeshWorkflowGroup.ClearOutputMeshes)                                                                       | Clears all MeshWorkflowGroup generated mesh output data (for all children workflow groups transferring meshes)                                                                                                                                                                                                         |
| [`ComputeMeshQualityMetrics`](#MeshWorkflowGroup.ComputeMeshQualityMetrics)                                                       | ComputeMeshQualityMetrics method.                                                                                                                                                                                                                                                                                      |
| [`Copy`](#MeshWorkflowGroup.Copy)                                                                                                 | Copies the current DataModelObject.                                                                                                                                                                                                                                                                                    |
| [`CopyTo`](#MeshWorkflowGroup.CopyTo)                                                                                             | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                             |
| [`CreateObjRef`](#MeshWorkflowGroup.CreateObjRef)                                                                                 | CreateObjRef method.                                                                                                                                                                                                                                                                                                   |
| [`CreateParameter`](#MeshWorkflowGroup.CreateParameter)                                                                           | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                |
| [`Cut`](#MeshWorkflowGroup.Cut)                                                                                                   | Cuts the current DataModelObject.                                                                                                                                                                                                                                                                                      |
| [`Delete`](#MeshWorkflowGroup.Delete)                                                                                             | Run the Delete action.                                                                                                                                                                                                                                                                                                 |
| [`Duplicate`](#MeshWorkflowGroup.Duplicate)                                                                                       | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                         |
| [`Equals`](#MeshWorkflowGroup.Equals)                                                                                             | Equals method.                                                                                                                                                                                                                                                                                                         |
| [`GenerateWorkflows`](#MeshWorkflowGroup.GenerateWorkflows)                                                                       | Generates all mesh workflows, i.e. executes the “Input”, the “Steps”, and the “Output” as needed.                                                                                                                                                                                                                      |
| [`GetAPIName`](#MeshWorkflowGroup.GetAPIName)                                                                                     | Property name bound to dispId.                                                                                                                                                                                                                                                                                         |
| [`GetAllProperties`](#MeshWorkflowGroup.GetAllProperties)                                                                         | GetAllProperties method.                                                                                                                                                                                                                                                                                               |
| [`GetApplicableMeshMetrics`](#MeshWorkflowGroup.GetApplicableMeshMetrics)                                                         | GetApplicableMeshMetrics method.                                                                                                                                                                                                                                                                                       |
| [`GetChildren`](#MeshWorkflowGroup.GetChildren)                                                                                   | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                           |
| [`GetDetailsView`](#MeshWorkflowGroup.GetDetailsView)                                                                             | GetDetailsView method.                                                                                                                                                                                                                                                                                                 |
| [`GetEnumName`](#MeshWorkflowGroup.GetEnumName)                                                                                   | Enum name bound to value                                                                                                                                                                                                                                                                                               |
| [`GetHashCode`](#MeshWorkflowGroup.GetHashCode)                                                                                   | GetHashCode method.                                                                                                                                                                                                                                                                                                    |
| [`GetIconFile`](#MeshWorkflowGroup.GetIconFile)                                                                                   | GetIconFile method.                                                                                                                                                                                                                                                                                                    |
| [`GetLifetimeService`](#MeshWorkflowGroup.GetLifetimeService)                                                                     | GetLifetimeService method.                                                                                                                                                                                                                                                                                             |
| [`GetMeshMetrics`](#MeshWorkflowGroup.GetMeshMetrics)                                                                             | GetMeshMetrics method.                                                                                                                                                                                                                                                                                                 |
| [`GetMeshQualityTabIndex`](#MeshWorkflowGroup.GetMeshQualityTabIndex)                                                             | GetMeshQualityTabIndex method.                                                                                                                                                                                                                                                                                         |
| [`GetMetricName`](#MeshWorkflowGroup.GetMetricName)                                                                               | GetMetricName method.                                                                                                                                                                                                                                                                                                  |
| [`GetObjectData`](#MeshWorkflowGroup.GetObjectData)                                                                               | GetObjectData method.                                                                                                                                                                                                                                                                                                  |
| [`GetParameter`](#MeshWorkflowGroup.GetParameter)                                                                                 | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                |
| [`GetPath`](#MeshWorkflowGroup.GetPath)                                                                                           | GetPath method.                                                                                                                                                                                                                                                                                                        |
| [`GetPropertyName`](#MeshWorkflowGroup.GetPropertyName)                                                                           | GetPropertyName method.                                                                                                                                                                                                                                                                                                |
| [`GetPropertyValue`](#MeshWorkflowGroup.GetPropertyValue)                                                                         | GetPropertyValue method.                                                                                                                                                                                                                                                                                               |
| [`GetScopePatternOfMetrics`](#MeshWorkflowGroup.GetScopePatternOfMetrics)                                                         | GetScopePatternOfMetrics method.                                                                                                                                                                                                                                                                                       |
| [`GetScopeTypeOfMetrics`](#MeshWorkflowGroup.GetScopeTypeOfMetrics)                                                               | GetScopeTypeOfMetrics method.                                                                                                                                                                                                                                                                                          |
| [`GetSheetQuantityTypeString`](#MeshWorkflowGroup.GetSheetQuantityTypeString)                                                     | Get quantity type of sheet metric from mesh metric type                                                                                                                                                                                                                                                                |
| [`GetSolidMeshMetrics`](#MeshWorkflowGroup.GetSolidMeshMetrics)                                                                   | GetSolidMeshMetrics method.                                                                                                                                                                                                                                                                                            |
| [`GetSolidMeshQualityState`](#MeshWorkflowGroup.GetSolidMeshQualityState)                                                         | Get the state of solid mesh quality worksheet tab                                                                                                                                                                                                                                                                      |
| [`GetSolidSurfaceMeshMetrics`](#MeshWorkflowGroup.GetSolidSurfaceMeshMetrics)                                                     | GetSolidSurfaceMeshMetrics method.                                                                                                                                                                                                                                                                                     |
| [`GetSolidSurfaceMeshQualityErrorLimit`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityErrorLimit)                                 | Get Mesh Quality Error Limit                                                                                                                                                                                                                                                                                           |
| [`GetSolidSurfaceMeshQualityErrorLimitIsDefault`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityErrorLimitIsDefault)               | Get SolidSurface Mesh Quality Worksheet Error Limit is Default                                                                                                                                                                                                                                                         |
| [`GetSolidSurfaceMeshQualityName`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityName)                                             | Get Mesh Quality Name                                                                                                                                                                                                                                                                                                  |
| [`GetSolidSurfaceMeshQualityState`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityState)                                           | Get the state of solid surface mesh quality worksheet tab                                                                                                                                                                                                                                                              |
| [`GetSolidSurfaceMeshQualityWarningLimit`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimit)                             | Get Mesh Quality Warning Limit                                                                                                                                                                                                                                                                                         |
| [`GetSolidSurfaceMeshQualityWarningLimitIsDefault`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimitIsDefault)           | Get SolidSurface Mesh Quality Worksheet Warning Limit is Default                                                                                                                                                                                                                                                       |
| [`GetSolidSurfaceMeshQualityWorstMetricBackgroundColor`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor) | Get Mesh Quality Worst Metric BackgroundColor                                                                                                                                                                                                                                                                          |
| [`GetSolidSurfaceMeshQualityWorstMetricTooltip`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricTooltip)                 | Get Mesh Quality Worst Metric Tooltip                                                                                                                                                                                                                                                                                  |
| [`GetSolidSurfaceMeshQualityWorstMetricValue`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricValue)                     | Get Mesh Quality Worst Metric Value                                                                                                                                                                                                                                                                                    |
| [`GetSolidSurfaceQuantityTypeString`](#MeshWorkflowGroup.GetSolidSurfaceQuantityTypeString)                                       | Get Quantity type from SolidSurface mesh metric type                                                                                                                                                                                                                                                                   |
| [`GetSurfaceMeshMetrics`](#MeshWorkflowGroup.GetSurfaceMeshMetrics)                                                               | GetSurfaceMeshMetrics method.                                                                                                                                                                                                                                                                                          |
| [`GetSurfaceMeshQualityErrorLimit`](#MeshWorkflowGroup.GetSurfaceMeshQualityErrorLimit)                                           | Get User Mesh Quality Error Limit                                                                                                                                                                                                                                                                                      |
| [`GetSurfaceMeshQualityErrorLimitIsDefault`](#MeshWorkflowGroup.GetSurfaceMeshQualityErrorLimitIsDefault)                         | Get Mesh Quality Error Limit is default                                                                                                                                                                                                                                                                                |
| [`GetSurfaceMeshQualityName`](#MeshWorkflowGroup.GetSurfaceMeshQualityName)                                                       | GetSurfaceMeshQualityName method.                                                                                                                                                                                                                                                                                      |
| [`GetSurfaceMeshQualityState`](#MeshWorkflowGroup.GetSurfaceMeshQualityState)                                                     | Get the state of surface mesh quality worksheet tab                                                                                                                                                                                                                                                                    |
| [`GetSurfaceMeshQualityWarningLimit`](#MeshWorkflowGroup.GetSurfaceMeshQualityWarningLimit)                                       | Get User Mesh Quality Warning Limit                                                                                                                                                                                                                                                                                    |
| [`GetSurfaceMeshQualityWarningLimitIsDefault`](#MeshWorkflowGroup.GetSurfaceMeshQualityWarningLimitIsDefault)                     | Get Mesh Quality Warning Limit is default                                                                                                                                                                                                                                                                              |
| [`GetSurfaceMeshQualityWorstMetricBackgroundColor`](#MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricBackgroundColor)           | Get Mesh Quality Worst Metric Background Colour                                                                                                                                                                                                                                                                        |
| [`GetSurfaceMeshQualityWorstMetricTooltip`](#MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricTooltip)                           | Get Mesh Quality Worst Metric Tooltip                                                                                                                                                                                                                                                                                  |
| [`GetSurfaceMeshQualityWorstMetricValue`](#MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricValue)                               | Get Mesh Quality Worst Metric Value                                                                                                                                                                                                                                                                                    |
| [`GetVisibleProperties`](#MeshWorkflowGroup.GetVisibleProperties)                                                                 | GetVisibleProperties method.                                                                                                                                                                                                                                                                                           |
| [`GetVisiblePropertyNames`](#MeshWorkflowGroup.GetVisiblePropertyNames)                                                           | GetVisiblePropertyNames method.                                                                                                                                                                                                                                                                                        |
| [`GetVolumeMeshQualityErrorLimit`](#MeshWorkflowGroup.GetVolumeMeshQualityErrorLimit)                                             | Get Mesh Quality Error Limit                                                                                                                                                                                                                                                                                           |
| [`GetVolumeMeshQualityErrorLimitIsDefault`](#MeshWorkflowGroup.GetVolumeMeshQualityErrorLimitIsDefault)                           | Get Volume Mesh Quality Worksheet Error Limit is Default                                                                                                                                                                                                                                                               |
| [`GetVolumeMeshQualityName`](#MeshWorkflowGroup.GetVolumeMeshQualityName)                                                         | Get Mesh Quality Name                                                                                                                                                                                                                                                                                                  |
| [`GetVolumeMeshQualityWarningLimit`](#MeshWorkflowGroup.GetVolumeMeshQualityWarningLimit)                                         | Get Mesh Quality Warning Limit                                                                                                                                                                                                                                                                                         |
| [`GetVolumeMeshQualityWarningLimitIsDefault`](#MeshWorkflowGroup.GetVolumeMeshQualityWarningLimitIsDefault)                       | Get Volume Mesh Quality Worksheet Warning Limit is Default                                                                                                                                                                                                                                                             |
| [`GetVolumeMeshQualityWorstMetricBackgroundColor`](#MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricBackgroundColor)             | Get Mesh Quality Worst Metric BackgroundColor                                                                                                                                                                                                                                                                          |
| [`GetVolumeMeshQualityWorstMetricTooltip`](#MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricTooltip)                             | Get Mesh Quality Worst Metric Tooltip                                                                                                                                                                                                                                                                                  |
| [`GetVolumeMeshQualityWorstMetricValue`](#MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricValue)                                 | Get Mesh Quality Worst Metric Value                                                                                                                                                                                                                                                                                    |
| [`GetVolumeQuantityTypeString`](#MeshWorkflowGroup.GetVolumeQuantityTypeString)                                                   | Get Quantity type from solid mesh metric type                                                                                                                                                                                                                                                                          |
| [`GroupAllSimilarChildren`](#MeshWorkflowGroup.GroupAllSimilarChildren)                                                           | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                |
| [`GroupSimilarObjects`](#MeshWorkflowGroup.GroupSimilarObjects)                                                                   | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                    |
| [`InitializeLifetimeService`](#MeshWorkflowGroup.InitializeLifetimeService)                                                       | InitializeLifetimeService method.                                                                                                                                                                                                                                                                                      |
| [`IsPropertyEditable`](#MeshWorkflowGroup.IsPropertyEditable)                                                                     | IsPropertyEditable method.                                                                                                                                                                                                                                                                                             |
| [`IsPropertyVisible`](#MeshWorkflowGroup.IsPropertyVisible)                                                                       | IsPropertyVisible method.                                                                                                                                                                                                                                                                                              |
| [`IsSolidSurfaceMeshQualityMetricComputed`](#MeshWorkflowGroup.IsSolidSurfaceMeshQualityMetricComputed)                           | Is Solid Surface Mesh Quality Metric Computed                                                                                                                                                                                                                                                                          |
| [`IsSurfaceMeshQualityMetricComputed`](#MeshWorkflowGroup.IsSurfaceMeshQualityMetricComputed)                                     | Is Surface Mesh Quality Metric Computed                                                                                                                                                                                                                                                                                |
| [`IsVolumeMeshQualityMetricComputed`](#MeshWorkflowGroup.IsVolumeMeshQualityMetricComputed)                                       | Is Solid Mesh Quality Metric Computed                                                                                                                                                                                                                                                                                  |
| [`NotifyChangePropId`](#MeshWorkflowGroup.NotifyChangePropId)                                                                     | NotifyChangePropId method.                                                                                                                                                                                                                                                                                             |
| [`Paste`](#MeshWorkflowGroup.Paste)                                                                                               | Pastes to the current DataModelObject context.                                                                                                                                                                                                                                                                         |
| [`PropertyByAPIName`](#MeshWorkflowGroup.PropertyByAPIName)                                                                       | Get a property by its API name.                                                                                                                                                                                                                                                                                        |
| [`PropertyById`](#MeshWorkflowGroup.PropertyById)                                                                                 | PropertyById method.                                                                                                                                                                                                                                                                                                   |
| [`PropertyByName`](#MeshWorkflowGroup.PropertyByName)                                                                             | Get a property by its unique name.                                                                                                                                                                                                                                                                                     |
| [`RemoveFromGroup`](#MeshWorkflowGroup.RemoveFromGroup)                                                                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                                                                                                                                                                                            |
| [`RemoveMeshMetrics`](#MeshWorkflowGroup.RemoveMeshMetrics)                                                                       | RemoveMeshMetrics method.                                                                                                                                                                                                                                                                                              |
| [`RemoveParameter`](#MeshWorkflowGroup.RemoveParameter)                                                                           | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                      |
| [`RenameBasedOnType`](#MeshWorkflowGroup.RenameBasedOnType)                                                                       | Renames applying the default name based on type.                                                                                                                                                                                                                                                                       |
| [`ResetMeshQualityMetrics`](#MeshWorkflowGroup.ResetMeshQualityMetrics)                                                           | ResetMeshQualityMetrics method.                                                                                                                                                                                                                                                                                        |
| [`SetActiveWorkflow`](#MeshWorkflowGroup.SetActiveWorkflow)                                                                       | Sets the active workflow by its object ID.                                                                                                                                                                                                                                                                             |
| [`SetMeshQualityTabIndex`](#MeshWorkflowGroup.SetMeshQualityTabIndex)                                                             | SetMeshQualityTabIndex method.                                                                                                                                                                                                                                                                                         |
| [`SetScopeOfMetrics`](#MeshWorkflowGroup.SetScopeOfMetrics)                                                                       | SetScopeOfMetrics method.                                                                                                                                                                                                                                                                                              |
| [`SetSolidSurfaceMeshQualityErrorLimit`](#MeshWorkflowGroup.SetSolidSurfaceMeshQualityErrorLimit)                                 | Set Mesh Quality Error Limit                                                                                                                                                                                                                                                                                           |
| [`SetSolidSurfaceMeshQualityWarningLimit`](#MeshWorkflowGroup.SetSolidSurfaceMeshQualityWarningLimit)                             | Set Mesh Quality Warning Limit                                                                                                                                                                                                                                                                                         |
| [`SetSurfaceMeshQualityErrorLimit`](#MeshWorkflowGroup.SetSurfaceMeshQualityErrorLimit)                                           | Set Mesh Quality Error Level                                                                                                                                                                                                                                                                                           |
| [`SetSurfaceMeshQualityWarningLimit`](#MeshWorkflowGroup.SetSurfaceMeshQualityWarningLimit)                                       | Set Mesh Quality Warning Limit                                                                                                                                                                                                                                                                                         |
| [`SetVolumeMeshQualityErrorLimit`](#MeshWorkflowGroup.SetVolumeMeshQualityErrorLimit)                                             | Set Mesh Quality Error Limit                                                                                                                                                                                                                                                                                           |
| [`SetVolumeMeshQualityWarningLimit`](#MeshWorkflowGroup.SetVolumeMeshQualityWarningLimit)                                         | Set Mesh Quality Warning Limit                                                                                                                                                                                                                                                                                         |
| [`StopMeshAgent`](#MeshWorkflowGroup.StopMeshAgent)                                                                               | StopMeshAgent method.                                                                                                                                                                                                                                                                                                  |
| [`UpdateMeshWorkflowGroup`](#MeshWorkflowGroup.UpdateMeshWorkflowGroup)                                                           | Updates MeshWorkflowGroup object -> generates all need generated steps.                                                                                                                                                                                                                                                |
| [`ValidateMeshAgentPrerequisites`](#MeshWorkflowGroup.ValidateMeshAgentPrerequisites)                                             | ValidateMeshAgentPrerequisites method.                                                                                                                                                                                                                                                                                 |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ActiveWorkflow`](#MeshWorkflowGroup.ActiveWorkflow)                                                 | Gets the currently active workflow object.                             |
| [`AttachedRefs`](#MeshWorkflowGroup.AttachedRefs)                                                     | AttachedRefs property.                                                 |
| [`Children`](#MeshWorkflowGroup.Children)                                                             | Gets the list of children.                                             |
| [`ClsId`](#MeshWorkflowGroup.ClsId)                                                                   | ClsId property.                                                        |
| [`Comments`](#MeshWorkflowGroup.Comments)                                                             | Gets the list of associated comments.                                  |
| [`DataModelObjectCategory`](#MeshWorkflowGroup.DataModelObjectCategory)                               | Gets the current DataModelObject's category.                           |
| [`EnablePrimeMeshTransparency`](#MeshWorkflowGroup.EnablePrimeMeshTransparency)                       | Gets or sets whether to enable transparency for out-of-focus entities. |
| [`Figures`](#MeshWorkflowGroup.Figures)                                                               | Gets the list of associated figures.                                   |
| [`GroupingFolder`](#MeshWorkflowGroup.GroupingFolder)                                                 | GroupingFolder property.                                               |
| [`IconName`](#MeshWorkflowGroup.IconName)                                                             | IconName property.                                                     |
| [`Images`](#MeshWorkflowGroup.Images)                                                                 | Gets the list of associated images.                                    |
| [`InternalObject`](#MeshWorkflowGroup.InternalObject)                                                 | Gets the internal object. For advanced usage only.                     |
| [`MeshWorkflowObjects`](#MeshWorkflowGroup.MeshWorkflowObjects)                                       | Gets the MeshWorkflowGroup.                                            |
| [`Name`](#MeshWorkflowGroup.Name)                                                                     | Name property.                                                         |
| [`NumberOfShellMeshQualityMetrics`](#MeshWorkflowGroup.NumberOfShellMeshQualityMetrics)               | NumberOfShellMeshQualityMetrics property.                              |
| [`NumberOfSolidMeshQualityMetrics`](#MeshWorkflowGroup.NumberOfSolidMeshQualityMetrics)               | NumberOfSolidMeshQualityMetrics property.                              |
| [`NumberOfSolidSurfaceMeshQualityMetrics`](#MeshWorkflowGroup.NumberOfSolidSurfaceMeshQualityMetrics) | NumberOfSolidSurfaceMeshQualityMetrics property.                       |
| [`ObjectId`](#MeshWorkflowGroup.ObjectId)                                                             | ObjectId property.                                                     |
| [`ObjectState`](#MeshWorkflowGroup.ObjectState)                                                       | ObjectState property.                                                  |
| [`ObjectTags`](#MeshWorkflowGroup.ObjectTags)                                                         | ObjectTags property.                                                   |
| [`Parent`](#MeshWorkflowGroup.Parent)                                                                 | Parent property.                                                       |
| [`Properties`](#MeshWorkflowGroup.Properties)                                                         | Gets the list of properties for this object.                           |
| [`ShowPrimeMeshGeometryTessellation`](#MeshWorkflowGroup.ShowPrimeMeshGeometryTessellation)           | Gets or sets whether to show the PrimeMesh geometry tessellation.      |
| [`ShowPrimeMeshTessellation`](#MeshWorkflowGroup.ShowPrimeMeshTessellation)                           | Gets or sets whether to show the PrimeMesh mesh tessellation.          |
| [`State`](#MeshWorkflowGroup.State)                                                                   | State property.                                                        |
| [`SupportedWorkflowTypes`](#MeshWorkflowGroup.SupportedWorkflowTypes)                                 | SupportedWorkflowTypes property.                                       |
| [`VisibleProperties`](#MeshWorkflowGroup.VisibleProperties)                                           | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowGroup.ActiveWorkflow"></a>

### *property* MeshWorkflowGroup.ActiveWorkflow *: [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the currently active workflow object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AttachedRefs"></a>

### *property* MeshWorkflowGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Children"></a>

### *property* MeshWorkflowGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ClsId"></a>

### *property* MeshWorkflowGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Comments"></a>

### *property* MeshWorkflowGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.DataModelObjectCategory"></a>

### *property* MeshWorkflowGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.EnablePrimeMeshTransparency"></a>

### *property* MeshWorkflowGroup.EnablePrimeMeshTransparency *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to enable transparency for out-of-focus entities.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Figures"></a>

### *property* MeshWorkflowGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GroupingFolder"></a>

### *property* MeshWorkflowGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.IconName"></a>

### *property* MeshWorkflowGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Images"></a>

### *property* MeshWorkflowGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.InternalObject"></a>

### *property* MeshWorkflowGroup.InternalObject *: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.MeshWorkflowObjects"></a>

### *property* MeshWorkflowGroup.MeshWorkflowObjects *: Iterable[[Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MeshWorkflowGroup.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Name"></a>

### *property* MeshWorkflowGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.NumberOfShellMeshQualityMetrics"></a>

### *property* MeshWorkflowGroup.NumberOfShellMeshQualityMetrics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfShellMeshQualityMetrics property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.NumberOfSolidMeshQualityMetrics"></a>

### *property* MeshWorkflowGroup.NumberOfSolidMeshQualityMetrics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfSolidMeshQualityMetrics property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.NumberOfSolidSurfaceMeshQualityMetrics"></a>

### *property* MeshWorkflowGroup.NumberOfSolidSurfaceMeshQualityMetrics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

NumberOfSolidSurfaceMeshQualityMetrics property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ObjectId"></a>

### *property* MeshWorkflowGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ObjectState"></a>

### *property* MeshWorkflowGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ObjectTags"></a>

### *property* MeshWorkflowGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Parent"></a>

### *property* MeshWorkflowGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Properties"></a>

### *property* MeshWorkflowGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ShowPrimeMeshGeometryTessellation"></a>

### *property* MeshWorkflowGroup.ShowPrimeMeshGeometryTessellation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to show the PrimeMesh geometry tessellation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ShowPrimeMeshTessellation"></a>

### *property* MeshWorkflowGroup.ShowPrimeMeshTessellation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to show the PrimeMesh mesh tessellation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.State"></a>

### *property* MeshWorkflowGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SupportedWorkflowTypes"></a>

### *property* MeshWorkflowGroup.SupportedWorkflowTypes *: List[[Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupportedWorkflowTypes property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.VisibleProperties"></a>

### *property* MeshWorkflowGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowGroup.Activate"></a>

### MeshWorkflowGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddComment"></a>

### MeshWorkflowGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddFigure"></a>

### MeshWorkflowGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddImage"></a>

### MeshWorkflowGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddMeshMetrics"></a>

### MeshWorkflowGroup.AddMeshMetrics(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab, metricType: Ansys.Common.Interop.DSObjectTypes.DSMeshMetric) → [None](https://docs.python.org/3/builtins/constants.html#None)

AddMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddMeshWorkflow"></a>

### MeshWorkflowGroup.AddMeshWorkflow(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow)

Adds a new workflow to the “MeshWorkflowGroup” object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ClearGeneratedData"></a>

### MeshWorkflowGroup.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Resets all mesh workflows completely, i.e. also the geometry scoping transferred into each mesh workflow will be reset and all inactive geometry parts/bodies will become active again. Steps, controls, and outcomes will be reset to their initial state while any user-defined property settings will remain as-is.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ClearOutputData"></a>

### MeshWorkflowGroup.ClearOutputData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears all MeshWorkflowGroup generated mesh and geometry output data (for all children workflow groups transferring meshes)

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ClearOutputMeshes"></a>

### MeshWorkflowGroup.ClearOutputMeshes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears all MeshWorkflowGroup generated mesh output data (for all children workflow groups transferring meshes)

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ComputeMeshQualityMetrics"></a>

### MeshWorkflowGroup.ComputeMeshQualityMetrics() → [None](https://docs.python.org/3/builtins/constants.html#None)

ComputeMeshQualityMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Copy"></a>

### MeshWorkflowGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.CopyTo"></a>

### MeshWorkflowGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.CreateObjRef"></a>

### MeshWorkflowGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.CreateParameter"></a>

### MeshWorkflowGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Cut"></a>

### MeshWorkflowGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Delete"></a>

### MeshWorkflowGroup.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Duplicate"></a>

### MeshWorkflowGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Equals"></a>

### MeshWorkflowGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GenerateWorkflows"></a>

### MeshWorkflowGroup.GenerateWorkflows() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generates all mesh workflows, i.e. executes the “Input”, the “Steps”, and the “Output” as needed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetAPIName"></a>

### MeshWorkflowGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetAllProperties"></a>

### MeshWorkflowGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetApplicableMeshMetrics"></a>

### MeshWorkflowGroup.GetApplicableMeshMetrics(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab) → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetApplicableMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetChildren"></a>

### MeshWorkflowGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshWorkflowGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetDetailsView"></a>

### MeshWorkflowGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetEnumName"></a>

### MeshWorkflowGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetHashCode"></a>

### MeshWorkflowGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetIconFile"></a>

### MeshWorkflowGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetLifetimeService"></a>

### MeshWorkflowGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetMeshMetrics"></a>

### MeshWorkflowGroup.GetMeshMetrics(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab) → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetMeshQualityTabIndex"></a>

### MeshWorkflowGroup.GetMeshQualityTabIndex() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetMeshQualityTabIndex method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetMetricName"></a>

### MeshWorkflowGroup.GetMetricName(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab, meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetMetricName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetObjectData"></a>

### MeshWorkflowGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetParameter"></a>

### MeshWorkflowGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetPath"></a>

### MeshWorkflowGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetPropertyName"></a>

### MeshWorkflowGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetPropertyValue"></a>

### MeshWorkflowGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetScopePatternOfMetrics"></a>

### MeshWorkflowGroup.GetScopePatternOfMetrics() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetScopePatternOfMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetScopeTypeOfMetrics"></a>

### MeshWorkflowGroup.GetScopeTypeOfMetrics() → Ansys.Common.Interop.DSObjectTypes.MeshWorkflowScopeType

GetScopeTypeOfMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSheetQuantityTypeString"></a>

### MeshWorkflowGroup.GetSheetQuantityTypeString(metric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get quantity type of sheet metric from mesh metric type

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidMeshMetrics"></a>

### MeshWorkflowGroup.GetSolidMeshMetrics() → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetSolidMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidMeshQualityState"></a>

### MeshWorkflowGroup.GetSolidMeshQualityState() → Ansys.Common.Interop.DSObjectTypes.DSWorksheetTabState

Get the state of solid mesh quality worksheet tab

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshMetrics"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshMetrics() → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetSolidSurfaceMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityErrorLimit"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityErrorLimitIsDefault"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityErrorLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get SolidSurface Mesh Quality Worksheet Error Limit is Default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityName"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityState"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityState() → Ansys.Common.Interop.DSObjectTypes.DSWorksheetTabState

Get the state of solid surface mesh quality worksheet tab

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimitIsDefault"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get SolidSurface Mesh Quality Worksheet Warning Limit is Default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricTooltip"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricTooltip(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric Tooltip

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricValue"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceQuantityTypeString"></a>

### MeshWorkflowGroup.GetSolidSurfaceQuantityTypeString(metric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Quantity type from SolidSurface mesh metric type

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshMetrics"></a>

### MeshWorkflowGroup.GetSurfaceMeshMetrics() → Ansys.Common.Interop.AnsCoreObjects.IAnsIntColl

GetSurfaceMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityErrorLimit"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get User Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityErrorLimitIsDefault"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityErrorLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get Mesh Quality Error Limit is default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityName"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetSurfaceMeshQualityName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityState"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityState() → Ansys.Common.Interop.DSObjectTypes.DSWorksheetTabState

Get the state of surface mesh quality worksheet tab

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get User Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityWarningLimitIsDefault"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityWarningLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get Mesh Quality Warning Limit is default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricBackgroundColor"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric Background Colour

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricTooltip"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricTooltip(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric Tooltip

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricValue"></a>

### MeshWorkflowGroup.GetSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVisibleProperties"></a>

### MeshWorkflowGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVisiblePropertyNames"></a>

### MeshWorkflowGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeMeshQualityErrorLimit"></a>

### MeshWorkflowGroup.GetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeMeshQualityErrorLimitIsDefault"></a>

### MeshWorkflowGroup.GetVolumeMeshQualityErrorLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get Volume Mesh Quality Worksheet Error Limit is Default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeMeshQualityName"></a>

### MeshWorkflowGroup.GetVolumeMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeMeshQualityWarningLimit"></a>

### MeshWorkflowGroup.GetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeMeshQualityWarningLimitIsDefault"></a>

### MeshWorkflowGroup.GetVolumeMeshQualityWarningLimitIsDefault(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Get Volume Mesh Quality Worksheet Warning Limit is Default

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricBackgroundColor"></a>

### MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricTooltip"></a>

### MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricTooltip(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Mesh Quality Worst Metric Tooltip

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricValue"></a>

### MeshWorkflowGroup.GetVolumeMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetVolumeQuantityTypeString"></a>

### MeshWorkflowGroup.GetVolumeQuantityTypeString(metric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Get Quantity type from solid mesh metric type

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GroupAllSimilarChildren"></a>

### MeshWorkflowGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GroupSimilarObjects"></a>

### MeshWorkflowGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.InitializeLifetimeService"></a>

### MeshWorkflowGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.IsPropertyEditable"></a>

### MeshWorkflowGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.IsPropertyVisible"></a>

### MeshWorkflowGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.IsSolidSurfaceMeshQualityMetricComputed"></a>

### MeshWorkflowGroup.IsSolidSurfaceMeshQualityMetricComputed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Is Solid Surface Mesh Quality Metric Computed

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.IsSurfaceMeshQualityMetricComputed"></a>

### MeshWorkflowGroup.IsSurfaceMeshQualityMetricComputed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Is Surface Mesh Quality Metric Computed

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.IsVolumeMeshQualityMetricComputed"></a>

### MeshWorkflowGroup.IsVolumeMeshQualityMetricComputed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Is Solid Mesh Quality Metric Computed

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.NotifyChangePropId"></a>

### MeshWorkflowGroup.NotifyChangePropId(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

NotifyChangePropId method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Paste"></a>

### MeshWorkflowGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.PropertyByAPIName"></a>

### MeshWorkflowGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.PropertyById"></a>

### MeshWorkflowGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.PropertyByName"></a>

### MeshWorkflowGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.RemoveFromGroup"></a>

### MeshWorkflowGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.RemoveMeshMetrics"></a>

### MeshWorkflowGroup.RemoveMeshMetrics(tab: Ansys.Common.Interop.DSObjectTypes.DSWorksheetTab, metricType: Ansys.Common.Interop.DSObjectTypes.DSMeshMetric) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.RemoveParameter"></a>

### MeshWorkflowGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.RenameBasedOnType"></a>

### MeshWorkflowGroup.RenameBasedOnType() → [None](https://docs.python.org/3/builtins/constants.html#None)

Renames applying the default name based on type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ResetMeshQualityMetrics"></a>

### MeshWorkflowGroup.ResetMeshQualityMetrics() → [None](https://docs.python.org/3/builtins/constants.html#None)

ResetMeshQualityMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SendBodiesToMeshWorkflow"></a>

### *classmethod* MeshWorkflowGroup.SendBodiesToMeshWorkflow(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType), bodies: Iterable[Ansys.ACT.Automation.Mechanical.ImportedDataModelObject]) → [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow)

SendBodiesToMeshWorkflow method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetActiveWorkflow"></a>

### MeshWorkflowGroup.SetActiveWorkflow(workflowObjectId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the active workflow by its object ID.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetMeshQualityTabIndex"></a>

### MeshWorkflowGroup.SetMeshQualityTabIndex(tabIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetMeshQualityTabIndex method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetScopeOfMetrics"></a>

### MeshWorkflowGroup.SetScopeOfMetrics(scopeType: Ansys.Common.Interop.DSObjectTypes.MeshWorkflowScopeType, scopePattern: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetScopeOfMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetSolidSurfaceMeshQualityErrorLimit"></a>

### MeshWorkflowGroup.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflowGroup.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetSolidSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflowGroup.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflowGroup.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetSurfaceMeshQualityErrorLimit"></a>

### MeshWorkflowGroup.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflowGroup.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflowGroup.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflowGroup.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetVolumeMeshQualityErrorLimit"></a>

### MeshWorkflowGroup.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflowGroup.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), errorLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.SetVolumeMeshQualityWarningLimit"></a>

### MeshWorkflowGroup.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MeshWorkflowGroup.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType), warningLevel: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.StopMeshAgent"></a>

### MeshWorkflowGroup.StopMeshAgent() → [None](https://docs.python.org/3/builtins/constants.html#None)

StopMeshAgent method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.UpdateMeshWorkflowGroup"></a>

### MeshWorkflowGroup.UpdateMeshWorkflowGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Updates MeshWorkflowGroup object -> generates all need generated steps.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ValidateMeshAgentPrerequisites"></a>

### MeshWorkflowGroup.ValidateMeshAgentPrerequisites() → System.ValueTuple[Ansys.ACT.Mechanical.Application.MVC.ResponseType, [str](https://docs.python.org/3/builtins/stdtypes.html#str)]

ValidateMeshAgentPrerequisites method.

<!-- !! processed by numpydoc !! -->

