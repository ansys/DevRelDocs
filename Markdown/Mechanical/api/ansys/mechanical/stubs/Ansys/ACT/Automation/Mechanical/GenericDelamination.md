# GenericDelamination

### *class* GenericDelamination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GenericDelamination.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#GenericDelamination.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#GenericDelamination.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GenericDelamination.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericDelamination.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericDelamination.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GenericDelamination.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GenericDelamination.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GenericDelamination.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GenericDelamination.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericDelamination.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GenericDelamination.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GenericDelamination.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GenericDelamination.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GenericDelamination.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GenericDelamination.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#GenericDelamination.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#GenericDelamination.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#GenericDelamination.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#GenericDelamination.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#GenericDelamination.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericDelamination.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GenericDelamination.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import GenericDelamination
```

## Property detail

### *property* GenericDelamination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GenericDelamination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### GenericDelamination.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### GenericDelamination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GenericDelamination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
