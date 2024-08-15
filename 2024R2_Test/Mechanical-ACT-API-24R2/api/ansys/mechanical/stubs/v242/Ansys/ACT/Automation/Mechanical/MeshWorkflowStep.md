# `MeshWorkflowStep`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelGeometryOperationAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                                                                                                                                                            |
| `AddControl`              | Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation. |
| `AddOutcome`              | Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.                |
| `GetChildren`             | Gets the list of children, filtered by type.                                                                                                                                                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                                                                                                                                                      |
| `AddFigure`               | Creates a new child Figure.                                                                                                                                                                                       |
| `AddImage`                | Creates a new child Image.                                                                                                                                                                                        |
| `Activate`                | Activate the current object.                                                                                                                                                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                                                                                                                                                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                                                                                                                                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                                                                                                                                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                                                                                                                                                               |
| `PropertyByName`          | Get a property by its unique name.                                                                                                                                                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                                                                                                                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                                                                                                                                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                                                                                                                                                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                 |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `OperationType`           | Returns the type of the operation. .                          |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* MeshWorkflowStep.OperationType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the operation. .

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelOperationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStep.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### MeshWorkflowStep.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.AddControl(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType))

Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.AddOutcome(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType))

Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStep.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

