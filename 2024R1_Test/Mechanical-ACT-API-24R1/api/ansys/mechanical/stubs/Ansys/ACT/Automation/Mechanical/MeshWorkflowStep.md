# MeshWorkflowStep

<a id="MeshWorkflowStep"></a>

### *class* MeshWorkflowStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Object that wraps IDSEngineeringModelGeometryOperationAuto.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Delete`](#MeshWorkflowStep.Delete)                                   | Run the Delete action.                                                                                                                                                                                            |
| [`AddControl`](#MeshWorkflowStep.AddControl)                           | Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation. |
| [`AddOutcome`](#MeshWorkflowStep.AddOutcome)                           | Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.                |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                                                                                                                                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                                                                                                                                                      |
| [`AddFigure`](#MeshWorkflowStep.AddFigure)                             | Creates a new child Figure.                                                                                                                                                                                       |
| [`AddImage`](#MeshWorkflowStep.AddImage)                               | Creates a new child Image.                                                                                                                                                                                        |
| [`Activate`](#MeshWorkflowStep.Activate)                               | Activate the current object.                                                                                                                                                                                      |
| [`CopyTo`](#MeshWorkflowStep.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                        |
| [`Duplicate`](#MeshWorkflowStep.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                                    |
| [`GroupAllSimilarChildren`](#MeshWorkflowStep.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                           |
| [`GroupSimilarObjects`](#MeshWorkflowStep.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                               |
| [`PropertyByName`](#MeshWorkflowStep.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                                |
| [`PropertyByAPIName`](#MeshWorkflowStep.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                                   |
| [`CreateParameter`](#MeshWorkflowStep.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                           |
| [`GetParameter`](#MeshWorkflowStep.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                           |
| [`RemoveParameter`](#MeshWorkflowStep.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                 |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`OperationType`](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#OperationType)        | Returns the type of the operation. .                          |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MeshWorkflowStep.Children)                                                                            | Gets the list of children.                                    |
| [`Figures`](#MeshWorkflowStep.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowStep.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowStep.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowStep.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshWorkflowStep
```

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowStep.OperationType"></a>

### *property* MeshWorkflowStep.OperationType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#OperationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the operation. .

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.InternalObject"></a>

### *property* MeshWorkflowStep.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelOperationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.DataModelObjectCategory"></a>

### *property* MeshWorkflowStep.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Children"></a>

### *property* MeshWorkflowStep.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Figures"></a>

### *property* MeshWorkflowStep.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Images"></a>

### *property* MeshWorkflowStep.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflowStep.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Properties"></a>

### *property* MeshWorkflowStep.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.VisibleProperties"></a>

### *property* MeshWorkflowStep.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowStep.Delete"></a>

### MeshWorkflowStep.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddControl"></a>

### MeshWorkflowStep.AddControl(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ControlType))

Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddOutcome"></a>

### MeshWorkflowStep.AddOutcome(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#OutcomeType))

Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetChildren"></a>

### MeshWorkflowStep.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowStep.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddFigure"></a>

### MeshWorkflowStep.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddImage"></a>

### MeshWorkflowStep.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Activate"></a>

### MeshWorkflowStep.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CopyTo"></a>

### MeshWorkflowStep.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Duplicate"></a>

### MeshWorkflowStep.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GroupAllSimilarChildren"></a>

### MeshWorkflowStep.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GroupSimilarObjects"></a>

### MeshWorkflowStep.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.PropertyByName"></a>

### MeshWorkflowStep.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.PropertyByAPIName"></a>

### MeshWorkflowStep.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.CreateParameter"></a>

### MeshWorkflowStep.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetParameter"></a>

### MeshWorkflowStep.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.RemoveParameter"></a>

### MeshWorkflowStep.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
