# MeshNumbering

### *class* MeshNumbering

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MeshNumbering.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddNumberingControl`](#MeshNumbering.AddNumberingControl)         | Creates a new NumberingControl                                                    |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenumberMesh`](#MeshNumbering.RenumberMesh)                       | Run the RenumberMesh action.                                                      |
| [`Delete`](#MeshNumbering.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MeshNumbering.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshNumbering.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshNumbering.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshNumbering.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshNumbering.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshNumbering.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshNumbering.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshNumbering.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshNumbering.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshNumbering.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshNumbering.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshNumbering.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshNumbering.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ElementOffset`](#MeshNumbering.ElementOffset)                                                                     | Gets or sets the ElementOffset.                               |
| [`NodeOffset`](#MeshNumbering.NodeOffset)                                                                           | Gets or sets the NodeOffset.                                  |
| [`CompressNodeNumbers`](#MeshNumbering.CompressNodeNumbers)                                                         | Gets or sets the CompressNodeNumbers.                         |
| [`Suppressed`](#MeshNumbering.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MeshNumbering.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#MeshNumbering.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Figures`](#MeshNumbering.Figures)                                                                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshNumbering.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshNumbering.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshNumbering.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshNumbering
```

## Property detail

### *property* MeshNumbering.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshRenumberingControlGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.ElementOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOffset.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.NodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.CompressNodeNumbers *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressNodeNumbers.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshNumbering.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshNumbering.AddNumberingControl()

Creates a new NumberingControl

<!-- !! processed by numpydoc !! -->

### MeshNumbering.RenumberMesh()

Run the RenumberMesh action.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshNumbering.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
