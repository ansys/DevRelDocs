# ImportedContacts

### *class* ImportedContacts

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedContacts.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ImportedContacts.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedContacts.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedContacts.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedContacts.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedContacts.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedContacts.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedContacts.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedContacts.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedContacts.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedContacts.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedContacts.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedContacts.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedContacts.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedContacts.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedContacts.Count)                                                                                  | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedContacts.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedContacts.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#ImportedContacts.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#ImportedContacts.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#ImportedContacts.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedContacts.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedContacts.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedContacts.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedContacts
```

## Property detail

### *property* ImportedContacts.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedContacts.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedContacts.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedContacts.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
