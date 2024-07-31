# `MeshWorkflow`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflow

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelWorkflowGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Generate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.Generate)                               | Generates the desired data by executing the whole workflow, i.e., transferring the input data, executing all steps, and completing the workflow by transferring the output data back into Geometry and Mesh data.                                                                                          |
| [`AddInput`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.AddInput)                               | Adds an “Input” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowInput object if not existent, otherwise it returns the already available MeshWorkflowInput object.                                                                                                          |
| [`AddOutput`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.AddOutput)                             | Adds an “Output” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowOutput object if not existent, otherwise it returns the already available MeshWorkflowOutput object.                                                                                                       |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.ClearGeneratedData)           | Clears all the generated data, i.e.,  It resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| [`ClearOutputData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.ClearOutputData)                 | Clears only the “Output” data, i.e., the generated Geometry part(s) and the associated mesh.                                                                                                                                                                                                               |
| [`FinalizeWorkflow`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.FinalizeWorkflow)               | Once all steps in a mesh workflow are completed successfully, the workflow can be completed which will transfer the generated data back into new Mechanical geometry part(s) together with the corresponding part mesh(es).                                                                                |
| [`InitializeWorkflow`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.InitializeWorkflow)           | Initializes the mesh workflow by transferring the scoped geometry parts/bodies from Mechanical into the PrimeMesh model and updates the “Input” node state accordingly.                                                                                                                                    |
| [`ImportWorkflow`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.ImportWorkflow)                   | Imports the steps from a template .emx file.                                                                                                                                                                                                                                                               |
| [`ExportWorkflow`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.ExportWorkflow)                   | Exports the steps as template into a .emx file.                                                                                                                                                                                                                                                            |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.Delete)                                   | Run the Delete action.                                                                                                                                                                                                                                                                                     |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#id1)                                              | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                               |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#id1)                                              | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                               |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.AddFigure)                             | Creates a new child Figure.                                                                                                                                                                                                                                                                                |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.AddImage)                               | Creates a new child Image.                                                                                                                                                                                                                                                                                 |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.Activate)                               | Activate the current object.                                                                                                                                                                                                                                                                               |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                 |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                             |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                    |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                        |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                                                                                                                         |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                                                                                                                            |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                    |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                    |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                          |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [`WorkflowType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.WorkflowType)                         | Returns the workflow type which is applicable to the Input, Steps, and Output.                                                        |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#id0)                                             | Gets the internal object. For advanced usage only.                                                                                    |
| [`ImportedWorkflowFilename`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.ImportedWorkflowFilename) | The filename of the template.emx file that populated the workflow initially.                                                          |
| [`UnitSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.UnitSystem)                             | Defines the “unit system” of a Prime Model, if not defined, the unit system is deduced from the geometry at input data transfer time. |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                                                                                          |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.Children)                                 | Gets the list of children.                                                                                                            |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.Figures)                                   | Gets the list of associated figures.                                                                                                  |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.Images)                                     | Gets the list of associated images.                                                                                                   |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#id0)                                             | Gets the internal object. For advanced usage only.                                                                                    |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.Properties)                             | Gets the list of properties for this object.                                                                                          |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflow.md#MeshWorkflow.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                         |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflow.WorkflowType"></a>

### *property* MeshWorkflow.WorkflowType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the workflow type which is applicable to the Input, Steps, and Output.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.InternalObject"></a>

### *property* MeshWorkflow.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelWorkflowGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ImportedWorkflowFilename"></a>

### *property* MeshWorkflow.ImportedWorkflowFilename *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The filename of the template.emx file that populated the workflow initially.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.UnitSystem"></a>

### *property* MeshWorkflow.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the “unit system” of a Prime Model, if not defined, the unit system is deduced from the geometry at input data transfer time.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.DataModelObjectCategory"></a>

### *property* MeshWorkflow.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Children"></a>

### *property* MeshWorkflow.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Figures"></a>

### *property* MeshWorkflow.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Images"></a>

### *property* MeshWorkflow.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflow.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Properties"></a>

### *property* MeshWorkflow.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.VisibleProperties"></a>

### *property* MeshWorkflow.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflow.Generate"></a>

### MeshWorkflow.Generate()

Generates the desired data by executing the whole workflow, i.e., transferring the input data, executing all steps, and completing the workflow by transferring the output data back into Geometry and Mesh data.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddInput"></a>

### MeshWorkflow.AddInput()

Adds an “Input” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowInput object if not existent, otherwise it returns the already available MeshWorkflowInput object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddOutput"></a>

### MeshWorkflow.AddOutput()

Adds an “Output” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowOutput object if not existent, otherwise it returns the already available MeshWorkflowOutput object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ClearGeneratedData"></a>

### MeshWorkflow.ClearGeneratedData()

Clears all the generated data, i.e.,  It resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ClearOutputData"></a>

### MeshWorkflow.ClearOutputData()

Clears only the “Output” data, i.e., the generated Geometry part(s) and the associated mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.FinalizeWorkflow"></a>

### MeshWorkflow.FinalizeWorkflow()

Once all steps in a mesh workflow are completed successfully, the workflow can be completed which will transfer the generated data back into new Mechanical geometry part(s) together with the corresponding part mesh(es).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.InitializeWorkflow"></a>

### MeshWorkflow.InitializeWorkflow()

Initializes the mesh workflow by transferring the scoped geometry parts/bodies from Mechanical into the PrimeMesh model and updates the “Input” node state accordingly.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ImportWorkflow"></a>

### MeshWorkflow.ImportWorkflow(fileName: System.String)

Imports the steps from a template .emx file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ExportWorkflow"></a>

### MeshWorkflow.ExportWorkflow(fileName: System.String)

Exports the steps as template into a .emx file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Delete"></a>

### MeshWorkflow.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetChildren"></a>

### MeshWorkflow.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflow.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddFigure"></a>

### MeshWorkflow.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddImage"></a>

### MeshWorkflow.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Activate"></a>

### MeshWorkflow.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CopyTo"></a>

### MeshWorkflow.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Duplicate"></a>

### MeshWorkflow.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GroupAllSimilarChildren"></a>

### MeshWorkflow.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GroupSimilarObjects"></a>

### MeshWorkflow.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PropertyByName"></a>

### MeshWorkflow.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PropertyByAPIName"></a>

### MeshWorkflow.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CreateParameter"></a>

### MeshWorkflow.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetParameter"></a>

### MeshWorkflow.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RemoveParameter"></a>

### MeshWorkflow.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

