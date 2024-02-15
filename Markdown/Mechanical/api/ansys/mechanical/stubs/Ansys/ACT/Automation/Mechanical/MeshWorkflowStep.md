# MeshWorkflowStep

### *class* MeshWorkflowStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Object that wraps IDSEngineeringModelGeometryOperationAuto.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#MeshWorkflowStep.Delete)                                   | Run the Delete action.                                                                                                                                                                                            |
|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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

| [`OperationType`](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#OperationType)        | Returns the type of the operation. .                          |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MeshWorkflowStep.Children)                                                                            | Gets the list of children.                                    |
| [`Figures`](#MeshWorkflowStep.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowStep.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowStep.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowStep.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshWorkflowStep
```

## Property detail

### *property* MeshWorkflowStep.OperationType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#OperationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the operation. .

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelOperationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshWorkflowStep.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.AddControl(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ControlType))

Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.AddOutcome(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#OutcomeType))

Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
