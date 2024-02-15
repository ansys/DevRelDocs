# MeshWorkflow

### *class* MeshWorkflow

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Object that wraps IDSEngineeringModelWorkflowGroup.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Generate`](#MeshWorkflow.Generate)                               | Generates the desired data by executing the whole workflow, i.e., transferring the input data, executing all steps, and completing the workflow by transferring the output data back into Geometry and Mesh data.                                                                                          |
|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddInput`](#MeshWorkflow.AddInput)                               | Adds an “Input” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowInput object if not existent, otherwise it returns the already available MeshWorkflowInput object.                                                                                                          |
| [`AddOutput`](#MeshWorkflow.AddOutput)                             | Adds an “Output” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowOutput object if not existent, otherwise it returns the already available MeshWorkflowOutput object.                                                                                                       |
| [`ClearGeneratedData`](#MeshWorkflow.ClearGeneratedData)           | Clears all the generated data, i.e.,  It resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| [`ClearOutputData`](#MeshWorkflow.ClearOutputData)                 | Clears only the “Output” data, i.e., the generated Geometry part(s) and the associated mesh.                                                                                                                                                                                                               |
| [`FinalizeWorkflow`](#MeshWorkflow.FinalizeWorkflow)               | Once all steps in a mesh workflow are completed successfully, the workflow can be completed which will transfer the generated data back into new Mechanical geometry part(s) together with the corresponding part mesh(es).                                                                                |
| [`InitializeWorkflow`](#MeshWorkflow.InitializeWorkflow)           | Initializes the mesh workflow by transferring the scoped geometry parts/bodies from Mechanical into the PrimeMesh model and updates the “Input” node state accordingly.                                                                                                                                    |
| [`ImportWorkflow`](#MeshWorkflow.ImportWorkflow)                   | Imports the steps from a template .emx file.                                                                                                                                                                                                                                                               |
| [`ExportWorkflow`](#MeshWorkflow.ExportWorkflow)                   | Exports the steps as template into a .emx file.                                                                                                                                                                                                                                                            |
| [`Delete`](#MeshWorkflow.Delete)                                   | Run the Delete action.                                                                                                                                                                                                                                                                                     |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                               |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                               |
| [`AddFigure`](#MeshWorkflow.AddFigure)                             | Creates a new child Figure.                                                                                                                                                                                                                                                                                |
| [`AddImage`](#MeshWorkflow.AddImage)                               | Creates a new child Image.                                                                                                                                                                                                                                                                                 |
| [`Activate`](#MeshWorkflow.Activate)                               | Activate the current object.                                                                                                                                                                                                                                                                               |
| [`CopyTo`](#MeshWorkflow.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                 |
| [`Duplicate`](#MeshWorkflow.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                             |
| [`GroupAllSimilarChildren`](#MeshWorkflow.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                    |
| [`GroupSimilarObjects`](#MeshWorkflow.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                        |
| [`PropertyByName`](#MeshWorkflow.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                                                                                                                         |
| [`PropertyByAPIName`](#MeshWorkflow.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                                                                                                                            |
| [`CreateParameter`](#MeshWorkflow.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                    |
| [`GetParameter`](#MeshWorkflow.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                    |
| [`RemoveParameter`](#MeshWorkflow.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                          |

### Properties

| [`WorkflowType`](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#WorkflowType)           | Returns the workflow type which is applicable to the Input, Steps, and Output.                                                        |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                                                    |
| [`ImportedWorkflowFilename`](#MeshWorkflow.ImportedWorkflowFilename)                                                | The filename of the template.emx file that populated the workflow initially.                                                          |
| [`UnitSystem`](#MeshWorkflow.UnitSystem)                                                                            | Defines the “unit system” of a Prime Model, if not defined, the unit system is deduced from the geometry at input data transfer time. |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                          |
| [`Children`](#MeshWorkflow.Children)                                                                                | Gets the list of children.                                                                                                            |
| [`Figures`](#MeshWorkflow.Figures)                                                                                  | Gets the list of associated figures.                                                                                                  |
| [`Images`](#MeshWorkflow.Images)                                                                                    | Gets the list of associated images.                                                                                                   |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                                                    |
| [`Properties`](#MeshWorkflow.Properties)                                                                            | Gets the list of properties for this object.                                                                                          |
| [`VisibleProperties`](#MeshWorkflow.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.                                                                         |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshWorkflow
```

## Property detail

### *property* MeshWorkflow.WorkflowType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#WorkflowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the workflow type which is applicable to the Input, Steps, and Output.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelWorkflowGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.ImportedWorkflowFilename *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The filename of the template.emx file that populated the workflow initially.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the “unit system” of a Prime Model, if not defined, the unit system is deduced from the geometry at input data transfer time.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflow.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshWorkflow.Generate()

Generates the desired data by executing the whole workflow, i.e., transferring the input data, executing all steps, and completing the workflow by transferring the output data back into Geometry and Mesh data.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.AddInput()

Adds an “Input” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowInput object if not existent, otherwise it returns the already available MeshWorkflowInput object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.AddOutput()

Adds an “Output” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowOutput object if not existent, otherwise it returns the already available MeshWorkflowOutput object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.ClearGeneratedData()

Clears all the generated data, i.e.,  It resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.ClearOutputData()

Clears only the “Output” data, i.e., the generated Geometry part(s) and the associated mesh.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.FinalizeWorkflow()

Once all steps in a mesh workflow are completed successfully, the workflow can be completed which will transfer the generated data back into new Mechanical geometry part(s) together with the corresponding part mesh(es).

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.InitializeWorkflow()

Initializes the mesh workflow by transferring the scoped geometry parts/bodies from Mechanical into the PrimeMesh model and updates the “Input” node state accordingly.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.ImportWorkflow(fileName: System.String)

Imports the steps from a template .emx file.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.ExportWorkflow(fileName: System.String)

Exports the steps as template into a .emx file.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflow.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
