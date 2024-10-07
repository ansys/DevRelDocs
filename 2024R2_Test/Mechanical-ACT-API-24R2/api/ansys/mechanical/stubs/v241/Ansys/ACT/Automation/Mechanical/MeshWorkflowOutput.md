# `MeshWorkflowOutput`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput"></a>

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
|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [`Children`](#MeshWorkflowOutput.Children)                               | Gets the list of children.                                                                                     |
| [`DataModelObjectCategory`](#MeshWorkflowOutput.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                   |
| [`DataTransferType`](#MeshWorkflowOutput.DataTransferType)               | Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es). |
| [`Figures`](#MeshWorkflowOutput.Figures)                                 | Gets the list of associated figures.                                                                           |
| [`Images`](#MeshWorkflowOutput.Images)                                   | Gets the list of associated images.                                                                            |
| [`InternalObject`](#MeshWorkflowOutput.InternalObject)                   | Gets the internal object. For advanced usage only.                                                             |
| [`Properties`](#MeshWorkflowOutput.Properties)                           | Gets the list of properties for this object.                                                                   |
| [`VisibleProperties`](#MeshWorkflowOutput.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                  |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowOutput.Children"></a>

### *property* MeshWorkflowOutput.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.DataModelObjectCategory"></a>

### *property* MeshWorkflowOutput.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.DataTransferType"></a>

### *property* MeshWorkflowOutput.DataTransferType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType](../../../../../v242/Ansys/Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DataTransferType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Figures"></a>

### *property* MeshWorkflowOutput.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Images"></a>

### *property* MeshWorkflowOutput.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.InternalObject"></a>

### *property* MeshWorkflowOutput.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelMeshDomainAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Properties"></a>

### *property* MeshWorkflowOutput.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.VisibleProperties"></a>

### *property* MeshWorkflowOutput.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowOutput.Activate"></a>

### MeshWorkflowOutput.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.AddFigure"></a>

### MeshWorkflowOutput.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.AddImage"></a>

### MeshWorkflowOutput.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CopyTo"></a>

### MeshWorkflowOutput.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CreateParameter"></a>

### MeshWorkflowOutput.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Delete"></a>

### MeshWorkflowOutput.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Duplicate"></a>

### MeshWorkflowOutput.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetChildren"></a>

### MeshWorkflowOutput.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetParameter"></a>

### MeshWorkflowOutput.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupAllSimilarChildren"></a>

### MeshWorkflowOutput.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupSimilarObjects"></a>

### MeshWorkflowOutput.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyByAPIName"></a>

### MeshWorkflowOutput.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyByName"></a>

### MeshWorkflowOutput.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.RemoveParameter"></a>

### MeshWorkflowOutput.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

