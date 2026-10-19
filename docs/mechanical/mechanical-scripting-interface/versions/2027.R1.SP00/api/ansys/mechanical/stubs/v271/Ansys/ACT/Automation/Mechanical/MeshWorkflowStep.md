# `MeshWorkflowStep`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowStep(internalObject: Any)

<a id="MeshWorkflowStep"></a>

### *class* MeshWorkflowStep(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Object that wraps IDSEngineeringModelGeometryOperationAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowStep.Activate)                                                                       | Activate the current object.                                                                                                                                                                                                                         |
| [`AddControl`](#MeshWorkflowStep.AddControl)                                                                   | Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation.                                    |
| [`AddFigure`](#MeshWorkflowStep.AddFigure)                                                                     | Creates a new child Figure.                                                                                                                                                                                                                          |
| [`AddImage`](#MeshWorkflowStep.AddImage)                                                                       | Creates a new child Image.                                                                                                                                                                                                                           |
| [`AddOutcome`](#MeshWorkflowStep.AddOutcome)                                                                   | Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.                                                   |
| [`CanCompleteInteractiveSession`](#MeshWorkflowStep.CanCompleteInteractiveSession)                             | Query if this operation can complete an interactive mesh edit session.                                                                                                                                                                               |
| [`CanDuplicateOperation`](#MeshWorkflowStep.CanDuplicateOperation)                                             | Checks if the workflow step can be duplicated at the end of the workflow.                                                                                                                                                                            |
| [`CanDuplicateOperationAfter`](#MeshWorkflowStep.CanDuplicateOperationAfter)                                   | Checks if the workflow step can be duplicated immediately after itself.                                                                                                                                                                              |
| [`CanDuplicateOperationAtPosition`](#MeshWorkflowStep.CanDuplicateOperationAtPosition)                         | Checks if the workflow step can be duplicated at the specified workflow position.                                                                                                                                                                    |
| [`CanDuplicateOperationBefore`](#MeshWorkflowStep.CanDuplicateOperationBefore)                                 | Checks if the workflow step can be duplicated immediately before itself.                                                                                                                                                                             |
| [`CanRevertStep`](#MeshWorkflowStep.CanRevertStep)                                                             | CanRevertStep method.                                                                                                                                                                                                                                |
| [`CanStartInteractiveSession`](#MeshWorkflowStep.CanStartInteractiveSession)                                   | Query if this operation can start an interactive mesh edit session.                                                                                                                                                                                  |
| [`CanSuppressWorkflowOperation`](#MeshWorkflowStep.CanSuppressWorkflowOperation)                               | Checks if the workflow step can be suppressed.                                                                                                                                                                                                       |
| [`CanUnsuppressWorkflowOperation`](#MeshWorkflowStep.CanUnsuppressWorkflowOperation)                           | Checks if the workflow step can be unsuppressed.                                                                                                                                                                                                     |
| [`ClearDataAndDisableCheckpoint`](#MeshWorkflowStep.ClearDataAndDisableCheckpoint)                             | Clear checkpoint data and disable checkpointing for the step.                                                                                                                                                                                        |
| [`CompleteInteractiveSession`](#MeshWorkflowStep.CompleteInteractiveSession)                                   | Query if this operation can complete an interactive mesh edit session.                                                                                                                                                                               |
| [`Copy`](#MeshWorkflowStep.Copy)                                                                               | Copies the current DataModelObject.                                                                                                                                                                                                                  |
| [`CopyTo`](#MeshWorkflowStep.CopyTo)                                                                           | Copies all visible properties from this object to another.                                                                                                                                                                                           |
| [`CreateMeshEditMorphControl`](#MeshWorkflowStep.CreateMeshEditMorphControl)                                   | Create a mesh edit morph control from the morph operation.                                                                                                                                                                                           |
| [`CreateObjRef`](#MeshWorkflowStep.CreateObjRef)                                                               | CreateObjRef method.                                                                                                                                                                                                                                 |
| [`CreateParameter`](#MeshWorkflowStep.CreateParameter)                                                         | Creates a new parameter for a Property.                                                                                                                                                                                                              |
| [`Cut`](#MeshWorkflowStep.Cut)                                                                                 | Cuts the current DataModelObject.                                                                                                                                                                                                                    |
| [`Delete`](#MeshWorkflowStep.Delete)                                                                           | Run the Delete action.                                                                                                                                                                                                                               |
| [`Duplicate`](#MeshWorkflowStep.Duplicate)                                                                     | Creates a copy of the current DataModelObject.                                                                                                                                                                                                       |
| [`DuplicateOperation`](#MeshWorkflowStep.DuplicateOperation)                                                   | Duplicates the workflow                                                                                                                                                                                                                              |
| [`DuplicateOperationAfter`](#MeshWorkflowStep.DuplicateOperationAfter)                                         | Duplicates the workflow                                                                                                                                                                                                                              |
| [`DuplicateOperationAtPosition`](#MeshWorkflowStep.DuplicateOperationAtPosition)                               | Duplicates the workflow step at the specified workflow position.                                                                                                                                                                                     |
| [`DuplicateOperationBefore`](#MeshWorkflowStep.DuplicateOperationBefore)                                       | Duplicates the workflow                                                                                                                                                                                                                              |
| [`Equals`](#MeshWorkflowStep.Equals)                                                                           | Equals method.                                                                                                                                                                                                                                       |
| [`GetAPIName`](#MeshWorkflowStep.GetAPIName)                                                                   | Property name bound to dispId.                                                                                                                                                                                                                       |
| [`GetAllProperties`](#MeshWorkflowStep.GetAllProperties)                                                       | GetAllProperties method.                                                                                                                                                                                                                             |
| [`GetApplicableControlTypes`](#MeshWorkflowStep.GetApplicableControlTypes)                                     | GetApplicableControlTypes method.                                                                                                                                                                                                                    |
| [`GetApplicableOutcomeTypes`](#MeshWorkflowStep.GetApplicableOutcomeTypes)                                     | GetApplicableOutcomeTypes method.                                                                                                                                                                                                                    |
| [`GetChildren`](#MeshWorkflowStep.GetChildren)                                                                 | Gets the list of children, filtered by type.                                                                                                                                                                                                         |
| [`GetDetailsView`](#MeshWorkflowStep.GetDetailsView)                                                           | GetDetailsView method.                                                                                                                                                                                                                               |
| [`GetDomainBrowserAvailableMorphFieldPatterns`](#MeshWorkflowStep.GetDomainBrowserAvailableMorphFieldPatterns) | GetDomainBrowserAvailableMorphFieldPatterns method.                                                                                                                                                                                                  |
| [`GetDomainBrowserAvailableScopes`](#MeshWorkflowStep.GetDomainBrowserAvailableScopes)                         | GetDomainBrowserAvailableScopes method.                                                                                                                                                                                                              |
| [`GetDomainBrowserAvailableSizeFieldPatterns`](#MeshWorkflowStep.GetDomainBrowserAvailableSizeFieldPatterns)   | GetDomainBrowserAvailableSizeFieldPatterns method.                                                                                                                                                                                                   |
| [`GetEnumName`](#MeshWorkflowStep.GetEnumName)                                                                 | Enum name bound to value                                                                                                                                                                                                                             |
| [`GetHashCode`](#MeshWorkflowStep.GetHashCode)                                                                 | GetHashCode method.                                                                                                                                                                                                                                  |
| [`GetIconFile`](#MeshWorkflowStep.GetIconFile)                                                                 | GetIconFile method.                                                                                                                                                                                                                                  |
| [`GetLifetimeService`](#MeshWorkflowStep.GetLifetimeService)                                                   | GetLifetimeService method.                                                                                                                                                                                                                           |
| [`GetObjectData`](#MeshWorkflowStep.GetObjectData)                                                             | GetObjectData method.                                                                                                                                                                                                                                |
| [`GetParameter`](#MeshWorkflowStep.GetParameter)                                                               | Gets the parameter corresponding to the given property.                                                                                                                                                                                              |
| [`GetPath`](#MeshWorkflowStep.GetPath)                                                                         | GetPath method.                                                                                                                                                                                                                                      |
| [`GetPropertyName`](#MeshWorkflowStep.GetPropertyName)                                                         | GetPropertyName method.                                                                                                                                                                                                                              |
| [`GetPropertyValue`](#MeshWorkflowStep.GetPropertyValue)                                                       | GetPropertyValue method.                                                                                                                                                                                                                             |
| [`GetPropertyWorksheetInfo`](#MeshWorkflowStep.GetPropertyWorksheetInfo)                                       | GetPropertyWorksheetInfo method.                                                                                                                                                                                                                     |
| [`GetUnpublishedList`](#MeshWorkflowStep.GetUnpublishedList)                                                   | GetUnpublishedList method.                                                                                                                                                                                                                           |
| [`GetVisibleProperties`](#MeshWorkflowStep.GetVisibleProperties)                                               | GetVisibleProperties method.                                                                                                                                                                                                                         |
| [`GetVisiblePropertyNames`](#MeshWorkflowStep.GetVisiblePropertyNames)                                         | GetVisiblePropertyNames method.                                                                                                                                                                                                                      |
| [`GroupAllSimilarChildren`](#MeshWorkflowStep.GroupAllSimilarChildren)                                         | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                              |
| [`GroupSimilarObjects`](#MeshWorkflowStep.GroupSimilarObjects)                                                 | Run the GroupSimilarObjects action.                                                                                                                                                                                                                  |
| [`InitializeLifetimeService`](#MeshWorkflowStep.InitializeLifetimeService)                                     | InitializeLifetimeService method.                                                                                                                                                                                                                    |
| [`InsertStepAfter`](#MeshWorkflowStep.InsertStepAfter)                                                         | Creates a new MeshWorkflowStep                                                                                                                                                                                                                       |
| [`InsertStepBefore`](#MeshWorkflowStep.InsertStepBefore)                                                       | Creates a new MeshWorkflowStep                                                                                                                                                                                                                       |
| [`IsPropertyEditable`](#MeshWorkflowStep.IsPropertyEditable)                                                   | IsPropertyEditable method.                                                                                                                                                                                                                           |
| [`IsPropertyVisible`](#MeshWorkflowStep.IsPropertyVisible)                                                     | IsPropertyVisible method.                                                                                                                                                                                                                            |
| [`MeshWorkflowControls`](#MeshWorkflowStep.MeshWorkflowControls)                                               | Gets the MeshWorkflowControls of an MeshWorkflowStep.                                                                                                                                                                                                |
| [`MeshWorkflowOutcomes`](#MeshWorkflowStep.MeshWorkflowOutcomes)                                               | Gets the MeshWorkflowOutcomes of an MeshWorkflowStep.                                                                                                                                                                                                |
| [`Paste`](#MeshWorkflowStep.Paste)                                                                             | Pastes to the current DataModelObject context.                                                                                                                                                                                                       |
| [`Preview`](#MeshWorkflowStep.Preview)                                                                         | Preview the MeshWorkflowStep. After the preview, the step will contain a preview outcome with the information required for the validation of the user inputs. The preview outcome can be returned using the MeshWorkflowOutcomes method of the step. |
| [`PropertyByAPIName`](#MeshWorkflowStep.PropertyByAPIName)                                                     | Get a property by its API name.                                                                                                                                                                                                                      |
| [`PropertyById`](#MeshWorkflowStep.PropertyById)                                                               | PropertyById method.                                                                                                                                                                                                                                 |
| [`PropertyByName`](#MeshWorkflowStep.PropertyByName)                                                           | Get a property by its unique name.                                                                                                                                                                                                                   |
| [`PropertyTypeInfo`](#MeshWorkflowStep.PropertyTypeInfo)                                                       | PropertyTypeInfo method.                                                                                                                                                                                                                             |
| [`RemoveFromGroup`](#MeshWorkflowStep.RemoveFromGroup)                                                         | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                                                                                                                          |
| [`RemoveParameter`](#MeshWorkflowStep.RemoveParameter)                                                         | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                    |
| [`RenameBasedOnType`](#MeshWorkflowStep.RenameBasedOnType)                                                     | Renames applying the default name based on type.                                                                                                                                                                                                     |
| [`SuppressWorkflowOperation`](#MeshWorkflowStep.SuppressWorkflowOperation)                                     | Suppresses the workflow step to exclude it from execution.                                                                                                                                                                                           |
| [`UnsuppressWorkflowOperation`](#MeshWorkflowStep.UnsuppressWorkflowOperation)                                 | Unsuppresses the workflow step to include it in execution.                                                                                                                                                                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`AttachedRefs`](#MeshWorkflowStep.AttachedRefs)                       | AttachedRefs property.                                            |
| [`CanEdit`](#MeshWorkflowStep.CanEdit)                                 | Gets whether the step can be edited or not.                       |
| [`Children`](#MeshWorkflowStep.Children)                               | Gets the list of children.                                        |
| [`ClsId`](#MeshWorkflowStep.ClsId)                                     | ClsId property.                                                   |
| [`DataModelObjectCategory`](#MeshWorkflowStep.DataModelObjectCategory) | Gets the current DataModelObject's category.                      |
| [`EnableCheckpoint`](#MeshWorkflowStep.EnableCheckpoint)               | Gets or sets whether the checkpointing is enabled for the step.   |
| [`Figures`](#MeshWorkflowStep.Figures)                                 | Gets the list of associated figures.                              |
| [`GroupingFolder`](#MeshWorkflowStep.GroupingFolder)                   | GroupingFolder property.                                          |
| [`IconName`](#MeshWorkflowStep.IconName)                               | IconName property.                                                |
| [`Images`](#MeshWorkflowStep.Images)                                   | Gets the list of associated images.                               |
| [`InternalObject`](#MeshWorkflowStep.InternalObject)                   | Gets the internal object. For advanced usage only.                |
| [`Name`](#MeshWorkflowStep.Name)                                       | Name property.                                                    |
| [`ObjectId`](#MeshWorkflowStep.ObjectId)                               | ObjectId property.                                                |
| [`ObjectState`](#MeshWorkflowStep.ObjectState)                         | ObjectState property.                                             |
| [`ObjectTags`](#MeshWorkflowStep.ObjectTags)                           | ObjectTags property.                                              |
| [`OperationString`](#MeshWorkflowStep.OperationString)                 | Gets the OperationString.                                         |
| [`OperationType`](#MeshWorkflowStep.OperationType)                     | Returns the type of the operation. .                              |
| [`Parent`](#MeshWorkflowStep.Parent)                                   | Parent property.                                                  |
| [`Position`](Results/ProbeResults/Position.md#Position)                | The step's position in the workflow ordered steps.                |
| [`Properties`](#MeshWorkflowStep.Properties)                           | Gets the list of properties for this object.                      |
| [`ReleaseStatusString`](#MeshWorkflowStep.ReleaseStatusString)         | ReleaseStatusString property.                                     |
| [`State`](#MeshWorkflowStep.State)                                     | State property.                                                   |
| [`StepDescription`](#MeshWorkflowStep.StepDescription)                 | StepDescription property.                                         |
| [`StepDescriptionJson`](#MeshWorkflowStep.StepDescriptionJson)         | StepDescriptionJson property.                                     |
| [`StepTypeInformation`](#MeshWorkflowStep.StepTypeInformation)         | StepTypeInformation property.                                     |
| [`StepTypeInformationJson`](#MeshWorkflowStep.StepTypeInformationJson) | StepTypeInformationJson property.                                 |
| [`Suppressed`](#MeshWorkflowStep.Suppressed)                           | Gets or sets the Suppressed.                                      |
| [`ValidateMeshStatus`](#MeshWorkflowStep.ValidateMeshStatus)           | Gets or sets whether the mesh validation is enabled for the step. |
| [`VisibleProperties`](#MeshWorkflowStep.VisibleProperties)             | Gets the list of properties that are visible for this object.     |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowStep.AttachedRefs"></a>

### *property* MeshWorkflowStep.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanEdit"></a>

### *property* MeshWorkflowStep.CanEdit *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets whether the step can be edited or not.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Children"></a>

### *property* MeshWorkflowStep.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.ClsId"></a>

### *property* MeshWorkflowStep.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.DataModelObjectCategory"></a>

### *property* MeshWorkflowStep.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.EnableCheckpoint"></a>

### *property* MeshWorkflowStep.EnableCheckpoint *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the checkpointing is enabled for the step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Figures"></a>

### *property* MeshWorkflowStep.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GroupingFolder"></a>

### *property* MeshWorkflowStep.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.IconName"></a>

### *property* MeshWorkflowStep.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Images"></a>

### *property* MeshWorkflowStep.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.InternalObject"></a>

### *property* MeshWorkflowStep.InternalObject *: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowOperationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Name"></a>

### *property* MeshWorkflowStep.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.ObjectId"></a>

### *property* MeshWorkflowStep.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.ObjectState"></a>

### *property* MeshWorkflowStep.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.ObjectTags"></a>

### *property* MeshWorkflowStep.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.OperationString"></a>

### *property* MeshWorkflowStep.OperationString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OperationString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.OperationType"></a>

### *property* MeshWorkflowStep.OperationType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the type of the operation. .

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Parent"></a>

### *property* MeshWorkflowStep.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Position"></a>

### *property* MeshWorkflowStep.Position *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The step's position in the workflow ordered steps.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Properties"></a>

### *property* MeshWorkflowStep.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.ReleaseStatusString"></a>

### *property* MeshWorkflowStep.ReleaseStatusString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ReleaseStatusString property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.State"></a>

### *property* MeshWorkflowStep.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.StepDescription"></a>

### *property* MeshWorkflowStep.StepDescription *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

StepDescription property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.StepDescriptionJson"></a>

### *property* MeshWorkflowStep.StepDescriptionJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

StepDescriptionJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.StepTypeInformation"></a>

### *property* MeshWorkflowStep.StepTypeInformation *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

StepTypeInformation property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.StepTypeInformationJson"></a>

### *property* MeshWorkflowStep.StepTypeInformationJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

StepTypeInformationJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Suppressed"></a>

### *property* MeshWorkflowStep.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.ValidateMeshStatus"></a>

### *property* MeshWorkflowStep.ValidateMeshStatus *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the mesh validation is enabled for the step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.VisibleProperties"></a>

### *property* MeshWorkflowStep.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowStep.Activate"></a>

### MeshWorkflowStep.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddControl"></a>

### MeshWorkflowStep.AddControl(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowControl](MeshWorkflowControl.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowControl)

Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddFigure"></a>

### MeshWorkflowStep.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddImage"></a>

### MeshWorkflowStep.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddOutcome"></a>

### MeshWorkflowStep.AddOutcome(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome)

Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanCompleteInteractiveSession"></a>

### MeshWorkflowStep.CanCompleteInteractiveSession() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Query if this operation can complete an interactive mesh edit session.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanDuplicateOperation"></a>

### MeshWorkflowStep.CanDuplicateOperation() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks if the workflow step can be duplicated at the end of the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanDuplicateOperationAfter"></a>

### MeshWorkflowStep.CanDuplicateOperationAfter() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks if the workflow step can be duplicated immediately after itself.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanDuplicateOperationAtPosition"></a>

### MeshWorkflowStep.CanDuplicateOperationAtPosition(position: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks if the workflow step can be duplicated at the specified workflow position.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanDuplicateOperationBefore"></a>

### MeshWorkflowStep.CanDuplicateOperationBefore() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks if the workflow step can be duplicated immediately before itself.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanRevertStep"></a>

### MeshWorkflowStep.CanRevertStep() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanRevertStep method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanStartInteractiveSession"></a>

### MeshWorkflowStep.CanStartInteractiveSession() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Query if this operation can start an interactive mesh edit session.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanSuppressWorkflowOperation"></a>

### MeshWorkflowStep.CanSuppressWorkflowOperation() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks if the workflow step can be suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CanUnsuppressWorkflowOperation"></a>

### MeshWorkflowStep.CanUnsuppressWorkflowOperation() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks if the workflow step can be unsuppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.ClearDataAndDisableCheckpoint"></a>

### MeshWorkflowStep.ClearDataAndDisableCheckpoint() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear checkpoint data and disable checkpointing for the step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CompleteInteractiveSession"></a>

### MeshWorkflowStep.CompleteInteractiveSession(succeeded: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Query if this operation can complete an interactive mesh edit session.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Copy"></a>

### MeshWorkflowStep.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CopyTo"></a>

### MeshWorkflowStep.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CreateMeshEditMorphControl"></a>

### MeshWorkflowStep.CreateMeshEditMorphControl() → [Ansys.ACT.Automation.Mechanical.DirectMorph](DirectMorph.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.DirectMorph)

Create a mesh edit morph control from the morph operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CreateObjRef"></a>

### MeshWorkflowStep.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CreateParameter"></a>

### MeshWorkflowStep.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Cut"></a>

### MeshWorkflowStep.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Delete"></a>

### MeshWorkflowStep.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Duplicate"></a>

### MeshWorkflowStep.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.DuplicateOperation"></a>

### MeshWorkflowStep.DuplicateOperation() → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)

Duplicates the workflow

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.DuplicateOperationAfter"></a>

### MeshWorkflowStep.DuplicateOperationAfter() → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)

Duplicates the workflow

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.DuplicateOperationAtPosition"></a>

### MeshWorkflowStep.DuplicateOperationAtPosition(position: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)

Duplicates the workflow step at the specified workflow position.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.DuplicateOperationBefore"></a>

### MeshWorkflowStep.DuplicateOperationBefore() → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)

Duplicates the workflow

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Equals"></a>

### MeshWorkflowStep.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetAPIName"></a>

### MeshWorkflowStep.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetAllProperties"></a>

### MeshWorkflowStep.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetApplicableControlTypes"></a>

### MeshWorkflowStep.GetApplicableControlTypes() → List[[Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType)]

GetApplicableControlTypes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetApplicableOutcomeTypes"></a>

### MeshWorkflowStep.GetApplicableOutcomeTypes() → List[[Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType)]

GetApplicableOutcomeTypes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetChildren"></a>

### MeshWorkflowStep.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshWorkflowStep.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetDetailsView"></a>

### MeshWorkflowStep.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetDomainBrowserAvailableMorphFieldPatterns"></a>

### MeshWorkflowStep.GetDomainBrowserAvailableMorphFieldPatterns(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableMorphFieldPatterns method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetDomainBrowserAvailableScopes"></a>

### MeshWorkflowStep.GetDomainBrowserAvailableScopes(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableScopes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetDomainBrowserAvailableSizeFieldPatterns"></a>

### MeshWorkflowStep.GetDomainBrowserAvailableSizeFieldPatterns(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableSizeFieldPatterns method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetEnumName"></a>

### MeshWorkflowStep.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetHashCode"></a>

### MeshWorkflowStep.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetIconFile"></a>

### MeshWorkflowStep.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetLifetimeService"></a>

### MeshWorkflowStep.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetObjectData"></a>

### MeshWorkflowStep.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetParameter"></a>

### MeshWorkflowStep.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetPath"></a>

### MeshWorkflowStep.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetPropertyName"></a>

### MeshWorkflowStep.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetPropertyValue"></a>

### MeshWorkflowStep.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetPropertyWorksheetInfo"></a>

### MeshWorkflowStep.GetPropertyWorksheetInfo() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetPropertyWorksheetInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetUnpublishedList"></a>

### MeshWorkflowStep.GetUnpublishedList() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetUnpublishedList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetVisibleProperties"></a>

### MeshWorkflowStep.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetVisiblePropertyNames"></a>

### MeshWorkflowStep.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GroupAllSimilarChildren"></a>

### MeshWorkflowStep.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GroupSimilarObjects"></a>

### MeshWorkflowStep.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.InitializeLifetimeService"></a>

### MeshWorkflowStep.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.InsertStepAfter"></a>

### MeshWorkflowStep.InsertStepAfter(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType), createMandatoryControls: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)

Creates a new MeshWorkflowStep

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.InsertStepBefore"></a>

### MeshWorkflowStep.InsertStepBefore(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType), createMandatoryControls: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)

Creates a new MeshWorkflowStep

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.IsPropertyEditable"></a>

### MeshWorkflowStep.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowStep.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.IsPropertyVisible"></a>

### MeshWorkflowStep.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowStep.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.MeshWorkflowControls"></a>

### MeshWorkflowStep.MeshWorkflowControls(bIgnoreSuppressed: [bool](https://docs.python.org/3/builtins/functions.html#bool), filterByType: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[[Ansys.ACT.Automation.Mechanical.MeshWorkflowControl](MeshWorkflowControl.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowControl)]

Gets the MeshWorkflowControls of an MeshWorkflowStep.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.MeshWorkflowOutcomes"></a>

### MeshWorkflowStep.MeshWorkflowOutcomes(bIgnoreSuppressed: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → List[[Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome)]

Gets the MeshWorkflowOutcomes of an MeshWorkflowStep.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Paste"></a>

### MeshWorkflowStep.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Preview"></a>

### MeshWorkflowStep.Preview() → [None](https://docs.python.org/3/builtins/constants.html#None)

Preview the MeshWorkflowStep. After the preview, the step will contain a preview outcome with the information required for the validation of the user inputs. The preview outcome can be returned using the MeshWorkflowOutcomes method of the step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.PropertyByAPIName"></a>

### MeshWorkflowStep.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.PropertyById"></a>

### MeshWorkflowStep.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.PropertyByName"></a>

### MeshWorkflowStep.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.PropertyTypeInfo"></a>

### MeshWorkflowStep.PropertyTypeInfo(property: Ansys.ACT.Automation.Mechanical.Property) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

PropertyTypeInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.RemoveFromGroup"></a>

### MeshWorkflowStep.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.RemoveParameter"></a>

### MeshWorkflowStep.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.RenameBasedOnType"></a>

### MeshWorkflowStep.RenameBasedOnType() → [None](https://docs.python.org/3/builtins/constants.html#None)

Renames applying the default name based on type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.SuppressWorkflowOperation"></a>

### MeshWorkflowStep.SuppressWorkflowOperation() → [None](https://docs.python.org/3/builtins/constants.html#None)

Suppresses the workflow step to exclude it from execution.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.UnsuppressWorkflowOperation"></a>

### MeshWorkflowStep.UnsuppressWorkflowOperation() → [None](https://docs.python.org/3/builtins/constants.html#None)

Unsuppresses the workflow step to include it in execution.

<!-- !! processed by numpydoc !! -->

