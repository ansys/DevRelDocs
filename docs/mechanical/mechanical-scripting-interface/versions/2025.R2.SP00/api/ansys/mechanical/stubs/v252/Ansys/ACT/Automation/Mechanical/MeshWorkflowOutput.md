# `MeshWorkflowOutput`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelMeshDomainAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowOutput.Activate)                               | Activate the current object.                                                      |
| [`AddFigure`](#MeshWorkflowOutput.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowOutput.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshWorkflowOutput.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshWorkflowOutput.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshWorkflowOutput.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshWorkflowOutput.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MeshWorkflowOutput.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshWorkflowOutput.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshWorkflowOutput.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowOutput.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshWorkflowOutput.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshWorkflowOutput.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshWorkflowOutput.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#MeshWorkflowOutput.Children)                                                                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`DataModelObjectCategory`](#MeshWorkflowOutput.DataModelObjectCategory)                                                 | Gets the current DataModelObject’s category.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`DataTransferType`](#MeshWorkflowOutput.DataTransferType)                                                               | Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).                                                                                                                                                                                                                                                                                                                                                                                        |
| [`Figures`](#MeshWorkflowOutput.Figures)                                                                                 | Gets the list of associated figures.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`Images`](#MeshWorkflowOutput.Images)                                                                                   | Gets the list of associated images.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`InternalObject`](#MeshWorkflowOutput.InternalObject)                                                                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`LabelsExcludeFilter`](#MeshWorkflowOutput.LabelsExcludeFilter)                                                         | Gets or sets the regular expression to match all labels that are excluded from the transfer. The exclude match removes also labels matching the include pattern. Applies when “TransferLabelsAsNamedSelections” is True.                                                                                                                                                                                                                                                                              |
| [`LabelsIncludeFilter`](#MeshWorkflowOutput.LabelsIncludeFilter)                                                         | Gets or sets the regular expression to match all labels that are included in the transfer as Named Selections. Applies when “TransferLabelsAsNamedSelections” is True.                                                                                                                                                                                                                                                                                                                                |
| [`Properties`](#MeshWorkflowOutput.Properties)                                                                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`TransferLabelsAsNamedSelections`](#MeshWorkflowOutput.TransferLabelsAsNamedSelections)                                 | Gets or sets whether to configure the transfer of labels to Mechanical as Named Selections. If set to True, LabelsIncludeFilter must be set to define the whitelist of labels to be transferred, optionally LabelsExcludeFilter can be set to define a blacklist of labels to not be transferred. Only labels matching the LabelsIncludeFilter whitelist and not matching the LabelsExcludeFilter blacklist are transferred. This property is only visible when the DataTransferType is “ByTopology”. |
| [`TransferPrescribedPointsLabelsAsNamedSelections`](#MeshWorkflowOutput.TransferPrescribedPointsLabelsAsNamedSelections) | Gets or sets whether to configure the transfer of Prescribed Points labels to Mechanical as Named Selections. All labels defined on Prescribed Points will be transferred as criteria based Named Selections scoping the corresponding mesh nodes.                                                                                                                                                                                                                                                    |
| [`VisibleProperties`](#MeshWorkflowOutput.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowOutput.Children"></a>

### *property* MeshWorkflowOutput.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.DataModelObjectCategory"></a>

### *property* MeshWorkflowOutput.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.DataTransferType"></a>

### *property* MeshWorkflowOutput.DataTransferType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DataTransferType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Figures"></a>

### *property* MeshWorkflowOutput.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Images"></a>

### *property* MeshWorkflowOutput.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.InternalObject"></a>

### *property* MeshWorkflowOutput.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelMeshDomainAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.LabelsExcludeFilter"></a>

### *property* MeshWorkflowOutput.LabelsExcludeFilter *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the regular expression to match all labels that are excluded from the transfer. The exclude match removes also labels matching the include pattern. Applies when “TransferLabelsAsNamedSelections” is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.LabelsIncludeFilter"></a>

### *property* MeshWorkflowOutput.LabelsIncludeFilter *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the regular expression to match all labels that are included in the transfer as Named Selections. Applies when “TransferLabelsAsNamedSelections” is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Properties"></a>

### *property* MeshWorkflowOutput.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.TransferLabelsAsNamedSelections"></a>

### *property* MeshWorkflowOutput.TransferLabelsAsNamedSelections *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to configure the transfer of labels to Mechanical as Named Selections. If set to True, LabelsIncludeFilter must be set to define the whitelist of labels to be transferred, optionally LabelsExcludeFilter can be set to define a blacklist of labels to not be transferred. Only labels matching the LabelsIncludeFilter whitelist and not matching the LabelsExcludeFilter blacklist are transferred. This property is only visible when the DataTransferType is “ByTopology”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.TransferPrescribedPointsLabelsAsNamedSelections"></a>

### *property* MeshWorkflowOutput.TransferPrescribedPointsLabelsAsNamedSelections *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to configure the transfer of Prescribed Points labels to Mechanical as Named Selections. All labels defined on Prescribed Points will be transferred as criteria based Named Selections scoping the corresponding mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.VisibleProperties"></a>

### *property* MeshWorkflowOutput.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowOutput.Activate"></a>

### MeshWorkflowOutput.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.AddFigure"></a>

### MeshWorkflowOutput.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.AddImage"></a>

### MeshWorkflowOutput.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CopyTo"></a>

### MeshWorkflowOutput.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CreateParameter"></a>

### MeshWorkflowOutput.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Delete"></a>

### MeshWorkflowOutput.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Duplicate"></a>

### MeshWorkflowOutput.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetChildren"></a>

### MeshWorkflowOutput.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetParameter"></a>

### MeshWorkflowOutput.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupAllSimilarChildren"></a>

### MeshWorkflowOutput.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupSimilarObjects"></a>

### MeshWorkflowOutput.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyByAPIName"></a>

### MeshWorkflowOutput.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyByName"></a>

### MeshWorkflowOutput.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.RemoveParameter"></a>

### MeshWorkflowOutput.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

