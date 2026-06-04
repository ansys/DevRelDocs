# `MeshWorkflow`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshWorkflow"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflow

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelWorkflowGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflow.Activate)                                                             | Activate the current object.                                                                                                                                                                                                                                                                               |
| [`AddFigure`](#MeshWorkflow.AddFigure)                                                           | Creates a new child Figure.                                                                                                                                                                                                                                                                                |
| [`AddImage`](#MeshWorkflow.AddImage)                                                             | Creates a new child Image.                                                                                                                                                                                                                                                                                 |
| [`AddInput`](#MeshWorkflow.AddInput)                                                             | Adds an “Input” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowInput object if not existent, otherwise it returns the already available MeshWorkflowInput object.                                                                                                          |
| [`AddOutput`](#MeshWorkflow.AddOutput)                                                           | Adds an “Output” node as child object under the “Mesh Workflow” and returns the new MeshWorkflowOutput object if not existent, otherwise it returns the already available MeshWorkflowOutput object.                                                                                                       |
| [`ClearGeneratedData`](#MeshWorkflow.ClearGeneratedData)                                         | Clears all the generated data, i.e.,  It resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| [`ClearOutputData`](#MeshWorkflow.ClearOutputData)                                               | Clears only the “Output” data, i.e., the generated Geometry part(s) and the associated mesh.                                                                                                                                                                                                               |
| [`CopyTo`](#MeshWorkflow.CopyTo)                                                                 | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                 |
| [`CreateParameter`](#MeshWorkflow.CreateParameter)                                               | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                    |
| [`Delete`](#MeshWorkflow.Delete)                                                                 | Run the Delete action.                                                                                                                                                                                                                                                                                     |
| [`Duplicate`](#MeshWorkflow.Duplicate)                                                           | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                             |
| [`ExportWorkflow`](#MeshWorkflow.ExportWorkflow)                                                 | Exports the steps as template into a .emx file.                                                                                                                                                                                                                                                            |
| [`FinalizeWorkflow`](#MeshWorkflow.FinalizeWorkflow)                                             | Once all steps in a mesh workflow are completed successfully, the workflow can be completed which will transfer the generated data back into new Mechanical geometry part(s) together with the corresponding part mesh(es).                                                                                |
| [`Generate`](#MeshWorkflow.Generate)                                                             | Generates the desired data by executing the whole workflow, i.e., transferring the input data, executing all steps, and completing the workflow by transferring the output data back into Geometry and Mesh data.                                                                                          |
| [`GetAllLabelNames`](#MeshWorkflow.GetAllLabelNames)                                             | Gets all the PrimeMesh model labels names currently defined for the workflow.                                                                                                                                                                                                                              |
| [`GetAllPartNames`](#MeshWorkflow.GetAllPartNames)                                               | Gets all the PrimeMesh model parts names currently defined for the workflow.                                                                                                                                                                                                                               |
| [`GetAllSizeFieldNames`](#MeshWorkflow.GetAllSizeFieldNames)                                     | Gets all the PrimeMesh model volumetric size field names currently defined for the workflow.                                                                                                                                                                                                               |
| [`GetAllZoneNames`](#MeshWorkflow.GetAllZoneNames)                                               | Gets all the PrimeMesh model zones names currently defined for the workflow.                                                                                                                                                                                                                               |
| [`GetChildren`](#MeshWorkflow.GetChildren)                                                       | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                               |
| [`GetParameter`](#MeshWorkflow.GetParameter)                                                     | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                    |
| [`GetSolidSurfaceMeshQualityWarningLimit`](#MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimit) | Get Mesh Quality Warning Limit                                                                                                                                                                                                                                                                             |
| [`GroupAllSimilarChildren`](#MeshWorkflow.GroupAllSimilarChildren)                               | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                    |
| [`GroupSimilarObjects`](#MeshWorkflow.GroupSimilarObjects)                                       | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                        |
| [`ImportWorkflow`](#MeshWorkflow.ImportWorkflow)                                                 | Imports the steps from a template .emx file.                                                                                                                                                                                                                                                               |
| [`InitializeWorkflow`](#MeshWorkflow.InitializeWorkflow)                                         | Initializes the mesh workflow by transferring the scoped geometry parts/bodies from Mechanical into the PrimeMesh model and updates the “Input” node state accordingly.                                                                                                                                    |
| [`PropertyByAPIName`](#MeshWorkflow.PropertyByAPIName)                                           | Get a property by its API name.                                                                                                                                                                                                                                                                            |
| [`PropertyByName`](#MeshWorkflow.PropertyByName)                                                 | Get a property by its unique name.                                                                                                                                                                                                                                                                         |
| [`RemoveParameter`](#MeshWorkflow.RemoveParameter)                                               | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                          |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#MeshWorkflow.Children)                                 | Gets the list of children.                                                                                                            |
| [`DataModelObjectCategory`](#MeshWorkflow.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                                                                                          |
| [`Figures`](#MeshWorkflow.Figures)                                   | Gets the list of associated figures.                                                                                                  |
| [`Images`](#MeshWorkflow.Images)                                     | Gets the list of associated images.                                                                                                   |
| [`ImportedWorkflowFilename`](#MeshWorkflow.ImportedWorkflowFilename) | The filename of the template.emx file that populated the workflow initially.                                                          |
| [`InternalObject`](#MeshWorkflow.InternalObject)                     | Gets the internal object. For advanced usage only.                                                                                    |
| [`Properties`](#MeshWorkflow.Properties)                             | Gets the list of properties for this object.                                                                                          |
| [`UnitSystem`](#MeshWorkflow.UnitSystem)                             | Defines the “unit system” of a Prime Model, if not defined, the unit system is deduced from the geometry at input data transfer time. |
| [`VisibleProperties`](#MeshWorkflow.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                         |
| [`WorkflowType`](#MeshWorkflow.WorkflowType)                         | Returns the workflow type which is applicable to the Input, Steps, and Output.                                                        |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflow.Children"></a>

### *property* MeshWorkflow.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.DataModelObjectCategory"></a>

### *property* MeshWorkflow.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Figures"></a>

### *property* MeshWorkflow.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Images"></a>

### *property* MeshWorkflow.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ImportedWorkflowFilename"></a>

### *property* MeshWorkflow.ImportedWorkflowFilename *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The filename of the template.emx file that populated the workflow initially.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.InternalObject"></a>

### *property* MeshWorkflow.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelWorkflowGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Properties"></a>

### *property* MeshWorkflow.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.UnitSystem"></a>

### *property* MeshWorkflow.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the “unit system” of a Prime Model, if not defined, the unit system is deduced from the geometry at input data transfer time.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.VisibleProperties"></a>

### *property* MeshWorkflow.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.WorkflowType"></a>

### *property* MeshWorkflow.WorkflowType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the workflow type which is applicable to the Input, Steps, and Output.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflow.Activate"></a>

### MeshWorkflow.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddFigure"></a>

### MeshWorkflow.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.AddImage"></a>

### MeshWorkflow.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

<a id="MeshWorkflow.CopyTo"></a>

### MeshWorkflow.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.CreateParameter"></a>

### MeshWorkflow.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Delete"></a>

### MeshWorkflow.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Duplicate"></a>

### MeshWorkflow.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ExportWorkflow"></a>

### MeshWorkflow.ExportWorkflow(fileName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Exports the steps as template into a .emx file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.FinalizeWorkflow"></a>

### MeshWorkflow.FinalizeWorkflow()

Once all steps in a mesh workflow are completed successfully, the workflow can be completed which will transfer the generated data back into new Mechanical geometry part(s) together with the corresponding part mesh(es).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.Generate"></a>

### MeshWorkflow.Generate()

Generates the desired data by executing the whole workflow, i.e., transferring the input data, executing all steps, and completing the workflow by transferring the output data back into Geometry and Mesh data.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllLabelNames"></a>

### MeshWorkflow.GetAllLabelNames()

Gets all the PrimeMesh model labels names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllPartNames"></a>

### MeshWorkflow.GetAllPartNames()

Gets all the PrimeMesh model parts names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllSizeFieldNames"></a>

### MeshWorkflow.GetAllSizeFieldNames()

Gets all the PrimeMesh model volumetric size field names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetAllZoneNames"></a>

### MeshWorkflow.GetAllZoneNames()

Gets all the PrimeMesh model zones names currently defined for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetChildren"></a>

### MeshWorkflow.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetParameter"></a>

### MeshWorkflow.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflow.GetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MeshMetricType))

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GroupAllSimilarChildren"></a>

### MeshWorkflow.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.GroupSimilarObjects"></a>

### MeshWorkflow.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.ImportWorkflow"></a>

### MeshWorkflow.ImportWorkflow(fileName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Imports the steps from a template .emx file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.InitializeWorkflow"></a>

### MeshWorkflow.InitializeWorkflow()

Initializes the mesh workflow by transferring the scoped geometry parts/bodies from Mechanical into the PrimeMesh model and updates the “Input” node state accordingly.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PropertyByAPIName"></a>

### MeshWorkflow.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.PropertyByName"></a>

### MeshWorkflow.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflow.RemoveParameter"></a>

### MeshWorkflow.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

