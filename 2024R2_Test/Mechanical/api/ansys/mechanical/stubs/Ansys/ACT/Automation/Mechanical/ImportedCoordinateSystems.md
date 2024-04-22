<a id="importedcoordinatesystems"></a>

# ImportedCoordinateSystems

<a id="ImportedCoordinateSystems"></a>

### *class* ImportedCoordinateSystems

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCoordinateSystems.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ImportedCoordinateSystems.Delete)                                   | Run the Delete action.                                                            |
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

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedCoordinateSystems
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedCoordinateSystems.InternalObject"></a>

### *property* ImportedCoordinateSystems.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.DataModelObjectCategory"></a>

### *property* ImportedCoordinateSystems.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Count"></a>

### *property* ImportedCoordinateSystems.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Suppressed"></a>

### *property* ImportedCoordinateSystems.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Children"></a>

### *property* ImportedCoordinateSystems.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Comments"></a>

### *property* ImportedCoordinateSystems.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Figures"></a>

### *property* ImportedCoordinateSystems.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Images"></a>

### *property* ImportedCoordinateSystems.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.ReadOnly"></a>

### *property* ImportedCoordinateSystems.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedCoordinateSystems.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Properties"></a>

### *property* ImportedCoordinateSystems.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.VisibleProperties"></a>

### *property* ImportedCoordinateSystems.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCoordinateSystems.Delete"></a>

### ImportedCoordinateSystems.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.GetChildren"></a>

### ImportedCoordinateSystems.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedCoordinateSystems.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.AddComment"></a>

### ImportedCoordinateSystems.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.AddFigure"></a>

### ImportedCoordinateSystems.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.AddImage"></a>

### ImportedCoordinateSystems.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Activate"></a>

### ImportedCoordinateSystems.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.CopyTo"></a>

### ImportedCoordinateSystems.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Duplicate"></a>

### ImportedCoordinateSystems.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.GroupAllSimilarChildren"></a>

### ImportedCoordinateSystems.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.GroupSimilarObjects"></a>

### ImportedCoordinateSystems.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.PropertyByName"></a>

### ImportedCoordinateSystems.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.PropertyByAPIName"></a>

### ImportedCoordinateSystems.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.CreateParameter"></a>

### ImportedCoordinateSystems.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.GetParameter"></a>

### ImportedCoordinateSystems.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.RemoveParameter"></a>

### ImportedCoordinateSystems.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
