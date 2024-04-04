# PartTransformGroup

### *class* PartTransformGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PartTransformGroup.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`TransformGeometry`](#PartTransformGroup.TransformGeometry)             | TransformGeometry method.                                                         |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddPartTransform`](#PartTransformGroup.AddPartTransform)               | Creates a new PartTransform                                                       |
| [`Delete`](#PartTransformGroup.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PartTransformGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PartTransformGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PartTransformGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PartTransformGroup.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PartTransformGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PartTransformGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PartTransformGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PartTransformGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PartTransformGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PartTransformGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PartTransformGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PartTransformGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PartTransformGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RegenerateContacts`](#PartTransformGroup.RegenerateContacts)                                                      | Gets or sets the RegenerateContacts.                          |
| [`Suppressed`](#PartTransformGroup.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
| [`TransformMesh`](#PartTransformGroup.TransformMesh)                                                                | Gets or sets the TransformMesh.                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#PartTransformGroup.Children)                                                                          | Gets the list of children.                                    |
| [`Comments`](#PartTransformGroup.Comments)                                                                          | Gets the list of associated comments.                         |
| [`Figures`](#PartTransformGroup.Figures)                                                                            | Gets the list of associated figures.                          |
| [`Images`](#PartTransformGroup.Images)                                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PartTransformGroup.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PartTransformGroup.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PartTransformGroup
```

## Property detail

### *property* PartTransformGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPartTransformGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.RegenerateContacts *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegenerateContacts.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.TransformMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransformMesh.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PartTransformGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PartTransformGroup.TransformGeometry()

TransformGeometry method.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.AddPartTransform()

Creates a new PartTransform

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PartTransformGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
