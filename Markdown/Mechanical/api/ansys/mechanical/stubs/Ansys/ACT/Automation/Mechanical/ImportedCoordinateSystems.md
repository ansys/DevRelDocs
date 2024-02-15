# ImportedCoordinateSystems

### *class* ImportedCoordinateSystems

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCoordinateSystems.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ImportedCoordinateSystems.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedCoordinateSystems.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCoordinateSystems.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCoordinateSystems.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedCoordinateSystems.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedCoordinateSystems.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedCoordinateSystems.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedCoordinateSystems.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCoordinateSystems.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedCoordinateSystems.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedCoordinateSystems.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedCoordinateSystems.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedCoordinateSystems.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedCoordinateSystems.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedCoordinateSystems.Count)                                                                         | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedCoordinateSystems.Suppressed)                                                               | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedCoordinateSystems.Children)                                                                   | Gets the list of children.                                    |
| [`Comments`](#ImportedCoordinateSystems.Comments)                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#ImportedCoordinateSystems.Figures)                                                                     | Gets the list of associated figures.                          |
| [`Images`](#ImportedCoordinateSystems.Images)                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedCoordinateSystems.ReadOnly)                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedCoordinateSystems.Properties)                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedCoordinateSystems.VisibleProperties)                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedCoordinateSystems
```

## Property detail

### *property* ImportedCoordinateSystems.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCoordinateSystems.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedCoordinateSystems.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedCoordinateSystems.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
