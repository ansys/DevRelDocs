# MeshWorkflowLabelGroup

### *class* MeshWorkflowLabelGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Object that wraps IDSEngineeringModelLabelGroupAuto.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#MeshWorkflowLabelGroup.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddFigure`](#MeshWorkflowLabelGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowLabelGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshWorkflowLabelGroup.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshWorkflowLabelGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshWorkflowLabelGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshWorkflowLabelGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowLabelGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshWorkflowLabelGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshWorkflowLabelGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshWorkflowLabelGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshWorkflowLabelGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshWorkflowLabelGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MeshWorkflowLabelGroup.Children)                                                                      | Gets the list of children.                                    |
| [`Figures`](#MeshWorkflowLabelGroup.Figures)                                                                        | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowLabelGroup.Images)                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowLabelGroup.Properties)                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowLabelGroup.VisibleProperties)                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshWorkflowLabelGroup
```

## Property detail

### *property* MeshWorkflowLabelGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelLabelGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowLabelGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowLabelGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowLabelGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowLabelGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowLabelGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowLabelGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowLabelGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshWorkflowLabelGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowLabelGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
