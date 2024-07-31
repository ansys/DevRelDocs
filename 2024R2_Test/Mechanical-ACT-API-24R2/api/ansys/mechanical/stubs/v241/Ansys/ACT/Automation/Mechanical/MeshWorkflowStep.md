# `MeshWorkflowStep`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelGeometryOperationAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.Delete)                                   | Run the Delete action.                                                                                                                                                                                            |
| [`AddControl`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.AddControl)                           | Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation. |
| [`AddOutcome`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.AddOutcome)                           | Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.                |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#id1)                                                  | Gets the list of children, filtered by type.                                                                                                                                                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#id1)                                                  | Gets the list of children, filtered by type.                                                                                                                                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.AddFigure)                             | Creates a new child Figure.                                                                                                                                                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.AddImage)                               | Creates a new child Image.                                                                                                                                                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.Activate)                               | Activate the current object.                                                                                                                                                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                 |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`OperationType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.OperationType)                     | Returns the type of the operation. .                          |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.Children)                               | Gets the list of children.                                    |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStep.md#MeshWorkflowStep.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowStep.OperationType"></a>

### *property* MeshWorkflowStep.OperationType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the operation. .

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.InternalObject"></a>

### *property* MeshWorkflowStep.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelOperationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.DataModelObjectCategory"></a>

### *property* MeshWorkflowStep.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Children"></a>

### *property* MeshWorkflowStep.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Figures"></a>

### *property* MeshWorkflowStep.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.Images"></a>

### *property* MeshWorkflowStep.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### MeshWorkflowStep.AddControl(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType))

Adds a MeshWorkflowControl node as child node of the “Step” tree node. This control node can be created under any step node. This node is created to set properties that are required for executing an operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.AddOutcome"></a>

### MeshWorkflowStep.AddOutcome(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType))

Adds a MeshWorkflowOutcome node as child node of the “Step” tree node. This outcome node can be created under any step node. This node is created to see the results after executing an operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStep.GetChildren"></a>

### MeshWorkflowStep.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowStep.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

