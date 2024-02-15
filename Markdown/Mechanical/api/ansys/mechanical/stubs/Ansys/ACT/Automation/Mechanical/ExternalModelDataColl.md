# ExternalModelDataColl

### *class* ExternalModelDataColl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ExternalModelDataColl.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ExternalModelDataColl.Delete)                                   | Run the Delete action.                                                            |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ExternalModelDataColl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ExternalModelDataColl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ExternalModelDataColl.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ExternalModelDataColl.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ExternalModelDataColl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ExternalModelDataColl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ExternalModelDataColl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ExternalModelDataColl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ExternalModelDataColl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ExternalModelDataColl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ExternalModelDataColl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ExternalModelDataColl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ExternalModelDataColl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Count`](#ExternalModelDataColl.Count)                                                                             | Gets the NumberOfRows.                                        |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#ExternalModelDataColl.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ExternalModelDataColl.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#ExternalModelDataColl.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#ExternalModelDataColl.Figures)                                                                         | Gets the list of associated figures.                          |
| [`Images`](#ExternalModelDataColl.Images)                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#ExternalModelDataColl.ReadOnly)                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ExternalModelDataColl.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ExternalModelDataColl.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ExternalModelDataColl
```

## Property detail

### *property* ExternalModelDataColl.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ExternalModelDataColl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ExternalModelDataColl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ExternalModelDataColl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
