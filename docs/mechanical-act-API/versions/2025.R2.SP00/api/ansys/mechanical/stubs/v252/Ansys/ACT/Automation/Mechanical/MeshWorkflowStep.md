# `MeshWorkflowStep`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelGeometryOperationAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowStep.Activate)                                           | Activate the current object.                                                                                                                                                                                      |
| [`AddControl`](#MeshWorkflowStep.AddControl)                                       | Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation. |
| [`AddFigure`](#MeshWorkflowStep.AddFigure)                                         | Creates a new child Figure.                                                                                                                                                                                       |
| [`AddImage`](#MeshWorkflowStep.AddImage)                                           | Creates a new child Image.                                                                                                                                                                                        |
| [`AddOutcome`](#MeshWorkflowStep.AddOutcome)                                       | Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.                |
| [`ClearDataAndDisableCheckpoint`](#MeshWorkflowStep.ClearDataAndDisableCheckpoint) | Clear checkpoint data and disable checkpointing for the step.                                                                                                                                                     |
| [`CopyTo`](#MeshWorkflowStep.CopyTo)                                               | Copies all visible properties from this object to another.                                                                                                                                                        |
| [`CreateParameter`](#MeshWorkflowStep.CreateParameter)                             | Creates a new parameter for a Property.                                                                                                                                                                           |
| [`Delete`](#MeshWorkflowStep.Delete)                                               | Run the Delete action.                                                                                                                                                                                            |
| [`Duplicate`](#MeshWorkflowStep.Duplicate)                                         | Creates a copy of the current DataModelObject.                                                                                                                                                                    |
| [`GetChildren`](#MeshWorkflowStep.GetChildren)                                     | Gets the list of children, filtered by type.                                                                                                                                                                      |
| [`GetParameter`](#MeshWorkflowStep.GetParameter)                                   | Gets the parameter corresponding to the given property.                                                                                                                                                           |
| [`GroupAllSimilarChildren`](#MeshWorkflowStep.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                                                                                                                                                           |
| [`GroupSimilarObjects`](#MeshWorkflowStep.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                                                                                                                                                               |
| [`PropertyByAPIName`](#MeshWorkflowStep.PropertyByAPIName)                         | Get a property by its API name.                                                                                                                                                                                   |
| [`PropertyByName`](#MeshWorkflowStep.PropertyByName)                               | Get a property by its unique name.                                                                                                                                                                                |
| [`RemoveParameter`](#MeshWorkflowStep.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                 |

### Properties

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`Children`](#MeshWorkflowStep.Children)                               | Gets the list of children.                                      |
| [`DataModelObjectCategory`](#MeshWorkflowStep.DataModelObjectCategory) | Gets the current DataModelObject’s category.                    |
| [`EnableCheckpoint`](#MeshWorkflowStep.EnableCheckpoint)               | Gets or sets whether the checkpointing is enabled for the step. |
| [`Figures`](#MeshWorkflowStep.Figures)                                 | Gets the list of associated figures.                            |
| [`Images`](#MeshWorkflowStep.Images)                                   | Gets the list of associated images.                             |
| [`InternalObject`](#MeshWorkflowStep.InternalObject)                   | Gets the internal object. For advanced usage only.              |
| [`OperationType`](#MeshWorkflowStep.OperationType)                     | Returns the type of the operation. .                            |
| [`Properties`](#MeshWorkflowStep.Properties)                           | Gets the list of properties for this object.                    |
| [`VisibleProperties`](#MeshWorkflowStep.VisibleProperties)             | Gets the list of properties that are visible for this object.   |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowStep.Children"></a>

### *property* MeshWorkflowStep.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.DataModelObjectCategory"></a>

### *property* MeshWorkflowStep.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.EnableCheckpoint"></a>

### *property* MeshWorkflowStep.EnableCheckpoint *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the checkpointing is enabled for the step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Figures"></a>

### *property* MeshWorkflowStep.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Images"></a>

### *property* MeshWorkflowStep.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.InternalObject"></a>

### *property* MeshWorkflowStep.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelOperationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.OperationType"></a>

### *property* MeshWorkflowStep.OperationType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the operation. .

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Properties"></a>

### *property* MeshWorkflowStep.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.VisibleProperties"></a>

### *property* MeshWorkflowStep.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowStep.Activate"></a>

### MeshWorkflowStep.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddControl"></a>

### MeshWorkflowStep.AddControl(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowControl](MeshWorkflowControl.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowControl)

Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddFigure"></a>

### MeshWorkflowStep.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddImage"></a>

### MeshWorkflowStep.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddOutcome"></a>

### MeshWorkflowStep.AddOutcome(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome)

Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.ClearDataAndDisableCheckpoint"></a>

### MeshWorkflowStep.ClearDataAndDisableCheckpoint() → [None](https://docs.python.org/3/library/constants.html#None)

Clear checkpoint data and disable checkpointing for the step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CopyTo"></a>

### MeshWorkflowStep.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CreateParameter"></a>

### MeshWorkflowStep.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Delete"></a>

### MeshWorkflowStep.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Duplicate"></a>

### MeshWorkflowStep.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetChildren"></a>

### MeshWorkflowStep.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetParameter"></a>

### MeshWorkflowStep.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GroupAllSimilarChildren"></a>

### MeshWorkflowStep.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GroupSimilarObjects"></a>

### MeshWorkflowStep.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.PropertyByAPIName"></a>

### MeshWorkflowStep.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.PropertyByName"></a>

### MeshWorkflowStep.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.RemoveParameter"></a>

### MeshWorkflowStep.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

