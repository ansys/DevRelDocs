# `MeshWorkflowOutput`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput(internalObject: Any)

<a id="MeshWorkflowOutput"></a>

### *class* MeshWorkflowOutput(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Object that wraps IDSEngineeringModelMeshDomainAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowOutput.Activate)                                               | Activate the current object.                                                                |
| [`AddFigure`](#MeshWorkflowOutput.AddFigure)                                             | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshWorkflowOutput.AddImage)                                               | Creates a new child Image.                                                                  |
| [`Copy`](#MeshWorkflowOutput.Copy)                                                       | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshWorkflowOutput.CopyTo)                                                   | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshWorkflowOutput.CreateObjRef)                                       | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshWorkflowOutput.CreateParameter)                                 | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshWorkflowOutput.Cut)                                                         | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshWorkflowOutput.Delete)                                                   | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshWorkflowOutput.Duplicate)                                             | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshWorkflowOutput.Equals)                                                   | Equals method.                                                                              |
| [`GetAPIName`](#MeshWorkflowOutput.GetAPIName)                                           | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshWorkflowOutput.GetAllProperties)                               | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshWorkflowOutput.GetChildren)                                         | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshWorkflowOutput.GetDetailsView)                                   | GetDetailsView method.                                                                      |
| [`GetDomainBrowserAvailableScopes`](#MeshWorkflowOutput.GetDomainBrowserAvailableScopes) | GetDomainBrowserAvailableScopes method.                                                     |
| [`GetEnumName`](#MeshWorkflowOutput.GetEnumName)                                         | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshWorkflowOutput.GetHashCode)                                         | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshWorkflowOutput.GetIconFile)                                         | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshWorkflowOutput.GetLifetimeService)                           | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshWorkflowOutput.GetObjectData)                                     | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshWorkflowOutput.GetParameter)                                       | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshWorkflowOutput.GetPath)                                                 | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshWorkflowOutput.GetPropertyName)                                 | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshWorkflowOutput.GetPropertyValue)                               | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MeshWorkflowOutput.GetVisibleProperties)                       | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshWorkflowOutput.GetVisiblePropertyNames)                 | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshWorkflowOutput.GroupAllSimilarChildren)                 | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshWorkflowOutput.GroupSimilarObjects)                         | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshWorkflowOutput.InitializeLifetimeService)             | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshWorkflowOutput.IsPropertyEditable)                           | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshWorkflowOutput.IsPropertyVisible)                             | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshWorkflowOutput.Paste)                                                     | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshWorkflowOutput.PropertyByAPIName)                             | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshWorkflowOutput.PropertyById)                                       | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshWorkflowOutput.PropertyByName)                                   | Get a property by its unique name.                                                          |
| [`PropertyTypeInfo`](#MeshWorkflowOutput.PropertyTypeInfo)                               | PropertyTypeInfo method.                                                                    |
| [`RemoveFromGroup`](#MeshWorkflowOutput.RemoveFromGroup)                                 | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshWorkflowOutput.RemoveParameter)                                 | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnType`](#MeshWorkflowOutput.RenameBasedOnType)                             | Renames applying the default name based on type.                                            |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MeshWorkflowOutput.AttachedRefs)                                                                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Children`](#MeshWorkflowOutput.Children)                                                                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`ClearCheckpointsDataOnTransfer`](#MeshWorkflowOutput.ClearCheckpointsDataOnTransfer)                                   | Gets or sets whether to clear all checkpoints data upon transfer of the Mesh Workflow mesh to the Mechanical Mesh. The default value is false.                                                                                                                                                                                                                                                                                                                                                        |
| [`ClsId`](#MeshWorkflowOutput.ClsId)                                                                                     | ClsId property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`DataModelObjectCategory`](#MeshWorkflowOutput.DataModelObjectCategory)                                                 | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`DataTransferType`](#MeshWorkflowOutput.DataTransferType)                                                               | Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).                                                                                                                                                                                                                                                                                                                                                                                        |
| [`Figures`](#MeshWorkflowOutput.Figures)                                                                                 | Gets the list of associated figures.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GroupingFolder`](#MeshWorkflowOutput.GroupingFolder)                                                                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`IconName`](#MeshWorkflowOutput.IconName)                                                                               | IconName property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`Images`](#MeshWorkflowOutput.Images)                                                                                   | Gets the list of associated images.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`InternalObject`](#MeshWorkflowOutput.InternalObject)                                                                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`LabelsExcludeFilter`](#MeshWorkflowOutput.LabelsExcludeFilter)                                                         | Gets or sets the regular expression to match all labels that are excluded from the transfer. The exclude match removes also labels matching the include pattern. Applies when “TransferLabelsAsNamedSelections” is True.                                                                                                                                                                                                                                                                              |
| [`LabelsIncludeFilter`](#MeshWorkflowOutput.LabelsIncludeFilter)                                                         | Gets or sets the regular expression to match all labels that are included in the transfer as Named Selections. Applies when “TransferLabelsAsNamedSelections” is True.                                                                                                                                                                                                                                                                                                                                |
| [`Name`](#MeshWorkflowOutput.Name)                                                                                       | Name property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`ObjectId`](#MeshWorkflowOutput.ObjectId)                                                                               | ObjectId property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`ObjectState`](#MeshWorkflowOutput.ObjectState)                                                                         | ObjectState property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`ObjectTags`](#MeshWorkflowOutput.ObjectTags)                                                                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`OutputDescription`](#MeshWorkflowOutput.OutputDescription)                                                             | OutputDescription property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`OutputDescriptionJson`](#MeshWorkflowOutput.OutputDescriptionJson)                                                     | OutputDescriptionJson property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`OutputTypeInformation`](#MeshWorkflowOutput.OutputTypeInformation)                                                     | OutputTypeInformation property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`OutputTypeInformationJson`](#MeshWorkflowOutput.OutputTypeInformationJson)                                             | OutputTypeInformationJson property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`Parent`](#MeshWorkflowOutput.Parent)                                                                                   | Parent property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`ProcessEntityType`](#MeshWorkflowOutput.ProcessEntityType)                                                             | Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).                                                                                                                                                                                                                                                                                                                                                                                        |
| [`Properties`](#MeshWorkflowOutput.Properties)                                                                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`State`](#MeshWorkflowOutput.State)                                                                                     | State property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`TransferLabelsAsNamedSelections`](#MeshWorkflowOutput.TransferLabelsAsNamedSelections)                                 | Gets or sets whether to configure the transfer of labels to Mechanical as Named Selections. If set to True, LabelsIncludeFilter must be set to define the whitelist of labels to be transferred, optionally LabelsExcludeFilter can be set to define a blacklist of labels to not be transferred. Only labels matching the LabelsIncludeFilter whitelist and not matching the LabelsExcludeFilter blacklist are transferred. This property is only visible when the DataTransferType is “ByTopology”. |
| [`TransferOnlyGeometry`](#MeshWorkflowOutput.TransferOnlyGeometry)                                                       | Gets or sets whether to transfer only geometry to Mechanical, ignoring mesh elements.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`TransferPrescribedPointsLabelsAsNamedSelections`](#MeshWorkflowOutput.TransferPrescribedPointsLabelsAsNamedSelections) | Gets or sets whether to configure the transfer of Prescribed Points labels to Mechanical as Named Selections. All labels defined on Prescribed Points will be transferred as criteria based Named Selections scoping the corresponding mesh nodes.                                                                                                                                                                                                                                                    |
| [`VisibleProperties`](#MeshWorkflowOutput.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowOutput.AttachedRefs"></a>

### *property* MeshWorkflowOutput.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Children"></a>

### *property* MeshWorkflowOutput.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.ClearCheckpointsDataOnTransfer"></a>

### *property* MeshWorkflowOutput.ClearCheckpointsDataOnTransfer *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to clear all checkpoints data upon transfer of the Mesh Workflow mesh to the Mechanical Mesh. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.ClsId"></a>

### *property* MeshWorkflowOutput.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.DataModelObjectCategory"></a>

### *property* MeshWorkflowOutput.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.DataTransferType"></a>

### *property* MeshWorkflowOutput.DataTransferType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DataTransferType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Figures"></a>

### *property* MeshWorkflowOutput.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupingFolder"></a>

### *property* MeshWorkflowOutput.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.IconName"></a>

### *property* MeshWorkflowOutput.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Images"></a>

### *property* MeshWorkflowOutput.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.InternalObject"></a>

### *property* MeshWorkflowOutput.InternalObject *: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowMeshDomainAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.LabelsExcludeFilter"></a>

### *property* MeshWorkflowOutput.LabelsExcludeFilter *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the regular expression to match all labels that are excluded from the transfer. The exclude match removes also labels matching the include pattern. Applies when “TransferLabelsAsNamedSelections” is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.LabelsIncludeFilter"></a>

### *property* MeshWorkflowOutput.LabelsIncludeFilter *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the regular expression to match all labels that are included in the transfer as Named Selections. Applies when “TransferLabelsAsNamedSelections” is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Name"></a>

### *property* MeshWorkflowOutput.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.ObjectId"></a>

### *property* MeshWorkflowOutput.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.ObjectState"></a>

### *property* MeshWorkflowOutput.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.ObjectTags"></a>

### *property* MeshWorkflowOutput.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.OutputDescription"></a>

### *property* MeshWorkflowOutput.OutputDescription *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutputDescription property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.OutputDescriptionJson"></a>

### *property* MeshWorkflowOutput.OutputDescriptionJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutputDescriptionJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.OutputTypeInformation"></a>

### *property* MeshWorkflowOutput.OutputTypeInformation *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutputTypeInformation property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.OutputTypeInformationJson"></a>

### *property* MeshWorkflowOutput.OutputTypeInformationJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutputTypeInformationJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Parent"></a>

### *property* MeshWorkflowOutput.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.ProcessEntityType"></a>

### *property* MeshWorkflowOutput.ProcessEntityType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshWorkflowProcessEntityType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Properties"></a>

### *property* MeshWorkflowOutput.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.State"></a>

### *property* MeshWorkflowOutput.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.TransferLabelsAsNamedSelections"></a>

### *property* MeshWorkflowOutput.TransferLabelsAsNamedSelections *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to configure the transfer of labels to Mechanical as Named Selections. If set to True, LabelsIncludeFilter must be set to define the whitelist of labels to be transferred, optionally LabelsExcludeFilter can be set to define a blacklist of labels to not be transferred. Only labels matching the LabelsIncludeFilter whitelist and not matching the LabelsExcludeFilter blacklist are transferred. This property is only visible when the DataTransferType is “ByTopology”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.TransferOnlyGeometry"></a>

### *property* MeshWorkflowOutput.TransferOnlyGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to transfer only geometry to Mechanical, ignoring mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.TransferPrescribedPointsLabelsAsNamedSelections"></a>

### *property* MeshWorkflowOutput.TransferPrescribedPointsLabelsAsNamedSelections *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to configure the transfer of Prescribed Points labels to Mechanical as Named Selections. All labels defined on Prescribed Points will be transferred as criteria based Named Selections scoping the corresponding mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.VisibleProperties"></a>

### *property* MeshWorkflowOutput.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowOutput.Activate"></a>

### MeshWorkflowOutput.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.AddFigure"></a>

### MeshWorkflowOutput.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.AddImage"></a>

### MeshWorkflowOutput.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Copy"></a>

### MeshWorkflowOutput.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CopyTo"></a>

### MeshWorkflowOutput.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CreateObjRef"></a>

### MeshWorkflowOutput.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CreateParameter"></a>

### MeshWorkflowOutput.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Cut"></a>

### MeshWorkflowOutput.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Delete"></a>

### MeshWorkflowOutput.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Duplicate"></a>

### MeshWorkflowOutput.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Equals"></a>

### MeshWorkflowOutput.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetAPIName"></a>

### MeshWorkflowOutput.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetAllProperties"></a>

### MeshWorkflowOutput.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetChildren"></a>

### MeshWorkflowOutput.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshWorkflowOutput.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetDetailsView"></a>

### MeshWorkflowOutput.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetDomainBrowserAvailableScopes"></a>

### MeshWorkflowOutput.GetDomainBrowserAvailableScopes(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableScopes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetEnumName"></a>

### MeshWorkflowOutput.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetHashCode"></a>

### MeshWorkflowOutput.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetIconFile"></a>

### MeshWorkflowOutput.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetLifetimeService"></a>

### MeshWorkflowOutput.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetObjectData"></a>

### MeshWorkflowOutput.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetParameter"></a>

### MeshWorkflowOutput.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetPath"></a>

### MeshWorkflowOutput.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetPropertyName"></a>

### MeshWorkflowOutput.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetPropertyValue"></a>

### MeshWorkflowOutput.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetVisibleProperties"></a>

### MeshWorkflowOutput.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetVisiblePropertyNames"></a>

### MeshWorkflowOutput.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupAllSimilarChildren"></a>

### MeshWorkflowOutput.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupSimilarObjects"></a>

### MeshWorkflowOutput.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.InitializeLifetimeService"></a>

### MeshWorkflowOutput.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.IsPropertyEditable"></a>

### MeshWorkflowOutput.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowOutput.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.IsPropertyVisible"></a>

### MeshWorkflowOutput.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowOutput.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Paste"></a>

### MeshWorkflowOutput.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyByAPIName"></a>

### MeshWorkflowOutput.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyById"></a>

### MeshWorkflowOutput.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyByName"></a>

### MeshWorkflowOutput.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyTypeInfo"></a>

### MeshWorkflowOutput.PropertyTypeInfo(property: Ansys.ACT.Automation.Mechanical.Property) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

PropertyTypeInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.RemoveFromGroup"></a>

### MeshWorkflowOutput.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.RemoveParameter"></a>

### MeshWorkflowOutput.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.RenameBasedOnType"></a>

### MeshWorkflowOutput.RenameBasedOnType() → [None](https://docs.python.org/3/builtins/constants.html#None)

Renames applying the default name based on type.

<!-- !! processed by numpydoc !! -->

