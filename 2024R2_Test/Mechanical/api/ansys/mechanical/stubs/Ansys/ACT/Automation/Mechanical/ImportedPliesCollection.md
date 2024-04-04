# ImportedPliesCollection

### *class* ImportedPliesCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedPliesCollection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedPliesCollection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedPliesCollection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedPliesCollection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedPliesCollection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedPliesCollection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedPliesCollection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedPliesCollection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedPliesCollection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedPliesCollection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedPliesCollection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedPliesCollection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedPliesCollection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedPliesCollection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ImportedPliesCollection.Children)                                                                     | Gets the list of children.                                    |
| [`Comments`](#ImportedPliesCollection.Comments)                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#ImportedPliesCollection.Figures)                                                                       | Gets the list of associated figures.                          |
| [`Images`](#ImportedPliesCollection.Images)                                                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedPliesCollection.ReadOnly)                                                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedPliesCollection.Properties)                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedPliesCollection.VisibleProperties)                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedPliesCollection
```

## Property detail

### *property* ImportedPliesCollection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSImportedPliesCollectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPliesCollection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedPliesCollection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedPliesCollection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
