# RectangularCrossSection

<a id="RectangularCrossSection"></a>

### *class* RectangularCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RectangularCrossSection.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#RectangularCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RectangularCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RectangularCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RectangularCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RectangularCrossSection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RectangularCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RectangularCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RectangularCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RectangularCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RectangularCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RectangularCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RectangularCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RectangularCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RectangularCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Area`](#RectangularCrossSection.Area)                                                                             | Gets the Area.                                                |
| [`IYY`](#RectangularCrossSection.IYY)                                                                               | Gets the IYY.                                                 |
| [`IZZ`](#RectangularCrossSection.IZZ)                                                                               | Gets the IZZ.                                                 |
| [`Height`](#RectangularCrossSection.Height)                                                                         | Gets or sets the Height.                                      |
| [`Width`](#RectangularCrossSection.Width)                                                                           | Gets or sets the Width.                                       |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#RectangularCrossSection.Children)                                                                     | Gets the list of children.                                    |
| [`Comments`](#RectangularCrossSection.Comments)                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#RectangularCrossSection.Figures)                                                                       | Gets the list of associated figures.                          |
| [`Images`](#RectangularCrossSection.Images)                                                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#RectangularCrossSection.ReadOnly)                                                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RectangularCrossSection.Properties)                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RectangularCrossSection.VisibleProperties)                                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import RectangularCrossSection
```

<a id="property-detail"></a>

## Property detail

<a id="RectangularCrossSection.InternalObject"></a>

### *property* RectangularCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Area"></a>

### *property* RectangularCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.IYY"></a>

### *property* RectangularCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.IZZ"></a>

### *property* RectangularCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Height"></a>

### *property* RectangularCrossSection.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Width"></a>

### *property* RectangularCrossSection.Width *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.DataModelObjectCategory"></a>

### *property* RectangularCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Children"></a>

### *property* RectangularCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Comments"></a>

### *property* RectangularCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Figures"></a>

### *property* RectangularCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Images"></a>

### *property* RectangularCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.ReadOnly"></a>

### *property* RectangularCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RectangularCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Properties"></a>

### *property* RectangularCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.VisibleProperties"></a>

### *property* RectangularCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RectangularCrossSection.Delete"></a>

### RectangularCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.GetChildren"></a>

### RectangularCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RectangularCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.AddComment"></a>

### RectangularCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.AddFigure"></a>

### RectangularCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.AddImage"></a>

### RectangularCrossSection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Activate"></a>

### RectangularCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.CopyTo"></a>

### RectangularCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Duplicate"></a>

### RectangularCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.GroupAllSimilarChildren"></a>

### RectangularCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.GroupSimilarObjects"></a>

### RectangularCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.PropertyByName"></a>

### RectangularCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.PropertyByAPIName"></a>

### RectangularCrossSection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.CreateParameter"></a>

### RectangularCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.GetParameter"></a>

### RectangularCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.RemoveParameter"></a>

### RectangularCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
