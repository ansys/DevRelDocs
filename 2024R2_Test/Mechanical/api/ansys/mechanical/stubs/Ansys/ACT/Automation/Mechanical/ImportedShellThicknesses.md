# ImportedShellThicknesses

### *class* ImportedShellThicknesses

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedShellThicknesses.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ImportedShellThicknesses.Delete)                                   | Run the Delete action.                                                            |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedShellThicknesses.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedShellThicknesses.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedShellThicknesses.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedShellThicknesses.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedShellThicknesses.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedShellThicknesses.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedShellThicknesses.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedShellThicknesses.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedShellThicknesses.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedShellThicknesses.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedShellThicknesses.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedShellThicknesses.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedShellThicknesses.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedShellThicknesses.Count)                                                                          | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedShellThicknesses.Suppressed)                                                                | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedShellThicknesses.Children)                                                                    | Gets the list of children.                                    |
| [`Comments`](#ImportedShellThicknesses.Comments)                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#ImportedShellThicknesses.Figures)                                                                      | Gets the list of associated figures.                          |
| [`Images`](#ImportedShellThicknesses.Images)                                                                        | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedShellThicknesses.ReadOnly)                                                                    | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedShellThicknesses.Properties)                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedShellThicknesses.VisibleProperties)                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedShellThicknesses
```

## Property detail

### *property* ImportedShellThicknesses.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedShellThicknesses.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedShellThicknesses.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedShellThicknesses.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
