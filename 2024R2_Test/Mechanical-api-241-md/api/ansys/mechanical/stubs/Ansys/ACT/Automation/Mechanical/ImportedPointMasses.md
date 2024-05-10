<a id="importedpointmasses"></a>

# ImportedPointMasses

<a id="ImportedPointMasses"></a>

### *class* ImportedPointMasses

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedPointMasses.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Delete`](#ImportedPointMasses.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedPointMasses.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedPointMasses.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedPointMasses.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedPointMasses.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedPointMasses.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedPointMasses.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedPointMasses.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedPointMasses.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedPointMasses.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedPointMasses.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedPointMasses.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedPointMasses.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedPointMasses.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedPointMasses.Count)                                                                               | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedPointMasses.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedPointMasses.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#ImportedPointMasses.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#ImportedPointMasses.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#ImportedPointMasses.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedPointMasses.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedPointMasses.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedPointMasses.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedPointMasses
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedPointMasses.InternalObject"></a>

### *property* ImportedPointMasses.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.DataModelObjectCategory"></a>

### *property* ImportedPointMasses.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Count"></a>

### *property* ImportedPointMasses.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Suppressed"></a>

### *property* ImportedPointMasses.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Children"></a>

### *property* ImportedPointMasses.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Comments"></a>

### *property* ImportedPointMasses.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Figures"></a>

### *property* ImportedPointMasses.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Images"></a>

### *property* ImportedPointMasses.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.ReadOnly"></a>

### *property* ImportedPointMasses.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedPointMasses.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Properties"></a>

### *property* ImportedPointMasses.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.VisibleProperties"></a>

### *property* ImportedPointMasses.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedPointMasses.Delete"></a>

### ImportedPointMasses.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.GetChildren"></a>

### ImportedPointMasses.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedPointMasses.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.AddComment"></a>

### ImportedPointMasses.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.AddFigure"></a>

### ImportedPointMasses.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.AddImage"></a>

### ImportedPointMasses.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Activate"></a>

### ImportedPointMasses.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.CopyTo"></a>

### ImportedPointMasses.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.Duplicate"></a>

### ImportedPointMasses.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.GroupAllSimilarChildren"></a>

### ImportedPointMasses.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.GroupSimilarObjects"></a>

### ImportedPointMasses.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.PropertyByName"></a>

### ImportedPointMasses.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.PropertyByAPIName"></a>

### ImportedPointMasses.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.CreateParameter"></a>

### ImportedPointMasses.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.GetParameter"></a>

### ImportedPointMasses.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPointMasses.RemoveParameter"></a>

### ImportedPointMasses.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
