# GenericCrack

### *class* GenericCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GenericCrack.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#GenericCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#GenericCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GenericCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GenericCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GenericCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GenericCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GenericCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GenericCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GenericCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GenericCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GenericCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GenericCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CrackID`](#GenericCrack.CrackID)                                                                                  | Gets the CrackID.                                             |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#GenericCrack.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#GenericCrack.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#GenericCrack.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#GenericCrack.Images)                                                                                    | Gets the list of associated images.                           |
| [`ReadOnly`](#GenericCrack.ReadOnly)                                                                                | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericCrack.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GenericCrack.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import GenericCrack
```

## Property detail

### *property* GenericCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GenericCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### GenericCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### GenericCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GenericCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GenericCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GenericCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GenericCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GenericCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### GenericCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GenericCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GenericCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GenericCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GenericCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GenericCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GenericCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### GenericCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GenericCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GenericCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
