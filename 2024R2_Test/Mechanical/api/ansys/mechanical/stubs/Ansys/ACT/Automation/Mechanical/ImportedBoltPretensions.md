# ImportedBoltPretensions

### *class* ImportedBoltPretensions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedBoltPretensions.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ImportedBoltPretensions.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedBoltPretensions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedBoltPretensions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedBoltPretensions.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedBoltPretensions.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedBoltPretensions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedBoltPretensions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedBoltPretensions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedBoltPretensions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedBoltPretensions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedBoltPretensions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedBoltPretensions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedBoltPretensions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedBoltPretensions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedBoltPretensions.Count)                                                                           | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedBoltPretensions.Suppressed)                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedBoltPretensions.Children)                                                                     | Gets the list of children.                                    |
| [`Comments`](#ImportedBoltPretensions.Comments)                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#ImportedBoltPretensions.Figures)                                                                       | Gets the list of associated figures.                          |
| [`Images`](#ImportedBoltPretensions.Images)                                                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedBoltPretensions.ReadOnly)                                                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedBoltPretensions.Properties)                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedBoltPretensions.VisibleProperties)                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedBoltPretensions
```

## Property detail

### *property* ImportedBoltPretensions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBoltPretensions.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedBoltPretensions.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedBoltPretensions.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
