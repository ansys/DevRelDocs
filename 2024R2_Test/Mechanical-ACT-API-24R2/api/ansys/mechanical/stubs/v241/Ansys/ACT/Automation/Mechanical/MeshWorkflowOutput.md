# `MeshWorkflowOutput`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutput

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelMeshDomainAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [`DataTransferType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.DataTransferType)               | Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).   |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#id0)                                                 | Gets the internal object. For advanced usage only.                                                               |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                                                                     |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.Children)                               | Gets the list of children.                                                                                       |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.Figures)                                 | Gets the list of associated figures.                                                                             |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.Images)                                   | Gets the list of associated images.                                                                              |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#id0)                                                 | Gets the internal object. For advanced usage only.                                                               |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.Properties)                           | Gets the list of properties for this object.                                                                     |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowOutput.md#MeshWorkflowOutput.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                    |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowOutput.DataTransferType"></a>

### *property* MeshWorkflowOutput.DataTransferType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DataTransferType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.InternalObject"></a>

### *property* MeshWorkflowOutput.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelMeshDomainAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.DataModelObjectCategory"></a>

### *property* MeshWorkflowOutput.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Children"></a>

### *property* MeshWorkflowOutput.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Figures"></a>

### *property* MeshWorkflowOutput.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Images"></a>

### *property* MeshWorkflowOutput.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflowOutput.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="MeshWorkflowOutput.Delete"></a>

### MeshWorkflowOutput.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetChildren"></a>

### MeshWorkflowOutput.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowOutput.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.AddFigure"></a>

### MeshWorkflowOutput.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.AddImage"></a>

### MeshWorkflowOutput.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Activate"></a>

### MeshWorkflowOutput.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CopyTo"></a>

### MeshWorkflowOutput.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.Duplicate"></a>

### MeshWorkflowOutput.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupAllSimilarChildren"></a>

### MeshWorkflowOutput.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GroupSimilarObjects"></a>

### MeshWorkflowOutput.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyByName"></a>

### MeshWorkflowOutput.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.PropertyByAPIName"></a>

### MeshWorkflowOutput.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.CreateParameter"></a>

### MeshWorkflowOutput.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.GetParameter"></a>

### MeshWorkflowOutput.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutput.RemoveParameter"></a>

### MeshWorkflowOutput.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

