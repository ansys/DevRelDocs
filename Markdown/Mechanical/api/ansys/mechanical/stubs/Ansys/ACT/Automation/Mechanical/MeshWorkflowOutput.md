# MeshWorkflowOutput

### *class* MeshWorkflowOutput

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Object that wraps IDSEngineeringModelMeshDomainAuto.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#MeshWorkflowOutput.Delete)                                   | Run the Delete action.                                                            |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddFigure`](#MeshWorkflowOutput.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowOutput.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshWorkflowOutput.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshWorkflowOutput.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshWorkflowOutput.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshWorkflowOutput.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowOutput.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshWorkflowOutput.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshWorkflowOutput.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshWorkflowOutput.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshWorkflowOutput.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshWorkflowOutput.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`DataTransferType`](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DataTransferType.md#DataTransferType)   | Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).   |
|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                | Gets the internal object. For advanced usage only.                                                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)     | Gets the current DataModelObject’s category.                                                                     |
| [`Children`](#MeshWorkflowOutput.Children)                                                                              | Gets the list of children.                                                                                       |
| [`Figures`](#MeshWorkflowOutput.Figures)                                                                                | Gets the list of associated figures.                                                                             |
| [`Images`](#MeshWorkflowOutput.Images)                                                                                  | Gets the list of associated images.                                                                              |
| [`InternalObject`](#id0)                                                                                                | Gets the internal object. For advanced usage only.                                                               |
| [`Properties`](#MeshWorkflowOutput.Properties)                                                                          | Gets the list of properties for this object.                                                                     |
| [`VisibleProperties`](#MeshWorkflowOutput.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.                                                    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshWorkflowOutput
```

## Property detail

### *property* MeshWorkflowOutput.DataTransferType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DataTransferType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DataTransferType.md#DataTransferType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how the PrimeMesh model data should be transferred back into Geometry part(s) and associated mesh(es).

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowOutput.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelMeshDomainAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowOutput.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowOutput.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowOutput.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowOutput.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowOutput.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowOutput.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowOutput.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshWorkflowOutput.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowOutput.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
